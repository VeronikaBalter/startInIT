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
      <v-card class="singIn">
        <h1 class="text-left">Sing In</h1>
        <h3 class="pb-3 text-left">If you do not have an account yet
          <v-btn 
            small 
            v-on:click="redirect" 
            class="cyan--text">Sing Up</v-btn>
        </h3>
        <v-text-field v-model="user.email"
          outlined 
          label="First name and last name"
          append-icon="mdi-account-outline"
        ></v-text-field>
        <v-text-field v-model="user.password"
          outlined 
          label="Password"
          type="password"
          append-icon="mdi-lock-outline"
        ></v-text-field>
        <v-btn color="success" v-on:click="login" >Sing In</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
 

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import { Getter, Mutation, Action, namespace } from 'vuex-class';
import axios from 'axios';
import UserLoginModel from '@/models/user/UserLoginModel'

const authorizationStore = namespace('authorization');
@Component({
})
export default class SingInSingUp extends Vue {
  @authorizationStore.Action('login') private actionLogin!: (data: UserLoginModel) => Promise<any>;

  private user: UserLoginModel = new UserLoginModel();
   
  private redirect(){
    this.$router.push({name: 'SingUp'});
  }
  private async login(): Promise<void> {
    await this.actionLogin(this.user).then(()=>{
      this.$router.push({name: 'Home'});
    }).catch((error) =>{
      Vue.toasted.error('Login or password is incorrect')
    })
    
  }

}
</script>
<style scoped >
#singIn{
  margin:0 10% 0 10%;
}
.singIn{
  padding: 20px;
  height: 600px;
}
.welcom{
  padding: 200px 10px 0 10px;
}
</style>