<template>
    <v-container>
        <v-btn v-on:click="createCompany">Create Company</v-btn>
    </v-container>
</template>

<script lang="ts">

import { Component,Vue, Watch, Prop} from 'vue-property-decorator';

@Component({
})
export default class PersonalAccoun extends Vue {
    private createCompany(): void{
        this.$router.push({name: 'CreateCompany'})
    }
}
</script>
<style scoped >
</style>