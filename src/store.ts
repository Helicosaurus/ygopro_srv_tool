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
      (x: string) =>
        (x.search(/\D/) === -1 && x !== '0') || 'Value is not a valid number.',
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
      (x: string) =>
        (x.search(/\D/) === -1 && x !== '0') || 'Value is not a valid number.',
      (x: string) => parseInt(x, 10) <= 35 || 'Max value is 35.',
    ],
    shuffleDecks: true,
    spectateMode: true,
  },

  mutations: {
    roomName: (state: any, payload: string) => (state.roomName = payload),
    code: (state: any, payload: string) => (state.code = payload),
    roomPassword: (state: any, payload: string) =>
      (state.roomPassword = payload),
    format: (state: any, payload: string) => (state.format = payload),
  },

  actions: {
    setRoomName: ({ commit }, payload) => commit('roomName', payload),
    setCode: ({ commit }, payload) => commit('code', payload),
    setRoomPassword: ({ commit }, payload) => commit('roomPassword', payload),
    setFormat: ({ commit }, payload) => commit('format', payload),

    generatePSW({ commit, state }) {
      let code = '';

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

      commit('code', code);
    },
  },

  getters: {
    getRoomName: (state: any) => state.roomName,
    getCode: (state: any) => state.code,
    getRoomPassword: (state: any) => state.roomPassword,
    getFormat: (state: any) => state.format,
  },
});
