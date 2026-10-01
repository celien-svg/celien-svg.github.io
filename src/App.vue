<template>
  <div class="app">
    <NavBar />

    <main class="main">
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"

export default {
  components: { NavBar, FooterBar }
}
</script>
