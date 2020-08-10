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
       
      <div v-if="!isAuth">
        <v-btn rounded v-on:click="registration">Sing up</v-btn>
        <v-btn rounded v-on:click="login">Sing in</v-btn>
      </div>
      <div v-else>
        <v-menu
          transition="slide-y-transition"
          bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="#353535"
            v-bind="attrs"
            v-on="on">
            <span class="white--text headline">{{initials}}</span>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item v-on:click="personalAccount">Personal account</v-list-item>
          <v-list-item v-on:click="vacancies">My vacancies</v-list-item>
          <v-list-item v-on:click="resumes">My resumes</v-list-item>
          <v-list-item v-on:click="moderation">Moderation</v-list-item>
          <v-list-item v-on:click="logout">Logout</v-list-item>
        </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-layout>
</template>


<script lang="ts">
import { Component,Vue, Watch} from 'vue-property-decorator';
import { Getter, Mutation, Action, namespace } from 'vuex-class';

import UserModel from '@/models/user/UserModel'

const authorizationStore = namespace('authorization');
const userStore = namespace('user');
@Component({
})
export default class BaseHeader extends Vue {
  @authorizationStore.Getter('isAuth') private isAuth!: boolean;
  @authorizationStore.Action('logout') private actionLogout!: (data: void) => void;
  @userStore.Getter('getCurrentUser') private user!: UserModel;
  
  private login():void{
    this.$router.push({name: 'SingIn'});
  }

  private registration():void{
    this.$router.push({name: 'SingUp'});
  }
  private personalAccount(): void{
    this.$router.push({name: 'PersonalAccount'});
  }
  private vacancies(): void{
    this.$router.push({name: 'MyVacancies'});
  }
  private resumes(): void{
    this.$router.push({name: 'MyResumes'});
  }
  private moderation(): void{
    this.$router.push({name: 'Moderation'});
  }
  private logout(): void{
    this.actionLogout();
    this.$router.push({name: 'Home'});
  }

  private get initials(): string{
    return (this.user.firstName[0]+this.user.lastName[0]).toUpperCase()
  }
}
</script>
<style scoped>
  #baseHeader{
    max-height: 80px;
    
  }
</style>