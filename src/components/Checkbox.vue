<template>
<div>
    <div v-for="(item, key, index) in info.answers" :key="index">
        <label>
            <input type="checkbox" v-model="value[key]">
            <span>{{key}}</span>
        </label>
    </div>
 <!-- {{res}} -->
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
            value: this.initValues(),
            result: []
        }
    },
     methods: {
    ...mapActions([
      'activateButton'
    ]),
    initValues() {
        let value = {};
        for(let i in this.info.answers) {
            value[i] = false;
        }
        return value;
    }
     },
    computed: {
        res() {
           let counter = 0,
           res = [];

                for(let i in this.value) {
                    if(this.value[i] === true) {
                        res.push(i);
                        counter++;
                    }
                } 
                this.result = res;
                return counter;
        },
        ready() {
                return this.res > 1;
            }
    },
    watch: {
        result() {
            console.log(this.result);
            this.$emit('choice', this.result);
        },
        ready() {
        this.activateButton(this.ready);
        }
    },
    beforeMount() {
        this.activateButton(this.ready);
    }
}
</script>

<style>

</style>
