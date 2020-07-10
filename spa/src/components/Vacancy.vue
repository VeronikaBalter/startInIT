<template>
  <v-card
    id="vacancy"
    shaped
    dark="false"
    color="white"
    >
      <v-card-text><h2>Название вакансии</h2></v-card-text>
      <v-card-subtitle>Зп От - До 
        Имя компаниии 
        Город
      </v-card-subtitle>
      <v-card-text>dsfsdfsdffffffffffffffff dsfsdfsdffffffffffffffffsfdgfds sfdgsdfgs dgsdfg</v-card-text>
  </v-card>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';

@Component({
})
export default class Vacancy extends Vue {
  

}
</script>
<style  >
#vacancy .theme--dark.v-card > .v-card__text, .theme--dark.v-card .v-card__subtitle {
  text-align: left;
  color: black;
}
</style>