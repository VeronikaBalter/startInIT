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
        <v-text-field v-model="name"
          outlined 
          label="First name and last name"
          append-icon="mdi-account-outline"
        ></v-text-field>
        <v-text-field v-model="email"
          outlined 
          label="Email"
          append-icon="mdi-at"
        ></v-text-field>
        <v-text-field v-model="password"
          outlined 
          label="Password"
          append-icon="mdi-lock-outline"
        ></v-text-field>
        <v-text-field v-model="rPassword"
          outlined 
          label="Repeat password"
          append-icon="mdi-lock-outline"
        ></v-text-field>
        <v-btn color="success" v-on:click="register">Sing Up</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import UserRegisterModel from "../model/UserRegisterModel"


@Component({
})
export default class SingInSingUp extends Vue {
  private user:UserRegisterModel = new UserRegisterModel();
  private repeatPassword = "";
  get name(): string{
    return this.user.firstName; //+" " + this.user.lastName;
  }
  set name(value: string){
    this.user.firstName = value
  }

  get email(): string{
    return this.user.email;
  }
  set email(value:string){
    this.user.email = value;
  }

  get password(): string{
    return this.user.password;
  }
  set password(value: string){
      this.user.password = value;
  }
  get rPassword(): string{
    return this.repeatPassword;
  }
  set rPassword(value: string){
      this.repeatPassword = value;
  }



  private redirect(){
      this.$router.push({name: 'SingIn'});
  }
  

  private register(): void {
    axios.post('/api/auth/signup', this.user);
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