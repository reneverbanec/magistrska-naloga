<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="shadow">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold">VML</div>
      <nav class="flex space-x-4 items-center">
        <RouterLink to="/" class="btn btn-ghost">Lestvica</RouterLink>
        <RouterLink to="/" class="btn btn-ghost">Fairplay</RouterLink>
        <RouterLink to="/" class="btn btn-ghost">Strelci</RouterLink>
        <RouterLink to="/" class="btn btn-ghost">Razpored</RouterLink>
        <RouterLink to="/" class="btn btn-ghost">Glasovanje</RouterLink>
        <button class="btn btn-primary">Login / Signup</button>
      </nav>
    </div>
  </header>
</template>
