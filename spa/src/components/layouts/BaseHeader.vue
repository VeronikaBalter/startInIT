<template>
  <v-layout id="baseHeader">
    <v-app-bar
      absolute
      color="#fcb69f"
      src="@/assets/base.jpg"
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>Start in IT</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn rounded v-on:click="registration">Sing up</v-btn>
      <v-btn rounded v-on:click="login">Sing in</v-btn>
      
    </v-app-bar>
  </v-layout>
</template>


<script lang="ts">
import { Component,Vue, Watch} from 'vue-property-decorator';
@Component({
})
export default class BaseHeader extends Vue {
  private login():void{
    this.$router.push({name: 'SingIn'});
  }
  private registration():void{
    this.$router.push({name: 'SingUp'});
  }
  private logout(): void{
    localStorage.removeItem('user');
  }
}
</script>
<style scoped>
  #baseHeader{
    max-height: 80px;
    
  }
</style>