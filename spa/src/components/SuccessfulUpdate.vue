<template>
    <v-card 
       class="black--text pa-4"
       color="white"
        >
        <h1>Your {{name}} has been successfully added to the moderation queue, when it is approved, other users will be able to view it.</h1>
        <v-flex row>
          <v-btn rounded class="ma-4">To Home Page </v-btn>
          <v-spacer></v-spacer>
          <v-btn rounded class="ma-4">To your personal account</v-btn>
        </v-flex>
    </v-card>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';

@Component({
})
export default class SuccessfulUpdate extends Vue {
  @Prop({}) private name!: string;

  private toHomePage(): void{
    this.$router.push({name: 'Home'});
  }
  private ToPersonalAccount(): void{
    this.$router.push({name: 'PersonalAccoun'});
  }
}
</script>
<style scoped >
</style>