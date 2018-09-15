<template>
    <div>
        <label>
            <input @click="choice" :name="name" :type="type" :value="answer">
            <span>{{answer}}</span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        answer: String
    },
    methods: {
        choice(e) {
                this.$emit('choice');
        }
    },
    computed: {
        name() {
           return this.type === 'checkbox'? this.answer: this.type; 
        }
    }
}
</script>

<style>

</style>
