<template>
  <div class="h-screen border-x" :class="twitterBorderColor">

    <div class="sticky top-0 px-4 py-3">
      <h1 class="text-xl font-bold text-gray-600">{{ props.title }}</h1>
    </div>

    <div v-if="props.loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor">
      <Spinner />
    </div>

    <div v-else>
      <slot></slot>
    </div>

  </div>
</template>

<script setup>
import Spinner from "./Ui/Spinner";
import useTailwindConfig from "../composables/useTailwindConfig";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true
  }
});

const { twitterBorderColor } = useTailwindConfig();
</script>