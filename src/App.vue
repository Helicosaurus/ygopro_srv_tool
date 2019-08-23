<template>
  <v-app>
    <v-container fill-height>
      <v-row justify="center">
        <CodeGen></CodeGen>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import store from './store/index.js';
import CodeGen from './components/CodeGen.vue';

export default {
  name: 'App',
  store,
  components: {
    CodeGen,
  },
  data: () => ({
    //
  }),
};
</script>
