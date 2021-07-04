<template>
  <div
    class="flex justify-between items-center cursor-pointer"
    @click="toggleColorMode"
  >
    <div
      class="
        w-16
        h-10
        flex
        items-center
        bg-gray-300
        rounded-full
        p-1
        duration-300
        ease-in-out
      "
      :class="{ 'bg-green-400': isDark }"
    >
      <div
        class="
          bg-white
          w-8
          h-8
          rounded-full
          shadow-md
          transform
          duration-300
          ease-in-out
          text-black
          flex
          justify-center
          items-center
          text-lg
        "
        :class="{ 'translate-x-6': isDark }"
      >
        <FontAwesomeIcon :icon="['fas', switcherIcon]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$colorMode.value === 'dark'
    },
    switcherIcon() {
      return this.isDark ? 'moon' : 'sun'
    },
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
