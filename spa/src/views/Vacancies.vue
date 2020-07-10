<template>
  <v-container>
      <vacancy >
      </vacancy>
      <vacancy class="mt-3">
      </vacancy>
      <!-- <vacancy
        v-for="vacancy in vacancies"
        :key="vacancy.id">
      </vacancy> -->
  </v-container>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import vacancy from '../components/Vacancy.vue'
import VacancyModel from '../model/VacancyModel'

@Component({
    components:{
        vacancy,
    }
})
export default class Vacancies extends Vue {
  private vacancies: VacancyModel[] = [];
  private async created() {
    await axios.get('api/getVacancies').then((res)=>{
        debugger
    }).catch((error)=>{
        //debugger
    })
  }
}
</script>
<style scoped >
</style>