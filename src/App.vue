<template>
  <v-app>
    <v-container fill-height>
      <v-row justify="center">
        <CodeGen></CodeGen>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CodeGen from './components/CodeGen.vue';

@Component({
  components: {
    CodeGen,
  },
})
export default class App extends Vue {}
</script>
