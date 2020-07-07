<template>
  <v-layout row id="singIn" align-center justify-center>
    
    <v-flex md4 xs12>
      <v-card >
        <v-img src="@/assets/base.jpg" height="600px">
          <v-flex class="welcom">
          <h1>Welcome!</h1>
          <h3>We are glad to see you here. With joy we will help you find a job or post a vacancy, write a resume, prepare for an interview.</h3>
          </v-flex>
        </v-img>
      </v-card>
    </v-flex>
    <v-flex md8 xs12>
      <v-card class="singIn_UP">
        <h1 class="text-left">{{title}}</h1>
        <h3 class="pb-3 text-left">{{description}}
          <v-btn 
            small 
            v-on:click="isSingIn = !isSingIn" 
            class="cyan--text">{{title}}</v-btn>
        </h3>
        <v-text-field 
          outlined 
          label="First name and last name"
          append-icon="mdi-account-outline"
        ></v-text-field>
        <v-text-field 
          v-if="!isSingIn"
          outlined 
          label="Email"
          append-icon="mdi-at"
        ></v-text-field>
        <v-text-field 
          v-if="!isSingIn"
          outlined 
          label="Password"
          append-icon="mdi-lock-outline"
        ></v-text-field>
        <v-text-field 
          outlined 
          label="Repeat password"
          append-icon="mdi-lock-outline"
        ></v-text-field>
        <v-btn color="success">{{title}}</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
 

import { Component,Vue, Watch} from 'vue-property-decorator';

@Component({
})
export default class App extends Vue {
  private isSingIn = false;
  get title(): string{
    return this.isSingIn?"Sing In":"Sing UP";
  }
  get description(): string{
    return this.isSingIn?"If you do not have an account yet ":"If you already have an account ";
  }
}
</script>
<style scoped >
#singIn{
  margin:0 10% 0 10%;
}
.singIn_UP{
  padding: 20px;
  height: 600px;
}
.welcom{
  padding-top: 200px;
}
</style>