<!-- Add html here -->
<template>
  <v-row dense>
    <v-text-field
      ref="pswCode"
      @focus="$event.target.select()"
      v-model="pswCode"
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
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Bind } from 'vuex-class-bind';

@Component({
  components: {},
})
export default class CodeGenOutput extends Vue {
  @Bind('pswCode') public pswCode: string;

  public pswCodeRules = [
    (x: string) =>
      x.length <= 20 || 'This code is too long and will not work in-game.',
  ];

  public copyToClipboard() {
    const str: string = 'pswCode';
    (this.$refs[str] as HTMLInputElement).focus();
    document.execCommand('copy');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
