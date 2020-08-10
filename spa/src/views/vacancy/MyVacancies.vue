<template><v-container>
    <v-text-field v-model="searchString"
      outlined 
      label="Search"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-pagination
      class="mt-2"
      v-if="countVacancies>10"
      v-model="currentPage"
      :length="pageCount"
      :total-visible="totalVisible"
      circle
    ></v-pagination>
    <vacancy
      v-for="vacancy in vacancies"
      :key="vacancy.id"
      :vacancy="vacancy">
    </vacancy>
    <v-pagination
      class="mt-2"
      v-if="countVacancies>10"
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
import vacancy from '@/components/Vacancy.vue';
import VacancyModel from '@/models/VacancyModel';
import FilterModel from '@/models/filters/FilterVacancyModel';
import skillsList from '@/const/skills';
import typesOfEmploymentList from '@/const/typesOfEmployment';

@Component({
    components:{
        vacancy,
    }
})
export default class MyVacancies extends Vue {
  private vacancies: VacancyModel[] = [];
  private countVacancies = 0;
  private filter: FilterModel= new FilterModel();
  private skills = [];
  private typesOfEmployment = [];
  private totalVisible =10;
  private page =1;

  private async created() {
    this.skills = skillsList;
    this.typesOfEmployment = typesOfEmploymentList;
    this.getVacancies();
  }

  get searchString(): string {
    return this.filter.search;
  }
  set searchString(searchValue: string) {
    this.debounceSearchString(searchValue);
  }

  private debounceSearchString = debounce((searchValue: string) => {
    this.filter.search = searchValue;
    this.getVacancies();
  }, 500);

  get pageCount(): number{
    return Math.ceil(this.countVacancies/this.totalVisible);
  }

  get currentPage(): number{
    return this.page;
  }
  set currentPage(page: number){
    this.filter.offset = page>this.page? this.filter.offset+ this.filter.limit : this.filter.offset- this.filter.limit ;
    this.page=page;
    this.getVacancies();
  }
  private async getVacancies():Promise<void>{
    await axios.post('api/getMyVacancies',this.filter).then((res)=>{
      this.vacancies = res.data.vacancies;
      this.countVacancies = res.data.count;
    }).catch((error)=>{
      console.log(error)
      Vue.toasted.error('An error occurred while loading a job')
    })
  }
}
</script>
<style scoped >
</style>