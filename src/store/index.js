import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        current: 0,
        done: false,
        activeButton: false,
        info: [
			{
				type: 'radio',
                title: 'Какой тег задаёт ссылку?',
                res: [],
				answers: { 
					'a' : true,
					'div': false,
					'span': false,
					'img': false
                }
			},
			{
				type: 'checkbox',
                title: 'Какие из  этих тегов строчные?',
                res: [],
				answers: { 
                    'table': false,
					'i': true,
					'a': true,
					'img': true
                }
			}
		]
    },
    getters: {
        info(state) {
            return state.info;
        },
        current(state) {
            return state.current;
        },
        done(state) {
            return state.done;
        },
        infoCurrent(state) {
            return state.info[state.current];
        },
        answers(state) {
            return state.info[state.current].answers;
        },
        activeButton(state) {
            return state.activeButton;
        }
    },
    mutations: {
        activateButton(state, payload) {
            state.activeButton = payload;
        },
        next(state) {
            let res = state.current;
            if(res <= state.info.length) {
                res++;
            } 
            if(res >= state.info.length) {
                res = state.info.length -1 
                state.done = true;
            } 
            state.current = res;
            
        },
        updateRes(state, payload) {
            let current = state.info[state.current];
                current.res = [...payload];
        }
    },
    actions: {
        activateButton({commit}, payload) {
            commit('activateButton', payload)
        },
        next({commit}) {
            commit('next');
        },
        updateRes({commit}, payload) {
            commit('updateRes', payload);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})