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
import { mapState } from 'vuex'

export default {
  name: 'CodeGenInput',
  data: () => ({
		
  }),
	computed: {

		...mapState("CodeGen", [
			"roomName",
			"roomPassword",
			"format",
			"formatItems",
			"ai",
			"aiItems",
			"cards",
			"cardsItems",
			"banlist",
			"banlistItems",
			"deckCheck",
			"rules",
			"rulesItems",
			"lifePoints",
			"lifePointsRules",
			"timeLimit",
			"timeLimitRules",
			"startingHand",
			"startingHandRules",
			"drawSize",
			"drawSizeRules",
			"shuffleDecks",
			"spectateMode"
		]),
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
