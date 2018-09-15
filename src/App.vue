<template>
  
  <div id="app" class="cyan elevation-2">
    <app-header :question="infoCurrent.title"></app-header>
    <hr>
    <app-content v-if="!done"></app-content>
    <hr>
 
    <table>
      <tbody>
        <tr>
          <td>Question</td>
          <td>Your Answers</td>
        </tr>
        <tr v-for="(question, index) in info" :key="index">
          <td>{{question.title}}</td>
          <td>
            <ul>
              <li v-if="question.res.length > 1">
                <div>Your answers</div>
                <div v-for="(item, index) in question.res" :key="index"><b>'{{item}}'</b> and this is {{question.answers[item]}}</div>
              </li>
              <li v-else v-for="(item, index) in question.res" :key="index">
                <div>Your answer is <b>'{{item}}'</b> and this is {{question.answers[item]}}</div> 
                
                </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

import AppContent from './components/Content'
import AppHeader from './components/Header'
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'next'
    ])
  },
  computed: {
    ...mapGetters([
      'info',
      'done',
      'infoCurrent'])
  },
  components: {
    AppContent,
    AppHeader
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
