<template>
    <v-container class="ml-8 mt-7 pr-3">
        <v-text-field v-model="educationName"
          outlined 
          label="Name"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="educationCountry"
          outlined 
          label="Country"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="educationCity"
          outlined 
          label="City"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="educationFacultySpecialty"
          outlined 
          label="Faculty specialty"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="educationDescription"
          outlined 
          label="Description"
          append-icon="mdi-pen"
        ></v-textarea>
        <v-autocomplete
            v-model="educationLevelOfEducationId"
            :items="levels"
            item-text="value"
            item-value="id"
            outlined
            label="Level of education"
        ></v-autocomplete>
        <v-flex row >
         <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="educationDateStart"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="educationDateStart"
            label="Start date of training"
            append-icon="mdi-calendar-today"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
            class="ml-3"
          ></v-text-field>
        </template>
        <v-date-picker v-model="educationDateStart" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

       <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="educationDateEnd"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="educationDateEnd"
            label="End date of training"
            append-icon="mdi-calendar"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
            class="ml-3"
          ></v-text-field>
        </template>
        <v-date-picker v-model="educationDateEnd" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      </v-flex>
    </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import moment from 'moment'
import EducationModel from '@/models/resume/EducationModel';
import levelsOfEducation from '@/const/levelsOfEducation'

@Component({
})
export default class Education extends Vue {
    @Prop() private education!: EducationModel;
    @Prop() private index!: number;
    private levels = [];
    private modal =false;
    private modal2 =false;

    created(){
      this.levels = levelsOfEducation;
    }
    get educationName(): string{
      return this.education.name;
    }
    set educationName(value: string){
      this.education.name = value;
      this.$emit('education',this.education,this.index)
    }

    get educationCountry(): string{
      return this.education.country;
    }
    set educationCountry(value: string){
      this.education.country = value;
      this.$emit('education',this.education,this.index)
    }

    get educationCity(): string{
      return this.education.city;
    }
    set educationCity(value: string){
      this.education.city = value;
      this.$emit('education',this.education,this.index)
    }

    get educationFacultySpecialty(): string{
      return this.education.facultySpecialty;
    }
    set educationFacultySpecialty(value: string){
      this.education.facultySpecialty = value;
      this.$emit('education',this.education,this.index)
    }

    get educationDescription(): string{
      return this.education.description;
    }
    set educationDescription(value: string){
      this.education.description = value;
      this.$emit('education',this.education,this.index)
    }

    get educationLevelOfEducationId(): number{
      return this.education.levelOfEducationId;
    }
    set educationLevelOfEducationId(value: number){
      this.education.levelOfEducationId = value;
      this.$emit('education',this.education,this.index)
    }
    
    
    get educationDateStart(): any{
      return this.education.dateStart.toISOString().substr(0, 10);
    }

    set educationDateStart(value: any){
      var parts =value.split('-');
      this.education.dateStart =  new Date(parts[0], parts[1] - 1, parts[2]);
      this.$emit('education',this.education,this.index);
    }

    get educationDateEnd(): any{
      return this.education.dateEnd.toISOString().substr(0, 10);
    }

    set educationDateEnd(value: any){
      var parts =value.split('-');
      this.education.dateEnd =  new Date(parts[0], parts[1] - 1, parts[2]);
      this.$emit('education',this.education,this.index);
    }
  
}
</script>
<style scoped >
</style>