<template>
    <div>
        <app-input v-for="(value, key, index) in infoCurrent.answers" 
            :answer="key" 
            :value="value" 
            :type="infoCurrent.type" 
            :key="index"
            @choice="onChoice({index, key, value})">
        </app-input>
        <button v-if="!done" type="button" @click="next" :disabled="!activeButton">Next</button>
    </div>
</template>

<script>

import AppInput from './Input'
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
    AppInput
  }
}

</script>

<style>

</style>