<template>
  <article
    class="
      border-2
      flex
      justify-center
      content-center
      items-center
      flex-col
      sm:flex-row
      p-4
      my-3
      text-center
      sm:text-left
    "
  >
    <FontAwesomeIcon
      :icon="[faIcon.style, faIcon.icon]"
      class="text-4xl mr-5 block mb-3 sm:mb-0"
    />
    <div class="flex flex-col flex-grow sm:gap-3">
      <div class="flex flex-col sm:flex-row justify-between">
        <h4 class="text-lg">{{ element.title }}</h4>
        <p>{{ location }} | {{ element.date }}</p>
      </div>
      <p>{{ element.subtitle }}</p>
      <div class="mt-6 sm:mt-3">
        <span
          v-for="keyword of element.keywords"
          :key="keyword"
          class="
            inline-block
            bg-gray-200
            hover:bg-gray-300
            cursor-default
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            lowercase
            mr-2
            mb-2
          "
          >#{{ keyword }}</span
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: null,
    },
  },
  computed: {
    faIcon() {
      const defaultIcon = { style: 'fas', icon: 'square' }
      if (!this.element.icon) {
        return defaultIcon
      }
      const value = this.element.icon.split(':')
      if (value.length !== 2) {
        return defaultIcon
      }
      return { style: value[0], icon: value[1] }
    },
    location() {
      return this.element.location
        ? this.element.location
        : this.element.company
        ? this.element.company
        : ''
    },
  },
}
</script>
