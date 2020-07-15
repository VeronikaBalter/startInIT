<template>
    <v-flex row  class="mt-4 ml-8">
        <v-text-field v-model="education.name"
          outlined 
          label="Name"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="education.country"
          outlined 
          label="Country"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="education.city"
          outlined 
          label="City"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="education.facultySpecialty"
          outlined 
          label="Faculty specialty"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="education.description"
          outlined 
          label="Description"
          append-icon="mdi-pen"
        ></v-textarea>
        <v-autocomplete
            v-model="education.levelOfEducationId "
            :items="levels"
            item-text="value"
            item-value="id"
            outlined
            label="Level of education"
        ></v-autocomplete>
    </v-flex>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import EducationModel from '../model/EducationModel';
import levelsOfEducation from '../const/levelsOfEducation'

@Component({
})
export default class Education extends Vue {
    @Prop() private education: EducationModel = new EducationModel();
    private levels = [];

    created(){
        this.levels = levelsOfEducation;
    }
  
}
</script>
<style scoped >
</style>