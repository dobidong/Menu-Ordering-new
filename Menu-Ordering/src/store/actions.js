import * as types from './mutation-types'

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const setEvents = ({commit}, events_payload) => {
    commit(types.SET_EVENTS, events_payload)
}

export const addToCart = ({commit}, invId) => {
    commit(types.ADD_TO_CART, invId)
}

export const removeFromCart = ({commit}, index) => {
    commit(types.REMOVE_FROM_CART, index)
}

export const submitOrder = ({commit}, order) => {
    commit(types.SUBMIT_ORDER, order)
}
//export const removeEvent = ({commit}, index) => {
//    commit(types.REMOVE_EVENTS, index)
//}