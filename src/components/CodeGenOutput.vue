<!-- Add html here -->
<template>
  <v-row dense>
    <v-text-field
      id="generatePSW"
      v-model="generatePSW"
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
		generatePSW() {
			let code = "";

			if (this.format == "AI") {
				code = "AI#" + this.ai;
			}
			else {
				//if (!this.$refs.form.validate()) return "";

				let args = [
					this.cards,
					this.banlist,
					this.deckCheck ? "" : "NC",
					this.rules,
					this.lifePoints == "8000" ? "" : "LP" + this.lifePoints,
					this.timeLimit == "180" ? "" : "TM" + this.timeLimit,
					this.startingHand == "5" ? "" : "ST" + this.startingHand,
					this.drawSize == "1" ? "" : "DR" + this.drawSize,
					this.shuffleDecks ? "" : "NS",
					this.spectateMode ? "" : "NW",
					this.format,
				].filter(x => x !== ""); //Filter out empty args

				if (args.length) {
					code = args.join(",") + "#";
				}

				code += this.roomName;

				if (this.roomPassword.length) {
					code += "$" + this.roomPassword;
				}
			}
			
			return code;
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
