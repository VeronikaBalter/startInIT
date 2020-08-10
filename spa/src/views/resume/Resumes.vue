<template>
  <v-container>
    <v-text-field v-model="searchString"
      outlined 
      label="Search"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-flex row >
      <v-autocomplete
        class="ml-3"
        v-model="filter.skills"
        :items="skills"
        item-text="value"
        item-value="id"
        outlined
        chips
        small-chips
        label="Skills"
        multiple
      ></v-autocomplete>
      <v-autocomplete
        class="ml-3"
        v-model="filter.typeOfEmploymentId "
        :items="typesOfEmployment"
        item-text="value"
        item-value="id"
        outlined
        label="Type of employment"
      ></v-autocomplete> 
    </v-flex>
    <v-pagination
      class="mt-2"
      v-if="countResumes>10"
      v-model="currentPage"
      :length="pageCount"
      :total-visible="totalVisible"
      circle
    ></v-pagination>
    <resume
      v-for="resume in resumes"
      :key="resume.id"
      :resume="resume">
    </resume>
    <v-pagination
      class="mt-2"
      v-if="countResumes>10"
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
import resume from '@/components/Resume.vue';
import ResumeModel from '@/models/resume/ResumeModel';
import FilterModel from '@/models/filters/FilterResumeModel';
import skillsList from '@/const/skills';
import typesOfEmploymentList from '@/const/typesOfEmployment';

@Component({
    components:{
        resume,
    }
})
export default class Vacancies extends Vue {
  private resumes: ResumeModel[] = [];
  private countResumes = 0;
  private filter: FilterModel= new FilterModel();
  private skills = [];
  private typesOfEmployment = [];
  private totalVisible = 10;
  private page = 1;

  private async created() {
    this.skills = skillsList;
    this.typesOfEmployment = typesOfEmploymentList;
    this.getResumes();
  }

  get searchString(): string {
    return this.filter.search;
  }
  set searchString(searchValue: string) {
    this.debounceSearchString(searchValue);
  }

  private debounceSearchString = debounce((searchValue: string) => {
    this.filter.search = searchValue;
    this.getResumes();
  }, 500);

  get pageCount(): number{
    return Math.ceil(this.countResumes/this.totalVisible);
  }

  get currentPage(): number{
    return this.page;
  }
  set currentPage(page: number){
    this.filter.offset = page>this.page? this.filter.offset+ this.filter.limit : this.filter.offset- this.filter.limit ;
    this.page=page;
    this.getResumes();
  }
  private async getResumes():Promise<void>{
    await axios.post('api/getResumes',this.filter).then((res)=>{
      this.resumes = res.data.resumes;
      this.countResumes = res.data.count;
    }).catch((error)=>{
      console.log(error)
      Vue.toasted.error('There was an error uploading your resumes')
    })
  }
}
</script>
<style scoped >
</style>