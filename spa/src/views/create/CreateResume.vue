<template>
    <v-container>
      <v-card class="px-6 py-7">
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="false"
      >
        <h1 class="text-left pb-4">Create resume</h1>
        <v-text-field v-model="resume.name"
          outlined 
          label="Job title"
          :rules="validation.title"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="resume.about"
          outlined 
          label="About"
          :rules="validation.about"
          append-icon="mdi-pen"
        ></v-textarea>
        <v-flex row  class="ml-1">
        <v-text-field 
            v-model="resume.salary"
          outlined 
          label="Salary from"
          class="pr-2"
          append-icon="mdi-cash"
        ></v-text-field>
        <v-autocomplete 
            v-model="this.resume.currencyId"
            :items="currencies"
            item-text="value"
            item-value="id"
            outlined
            label="Currency"
            class="currency"
        ></v-autocomplete>
        </v-flex>
        <v-autocomplete
            v-model="resume.levelId "
            :items="levels"
            :rules="validation.level"
            item-text="value"
            item-value="id"
            outlined
            label="Level"
        ></v-autocomplete>
        <v-autocomplete
            v-model="resume.typeOfEmploymentId "
            :items="typesOfEmployment"
            :rules="validation.type"
            item-text="value"
            item-value="id"
            outlined
            label="Type of employment"
        ></v-autocomplete>
        <v-autocomplete
            v-model="resume.skills"
            :items="skills"
            :rules="validation.skills"
            item-text="value"
            item-value="id"
            outlined
            chips
            label="Skills"
            multiple
          ></v-autocomplete>
        <v-flex row class="px-4">
            <h3>Languages: </h3>
            <v-btn class="mr-13" color="success" dark small absolute right fab v-on:click="addLanguages">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn color="error" dark small absolute right fab v-on:click="delLanguages">
                <v-icon>mdi-minus</v-icon>
            </v-btn>
        </v-flex>
        <language 
            v-for="lang of resume.languages" 
            :key="lang.id" 
            :language="lang"
            @lang="langChanged" />
        <v-btn :disabled="!valid" color="success" v-on:click="send">Send</v-btn>
        </v-form>
      </v-card>
    </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import resume from '@/components/resume.vue'
import ResumeModel from '@/model/ResumeModel'
import currenciesList from '@/const/currencies'
import typesOfEmploymentList from '@/const/typesOfEmployment'
import skillsList from '@/const/skills'
import levelsList from '@/const/levels'
import LanguageModel from '@/model/LanguageModel'
import language from '@/components/Language.vue'

@Component({
    components:{
        language
    }
})
export default class CreateResume extends Vue {
    
  private resume: ResumeModel = new ResumeModel;
  private currencies = [];
  private typesOfEmployment = [];
  private skills = [];
  private levels = []
  private valid =true;
  private validation = {
    title:[ (v: string) => !!v || 'Title is required'],
    about:[ (v: string) => !!v || 'About is required'],
    type:[ (v: string) => !!v || 'Type of employment is required'],
    level:[ (v: string) => !!v || 'Level is required'],
  }
  created(){
      this.currencies = currenciesList;
      this.typesOfEmployment = typesOfEmploymentList;
      this.resume.currencyId = currenciesList[0].id;
      this.skills = skillsList;
      this.levels = levelsList;
  }
  private addLanguages(){
    if(this.resume.languages.length<8)
      this.resume.languages.push(new LanguageModel());
  }
  private delLanguages(){
    if(this.resume.languages.length>1)
      this.resume.languages.pop();
  }
  private langChanged(value: LanguageModel){
    debugger
    //this.resume.languages[value.id-1].nameId = value.nameId;
    //this.resume.languages[value.id-1].levelId = value.levelId;
    debugger
  }

  private async send(): Promise<void>{
      var f = this.resume;
      debugger
  } 
}
</script>
<style scoped >
.currency{
    max-width: 200px;
    padding-left:10px ;
}
</style>