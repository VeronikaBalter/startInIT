<template>
  <v-container>
    <v-text-field v-model="searchString"
      outlined 
      label="Search"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-flex row>
      <v-autocomplete
        v-model="level"
        :items="levels"
        item-text="value"
        item-value="id"
        outlined
        label="Level"
        class="ml-5"
      ></v-autocomplete>
      <v-autocomplete
        v-model="language"
        :items="languages"
        item-text="value"
        item-value="id"
        outlined
        label="Language"
        class="ml-5"
      ></v-autocomplete>
    </v-flex>
      <v-autocomplete
        v-model="testSkills"
        :items="skills"
        item-text="value"
        item-value="id"
        outlined
        chips
        small-chips
        label="Skills"
        multiple
      ></v-autocomplete>
      <!-- to do ^ -->
    <v-pagination
      class="mt-2"
      v-if="countTests>10"
      v-model="currentPage"
      :length="pageCount"
      :total-visible="totalVisible"
      circle
    ></v-pagination>
    <test
      v-for="test in tests"
      :key="test.id"
      :test="test">
    </test>
    <v-pagination
      class="mt-2"
      v-if="countTests>10"
      v-model="currentPage"
      :length="pageCount"
      :total-visible="totalVisible"
      circle
    ></v-pagination>
  </v-container>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import { debounce} from 'lodash';
import test from '@/components/test/Test.vue';
import TestModel from '@/models/test/TestModel';
import FilterTestModel from '@/models/filters/FilterTestModel';
import skillsList from '@/const/skills';
import levelsList from '@/const/levels';
import languagesList from '@/const/languages';

@Component({
    components:{
        test,
    }
})
export default class Tests extends Vue {
  private tests: TestModel[] = [];
  private countTests = 0;
  private filter: FilterTestModel= new FilterTestModel();
  private skills = [];
  private levels = [];
  private totalVisible =10;
  private page =1;
  private languages = [];

  private async created() {
    this.levels = levelsList;
    this.skills = skillsList;
    this.languages = languagesList;
    this.getTests();
  }
  
  
  get searchString(): string {
    return this.filter.search;
  }
  set searchString(searchValue: string) {
    this.debounceSearchString(searchValue);
  }

  private debounceSearchString = debounce((searchValue: string) => {
    this.filter.search = searchValue;
    this.getTests();
  }, 500);

  get level(): number{
    return this.filter.levelId;
  }
  set level(value: number){
    this.filter.levelId = value;
    this.getTests();
  }

  get language(): number{
    return this.filter.languageId;
  }
  set language(value: number){
    this.filter.languageId = value;
    this.getTests();
  }

  get testSkills(): any{
    return this.filter.skills;
  }
  set testSkills(value: any){
    this.filter.skills = value;
    this.getTests();
  }

  get pageCount(): number{
    return Math.ceil(this.countTests/this.totalVisible);
  }

  get currentPage(): number{
    return this.page;
  }
  set currentPage(page: number){
    this.filter.offset = page>this.page? this.filter.offset+ this.filter.limit : this.filter.offset- this.filter.limit ;
    this.page=page;
    this.getTests();
  }
  private async getTests():Promise<void>{
    await axios.post('api/getTests',this.filter).then((res)=>{
      this.tests = res.data.tests;
      this.countTests = res.data.count;
    }).catch((error)=>{
      console.log(error)
      Vue.toasted.error('An error occurred while loading a tests')
    })
  }
}
</script>
<style scoped >
</style>