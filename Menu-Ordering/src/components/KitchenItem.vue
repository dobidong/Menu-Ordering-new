<template>
<div class="col-md-4">
<div class="event-card">
    <h4 class="cart-title">Table 1</h4><br>
    <ol class="card-text">
       <li v-for="orderName of orders" v-bind:key="orderName['.key']">
                  {{orderName.name}}
           </li>
    </ol>
    <div class="btn-group">
    <button class="btn btn-primary btn-lg" @click="removeOrder(orders['.key'])">DONE</button>
    <button class="btn btn-primary btn-lg">CANCEL</button>
    </div>
</div>
</div>
</template>

<script>
import { submitRef, ordersRef } from '../firebaseApp'

export default {
    props: ['orders'],
    data() {
        return{
            complete: [this.orders]
        }
    },
    firebase: {
        orders: ordersRef
    },
    methods: {
        removeOrder(key) {
            //console.log('test')
            submitRef.push(this.orders)
           //ordersRef.child(key).remove()
           ordersRef.remove()
        }
    }
}
</script>
