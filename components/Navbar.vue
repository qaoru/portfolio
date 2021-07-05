<template>
  <nav class="bg-white dark:bg-gray-700 shadow mb-3 py-3">
    <div
      class="
        flex flex-row flex-wrap
        justify-center
        gap-3
        sm:gap-0 sm:justify-between
        items-center
        sm:px-6
      "
    >
      <h1 class="text-lg order-first">
        <nuxt-link to="/"> paul-heng.fr </nuxt-link>
      </h1>
      <div
        class="flex flex-row-reverse justify-center mx-2 order-last sm:order-2"
      >
        <nuxt-link
          v-for="link of links"
          :key="link.name"
          :to="link.href"
          class="
            px-3
            py-2
            mx-4
            border-b-4 border-transparent
            hover:border-red-200
          "
        >
          {{ link.title }}
        </nuxt-link>
      </div>
      <div class="order-2 sm:order-last">
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
export default {
  components: { ThemeSwitcher },
  computed: {
    links: () =>
      [
        { name: 'home', title: 'Accueil', href: '/' },
        { name: 'projects', title: 'Projets', href: '/projects' },
        { name: 'formations', title: 'Formation', href: '/formation' },
      ].reverse(),
  },
  methods: {},
}
</script>
