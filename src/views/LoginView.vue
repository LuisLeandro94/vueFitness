<template>
  <div class="login w-full">
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form class="loginForm w-full align-center" @submit.prevent="Login">
      <div class="flex flex-col w-1/2">
        <span>E-Mail</span>
        <input id="email" class="my-2 bg-transparent border-border border-solid border-2 p-2 selection:border-accent " name="email" required v-model="email" type="text" placeholder="Enter your e-mail"/>
      </div>
      <div class="flex flex-col w-1/2">
        <span>Password</span>
        <input id="password" class="my-2 bg-transparent border-border border-solid border-2 p-2" v-model="password" required name="password" type="password" placeholder="Enter your password" />
      </div>
      <button class="bg-accent my-4 py-2 px-4 text-lg text-text rounded hover:bg-accentHover transition-all ease-in-out duration-400" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import useAuthStore from '../stores/auth'

  export default {
    name: 'LoginComponent',
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)

      const store = useAuthStore();

      const Login = async() => {
        try {
          await store.logIn(email.value, password.value);
        }
        catch (err) {
          error.value = err.message;
        }
      }

      return {Login, email, password, error}
    }
  }
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.loginForm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
