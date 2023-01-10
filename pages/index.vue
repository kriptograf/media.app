<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <PostForm :user="user" />

    </MainSection>
  </div>
</template>

<script setup>
import {ref} from "vue";

const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>