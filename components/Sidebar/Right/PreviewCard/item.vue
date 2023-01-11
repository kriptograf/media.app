<template>
  <div class="p-3 border-b hover:bg-blue-50 cursor-pointer" :class="wrapperClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";
import { computed } from "vue";

const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const wrapperClasses = computed(() => `${twitterBorderColor} ${defaultTransition}`);
</script>