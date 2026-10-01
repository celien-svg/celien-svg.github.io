<template>
  <section>
    <h1>Mes compétences personnelles</h1>
    <h1>Les 6 compétences du BUT Informatique</h1>
    <p class="page-intro">
      Chaque compétence est illustrée par des projets, des technologies et ce que j’ai appris.
    </p>

    <div class="grid">
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </section>
</template>

<script>
import { skills } from "../data/skills.js"
import SkillCard from "../components/SkillCard.vue"

export default {
  components: { SkillCard },
  data() {
    return { skills }
  }
}
</script>
