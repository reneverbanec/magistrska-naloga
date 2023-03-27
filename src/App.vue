<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';

import { ref } from 'vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Nav />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
