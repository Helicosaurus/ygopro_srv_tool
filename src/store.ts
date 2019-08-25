import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomName: '',
    roomPassword: '',
    format: '',
    formatItems: [
      { text: 'Single', value: '' },
      { text: 'Match', value: 'M' },
      { text: 'Tag', value: 'T' },
      { text: 'Versus AI', value: 'AI' },
    ],
    ai: '',
    aiItems: [
      { text: '- Random -', value: '' },
      'Altergeist',
      'Blackwing',
      'BlueEyes',
      'Burn',
      'CyberDragon',
      'Dragunity',
      'EvilSwarm',
      'Frog',
      'God',
      'Gravekeeper',
      'Graydle',
      'Horus',
      'Level8',
      'Lightsworn',
      'Nekroz',
      'OldSchool',
      'Orcust',
      'PureWinds',
      'Qliphort',
      'Rainbow',
      'Rank5',
      'Salaman',
      'SkyStriker',
      'ST1732',
      'ToadallyAwesome',
      'Yosenju',
      'ZexalWeapons',
      'Zoodiac',
    ],
    cards: '',
    cardsItems: [
      { text: 'Server default', value: '' },
      { text: 'TCG only', value: 'TO' },
      { text: 'OCG only', value: 'OO' },
      { text: 'TCG + OCG', value: 'OT' },
      { text: 'No Unique', value: 'NU' },
    ],
    banlist: '',
    banlistItems: [
      { text: 'Server default', value: '' },
      { text: 'TCG', value: 'LF1' },
      { text: 'OCG', value: 'LF2' },
      { text: 'World', value: 'LF3' },
      { text: 'None', value: 'NF' },
    ],
    deckCheck: true,
    rules: '',
    rulesItems: [
      { text: 'MR1 (Synchro, 2008)', value: 'MR1' },
      { text: 'MR2 (Xyz, 2011)', value: 'MR2' },
      { text: 'MR3 (Pendulum, 2014)', value: 'MR3' },
      { text: 'MR4 (Link, 2017)', value: '' },
    ],
    lifePoints: '8000',
    lifePointsRules: [
      (x: string) => x !== '' || 'You must enter a number.',
      (x: string) => (x.search(/\D/) === -1 && x !== '0') || 'Value is not a valid number.',
      (x: string) => parseInt(x, 10) <= 99999 || 'Max value is 99 999.',
    ],
    timeLimit: '180',
    timeLimitRules: [
      (x: string) => x !== '' || 'You must enter a number.',
      (x: string) => x.search(/\D/) === -1 || 'Value is not a valid number.',
      (x: string) => parseInt(x, 10) <= 999 || 'Max value is 999.',
    ],
    startingHand: '5',
    startingHandRules: [
      (x: string) => x !== '' || 'You must enter a number.',
      (x: string) => x.search(/\D/) === -1 || 'Value is not a valid number.',
      (x: string) => parseInt(x, 10) <= 40 || 'Max value is 40.',
    ],
    drawSize: '1',
    drawSizeRules: [
      (x: string) => x !== '' || 'You must enter a number.',
      (x: string) => (x.search(/\D/) === -1 && x !== '0') || 'Value is not a valid number.',
      (x: string) => parseInt(x, 10) <= 35 || 'Max value is 35.',
    ],
    shuffleDecks: true,
    spectateMode: true,
    pswCode: '',
  },

  mutations: {
    roomName: (state: any, payload: string) => (state.roomName = payload),
    roomPassword: (state: any, payload: string) => (state.roomPassword = payload),
    format: (state: any, payload: string) => (state.format = payload),
    formatItems: (state: any, payload: any[]) => (state.formatItems = payload),
    ai: (state: any, payload: string) => (state.ai = payload),
    aiItems: (state: any, payload: any[]) => (state.aiItems = payload),
    cards: (state: any, payload: string) => (state.cards = payload),
    cardsItems: (state: any, payload: any[]) => (state.cardsItems = payload),
    banlist: (state: any, payload: string) => (state.banlist = payload),
    banlistItems: (state: any, payload: any[]) => (state.banlistItems = payload),
    deckCheck: (state: any, payload: boolean) => (state.deckCheck = payload),
    rules: (state: any, payload: string) => (state.rules = payload),
    rulesItems: (state: any, payload: any[]) => (state.rulesItems = payload),
    lifePoints: (state: any, payload: string) => (state.lifePoints = payload),
    lifePointsRules: (state: any, payload: any[]) => (state.lifePointsRules = payload),
    timeLimit: (state: any, payload: string) => (state.timeLimit = payload),
    timeLimitRules: (state: any, payload: any[]) => (state.timeLimitRules = payload),
    startingHand: (state: any, payload: string) => (state.startingHand = payload),
    startingHandRules: (state: any, payload: any[]) => (state.startingHandRules = payload),
    drawSize: (state: any, payload: string) => (state.drawSize = payload),
    drawSizeRules: (state: any, payload: any[]) => (state.drawSizeRules = payload),
    shuffleDecks: (state: any, payload: boolean) => (state.shuffleDecks = payload),
    spectateMode: (state: any, payload: boolean) => (state.spectateMode = payload),
    pswCode: (state: any, payload: string) => (state.pswCode = payload),
  },

  actions: {
    generatePSW({ commit, state }) {
      let code: string = '';

      if (state.format === 'AI') {
        code = 'AI#' + state.ai;
      } else {
        const args = [
          state.cards,
          state.banlist,
          state.deckCheck ? '' : 'NC',
          state.rules,
          state.lifePoints === '8000' ? '' : 'LP' + state.lifePoints,
          state.timeLimit === '180' ? '' : 'TM' + state.timeLimit,
          state.startingHand === '5' ? '' : 'ST' + state.startingHand,
          state.drawSize === '1' ? '' : 'DR' + state.drawSize,
          state.shuffleDecks ? '' : 'NS',
          state.spectateMode ? '' : 'NW',
          state.format,
        ].filter((x: string) => x !== ''); // Filter out empty args

        if (args.length) {
          code = args.join(',') + '#';
        }

        code += state.roomName;

        if (state.roomPassword.length) {
          code += '$' + state.roomPassword;
        }
      }

      commit('pswCode', code);
    },

    setRoomName({ commit }, payload) {
      commit('roomName', payload);
      this.dispatch('generatePSW');
    },
    setRoomPassword({ commit }, payload) {
      commit('roomPassword', payload);
      this.dispatch('generatePSW');
    },
    setFormat({ commit }, payload) {
      commit('format', payload);
      this.dispatch('generatePSW');
    },
    setFormatItems({ commit }, payload) {
      commit('formatItems', payload);
      this.dispatch('generatePSW');
    },
    setAi({ commit }, payload) {
      commit('ai', payload);
      this.dispatch('generatePSW');
    },
    setAiItems({ commit }, payload) {
      commit('aiItems', payload);
      this.dispatch('generatePSW');
    },
    setCards({ commit }, payload) {
      commit('cards', payload);
      this.dispatch('generatePSW');
    },
    setCardsItems({ commit }, payload) {
      commit('cardsItems', payload);
      this.dispatch('generatePSW');
    },
    setBanlist({ commit }, payload) {
      commit('banlist', payload);
      this.dispatch('generatePSW');
    },
    setBanlistItems({ commit }, payload) {
      commit('banlistItems', payload);
      this.dispatch('generatePSW');
    },
    setDeckCheck({ commit }, payload) {
      commit('deckCheck', payload);
      this.dispatch('generatePSW');
    },
    setRules({ commit }, payload) {
      commit('rules', payload);
      this.dispatch('generatePSW');
    },
    setRulesItems({ commit }, payload) {
      commit('rulesItems', payload);
      this.dispatch('generatePSW');
    },
    setLifePoints({ commit }, payload) {
      commit('lifePoints', payload);
      this.dispatch('generatePSW');
    },
    setLifePointsRules({ commit }, payload) {
      commit('lifePointsRules', payload);
      this.dispatch('generatePSW');
    },
    setTimeLimit({ commit }, payload) {
      commit('timeLimit', payload);
      this.dispatch('generatePSW');
    },
    setTimeLimitRules({ commit }, payload) {
      commit('timeLimitRules', payload);
      this.dispatch('generatePSW');
    },
    setStartingHand({ commit }, payload) {
      commit('startingHand', payload);
      this.dispatch('generatePSW');
    },
    setStartingHandRules({ commit }, payload) {
      commit('startingHandRules', payload);
      this.dispatch('generatePSW');
    },
    setDrawSize({ commit }, payload) {
      commit('drawSize', payload);
      this.dispatch('generatePSW');
    },
    setDrawSizeRules({ commit }, payload) {
      commit('drawSizeRules', payload);
      this.dispatch('generatePSW');
    },
    setShuffleDecks({ commit }, payload) {
      commit('shuffleDecks', payload);
      this.dispatch('generatePSW');
    },
    setSpectateMode({ commit }, payload) {
      commit('spectateMode', payload);
      this.dispatch('generatePSW');
    },
    setPswCode({ commit }, payload) {
      commit('pswCode', payload);
      this.dispatch('generatePSW');
    },
  },

  getters: {
    getRoomName: (state: any) => state.roomName,
    getRoomPassword: (state: any) => state.roomPassword,
    getFormat: (state: any) => state.format,
    getFormatItems: (state: any) => state.formatItems,
    getAi: (state: any) => state.ai,
    getAiItems: (state: any) => state.aiItems,
    getCards: (state: any) => state.cards,
    getCardsItems: (state: any) => state.cardsItems,
    getBanlist: (state: any) => state.banlist,
    getBanlistItems: (state: any) => state.banlistItems,
    getDeckCheck: (state: any) => state.deckCheck,
    getRules: (state: any) => state.rules,
    getRulesItems: (state: any) => state.rulesItems,
    getLifePoints: (state: any) => state.lifePoints,
    getLifePointsRules: (state: any) => state.lifePointsRules,
    getTimeLimit: (state: any) => state.timeLimit,
    getTimeLimitRules: (state: any) => state.timeLimitRules,
    getStartingHand: (state: any) => state.startingHand,
    getStartingHandRules: (state: any) => state.startingHandRules,
    getDrawSize: (state: any) => state.drawSize,
    getDrawSizeRules: (state: any) => state.drawSizeRules,
    getShuffleDecks: (state: any) => state.shuffleDecks,
    getSpectateMode: (state: any) => state.spectateMode,
    getPswCode: (state: any) => state.pswCode,
  },
});
