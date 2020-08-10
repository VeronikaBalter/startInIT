<template>
    <v-card
        color="white"
        class="black--text pa-8 ma-6 vacancyCard"
        >
        <h1>{{vacancy.name}}</h1>
        <v-flex row class="pl-3">
            <v-avatar>
                <img col src="https://cdn.mos.cms.futurecdn.net/jTVzX3HFWeZTNJJVtLESbU-650-80.jpg" class="photo"/>
            </v-avatar>
            <h4 class="pt-3 pl-3">{{vacancy.company.name}}</h4>
        </v-flex>
        <div v-if="isAuth" class="pt-3"></div>
        <h5 v-if="vacancy.interviewSalary" class="pt-3">Salary based on interview results</h5>
        <h5 v-else class="pt-1">Salary: {{salary}}</h5>
        <h5 class="pt-1">Type of employment: {{typeOfEmployment}}</h5>
        <v-flex row class="pl-3 pt-1">
            <h5>{{vacancy.company.country}}</h5><span class="mdi mdi-minus"></span>
            <h5>{{vacancy.company.city}}</h5><span class="mdi mdi-minus"></span>
            <h5>{{vacancy.company.street}} {{vacancy.company.house}}</h5>
        </v-flex>
        <div class="pt-3">{{vacancy.about}}</div>
        <v-btn v-if="isAuth" class="mt-3" color="success" width="100%" v-on:click="reply">Reply to vacancy</v-btn>
        <div v-else>
            <div class="loginRegister pt-3">If you would like to apply for this vacancy, register or enter your account</div>
            <v-flex>
                <v-btn class="mt-3 mx-2" color="primary" width="47%" v-on:click="register">Register</v-btn>
                <v-btn class="mt-3 mx-2" color="primary" width="47%" v-on:click="login">Login</v-btn>
            </v-flex>
        </div>
    </v-card>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import { Getter, Mutation, Action, namespace } from 'vuex-class';
import axios from 'axios';
import typesOfEmploymentList from '@/const/typesOfEmployment';
import currenciesList from '@/const/currencies';
import VacancyModel from '@/models/VacancyModel';
import IdValueModel from '@/models/IdValueModel';

const authorizationStore = namespace('authorization');
let id=0;
@Component({
})
export default class VacancyPage extends Vue {
    @authorizationStore.Getter('isAuth') private isAuth!: boolean;
    private vacancy: VacancyModel = new VacancyModel();
    private typesOfEmployment = [];
    private currencies = [];

    private async beforeRouteEnter(to: any, from: any, next: any) {
        id = to.params.id;
        next();
    }

    private async beforeRouteUpdate(to: any, from: any, next: any) {
        id = to.params.id;
        next();
    }

    private async created() {
        this.typesOfEmployment = typesOfEmploymentList;
        this.currencies = currenciesList;
        this.getVacancy();
    }
    get typeOfEmployment(): string{
        let typeOfEmployment: IdValueModel= this.typesOfEmployment.find((el:any)=>el.id==this.vacancy.typesOfEmploymentId) || new IdValueModel();
        return typeOfEmployment.value;
    }
    get salary(): string{
        let currency: IdValueModel= this.currencies.find((el:any)=>el.id==this.vacancy.currencyId) || new IdValueModel();
        return this.vacancy.interviewSalary? 'Salary based on interview results' 
            : `${this.vacancy.salaryStart} ${currency.value} - ${this.vacancy.salaryEnd} ${currency.value}`
    }
    private reply(): void{

    }

    private register(): void{
        this.$router.push({name: 'SingUp'});
    }
    private login(): void{
        this.$router.push({name: 'SingIn'});
    }

    private async getVacancy():Promise<void>{
    await axios.post('api/getVacancyById/'+id).then((res)=>{
      this.vacancy = res.data;
    }).catch((error)=>{
      console.log(error)
      Vue.toasted.error('Failed to load vacancies')
    })
  }
}
</script>
<style scoped >
.vacancyCard{
  text-align: start;
}
.photo{
    height: 50px;
}
.loginRegister{
    text-align: center;
    color: #ff5d5dd9;
}
</style>