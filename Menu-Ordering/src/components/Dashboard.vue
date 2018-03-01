<template><div class="">
      <router-link to='new'>
        <button class="btn btn-primary btn-lg">
            Ordering Menu
        </button>
    </router-link>
    <router-link to='kitchen'>
        <button class="btn btn-primary btn-lg">
            Kitchen
        </button>
    </router-link>
      <router-link to="/signup">
              <button class="btn btn-primary btn-lg">
            Sign up
        </button>
        </router-link>
      <router-link to="/completed">
              <button class="btn btn-primary btn-lg">
            Cashier
        </button>
        </router-link>
              <router-link to="/report">
              <button class="btn btn-primary btn-lg">
            Reports
        </button>
        </router-link>
        <button class='btn btn-danger btn-lg' @click='signOut'>
            Sign Out
        </button>
  <hr>
  <AddEvent />
  <hr>
  <!--{{$store.state.user}}-->
  <div class='col-md-12'>
    <EventItem
      v-for="(event_item, index) in this.$store.state.events" 
      :event="event_item"
      :index='index'
      :key="index"
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