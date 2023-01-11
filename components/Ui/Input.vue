<template>
    <div>

        <label 
        for=""
        class="block pl-3 ml-px text-sm font-medium text-gray-600"
        v-if="props.label"
        >{{ props.label }}</label>

        <input
        class="mt-1 block px-4 w-full border-gray-200 rounded-full shadow-sm focus:ring-blue-200 focus:border-blue-300 sm:text-sm"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="event => emits('update:modelValue', event.target.value)"
        >

    </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    }
});
</script>