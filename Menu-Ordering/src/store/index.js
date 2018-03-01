import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        events: [],
        inCart: [],
        orders: [],
        completed: [],
        MainCourse: [
            { invId: 1, name: 'Sinigang Hipon', image: '//placehold.it/200', price: 299, Date: new Date(Date.now()).toLocaleString()},
            { invId: 2, name: 'Bicol Express', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 3, name: 'Igado', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 4, name: 'Patatim', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 5, name: 'Kuhol sa Gata', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 6, name: 'Binagoongang Baboy', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 7, name: 'Kare-Kare', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
            { invId: 8, name: 'Mama Chits Special', image: '//placehold.it/200', price: 340, Date: new Date(Date.now()).toLocaleString()},
        ]
    },
    getters: {
        MainCourse: state => state.MainCourse,
        inCart: state => state.inCart
    },
    mutations,
    actions
})