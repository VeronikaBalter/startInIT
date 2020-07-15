<template>
  <v-container>
      <v-card class="px-6 py-7">
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="false"
      >
        <h1 class="text-left pb-4">Create company</h1>
        <file-preview/>
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
        <v-text-field v-model="company.country"
          outlined 
          label="Country"
          :rules="validation.country"
          append-icon="mdi-map-marker"
        ></v-text-field>
        <v-text-field v-model="company.city"
          outlined 
          label="City"
          :rules="validation.city" 
          append-icon="mdi-map-marker"
        ></v-text-field>
        <v-text-field v-model="company.street"
          outlined 
          label="Street"
          append-icon="mdi-home-modern"
        ></v-text-field>
        <v-text-field v-model="company.house"
          outlined 
          label="House"
          append-icon="mdi-home-modern"
        ></v-text-field>
        <v-text-field v-model="company.email"
          outlined 
          label="Email"
          :rules="validation.email"
          append-icon="mdi-at"
        ></v-text-field>
        <v-flex row  class="ml-1">
          <v-text-field 
            v-model="company.stateStart"
            outlined 
            label="State from"
            class="pr-2"
            append-icon="mdi-account"
          ></v-text-field>
          <v-text-field 
            v-model="company.stateEnd"
            outlined 
            label="State up to"
            append-icon="mdi-account"
          ></v-text-field>
        </v-flex>
        <v-btn :disabled="!valid" color="success" v-on:click="send">Send</v-btn> 
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
import filePreview from '@/components/FilePreview.vue'
@Component({
  components:{
    filePreview
  }
})
export default class CreateCompany extends Vue {
  private company: CompanyModel = new CompanyModel;
  private currencies = [];
  private typesOfEmployment = [];
  private skills = [];
  private valid = true;
  private validation = {
    title:[(v: string) => !!v || 'Title is required'],
    about:[(v: string) => !!v || 'About is required',
      (v: string) => (v && v.length > 99) || 'About must be greater than 100 characters',],
    type:[(v: string) => !!v || 'Type of employment is required'],
    city:[(v: string) => !!v || 'City is required'],
    country:[(v: string) => !!v || 'Country is required'],
    email:[(v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
  }
  created(){
    this.currencies = currenciesList;
    this.typesOfEmployment = typesOfEmploymentList;
    this.skills = skillsList;
  }

  private async send(): Promise<void>{
      debugger
  } 
}
</script>
<style scoped >
</style>