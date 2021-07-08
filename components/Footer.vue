<template>
  <footer class="text-center py-6 mt-3">
    <p class="text-xl mb-2">
      <FontAwesomeIcon :icon="['far', 'copyright']" @click="toggleColorMode" />
      Paul HENG
    </p>
    <div class="text-2xl">
      <a
        v-for="link of socialLinks"
        :key="link.icon"
        :href="link.link"
        class="mx-3 hover:text-blue-400"
      >
        <FontAwesomeIcon :icon="['fab', link.icon]" />
      </a>
    </div>
    <p class="text-xl mt-2">
      <FontAwesomeIcon :icon="['fas', 'envelope']" /> paul [at] qaoru [dot] fr
    </p>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      socialLinks: [
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/paul-heng-a12368144/',
        },
        { icon: 'github', link: 'https://github.com/qaoru' },
        { icon: 'gitlab', link: 'https://gitlab.com/qaoru' },
      ],
    }
  },
  methods: {
    toggleColorMode() {
      const initialColor =
        this.$colorMode.preference === 'system'
          ? this.$colorMode.value
          : this.$colorMode.preference
      if (initialColor === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>
