<template>
  <section v-if="skill">
    <RouterLink to="/competences" class="back-link">← Retour aux compétences</RouterLink>

    <h1>{{ skill.title }}</h1>
    <p class="page-intro">{{ skill.short }}</p>

    <div class="skill-layout">
      <div class="skill-main">
        <h2>Description</h2>
        <p class="multiline" v-html="formattedDescription"></p>

        <h2>Projets associés</h2>
        <div v-if="skill.projects.length">
          <ProjectCard
            v-for="p in skill.projects"
            :key="p.title"
            :project="p"
          />
        </div>
        <p v-else>Aucun projet renseigné pour le moment.</p>
      </div>

      <aside class="skill-aside">
        <h3>Technologies</h3>
        <ul>
          <li v-for="t in skill.technologies" :key="t">{{ t }}</li>
        </ul>
      </aside>
    </div>
  </section>

  <section v-else>
    <p>Compétence introuvable.</p>
  </section>
</template>

<script>
import { skills } from "../data/skills.js"
import ProjectCard from "../components/ProjectCard.vue"

export default {
  components: { ProjectCard },
  computed: {
    skill() {
      const id = Number(this.$route.params.id)
      return skills.find(s => s.id === id)
    },
    formattedDescription() {
      return this.skill?.description.replace(/\n/g, "<br>") ?? ""
    }
  }
}
</script>
