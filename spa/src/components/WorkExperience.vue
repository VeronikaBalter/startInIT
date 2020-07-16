<template>
    <v-container class="ml-8 mt-7 pr-3">
        <v-text-field v-model="workExperienceName"
          outlined 
          label="Name"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="workExperienceCountry"
          outlined 
          label="Country"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="workExperienceCity"
          outlined 
          label="City"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-text-field v-model="workExperiencePosition"
          outlined 
          label="Faculty specialty"
          append-icon="mdi-pencil"
        ></v-text-field>
        <v-textarea v-model="workExperienceDescription"
          outlined 
          label="Description"
          append-icon="mdi-pen"
        ></v-textarea>
        <v-flex row >
         <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="workExperienceDateStart"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="workExperienceDateStart"
            label="Date of starting work"
            append-icon="mdi-calendar-today"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
            class="ml-3"
          ></v-text-field>
        </template>
        <v-date-picker v-model="workExperienceDateStart" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

       <v-dialog
        v-if="!workExperience.untilNow"
        ref="dialog"
        v-model="modal2"
        :return-value.sync="workExperienceDateEnd"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="workExperienceDateEnd"
            label="Date of ending work"
            append-icon="mdi-calendar"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
            class="ml-3"
          ></v-text-field>
        </template>
        <v-date-picker v-model="workExperienceDateEnd" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      <v-switch v-model="workExperience.untilNow" class="mx-2" label="Interview salary"></v-switch>
      </v-flex>
    </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';
import moment from 'moment'
import WorkExperienceModel from '../model/WorkExperienceModel';

@Component({
})
export default class WorkExperience extends Vue {
    @Prop() private workExperience!: WorkExperienceModel;
    @Prop() private index!: number;
    private levels = [];
    private modal =false;
    private modal2 =false;

    get workExperienceName(): string{
      return this.workExperience.name;
    }
    set workExperienceName(value: string){
      this.workExperience.name = value;
      this.$emit('workExperience',this.workExperience,this.index)
    }

    get workExperienceCountry(): string{
      return this.workExperience.country;
    }
    set workExperienceCountry(value: string){
      this.workExperience.country = value;
      this.$emit('workExperience',this.workExperience,this.index)
    }

    get workExperienceCity(): string{
      return this.workExperience.city;
    }
    set workExperienceCity(value: string){
      this.workExperience.city = value;
      this.$emit('workExperience',this.workExperience,this.index)
    }

    get workExperiencePosition(): string{
      return this.workExperience.position;
    }
    set workExperiencePosition(value: string){
      this.workExperience.position = value;
      this.$emit('workExperience',this.workExperience,this.index)
    }

    get workExperienceDescription(): string{
      return this.workExperience.description;
    }
    set workExperienceDescription(value: string){
      this.workExperience.description = value;
      this.$emit('workExperience',this.workExperience,this.index)
    }    
    
    get workExperienceDateStart(): any{
      return this.workExperience.dateStart.toISOString().substr(0, 10);
    }

    set workExperienceDateStart(value: any){
      var parts =value.split('-');
      this.workExperience.dateStart =  new Date(parts[0], parts[1] - 1, parts[2]);
      this.$emit('workExperience',this.workExperience,this.index);
    }

    get workExperienceDateEnd(): any{
      return this.workExperience.dateEnd.toISOString().substr(0, 10);
    }

    set workExperienceDateEnd(value: any){
      var parts =value.split('-');
      this.workExperience.dateEnd =  new Date(parts[0], parts[1] - 1, parts[2]);
      this.$emit('workExperience',this.workExperience,this.index);
    }
  
}
</script>
<style scoped >
</style>