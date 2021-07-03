<template>
  <div class="text-center my-2">
    <nuxt-img
      :src="path"
      provider="netlify"
      alt="speedup"
      quality="100"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      class="content-image"
    />
    <p class="content-caption italic">{{ caption }}</p>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss">
.content-image {
  margin-bottom: 1em !important;
}
.content-caption {
  margin-top: 0px !important;
}
</style>
