<template>
  <div
    class="
      max-w-sm
      bg-gray-100
      dark:bg-gray-700
      rounded
      overflow-hidden
      shadow-md
      hover:shadow-xl
      duration-200
      mb-2
    "
  >
    <div class="flex flex-col min-h-full justify-between">
      <nuxt-img
        class="w-full max-h-72 overflow-hidden"
        :src="`/images/${thumbnail}`"
        provider="netlify"
        :alt="title"
        quality="100"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
      <div class="px-6 py-4 flex-grow">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 dark:text-gray-100 text-base">
          {{ description }}
        </p>
      </div>
      <div class="p-6 flex gap-x-6 text-center">
        <a
          v-if="repository"
          :href="repository.url"
          class="
            flex-grow
            focus:outline-none
            text-sm
            w-24
            p-3
            rounded-md
            font-semibold
            text-white
            bg-blue-500
            hover:bg-blue-400
            dark:bg-blue-700 dark:hover:bg-blue-600
            focus:ring-4
          "
          >Git</a
        >
        <nuxt-link
          :to="path"
          class="
            flex-grow
            focus:outline-none
            text-sm
            w-24
            p-3
            rounded-md
            font-semibold
            text-white
            bg-blue-500
            hover:bg-blue-400
            dark:bg-blue-700 dark:hover:bg-blue-600
            focus:ring-4
          "
        >
          See more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    repository: {
      type: Object,
      default: null,
    },
    path: {
      type: String,
      default: '/projects',
    },
  },
}
</script>
