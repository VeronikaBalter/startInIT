<template>
  <v-card
    id="resume"
    shaped
    color="white"
    class="black--text card pa-8 mt-2 resumeCard"
    v-on:click="redirect"
    >
    <v-flex row>
      <h1 col>{{resume.name}}</h1>
    </v-flex>
     
    <!-- <v-flex row class="pl-3">
      <div>{{typeOfEmployment}}</div>
      <span class="mdi mdi-minus"></span>
      <div>{{salary}}</div>
    </v-flex> -->
    <!-- <v-flex row class="pl-3">
      <h4>{{resume.company.name}}</h4><span class="mdi mdi-minus"></span>
      <div>{{resume.company.country}}</div><span class="mdi mdi-minus"></span>
      <div>{{resume.company.city}}</div>
    </v-flex> -->
    <div>{{about}}</div>
    
  </v-card>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import currenciesList from '@/const/currencies'
import typesOfEmploymentList from '@/const/typesOfEmployment'
import IdValueModel from '@/models/IdValueModel'

import ResumeModel from '@/models/resume/ResumeModel'
@Component({
})
export default class Resume extends Vue {
  @Prop({}) private resume!:ResumeModel;
  private currencies = [];
  private typesOfEmployment = [];

  created(){
    this.currencies = currenciesList;
    this.typesOfEmployment = typesOfEmploymentList;
  }
  get about(): string{
    return this.resume.about.length>300?this.resume.about.substr(0,299) +"...":this.resume.about;
  }
//   get salary(): string{
//     let currency: IdValueModel= this.currencies.find((el:any)=>el.id==this.resume.currencyId) || new IdValueModel();
//     return this.resume.interviewSalary? 'Salary based on interview results' 
//       : `${this.resume.salaryStart} ${currency.value} - ${this.resume.salaryEnd} ${currency.value}`
//   }
//   get typeOfEmployment(): string{
//     let typeOfEmployment: IdValueModel= this.typesOfEmployment.find((el:any)=>el.id==this.resume.typesOfEmploymentId) || new IdValueModel();
//     return typeOfEmployment.value;
//   }

  private redirect(): void{
    this.$router.push({name: 'ResumePage',params: { id: this.resume.id.toString() }});
  }
}
</script>
<style scoped>
.resumeCard{
  text-align: start;
}
.photo{
    height: 50px;
}
</style>