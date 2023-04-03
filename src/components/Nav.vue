<script setup>
import { RouterLink } from 'vue-router';
import AuthModal from './AuthModal.vue';
import Modal from './Modal.vue';
import { ref, onMounted } from 'vue';
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
});

const isAuthenticated = ref(false);

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

        <Modal />
        <label
          for="my-modal-3"
          class="btn btn-secondary"
          v-if="!isAuthenticated"
          >Prijava</label
        >
        <label
          for="my-modal-3"
          class="btn btn-secondary"
          @click="handleSignout()"
          v-else
          >Odjava</label
        >
      </nav>
    </div>
  </header>
</template>
