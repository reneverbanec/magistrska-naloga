<script setup>
import { ref } from 'vue';
const isAuthenticated = ref(false);
const showLogin = ref(true);
const showRegister = ref(false);

const loginEmail = ref('');
const loginPassword = ref('');

const registerEmail = ref('');
const registerPassword = ref('');
const registerConfirmPassword = ref('');

function showLoginForm() {
  showLogin.value = true;
  showRegister.value = false;
}

function showRegisterForm() {
  showLogin.value = false;
  showRegister.value = true;
}

function login() {
  // Add your login logic here
  console.log(
    'Login with email:',
    loginEmail.value,
    'and password:',
    loginPassword.value
  );
}

function register() {
  // Add your registration logic here
  console.log(
    'Register with email:',
    registerEmail.value,
    'and password:',
    registerPassword.value,
    'and confirm password:',
    registerConfirmPassword.value
  );
}
</script>

<template>
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="relative modal-box">
      <label
        for="my-modal-3"
        class="absolute btn btn-sm btn-circle right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold" v-if="!isAuthenticated">Welcome!</h3>
      <div class="flex justify-center py-4">
        <button class="mx-2 btn btn-primary" @click="showLoginForm">
          Login
        </button>
        <button class="mx-2 btn btn-secondary" @click="showRegisterForm">
          Register
        </button>
      </div>
      <div v-if="showLogin">
        <form @submit.prevent="login">
          <div class="form-control">
            <label for="login-email" class="label">Email</label>
            <input
              type="email"
              id="login-email"
              v-model="loginEmail"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label for="login-password" class="label">Password</label>
            <input
              type="password"
              id="login-password"
              v-model="loginPassword"
              class="input input-bordered"
              required
            />
          </div>
          <div class="mt-6 form-control">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <div v-if="showRegister">
        <!-- Register form -->
        <form @submit.prevent="register">
          <div class="form-control">
            <label for="register-email" class="label">Email</label>
            <input
              type="email"
              id="register-email"
              v-model="registerEmail"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label for="register-password" class="label">Password</label>
            <input
              type="password"
              id="register-password"
              v-model="registerPassword"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label for="register-confirm-password" class="label"
              >Confirm Password</label
            >
            <input
              type="password"
              id="register-confirm-password"
              v-model="registerConfirmPassword"
              class="input input-bordered"
              required
            />
          </div>
          <div class="mt-6 form-control">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
