<script setup>
import { ref, watchEffect, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['update:isOpen']);

const formType = ref('login');
const email = ref('');
const password = ref('');
const internalIsOpen = ref(props.isOpen);

watchEffect(() => {
  internalIsOpen.value = props.isOpen;
});

const closeModal = () => {
  internalIsOpen.value = false;
  emit('update:isOpen', false);
};

const showLoginForm = () => {
  formType.value = 'login';
};

const showSignupForm = () => {
  formType.value = 'signup';
};

const login = () => {
  // Add login logic here
  console.log('Login:', email.value, password.value);
};

const signup = () => {
  // Add signup logic here
  console.log('Signup:', email.value, password.value);
};
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50"
    v-show="internalIsOpen"
    @click.self="closeModal"
  >
    <div
      class="bg-info-content w-full max-w-md p-6 mx-auto rounded-xl shadow-lg"
    >
      <div class="text-center">
        <h2 class="text-xl font-bold mb-6">Prijava / Registracija</h2>
        <div class="mb-2 flex justify-center space-x-4">
          <button class="btn btn-ghost" @click="showLoginForm">Prijava</button>
          <button class="btn btn-ghost" @click="showSignupForm">
            Registracija
          </button>
        </div>
        <div v-if="formType === 'login'" key="login">
          <!-- Login form -->
          <div class="mb-4">
            <input
              class="input w-full"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="mb-6">
            <input
              class="input w-full"
              type="password"
              placeholder="Geslo"
              v-model="password"
            />
          </div>
          <button class="btn btn-primary w-full mb-4" @click="login">
            Prijava
          </button>
        </div>
        <div v-if="formType === 'signup'" key="signup">
          <!-- Signup form -->
          <div class="mb-4">
            <input
              class="input w-full"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <input
              class="input w-full"
              type="password"
              placeholder="Geslo"
              v-model="password"
            />
          </div>
          <button class="btn btn-primary w-full mb-4" @click="signup">
            Registracija
          </button>
        </div>
        <button class="btn btn-ghost" @click="closeModal">Zapri</button>
      </div>
    </div>
  </div>
</template>
