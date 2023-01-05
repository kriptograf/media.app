<template>
  <div>
    <MainSection title="Home" :loading="loading">
      Home page
    </MainSection>
  </div>
</template>

<script setup>
import {ref} from "vue";

const loading = ref(false);
</script>