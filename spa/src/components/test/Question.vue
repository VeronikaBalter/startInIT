<template>
    <v-flex class="ml-8 mt-7 pr-3 question">
      <div class="questionMargin">
        <v-switch v-model="questionWithPhoto"  label="Question whith photo" class="pl-2"></v-switch>
        <v-textarea v-if="!questionWithPhoto"
          v-model="questionName"
          outlined 
          label="Question"
          append-icon="mdi-pencil"
          rows="1"
        ></v-textarea>
        <file-preview v-else/>
        <!-- to do photo -->
        <v-flex row class="px-4">
          <h3>Answer: </h3>
          <v-btn class="mr-16" color="success" dark small absolute right fab v-on:click="addAnswer">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn class="mr-4" color="error" dark small absolute right fab v-on:click="delAnswer">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-flex>
        <v-switch v-model="answersWithPhoto"  label="Answers whith photo" class="pl-2 ml-8"></v-switch>
         
        <answer
            v-for="(answer, index) of question.answers" 
            :key="'answer'+index+1" 
            :answer="answer"
            :index="index"
            :withPhoto="answersWithPhoto"
            @answer="answerChanged"/>
      </div>
    </v-flex>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import moment from 'moment'
import QuestionModel from '@/models/test/QuestionModel';
import AnswerModel from '@/models/test/AnswerModel';
import answer from '@/components/test/CreateAnswer.vue';
import filePreview from '@/components/FilePreview.vue';

@Component({
  components:{
    answer,
    filePreview
  }
})
export default class Question extends Vue {
    @Prop() private question!: QuestionModel;
    @Prop() private index!: number;
    private answersWithPhoto = false;
    private questionWithPhoto = false;
    get questionName(): string{
      return this.question.name;
    }
    set questionName(value: string){
      this.question.name = value;
      this.$emit('question',this.question,this.index);
    }
    
    private addAnswer(){
      this.question.answers.push(new AnswerModel());
      this.$emit('question',this.question,this.index);
    }
    private delAnswer(){
      if(this.question.answers.length>2){
        this.question.answers.pop();
        this.$emit('question',this.question,this.index);
      }
    }

    private answerChanged(value: AnswerModel, index: number){
      this.question.answers[index] = value;
      this.$emit('question',this.question,this.index);
    }

    
  
}
</script>
<style scoped >
  .question{
    border: 4px dotted white;
    padding: 20px;
  }
  .questionMargin{
    margin-right: 30px;
  }
</style>