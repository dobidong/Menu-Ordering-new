<template>
<div class="">
  <h1>Kitchen View</h1>
  <router-link to='dashboard'>
        <button class="btn btn-primary btn-lg">
            Dashboard
        </button>
    </router-link>
  <div class='col-md-12'>
      <br>
    <KitchenItem
      v-for="(orders_item, index) in this.$store.state.orders" 
      :orders="orders_item"
      :key="index"
    />
  </div>
</div>
</template>

<script>
import { ordersRef } from '../firebaseApp'
//new
import KitchenItem from './KitchenItem.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
    components: {
        KitchenItem
    },
    mounted() {
        ordersRef.on('value', snap => {
            let orders = []
            snap.forEach(order => {
                orders.push(order.val())
            })
            //console.log('orders', orders)
            this.$store.dispatch('setOrders', orders)
        })
    }
}
</script>