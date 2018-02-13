<template>
<div class="">
  <h1>Events Dashboard</h1>
  <button class='btn btn-danger btn-sm signout-btn' @click='signOut'>Sign Out</button>
    <router-link to='new'>
        <button class="btn btn-primary">
            Ordering Menu
        </button>
    </router-link>
    <router-link to='kitchen'>
        <button class="btn btn-primary">
            Orders View (Kitchen)
        </button>
    </router-link>
  <hr>
  <AddEvent />
  <hr>
  <!--{{$store.state.user}}-->
  <div class='col-md-12'>
    <EventItem
      v-for="(event_item, index) in this.$store.state.events" 
      :event="event_item"
      :index='index'
      key1="index"
    />
  </div>
</div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
//new
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem'

export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        AddEvent,
        EventItem
    },
    mounted() {
        eventsRef.on('value', snap => {
            let events = []
            snap.forEach(event => {
                events.push(event.val())
            })
            this.$store.dispatch('setEvents', events)
        })
    }
}
</script>