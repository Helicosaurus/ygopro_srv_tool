// initial state
const state = () => ({
	code: "",
	roomName: "",
	roomPassword: "",
	format: "",
	formatItems: [
		{ text: 'Single', value: '' },
		{ text: 'Match', value: 'M' },
		{ text: 'Tag', value: 'T' },
		{ text: 'Versus AI', value: 'AI' },
	],
	ai: "",
	aiItems: [
		{ text: '- Random -', value: '' },
		"Altergeist",
		"Blackwing",
		"BlueEyes",
		"Burn",
		"CyberDragon",
		"Dragunity",
		"EvilSwarm",
		"Frog",
		"God",
		"Gravekeeper",
		"Graydle",
		"Horus",
		"Level8",
		"Lightsworn",
		"Nekroz",
		"OldSchool",
		"Orcust",
		"PureWinds",
		"Qliphort",
		"Rainbow",
		"Rank5",
		"Salaman",
		"SkyStriker",
		"ST1732",
		"ToadallyAwesome",
		"Yosenju",
		"ZexalWeapons",
		"Zoodiac",
	],
	cards: "",
	cardsItems: [
		{ text: 'Server default', value: '' },
		{ text: 'TCG only', value: 'TO' },
		{ text: 'OCG only', value: 'OO' },
		{ text: 'TCG + OCG', value: 'OT' },
		{ text: 'No Unique', value: 'NU' },
	],
	banlist: "",
	banlistItems: [
		{ text: 'Server default', value: '' },
		{ text: 'TCG', value: 'LF1' },
		{ text: 'OCG', value: 'LF2' },
		{ text: 'World', value: 'LF3' },
		{ text: 'None', value: 'NF' },
	],
	deckCheck: true,
	rules: "",
	rulesItems: [
		{ text: 'MR1 (Synchro, 2008)', value: 'MR1' },
		{ text: 'MR2 (Xyz, 2011)', value: 'MR2' },
		{ text: 'MR3 (Pendulum, 2014)', value: 'MR3' },
		{ text: 'MR4 (Link, 2017)', value: '' },
	],
	lifePoints: "8000",
	lifePointsRules: [
		x => x !== "" || "You must enter a number.",
		x => x.search(/\D/) == -1 && x !== "0" || "Value is not a valid number.",
		x => parseInt(x) <= 99999 || "Max value is 99 999."
	],
	timeLimit: "180",
	timeLimitRules: [
		x => x !== "" || "You must enter a number.",
		x => x.search(/\D/) == -1 || "Value is not a valid number.",
		x => parseInt(x) <= 999 || "Max value is 999."
	],
	startingHand: "5",
	startingHandRules: [
		x => x !== "" || "You must enter a number.",
		x => x.search(/\D/) == -1 || "Value is not a valid number.",
		x => parseInt(x) <= 40 || "Max value is 40."
	],
	drawSize: "1",
	drawSizeRules: [
		x => x !== "" || "You must enter a number.",
		x => x.search(/\D/) == -1 && x !== "0" || "Value is not a valid number.",
		x => parseInt(x) <= 35 || "Max value is 35."
	],
	shuffleDecks: true,
	spectateMode: true,
})

// getters
const getters = {

}

// mutations
const mutations = {
	generatePSW (state) {

		let code = "";

		if (state.format == "AI") {
			code = "AI#" + state.ai;
		}
		else {
			
			let args = [
				state.cards,
				state.banlist,
				state.deckCheck ? "" : "NC",
				state.rules,
				state.lifePoints == "8000" ? "" : "LP" + state.lifePoints,
				state.timeLimit == "180" ? "" : "TM" + state.timeLimit,
				state.startingHand == "5" ? "" : "ST" + state.startingHand,
				state.drawSize == "1" ? "" : "DR" + state.drawSize,
				state.shuffleDecks ? "" : "NS",
				state.spectateMode ? "" : "NW",
				state.format,
			].filter(x => x !== ""); //Filter out empty args

			if (args.length) {
				code = args.join(",") + "#";
			}

			code += state.roomName;

			if (state.roomPassword.length) {
				code += "$" + state.roomPassword;
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