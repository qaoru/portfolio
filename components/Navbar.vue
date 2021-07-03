<template>
  <nav class="bg-white dark:bg-gray-700 shadow mb-3 py-3">
    <div class="flex flex-row-reverse justify-center mx-2">
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
  </nav>
</template>

<script>
export default {
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
