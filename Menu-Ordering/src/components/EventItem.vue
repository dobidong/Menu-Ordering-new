<template>
  <div class='col-md-4'>
      <div class='events-card'>
          <button class='close' @click='removeEvent(index)'><span>&times;</span></button>
          <h4 class='cart-title'>Event Name: {{event.title}}</h4>
          <p class='cart-text'>Description: {{event.description}}</p>
          <ul class='list-group list-group-flush'>
              <li class='list-group-item'>Date: {{event.date}}</li>
              <li class='list-group-item'>Location: {{event.location}}</li>
              <li class='list-group-item'>email: {{event.email}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['event', 'index'],
    methods: mapActions([
        'removeEvent'
    ])
}
</script>
