<template>
  <v-app>
    <base-header/>
    <!-- <router-view /> -->
    
  </v-app>
</template>

<script lang="ts">
import { Component,Vue, Watch} from 'vue-property-decorator';

import baseHeader from "./components/layouts/BaseHeader.vue"
import hello from "./components/HelloWorld.vue"
@Component({
  components: {
    baseHeader,
  }
})
export default class App extends Vue {
  
};
</script>
