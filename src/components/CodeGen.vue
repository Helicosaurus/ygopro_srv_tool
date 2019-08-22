<!-- Add html here -->
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

<!-- Javascript  -->
<script>
import CodeGenInput from './CodeGenInput';
import CodeGenOutput from './CodeGenOutput';

export default {
  name: 'CodeGen',
  components: {
    CodeGenInput,
    CodeGenOutput,
  },
  data: () => ({
		isFormValid: true,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
