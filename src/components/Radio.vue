<template>
<div>
    <div class="title" v-for="(item, key, index) in info.answers" :key="index">
        <label>
            <input type="radio" :value="key" v-model="value">
            <span>{{key}}</span>
        </label>
    </div>
 
</div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    props: {
        info: null
    },
    data() {
        return {
            value: ''
        }
    },
     methods: {
    ...mapActions([
      'activateButton'
    ])
     },
    computed: {
        ready() {
                return this.value !== ''
            }
    },
    watch: {
        value() {
            this.activateButton(this.ready);
            this.$emit('choice', [this.value]);
        }
    },
    beforeMount() {
        this.activateButton(this.ready);
    }
}
</script>

<style>

</style>