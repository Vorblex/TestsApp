<template>
    <div>
        <app-radio 
        v-if="infoCurrent.type === 'radio'" :info="infoCurrent"
        @choice="onChoice"
        >
        </app-radio>
        <app-checkbox v-else @choice="onChoice" :info="infoCurrent"></app-checkbox>
        <v-btn class="orange darken-1 black--text" v-if="!done" type="button" @click="next" :disabled="!activeButton">Next</v-btn>
    </div>
</template>

<script>

import AppRadio from './Radio'
import AppCheckbox from './Checkbox'
import {mapGetters, mapActions} from 'vuex'

export default {
    data () {
    return {

    }
  },
   methods: {
    ...mapActions([
      'next',
      'updateRes'
    ]),
    onChoice(e) {
        this.updateRes(e);
    }
  },
  computed: {
    ...mapGetters([
      'done',
      'infoCurrent',
      'activeButton'])
  },
  components: {
    AppRadio,
    AppCheckbox
  }
}

</script>

<style>

</style>
