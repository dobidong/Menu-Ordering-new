<template>
<div class="">
  <h1>For Payment</h1>
  <router-link to='dashboard'>
        <button class="btn btn-primary btn-lg">
            Dashboard
        </button>
    </router-link>
  <div class='col-md-12'>
      <br>
    <CompletedItem
      v-for="(completed_item, index) in this.$store.state.completed" 
      :completed="completed_item"
      :key="index"
    />
  </div>
</div>
</template>

<script>
import { submitRef } from '../firebaseApp'
//new
import CompletedItem from './CompletedItem.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
    components: {
        CompletedItem
    },
    mounted() {
        submitRef.on('value', snap => {
            let completed = []
            snap.forEach(complete => {
                completed.push(complete.val())
            })
            console.log('completed', completed)
           this.$store.dispatch('doneOrders', completed)
        })
    }
}
</script>