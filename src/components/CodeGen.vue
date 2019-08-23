<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="isFormValid">
        <CodeGenInput></CodeGenInput>
        <CodeGenOutput></CodeGenOutput>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CodeGenInput from './CodeGenInput.vue';
import CodeGenOutput from './CodeGenOutput.vue';

@Component({
  components: {
    CodeGenInput,
    CodeGenOutput,
  },
})
export default class CodeGen extends Vue {
  public isFormValid = true;
}
</script>

<style scoped>
</style>
