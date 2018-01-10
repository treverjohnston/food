import axios from 'axios'
import Vue from 'vue'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//foodfite.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 4000,
    withCredentials: true
})

Vue.use(vuex)

var store = new vuex.Store({
    state: {
        userLocation: {},
        places: {},
        chosen: {},
        center: ''
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
        },
        setChosen(state, obj){
            obj.coordinates.lat = obj.coordinates.latitude,
            obj.coordinates.lng = obj.coordinates.longitude
            state.chosen = obj
        }
        
    },
    actions: {
        getPlaces({ commit, dispatch }, pos) {
            // console.log('pos', pos)
            api.post('places', pos)
                .then(res => {
                    // console.log("place res", res)
                    commit('setPlaces', res.data.data)
                    // debugger
                    // var rand = Math.floor((Math.random() * res.data.data.length) + 1);
                    var rand = Math.floor((Math.random() * res.data.data.length));
                    commit('setChosen', res.data.data[rand])

                    // res.data.images[rand].url = `//images.weserv.nl/?url=${res.data.images[rand].url}`
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        getMap({commit, dispatch}){
            router.push('map')
        },
        getFull({commit, dispatch}){
            router.push('full')
        }
    }
})


export default store