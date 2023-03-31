<script setup>
import { RouterLink } from 'vue-router';
import AuthModal from './AuthModal.vue';
import { ref, onMounted } from 'vue';
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
});

const isAuthenticated = ref(false);
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleSignout = () => {
  console.log('Odjava');
  isAuthenticated.value = false;
};
</script>

<template>
  <header class="shadow">
    <div class="container flex items-center justify-between px-6 py-3 mx-auto">
      <div class="text-2xl font-bold">VML</div>
      <nav class="flex items-center space-x-4">
        <RouterLink to="/lestvica" class="btn btn-ghost">Lestvica</RouterLink>
        <RouterLink to="/fairplay" class="btn btn-ghost">Fairplay</RouterLink>
        <RouterLink to="/strelci" class="btn btn-ghost">Strelci</RouterLink>
        <RouterLink to="/razpored" class="btn btn-ghost">Razpored</RouterLink>
        <RouterLink to="/glasovanje" class="btn btn-ghost"
          >Glasovanje</RouterLink
        >
        <input
          type="checkbox"
          class="toggle"
          checked
          data-toggle-theme="lemonade,dark"
          data-act-class="ACTIVECLASS"
        />
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
