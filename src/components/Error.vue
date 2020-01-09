<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: false,
      default: '400 Bad Request'
    }
  }
}
</script>

<style>
</style>