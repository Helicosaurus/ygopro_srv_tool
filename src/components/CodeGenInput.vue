<!-- Add html here -->
<template>
  <v-row dense>
    <v-col>
      <v-text-field v-model="roomName" label="Room Name" clearable></v-text-field>
      <v-text-field v-model="roomPassword" label="Room Password" clearable></v-text-field>
      <v-select v-model="format" label="Duel Format" :items="formatItems"></v-select>
      <v-select
        v-model="ai"
        label="AI Deck"
        :items="aiItems"
        hint="To duel an AI with custom rules, please set up a Single Duel room and invite an AI with '/ai [AI_NAME]'."
      ></v-select>
      <v-select v-model="cards" label="Cards" :items="cardsItems"></v-select>
      <v-select v-model="banlist" label="Banlist" :items="banlistItems"></v-select>
      <v-checkbox label="Check Decks" v-model="deckCheck"></v-checkbox>
    </v-col>
    <v-col>
      <v-select v-model="rules" label="Master Rules" :items="rulesItems"></v-select>
      <v-text-field v-model="lifePoints" label="Life Points" :rules="lifePointsRules"></v-text-field>
      <v-text-field
        v-model="timeLimit"
        label="Time Limit"
        :rules="timeLimitRules"
        hint="Enter 0 for unlimited time."
        persistent-hint
      ></v-text-field>
      <v-text-field v-model="startingHand" label="Starting Hand size" :rules="startingHandRules"></v-text-field>
      <v-text-field v-model="drawSize" label="Draw Size" :rules="drawSizeRules"></v-text-field>
      <v-checkbox label="Shuffle Decks" v-model="shuffleDecks"></v-checkbox>
      <v-checkbox label="Spectate Mode" v-model="spectateMode"></v-checkbox>
    </v-col>
  </v-row>
</template>

<!-- Javascript  -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Bind } from 'vuex-class-bind';

@Component({
  components: {},
})
export default class CodeGenInput extends Vue {
  @Bind('roomName') public roomName: string;
  @Bind('roomPassword') public roomPassword: string;
  @Bind('format') public format: string;
  @Bind('formatItems') public formatItems: any[];
  @Bind('ai') public ai: string;
  @Bind('aiItems') public aiItems: any[];
  @Bind('cards') public cards: string;
  @Bind('cardsItems') public cardsItems: any[];
  @Bind('banlist') public banlist: string;
  @Bind('banlistItems') public banlistItems: any[];
  @Bind('deckCheck') public deckCheck: boolean;
  @Bind('rules') public rules: string;
  @Bind('rulesItems') public rulesItems: any[];
  @Bind('lifePoints') public lifePoints: string;
  @Bind('lifePointsRules') public lifePointsRules: any[];
  @Bind('timeLimit') public timeLimit: string;
  @Bind('timeLimitRules') public timeLimitRules: any[];
  @Bind('startingHand') public startingHand: string;
  @Bind('startingHandRules') public startingHandRules: any[];
  @Bind('drawSize') public drawSize: string;
  @Bind('drawSizeRules') public drawSizeRules: any[];
  @Bind('shuffleDecks') public shuffleDecks: boolean;
  @Bind('spectateMode') public spectateMode: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
