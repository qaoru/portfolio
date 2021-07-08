<template>
  <div
    class="border-2 p-4"
    :class="element.content || element.actions ? 'flex flex-col my-12' : 'my-3'"
  >
    <article
      class="
        flex
        justify-center
        content-center
        items-center
        flex-col
        sm:flex-row
        text-center
        sm:text-left
      "
    >
      <FontAwesomeIcon
        :icon="[faIcon.style, faIcon.icon]"
        class="text-4xl sm:mr-5 block mb-3 sm:mb-0 mx-auto dark:text-red-100"
      />
      <div class="flex flex-col flex-grow sm:gap-3">
        <div class="flex flex-col sm:flex-row justify-between">
          <h3 class="text-xl font-semibold dark:text-blue-200">
            {{ element.title }}
          </h3>
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
              dark:bg-green-300 dark:hover:bg-green-400
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
    <!-- Details -->
    <div v-if="element.content" class="mt-6 w-11/12 text-justify mx-auto">
      <h4
        class="
          dark:text-blue-200
          text-lg text-center
          sm:text-left sm:-ml-6
          mb-3
          sm:mb-1
        "
      >
        Contexte
      </h4>
      {{ element.content }}
    </div>
    <div v-if="element.actions" class="mt-6 w-11/12 text-justify mx-auto">
      <h4
        class="
          dark:text-blue-200
          text-lg text-center
          sm:text-left sm:-ml-6
          mb-3
          sm:mb-1
        "
      >
        Actions
      </h4>
      <ul class="list-disc">
        <li v-for="(item, idx) of element.actions" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>
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
