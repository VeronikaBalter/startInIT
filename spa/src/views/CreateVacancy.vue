<template>
  <v-container>
      <v-card class="px-6 py-7">
        <h1 class="text-left pb-4">Create vacancy</h1>
        <v-text-field v-model="vacancy.name"
          outlined 
          label="Job title"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="vacancy.about"
          outlined 
          label="About"
          append-icon="mdi-pen"
        ></v-textarea>
        <v-flex row  class="ml-1">
        <v-text-field 
            v-if="!vacancy.interviewSalary"
            v-model="vacancy.salaryStart"
          outlined 
          label="Salary from"
          class="pr-2"
          append-icon="mdi-cash"
        ></v-text-field>
        <v-text-field 
            v-if="!vacancy.interviewSalary"
            v-model="vacancy.salaryEnd"
          outlined 
          label="Salary up to"
          append-icon="mdi-cash-multiple"
        ></v-text-field>
        <v-autocomplete 
            v-if="!vacancy.interviewSalary"
            v-model="this.vacancy.currencyId"
            :items="currencies"
            item-text="value"
            item-value="id"
            outlined
            label="Currency"
            class="currency"
        ></v-autocomplete>
        <v-switch v-model="vacancy.interviewSalary" class="mx-2" label="Interview salary"></v-switch>
        </v-flex>
        <v-autocomplete
            v-model="this.vacancy.typeOfEmploymentId "
            :items="typesOfEmployment"
            item-text="value"
            item-value="id"
            outlined
            label="Type of employment"
        ></v-autocomplete>
        <v-autocomplete
            v-model="this.vacancy.skills"
            :items="skills"
            item-text="value"
            item-value="id"
            outlined
            chips
            label="Skills"
            multiple
          ></v-autocomplete>
        <v-btn color="success" v-on:click="send">Send</v-btn>
      </v-card>
  </v-container>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import vacancy from '../components/Vacancy.vue'
import VacancyModel from '../model/VacancyModel'
import currenciesList from '../const/currencies'
import typesOfEmploymentList from '../const/typesOfEmployment'
import skillsList from '../const/skills'

@Component({
})
export default class CreateVacancy extends Vue {
  private vacancy: VacancyModel = new VacancyModel;
  private currencies = [];
  private typesOfEmployment = [];
  private skills = [];
  created(){
      this.currencies = currenciesList;
      this.typesOfEmployment = typesOfEmploymentList;
      this.vacancy.currencyId = currenciesList[0].id;
      this.skills = skillsList;
  }

  private async send(): Promise<void>{
      var f = this.vacancy;
      debugger
  } 
}
</script>
<style scoped >
.currency{
    width: 30px;
    padding-left:10px ;
}
</style>