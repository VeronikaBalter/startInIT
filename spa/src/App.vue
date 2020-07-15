<template>
  <v-app id="app"> 
    <base-header/> 
    <router-view class="mt-15"/>
  </v-app>
</template>

<script lang="ts">
import { Component,Vue, Watch} from 'vue-property-decorator';

import baseHeader from "./components/layouts/BaseHeader.vue"
import hello from "./components/HelloWorld.vue"

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate', // for vue-router 2.2+
]);

@Component({
  components: {
    baseHeader,
  }
})
export default class App extends Vue {
  
};
</script>
<style scoped>
[v-cloak] {
    display: none;
}
#app{
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
