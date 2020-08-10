<template>
    <v-container>
        <v-flex row >
            <h3 class="mt-4">Select your photo  </h3>
            <v-file-input
                v-model="file"
                :hide-input="true"
                prepend-icon="mdi-paperclip"
                outlined
                ref="file" 
                accept="image/*"
                v-on:change="handleFileUpload()"
            />
        </v-flex>
        <img v-bind:src="imagePreview" class="photo"/>
    </v-container>
</template>

<script lang="ts">
import { Component,Vue, Watch, Prop,Ref} from 'vue-property-decorator';
@Component({

})
export default class FilePreview extends Vue {
    private file:File | null = null;
    private imagePreview: any ='';
    

    private handleFileUpload(): void{
        let reader  = new FileReader();
        const vm =this;
        reader.addEventListener("load", () =>{
            vm.imagePreview = reader.result;
        }, false);
        if( this.file ){
            if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
                reader.readAsDataURL( this.file );
            }
        }
    }
}
</script>
<style scoped>
.photo{
    height: 300px;
}
</style>