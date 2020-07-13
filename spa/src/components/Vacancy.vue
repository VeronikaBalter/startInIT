<template>
  <v-card
    id="vacancy"
    shaped
    color="white"
    class="black--text card"
    >
    выаыва
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