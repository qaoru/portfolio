<template>
  <div class="max-w-5xl mx-auto divide-y">
    <!-- Intro -->
    <section
      id="intro"
      class="my-6 flex flex-row justify-center flex-wrap gap-6"
    >
      <div>
        <nuxt-img
          src="/images/me.jpg"
          alt="me"
          class="rounded-full"
          quality="100"
          sizes="xs:80vw sm:50vw md:20vw lg:20vw xl:20vw"
        />
      </div>
      <div>
        <MainTitle>{{ $t('intro') }}</MainTitle>
        <p class="text-justify">{{ intro.description }}</p>
      </div>
    </section>
    <!-- Skills -->
    <section id="skills" class="text-center my-6">
      <MainTitle>{{ $t('skills') }}</MainTitle>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-3">
        <SkillCard
          v-for="(skill, idx) of skills.items"
          :key="`skill-${idx}`"
          :skill="skill"
        />
      </div>
    </section>
    <!-- Experiences  -->
    <section id="experiences" class="my-6">
      <MainTitle>{{ $t('experiences') }}</MainTitle>
      <FormationCard
        v-for="(exp, idx) of experiences"
        :key="`form-${idx}`"
        :element="exp"
      />
    </section>
    <!-- Formation -->
    <section id="formation" class="my-6">
      <MainTitle>{{ $t('formation') }}</MainTitle>
      <FormationCard
        v-for="(form, idx) of formations.items"
        :key="`form-${idx}`"
        :element="form"
      />
    </section>
  </div>
</template>

<script>
import SkillCard from '~/components/SkillCard.vue'
import MainTitle from '~/components/MainTitle.vue'
import FormationCard from '~/components/FormationCard.vue'

export default {
  components: { SkillCard, MainTitle, FormationCard },
  asyncData: async ({ $content }) => {
    const intro = await $content('home').fetch()
    const skills = await $content('skills').fetch()
    const formations = await $content('formation').fetch()
    const experiences = await $content('experiences')
      .sortBy('order', 'desc')
      .without(['content', 'actions'])
      .fetch()

    return {
      intro,
      skills,
      formations,
      experiences,
    }
  },
}
</script>
