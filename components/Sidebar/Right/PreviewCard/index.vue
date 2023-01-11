<template>
  <div class="m-2 border rounded-2xl bg-gray-50 overflow-hidden" :class="twitterBorderColor">

    <h1 class="p-3 text-xl font-extrabold text-gray-700 border-b">{{ props.title }}</h1>

    <slot></slot>

    <div class="p-3 text-blue-400 text-sm cursor-pointer hover:bg-blue-50" :class="defaultTransition">Show more</div>

  </div>
</template>

<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";

const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>