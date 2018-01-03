import axios from 'axios'
import Vue from 'vue'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//food-tossup.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 4000,
    withCredentials: true
})

Vue.use(vuex)

var store = new vuex.Store({
    state: {
        userLocation: {},
        places: {}
    },
    mutations: {
        handleError(state, err) {
            console.error(err)
        },
        setUserLocation(state, location) {
			state.userLocation = location
        },
        setPlaces(state, obj){
            state.places = obj
        }
        
    },
    actions: {
        getPlaces({ commit, dispatch }, pos) {
            console.log('pos', pos)
            api.post('places', pos)
                .then(res => {
                    console.log("place res", res)
                    commit('setPlaces', res.data.data)
                    // debugger
                    // var rand = Math.floor((Math.random() * res.data.images.length) + 1);
                    // res.data.images[rand].url = `//images.weserv.nl/?url=${res.data.images[rand].url}`
                    // commit('setPhoto', res.data.images[rand])
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
    }
})


export default store