<!--<template>
<div>
    <ul>
        <li v-for="orders of name" v-bind:key="orders['.key']">
            {{orders}}
        </li>
    </ul>
</div>
</template>

<script>
import { ordersRef } from '../firebaseApp'

export default{
    data() {
        return{
            name: ordersRef,
        }
    }
}
</script>