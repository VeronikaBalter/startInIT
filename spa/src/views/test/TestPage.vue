<template>
    <v-layout id="testPage" align-center justify-center>
        <v-card v-if="!startTest" class="text-start pa-8">
            <h1>{{test.name}}</h1>
            <v-chip
                v-for="skill in test.testSkills"
                :key="skill.id"
                class="ma-2"
                color="secondary"
            >
                {{skill.name}}
            </v-chip>
            <v-flex row class="pl-4 pt-1">
                <h4>{{questionCount}} questions in the test </h4>
                <span v-if="showTime" class="mdi mdi-minus"></span>
                <h4 v-if="showTime"> Time to pass the test: {{time}}</h4>
            </v-flex>
            <v-flex row class="pl-4">
                <h4>{{level}} </h4>
                <span class="mdi mdi-minus"></span>
                <h4> {{language}}</h4>
            </v-flex>
            <v-flex row class="pl-4 py-2">
                <h4 class="pt-1 pr-2">Author: </h4>
                <v-avatar color="indigo" size="30">
                    <v-icon  v-if="test.user.userInfo.photo==null" 
                        dark
                        size="40">mdi-account-circle</v-icon>
                    <img v-else
                        :src="test.user.userInfo.photo" >
                </v-avatar>
                <h3 class="pl-3">{{test.user.firstName}} {{test.user.lastName}}</h3>
            </v-flex>
            
            <h3>About: </h3>
            <div>{{test.description}}</div>
            <v-btn width="100%" class="mt-2" color="success" v-on:click="startTest = true">Start test</v-btn>
        </v-card>
        <v-card v-else class="text-start pa-8 pl-12">
            <h1>{{questionIndex +1}}. {{question.text}}</h1>
            <v-radio-group v-model="radios" :mandatory="false">
            <answer
                v-for="(answer, index) of this.question.answer" 
                :key="'answer'+index" 
                :answer="answer"
                :index="index"
            />
            </v-radio-group>
            <v-flex row>
            <v-btn v-if="questionIndex>0" color="success" v-on:click="back">Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="questionIndex != test.question.length-1" color="success" v-on:click="next" >Next</v-btn>
            <v-btn v-else color="success" v-on:click="endTest">End test</v-btn>
            </v-flex>
        </v-card>
    </v-layout>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import axios from 'axios';
import TestModel from '@/models/test/TestModel'
import TestResults from '@/models/test/TestResults'
import IdValueModel from '@/models/IdValueModel'
import levelsList from '@/const/levels'
import languagesList from '@/const/languages'
import QuestionModel from '@/models/test/QuestionModel'
import answer from '@/components/test/Answer.vue'

let id=0;
@Component({
    components:{
        answer
    }
})
export default class TestPage extends Vue {
    private test: TestModel = new TestModel();
    private result: TestResults = new TestResults();
    private startTest = false;
    private levels = [];
    private languages = [];
    private questionIndex = 0;
    private radios = 0;

    private async beforeRouteEnter(to: any, from: any, next: any) {
        id = to.params.id;
        next();
    }

    private async beforeRouteUpdate(to: any, from: any, next: any) {
        id = to.params.id;
        next();
    }
    async created(){
        this.languages = languagesList;
        this.levels = levelsList;
        await axios.get('api/getTest/'+id).then((res)=>{
            this.test = res.data;
        }).catch((error)=>{
            console.log(error)
            Vue.toasted.error('An error occurred while loading a test')
        })
    }

    get showTime(): boolean{
        return (this.test.hour !=null && this.test.hour>0) || (this.test.minutes!=null && this.test.minutes>0)
    }
    get time(): string{
        let time =  this.test.hour > 0 ? this.test.hour + 'h ' : '';
        time += this.test.minutes > 0 ? this.test.minutes + 'm ' : '';
        return time;
    }
    get language(): string{
        let language: IdValueModel= this.languages.find((el:any)=>el.id==this.test.languageId) || new IdValueModel();
        return language.value;
    }

    get level(): string{
        let level: IdValueModel= this.levels.find((el:any)=>el.id==this.test.levelId) || new IdValueModel();
        return level.value;
    }

    get question(): QuestionModel{
        return this.test.questions[this.questionIndex];
    }

    get questionCount(): number{
        return this.test.questions.length;
    }
    public next(): void{
        this.questionIndex++;
    }
    public back(): void{
        this.questionIndex--;
    }
    public endTest(): void{
    }
    

}
</script>
<style scoped >
#testPage{
  margin:0 10% 0 10%;
}
</style>