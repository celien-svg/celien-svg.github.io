<template>
  <div class="card skill-card" @click="goToSkill">
    <h2>{{ skill.title }}</h2>
    <p>{{ skill.short }}</p>
    <button class="btn-secondary">Voir la compétence</button>
  </div>
</template>

<script>
export default {
  props: {
    skill: { type: Object, required: true }
  },
  methods: {
    goToSkill() {
      this.$router.push(`/competences/${this.skill.id}`)
    }
  }
}
</script>
