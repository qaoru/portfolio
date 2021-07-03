<template>
  <div>
    <MainTitle title="Projets" />
    <p class="my-6">
      Retrouvez ici quelques projets sur lesquels j'ai eu l'occasion de
      travailler.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-3">
      <ProjectCard
        v-for="(item, idx) of projects"
        :key="`project-${idx}`"
        :description="item.description"
        :thumbnail="item.thumbnail"
        :title="item.title"
        :repository="item.repository"
        :path="item.path"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'
import MainTitle from '~/components/MainTitle.vue'

export default {
  components: { ProjectCard, MainTitle },
  asyncData: async ({ $content }) => {
    const projects = await $content('projects').sortBy('date', 'desc').fetch()
    return { projects }
  },
}
</script>
