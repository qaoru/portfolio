<template>
  <div class="rounded-sm">
    <FontAwesomeIcon :icon="[faIcon.style, faIcon.icon]" class="m-3 text-6xl" />
    <h4 class="text-2xl mb-2">{{ skill.name }}</h4>
    <ul>
      <li
        v-for="(item, _idx) of skill.content"
        :key="`skill-${skill.name}-${_idx}`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: null,
    },
  },

  computed: {
    faIcon() {
      const defaultIcon = { style: 'fas', icon: 'square' }
      if (!this.skill.icon) {
        return defaultIcon
      }
      const value = this.skill.icon.split(':')
      if (value.length !== 2) {
        return defaultIcon
      }
      return { style: value[0], icon: value[1] }
    },
  },
}
</script>
