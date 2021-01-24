<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <VButton @click="tes">Work</VButton>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="done" name="clickme">click me</button>
    <small v-if="show" name="name-error">Works</small>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import VButton from '@/components/Button.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    VButton
  }
})
export default class Home extends Vue {
  show = false

  done () {
    this.show = true
  }

  tes () {
    console.log('works')
  }
}
</script>
