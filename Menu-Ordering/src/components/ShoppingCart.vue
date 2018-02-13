<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</button>
    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Orders</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in cart">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price | dollars }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <tr>
                  <th></th><br>
                  TOTAL:
                  <th><br>{{ total | dollars }}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep choosing</button>
            <button class="btn btn-primary" @click='submitOrder'>Submit Orders</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters'
import { ordersRef } from '../firebaseApp'

export default {
  data() {
    return {
      orderNames: [],
    }
  },
//  watch: {
//    cart(val) {
//      if (val) return;
//     val.forEach(item => {
//        this.orderNames.push(item.price)
//      })
//    }
//  },
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.MainCourse.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
    table1() {
      return {Name: this.cart[0].name}
    }
  },
  filters: {
    dollars,
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    submitOrder () {
      console.log(this.table1)
//console.log(this.orderNames)
//console.log(this.cart)
      //ordersRef.push(this.table1)
    }
  }
}
</script>
