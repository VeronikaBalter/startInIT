<template>
  <v-layout row align-center justify-center class="mx-10">
    <v-flex md6 xs12>
      <v-card 
        class="black--text card" align-center>
          <v-img src="@/assets/base.jpg" style="transform: scale(-1, 1) "  >
            <div style="transform: scale(-1, 1) ">
              <h1 class="pa-10">If you are looking for an employee, you can see the created resumes on the site.</h1>
              <v-btn rounded x-large v-on:click="findResumes">Find resumes</v-btn>
              <h1 class="pa-10">Or create a vacancy to find the perfect employee.</h1>
              <v-btn rounded x-large class="mb-10" v-on:click="createVacancy">Сreate vacancy</v-btn>
            </div>
          </v-img>
      </v-card>
    </v-flex>
    <v-flex md6 xs12>
      <v-card 
        class="card">
          <v-img src="@/assets/base.jpg" >
            <h1 class="pa-10">If you are looking for work, you can see the created vacancies on the site.</h1>
            <v-btn rounded x-large v-on:click="findVacancies">Find vacancies</v-btn>
            <h1 class="pa-10">Or create a resume to find your ideal job.</h1>
            <v-btn rounded x-large class="mb-10" v-on:click="createResume">Сreate resume</v-btn>
          </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';

@Component({
})
export default class Home extends Vue {
  private createResume(): void{
    this.$router.push({name:'CreateResume'});
  }
  private findVacancies(): void{
    this.$router.push({name: 'Vacancies'});
  }
  private createVacancy(): void{
    this.$router.push({name:'CreateVacancy'});
  }
  private findResumes(): void{
    this.$router.push({name:'Resumes'});
  }
}
</script>
<style scoped >
.card{
  margin: 10px;
  min-width: 300px;
}

</style>