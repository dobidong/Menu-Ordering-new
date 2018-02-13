import * as types from './mutation-types'

export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    },

    [types.SIGN_OUT] (state) {
        state.user = {}
    },

    [types.SET_EVENTS] (state, events_payload) {
        state.events = events_payload
    },

    [types.ADD_TO_CART] (state, invId) { 
        state.inCart.push(invId) 
    },

    [types.REMOVE_FROM_CART] (state, index) {
        state.inCart.splice(index, 1)
    },

    [types.SUBMIT_ORDER] (state, order) {
        state.inCart.push(order)
    }
//    [types.REMOVE_EVENTS] (state, index) {
//        state.events.splice('index, 1')
//    }
}