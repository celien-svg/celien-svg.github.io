<template>
  <div class="card project-card">
    <h3>{{ project.title }}</h3>
    <p class="project-context">{{ project.context }}</p>
    <p>{{ project.description }}</p>
    <a v-if="project.link" :href="project.link" target="_blank" class="btn-link">
      Voir le projet
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object, required: true }
  }
}
</script>
