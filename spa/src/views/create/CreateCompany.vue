<template>
  <v-container>
      <v-card class="px-6 py-7">
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="false"
      >
        <h1 class="text-left pb-4">Create company</h1>
        <v-text-field v-model="company.name"
          outlined 
          label="Job title"
          :rules="validation.title"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="company.about"
          outlined 
          label="About"
          :rules="validation.about"
          append-icon="mdi-pen"
        ></v-textarea>
        <!-- <v-flex row  class="ml-1">
        <v-text-field 
            v-if="!company.interviewSalary"
            v-model="company.salaryStart"
          outlined 
          label="Salary from"
          class="pr-2"
          append-icon="mdi-cash"
        ></v-text-field>
        <v-text-field 
            v-if="!company.interviewSalary"
            v-model="company.salaryEnd"
          outlined 
          label="Salary up to"
          append-icon="mdi-cash-multiple"
        ></v-text-field>
        <v-autocomplete 
            v-if="!company.interviewSalary"
            v-model="this.company.currencyId"
            :items="currencies"
            item-text="value"
            item-value="id"
            outlined
            label="Currency"
            class="currency"
        ></v-autocomplete>
        <v-switch v-model="company.interviewSalary" class="mx-2" label="Interview salary"></v-switch>
        </v-flex>
        <v-autocomplete
            v-model="company.typeOfEmploymentId "
            :items="typesOfEmployment"
            :rules="validation.type"
            item-text="value"
            item-value="id"
            outlined
            label="Type of employment"
        ></v-autocomplete>
        <v-autocomplete
            v-model="company.skills"
            :items="skills"
            :rules="validation.skills"
            item-text="value"
            item-value="id"
            outlined
            chips
            label="Skills"
            multiple
          ></v-autocomplete>
        <v-btn :disabled="!valid" color="success" v-on:click="send">Send</v-btn> -->
        </v-form>
      </v-card>
  </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import company from '@/components/company.vue'
import CompanyModel from '@/model/CompanyModel'
import currenciesList from '@/const/currencies'
import typesOfEmploymentList from '@/const/typesOfEmployment'
import skillsList from '@/const/skills'

@Component({
})
export default class CreateCompany extends Vue {
  private company: CompanyModel = new CompanyModel;
  private currencies = [];
  private typesOfEmployment = [];
  private skills = [];
  private valid = true;
  private validation = {
    title:[ (v: string) => !!v || 'Title is required'],
    about:[ (v: string) => !!v || 'About is required',
      (v: string) => (v && v.length > 99) || 'About must be greater than 100 characters',],
    type:[ (v: string) => !!v || 'Type of employment is required'],
  }
  created(){
      this.currencies = currenciesList;
      this.typesOfEmployment = typesOfEmploymentList;
      this.skills = skillsList;
  }

  private async send(): Promise<void>{
      var f = this.company;
      debugger
  } 
}
</script>
<style scoped >
</style>