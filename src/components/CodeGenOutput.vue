<!-- Add html here -->
<template>
  <v-row dense>
    <v-text-field
      id="generatePSW"
      v-model="fetchPSW"
      label="Generated Code"
      :rules="pswCodeRules"
      readonly
      filled
      counter="20"
    >
      <template v-slot:append-outer>
        <v-btn text @click="copyToClipboard">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </v-row>
</template>

<!-- Javascript  -->
<script>
export default {
  name: 'CodeGenOutput',
  data: () => ({
    pswCode: "",
		pswCodeRules: [
			x => x.length <= 20 || "This code is too long and will not work in-game."
		],
  }),
  methods: {
    copyToClipboard() {
			document.getElementById('generatePSW').select();
			document.execCommand("copy");
		}
  },
  computed: {
		fetchPSW() {
			return this.$store.state.CodeGen.code
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
