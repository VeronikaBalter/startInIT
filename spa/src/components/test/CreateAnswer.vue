<template>
  <v-container class="ml-8 mb-n4">
    <v-flex row v-if="!withPhoto">
        <v-textarea v-model="answerName"
          outlined 
          label="Answer"
          append-icon="mdi-pencil"
          rows="1"
        ></v-textarea>
        <v-switch v-model="correctAnswer"  label="Сorrect answer" class="pl-2"></v-switch>
    </v-flex>
    <v-flex row v-else>
      <file-preview/>
      <v-switch v-model="correctAnswer"  label="Сorrect answer" class="pl-2"></v-switch>
    </v-flex>
  </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import moment from 'moment';
import filePreview from '@/components/FilePreview.vue';
import AnswerModel from '@/models/test/AnswerModel';


@Component({
  components:{
    filePreview
  }
})
export default class CreateAnswer extends Vue {
    @Prop() private answer!: AnswerModel;
    @Prop() private index!: number;
    @Prop() private withPhoto!: boolean;
    
    get answerName(): string {
      return this.answer.name;
    }
    set answerName(value: string){
      this.answer.name = value;
      this.$emit('answer',this.answer,this.index)
    }

    get correctAnswer(): boolean{
      return this.answer.isRight;
    }
    set correctAnswer(value: boolean){
      this.answer.isRight = value;
      this.$emit('answer',this.answer,this.index)
    }
    

    
  
}
</script>
<style scoped >
</style>