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
      <v-card class="singUp">
        <h1 class="text-left">Sing Up</h1>
        <h3 class="pb-3 text-left">If you already have an account
          <v-btn 
            small 
            v-on:click="redirect" 
            class="cyan--text">Sing In</v-btn>
        </h3>
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="false"
        >
          <v-text-field v-model="user.firstName"
            outlined 
            label="First name"
            :rules="validation.firstName"
            append-icon="mdi-account-outline"
          ></v-text-field>
          <v-text-field v-model="user.lastName"
            outlined 
            label="Last name"
            :rules="validation.lastName"
            append-icon="mdi-account-outline"
          ></v-text-field>
          <v-text-field v-model="user.email"
            outlined 
            label="Email"
            :rules="validation.email"
            append-icon="mdi-at"
          ></v-text-field>
          <v-text-field v-model="user.password"
            outlined 
            label="Password"
            type="password"
            :rules="validation.password"
            append-icon="mdi-lock-outline"
          ></v-text-field>
        </v-form>
        <v-btn color="success" v-on:click="register" :disabled="!valid">Sing Up</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import { Getter, Mutation, Action, namespace } from 'vuex-class';
import axios from 'axios';
import UserRegisterModel from "../models/user/UserRegisterModel"

const authorizationStore = namespace('authorization');
@Component({
})
export default class SingInSingUp extends Vue {
  @authorizationStore.Action('register') private actionRegister!: (data: UserRegisterModel) => Promise<any> ;
  
  private user:UserRegisterModel = new UserRegisterModel();
  private valid =true;
  private validation = {
    firstName:[ (v: string) => !!v || 'First name is required'],
    lastName:[ (v: string) => !!v || 'Last name is required'],
    email: [(v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    password:[(v: string) => (v && v.length > 5) || 'Password must contain at least 6 characters',],
  }

  private redirect(){
    this.$router.push({name: 'SingIn'});
  }
  

  private async register(): Promise<void> {
    await this.actionRegister(this.user).then(()=>{
      this.$router.push({name: 'Home'});
    }).catch((error)=>{
      console.log(error)
      Vue.toasted.error('An error occurred during registration');
    })
    
  }
}
</script>
<style scoped >
#singIn{
  margin:0 10% 0 10%;
}
.singUp{
  padding: 20px;
  height: 600px;
}
.welcom{
  padding: 200px 10px 0 10px;
}
</style>