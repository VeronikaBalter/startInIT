<template>
    <v-flex row  class="mt-4 ml-8">
        <v-autocomplete
            v-model="langNameId"
            :items="languages"
            item-text="value"
            item-value="id"
            outlined
            label="Language"
            class="ml-3"
        ></v-autocomplete>
        <v-autocomplete
            v-model="langLevelId"
            :items="levels"
            item-text="value"
            item-value="id"
            outlined
            label="Level"
            class="ml-3"
        ></v-autocomplete>
    </v-flex>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import languagesList from '../const/languages';
import levelsList from '../const/languageLevel';
import LanguageModel from '../models/LanguageModel';
@Component({
})
export default class Language extends Vue {
    @Prop() private language!:LanguageModel;
    @Prop() private index!:number;
    private languages = [];
    private levels = []; 

    created(){
        this.languages = languagesList;
        this.levels = levelsList;
    }

    get langNameId(): number{
        return this.language.nameId;
    }

    set langNameId(value: number){
        this.language.nameId = value;
        this.$emit('lang',this.language,this.index)
    }

    get langLevelId(): number{
        return this.language.levelId;
    }

    set langLevelId(value: number){
        this.language.levelId = value;
        this.$emit('lang',this.language,this.index)
    }
  
}
</script>