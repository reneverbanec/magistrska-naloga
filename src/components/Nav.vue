<script setup>
import { RouterLink } from 'vue-router';
import AuthModal from './AuthModal.vue';
import { ref } from 'vue';

const isAuthenticated = ref(false);
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleSignout = () => {
  console.log('Odjava');
};
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
        <button
          v-if="!isAuthenticated"
          class="btn btn-secondary"
          @click="toggleModal"
        >
          Prijava
        </button>
        <button
          v-if="isAuthenticated"
          class="btn btn-secondary"
          @click="handleSignout()"
        >
          Odjava
        </button>
      </nav>
    </div>
    <AuthModal :is-open="showModal" @update:is-open="toggleModal" />
  </header>
</template>
