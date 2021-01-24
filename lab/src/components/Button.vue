<template>
  <button
    class="v-btn"
    :id="id"
    :class="customClass"
    :name="name"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VButton extends Vue {
  @Prop() private id?: string
  @Prop() private customClass?: string
  @Prop() private name?: string
  @Prop() private disabled?: boolean

  handleClick (e: Event) {
    this.$emit('click', e)
  }
}
</script>

<style lang="scss"></style>
