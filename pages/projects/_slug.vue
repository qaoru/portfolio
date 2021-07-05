<template>
  <article>
    <MainTitle>{{ page.title }}</MainTitle>
    <nuxt-content class="prose my-6 dark:prose-light" :document="page" />
  </article>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
export default {
  components: { MainTitle },
  asyncData: async ({ $content, params }) => {
    const page = await $content('projects', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>

<style lang="postcss" scoped>
h1 {
  font-family: 'Miriam Libre', 'Source Sans Pro', sans-serif;
}
.nuxt-content {
}
</style>
