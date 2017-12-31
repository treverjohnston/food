// import axios from 'axios'
import Vue from 'vue'
import vuex from 'vuex'
import router from '../router'

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//lol-tracker.herokuapp.com/' : '//localhost:5000/';

// let api = axios.create({
//     baseURL: baseUrl + 'api/',
//     timeout: 4000,
//     withCredentials: true
// })

Vue.use(vuex)

var store = new vuex.Store({
    state: {
        userLocation: {}
    },
    mutations: {
        handleError(state, err) {
            console.error(err)
        },
        setUserLocation(state, location) {
			state.userLocation = location
		},
        
    },
    actions: {
        
    }
})


export default store