<!-- Add html here -->
<template>
	<v-row dense>
		<v-col>
			<v-text-field
				v-model="roomName"
				label="Room Name"
				clearable
			></v-text-field>
			<v-text-field
				v-model="roomPassword"
				label="Room Password"
				clearable
			></v-text-field>
			<v-select
				v-model="format"
				label="Duel Format"
				:items="formatItems"
			></v-select>
			<v-select
				v-model="ai"
				label="AI Deck"
				:items="aiItems"
				hint='To duel an AI with custom rules, please set up a Single Duel room and invite an AI with "/ai [AI_NAME]".'
			></v-select>
			<v-select
				v-model="cards"
				label="Cards"
				:items="cardsItems"
			></v-select>
			<v-select
				v-model="banlist"
				label="Banlist"
				:items="banlistItems"
			></v-select>
			<v-checkbox label="Check Decks" v-model="deckCheck"></v-checkbox>
		</v-col>
		<v-col>
			<v-select
				v-model="rules"
				label="Master Rules"
				:items="rulesItems"
			></v-select>
			<v-text-field
				v-model="lifePoints"
				label="Life Points"
				:rules="lifePointsRules"
			></v-text-field>
			<v-text-field
				v-model="timeLimit"
				label="Time Limit"
				:rules="timeLimitRules"
				hint="Enter 0 for unlimited time."
				persistent-hint
			></v-text-field>
			<v-text-field
				v-model="startingHand"
				label="Starting Hand size"
				:rules="startingHandRules"
			></v-text-field>
			<v-text-field
				v-model="drawSize"
				label="Draw Size"
				:rules="drawSizeRules"
			></v-text-field>
			<v-checkbox label="Shuffle Decks" v-model="shuffleDecks"></v-checkbox>
			<v-checkbox label="Spectate Mode" v-model="spectateMode"></v-checkbox>
		</v-col>
	</v-row>
</template>

<!-- Javascript  -->
<script>
export default {
  name: 'CodeGenInput',
  data: () => ({
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
  }),
	methods: {
		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
