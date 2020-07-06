<template>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>Start in IT</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
</template>


<script lang="ts">
import { Component,Vue, Watch} from 'vue-property-decorator';
@Component({
})
export default class BaseHeader extends Vue {
}
</script>