<template>
    <v-container class="ml-8 mt-7 pr-3">
        <v-flex row>
            <v-checkbox
                v-model="choice"
                hide-details
                class="shrink mr-2 mt-0"
            />
            <h3>{{index+1}}. {{answer.text}}</h3>
        </v-flex>
    </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import moment from 'moment'
import AnswerModel from '@/models/test/AnswerModel';

@Component({
})
export default class CreateAnswer extends Vue {
    @Prop() private answer!: AnswerModel;
    @Prop() private index!: number;
    
    get choice(): boolean{
        return this.answer.isRight;
    }

    set choice(value: boolean){
        this.answer.isRight = value;
        this.$emit('choice',this.answer)
    }

    
  
}
</script>
<style scoped >
</style>