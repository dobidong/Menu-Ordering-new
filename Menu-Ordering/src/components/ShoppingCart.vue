<template>
  <div>
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</button>
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
                <tr v-for="(item, index) in cart" :key="index">
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
            <button class="btn btn-secondary btn-lg" data-dismiss="modal">Keep choosing</button>
            <button class="btn btn-primary btn-lg" @click='submitOrder'>Submit Orders</button>
          </div>
              <select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>
<span>TABLE NUMBER {{ selected }}</span>
<button class="btn btn-primary btn-lg">Choose</button> <br>
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
      orderedcart: [this.cart],
      selected: null
    }
  },
  watch: {
    cart(val) {
      // added !
      if (!val) return;
      val.forEach(item => {
        this.orderNames.push({name: item.name, price:item.price, Date: new Date(Date.now()).toLocaleString()});
      });
    },
  },
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
    }
  },
  filters: {
    dollars,
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    submitOrder () {
      //console.log(this.orderNames);
      //this.orderNames = this.$store.state.orders
     ordersRef.push(this.cart)
     //console.log(this.cart)
    }
  }
}
</script>