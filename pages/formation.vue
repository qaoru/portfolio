<template>
  <section>
    <section id="experiences" class="my-6">
      <MainTitle :title="experiences.title" />
      <FormationCard
        v-for="(exp, idx) of experiences.items"
        :key="`form-${idx}`"
        :element="exp"
      />
    </section>
    <section id="formation" class="my-6">
      <MainTitle :title="formations.title" />
      <FormationCard
        v-for="(form, idx) of formations.items"
        :key="`form-${idx}`"
        :element="form"
      />
    </section>
  </section>
</template>
<script>
import FormationCard from '~/components/FormationCard.vue'
export default {
  components: { FormationCard },
  asyncData: async ({ $content }) => {
    const formations = await $content('formation').fetch()
    const experiences = await $content('experiences').fetch()

    return { formations, experiences }
  },
}
</script>
