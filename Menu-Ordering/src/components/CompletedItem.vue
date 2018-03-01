<template>
<div class="col-md-4">
<div class="event-card">
    <h4 class="cart-title"></h4><br>
    <ol class="card-text">
       <li v-for="completeName of completed" v-bind:key="completeName['.key']">
                  {{completeName.name}}
           </li>
    </ol>
    <button class="btn btn-primary btn-lg btn-block" @click="removeOrder(orders['.key'])">PAID</button>
</div>
</div>
</template>

<script>
export default {
    props: ['completed'],
}
</script>
