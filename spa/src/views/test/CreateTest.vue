<template>
  <v-container>
      <v-card v-if="!showSuccessfulUpdate" class="px-6 py-7">
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="false">
          <h1 class="text-left pb-4">Create test</h1>
          <!-- to do test photo -->
          <!-- to do Language -->
          <v-text-field v-model="test.name"
            outlined 
            label="Job title"
            :rules="validation.title"
            append-icon="mdi-pencil"
          ></v-text-field>
          <v-textarea v-model="test.description"
            outlined 
            label="About"
            :rules="validation.about"
            append-icon="mdi-pen"
          ></v-textarea>
          <v-autocomplete
            v-model="test.levelId "
            :items="levels"
            :rules="validation.level"
            item-text="value"
            item-value="id"
            outlined
            label="Level"
          ></v-autocomplete>
          <v-autocomplete
            v-model="test.languageId"
            :items="languages"
            item-text="value"
            item-value="id"
            outlined
            label="Language"
        ></v-autocomplete>
          <v-autocomplete
            v-model="test.skills"
            :items="skills"
            item-text="value"
            item-value="id"
            outlined
            chips
            label="Skills"
            multiple
          ></v-autocomplete>
          
          <v-flex row class="px-4"> 
            <h4 class="pt-5 pr-3">Time to pass the test: </h4>
            <v-text-field 
              v-if="!withoutTime"
              v-model="test.hour"
              outlined 
              label="Hour"
              class="pr-2"
              append-icon="mdi-clock"
            ></v-text-field>
            <v-text-field 
              v-if="!withoutTime"
              v-model="test.minutes"
              outlined 
              label="Minutes"
              append-icon="mdi-clock"
            ></v-text-field><v-switch v-model="withoutTime" class="mx-2" label="Without time"></v-switch>
          </v-flex>
            

        </v-form>
        <v-flex row class="px-4">
          <h3>Questions: </h3>
          <v-btn class="mr-13" color="success" dark small absolute right fab v-on:click="addQuestion">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn color="error" dark small absolute right fab v-on:click="delQuestion">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-flex>
        <question
            v-for="(question, index) of test.questions" 
            :key="'question'+index+1" 
            :question="question"
            :index="index"
            @question="questionChanged"/>
        
        <v-btn :disabled="!valid" color="success" v-on:click="send" class="mt-3">Send</v-btn>
      </v-card>
      <successful-update
        v-else
        name ="test"/>
  </v-container>
</template>

<script lang="ts">
import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import { Getter, Mutation, Action, namespace } from 'vuex-class';
import axios from 'axios';
import successfulUpdate from '@/components/SuccessfulUpdate.vue';
import TestModel from '@/models/test/TestModel';
import skillsList from '@/const/skills';
import QuestionModel from '@/models/test/QuestionModel';
import question from '@/components/test/Question.vue';
import levelsList from '@/const/levels';
import languagesList from '@/const/languages';

const userStore = namespace('user');

@Component({
    components: {
        successfulUpdate,
        question
    }
})
export default class CreateTest extends Vue {
  @userStore.Getter('getCurrentUserId') private userId!: number;
  private showSuccessfulUpdate = false;
  private test: TestModel = new TestModel;
  private skills = [];
  private levels = [];
  private languages = [];
  private withoutTime = true;
  private valid =true;
  private validation = {
    title:[ (v: string) => !!v || 'Title is required'],
    about:[ (v: string) => !!v || 'About is required',
      (v: string) => (v && v.length > 50) || 'About must be greater than 50 characters',],
    level:[ (v: string) => !!v || 'Level is required'],
  }
  created(){
    this.skills = skillsList;
    this.levels = levelsList;
    this.languages = languagesList;
  }

  private addQuestion(){
    this.test.questions.push(new QuestionModel());
  }
  private delQuestion(){
    if(this.test.questions.length>1)
      this.test.questions.pop();
  }
  private questionChanged(value: QuestionModel, index: number){
    this.test.questions[index] = value;
  }

  private async send(): Promise<void>{
    //to do
    this.test.userId =this.userId;
    await axios.post('api/addTest',this.test)
      .then((res)=>{
        this.showSuccessfulUpdate = true;
      })
      .catch((error)=>{
        console.log(error);
        Vue.toasted.error('Error while adding test');
      })
  } 
}
</script>
<style scoped >
.currency{
    max-width: 200px;
    padding-left:10px ;
}
</style>