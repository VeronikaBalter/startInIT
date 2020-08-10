<template>
  <v-card
    id="vacancy"
    shaped
    color="white"
    class="black--text card pa-8 mt-2 vacancyCard"
    v-on:click="redirect"
    >
    <v-flex row>
      <h1 col>{{vacancy.name}}</h1>
      <v-spacer></v-spacer>
      <img col src="https://cdn.mos.cms.futurecdn.net/jTVzX3HFWeZTNJJVtLESbU-650-80.jpg" class="photo"/>
    </v-flex>
    <v-flex row class="pl-3">
      <div>{{typeOfEmployment}}</div>
      <span class="mdi mdi-minus"></span>
      <div>{{salary}}</div>
    </v-flex>
    <v-flex row class="pl-3">
      <h4>{{vacancy.company.name}}</h4><span class="mdi mdi-minus"></span>
      <div>{{vacancy.company.country}}</div><span class="mdi mdi-minus"></span>
      <div>{{vacancy.company.city}}</div>
    </v-flex>
    <div>{{about}}</div>
    
  </v-card>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import currenciesList from '@/const/currencies'
import typesOfEmploymentList from '@/const/typesOfEmployment'
import IdValueModel from '@/models/IdValueModel'

import VacancyModel from '../models/VacancyModel'
@Component({
})
export default class Vacancy extends Vue {
  @Prop({}) private vacancy!:VacancyModel;
  private currencies = [];
  private typesOfEmployment = [];

  created(){
    this.currencies = currenciesList;
    this.typesOfEmployment = typesOfEmploymentList;
  }
  get about(): string{
    return this.vacancy.about.length>300?this.vacancy.about.substr(0,299) +"...":this.vacancy.about;
  }
  get salary(): string{
    let currency: IdValueModel= this.currencies.find((el:any)=>el.id==this.vacancy.currencyId) || new IdValueModel();
    return this.vacancy.interviewSalary? 'Salary based on interview results' 
      : `${this.vacancy.salaryStart} ${currency.value} - ${this.vacancy.salaryEnd} ${currency.value}`
  }
  get typeOfEmployment(): string{
    let typeOfEmployment: IdValueModel= this.typesOfEmployment.find((el:any)=>el.id==this.vacancy.typesOfEmploymentId) || new IdValueModel();
    return typeOfEmployment.value;
  }

  private redirect(): void{
    this.$router.push({name: 'VacancyPage',params: { id: this.vacancy.id.toString() }});
  }
}
</script>
<style scoped>
.vacancyCard{
  text-align: start;
}
.photo{
    height: 50px;
}
</style>