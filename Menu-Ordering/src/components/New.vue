<template>
  <div class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <h1>Barrio Fiesta Menus</h1><br>
<br>
    <div class="row">
      <Item
        v-for="item in MainCourse"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  data() {
    return {
      selected: null
    }
  },
  name: 'app',
  computed: {
    MainCourse() { return this.$store.getters.MainCourse }
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
