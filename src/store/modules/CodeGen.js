// initial state
const state = () => ({
	code: "",
})

// getters
const getters = {

}

// mutations
const mutations = {
	generatePSW (state, payload) {

		let code = "";

		if (payload.format == "AI") {
			code = "AI#" + payload.ai;
		}
		else {
			//if (!this.$refs.form.validate()) return "";

			let args = [
				payload.cards,
				payload.banlist,
				payload.deckCheck ? "" : "NC",
				payload.rules,
				payload.lifePoints == "8000" ? "" : "LP" + payload.lifePoints,
				payload.timeLimit == "180" ? "" : "TM" + payload.timeLimit,
				payload.startingHand == "5" ? "" : "ST" + payload.startingHand,
				payload.drawSize == "1" ? "" : "DR" + payload.drawSize,
				payload.shuffleDecks ? "" : "NS",
				payload.spectateMode ? "" : "NW",
				payload.format,
			].filter(x => x !== ""); //Filter out empty args

			if (args.length) {
				code = args.join(",") + "#";
			}

			code += payload.roomName;

			if (payload.roomPassword.length) {
				code += "$" + payload.roomPassword;
			}
		}
		
		state.code = code;

	}
}

// actions
const actions = {
	
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}