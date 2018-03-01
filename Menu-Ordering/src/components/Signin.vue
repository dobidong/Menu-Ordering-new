<template>
<div class="from-inline">
  <h1>Sign In</h1>
  <div class="form-group">
      <input 
        type='text'
        placeholder='email'
        class='form-control'
        v-model='email'
        />
        <input
        type='password'
        placeholder='password'
        class='form-control'
        v-model='password'
        />
        <br>
        <button class='btn btn-primary btn-lg' @click="signIn">Sign In</button>
  </div>
  <p>{{error.message}}</p>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
export default {
    data() {
        return{
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signIn() {
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(error =>{
                    this.error = error
                })
        }
    }
}
</script>