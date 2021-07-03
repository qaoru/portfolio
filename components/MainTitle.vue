<template>
  <h1 class="uppercase text-4xl p-3 m-3 text-center font-medium">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
