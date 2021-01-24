<template>
<div>
  <input type="email" name="email" id="email" v-model="email" v-bind:class="{ 'error': emailError }">
  <p name="email-error" v-if="emailError">{{ emailError }}</p>

  <input type="password" name="password" v-model="pass" v-bind:class="{ error: passError }">
  <p name="password-error" v-if="passError">{{ passError }}</p>

  <button name="sign-in" @click="signIn">Login</button>
</div>
</template>

<script>
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class SignIn extends Vue {
  email = null;
  pass = null;

  emailError = null;
  passError = null;

  signIn () {
    this.emailError = null
    this.passError = null

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!this.email || !this.email.match(regex)) {
      this.emailError = 'Email inválido'
    }

    if (!this.pass || this.pass.length < 6) {
      this.passError = 'Senha inválida'
    }
  }
}
</script>

<style scoped>
  .error {
    border-color: red;
  }
</style>
