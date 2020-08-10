<template>
  <v-card
    shaped
    color="white"
    class="black--text card pa-8 mt-2 text-start"
    v-on:click="redirect"
    >
    <h1 col>{{test.name}}</h1>
    <v-flex row class="pl-4">
      <v-avatar color="indigo">
        <v-icon  v-if="test.user.userInfo.photo==null" 
          dark
          size="70">mdi-account-circle</v-icon>
        <img v-else
          :src="test.user.userInfo.photo"
        >
      </v-avatar>
      <h3 class="pt-3 pl-3">{{test.user.firstName}} {{test.user.lastName}}</h3>
    </v-flex>
    <v-flex row class="pl-4 pt-1">
      <h4>{{test.questions.length}} questions in the test </h4>
      <span v-if="showTime" class="mdi mdi-minus"></span>
      <h4 v-if="showTime"> You will spend {{time}}to complete the test</h4>
    </v-flex>
    <v-flex row class="pl-4">
      <h4>{{level}} </h4>
      <span class="mdi mdi-minus"></span>
      <h4 > {{language}}</h4>
    </v-flex>
    <div class="pt-2">{{about}}</div>
    <v-chip
      v-for="skill in test.testSkills"
      :key="skill.id"
      class="ma-2"
      color="secondary"
    >
      {{skill.name}}
    </v-chip>
    <h5 class="pt-1 text-end">{{createdAt}}</h5>
  </v-card>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment'
import typesOfEmploymentList from '@/const/typesOfEmployment'
import IdValueModel from '@/models/IdValueModel'
import levelsList from '@/const/levels'
import languagesList from '@/const/languages'

import TestModel from '@/models/test/TestModel'
@Component({
})
export default class Test extends Vue {
  @Prop({}) private test!:TestModel;
  private levels = [];
  private languages = [];

  created(){
    this.languages = languagesList;
    this.levels = levelsList;
  }

  get about(): string{
    return this.test.description.length>500?this.test.description.substr(0,499) +"...":this.test.description;
  }
  get showTime(): boolean{
    return (this.test.hour !=null && this.test.hour>0) || (this.test.minutes!=null && this.test.minutes>0)
  }
  get time(): string{
    let time =  this.test.hour > 0 ? this.test.hour + 'h ' : '';
    time += this.test.minutes > 0 ? this.test.minutes + 'm ' : '';
    return time;
  }
  get language(): string{
    let languag: IdValueModel= this.languages.find((el:any)=>el.id==this.test.languageId) || new IdValueModel();
    return languag.value;
  }

  get level(): string{
    let level: IdValueModel= this.levels.find((el:any)=>el.id==this.test.levelId) || new IdValueModel();
    return level.value;
  }
  get createdAt(): string{
    return moment(this.test.createdAt , "YYYYMMDD").fromNow();
  }
  private redirect(): void{
    this.$router.push({name: 'Test',params: { id: this.test.id.toString() }});
  }
}
</script>
<style scoped>
.photo{
    height: 50px;
}
</style>