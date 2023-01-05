<template>
  <NuxtLink to="#" class="flex items-center gap-2 px-3 py-2 w-min hover:bg-blue-50 rounded-full" :class="defaultTransition">
    <div class="h-6 w-6">
      <slot name="icon"></slot>
    </div>
    <div class="hidden text-xl xl:block" :class="textClasses">
      <slot name="title"></slot>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue';
import useTailwindConfig from "~/composables/useTailwindConfig";

const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
});

const textClasses = computed(() => props.active ? `font-semibold` : `font-normal`);
</script>