<script setup>
import Nav from './components/Nav.vue';
import Card from './components/Card.vue';
</script>

<template>
  <main>
    <Nav />
    <div class="container mx-auto px-6 py-3">
      <Card>
        <h2 class="text-xl">Card Title</h2>
        <p class="text-white-700">
          This is an example card using a slot to render its content.
        </p>
      </Card>
    </div>
  </main>
</template>

<style scoped></style>
