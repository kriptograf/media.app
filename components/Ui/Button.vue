<template>
    <button
    class="flex justify-center text-white bg-indigo-500 rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed"
    :disabled="props.disabled"
    :class="classes"
    @click="handleClick"
    >
        <span :class="textFontSize">
            <slot></slot>
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'md'
    },
    liquid: {
        type: Boolean,
        default: false,
    }
});

const emits = defineEmits(['onClick']);

const paddingClasses = computed(() => {
    switch(props.size) {
        case 'sm':
            return 'px-3 py-2'
        case 'lg':
            return 'px-4 py-3'
        default:
            return 'px-3 py-3'
    }
});

const textFontSize = computed(() => {
    switch(props.size) {
        case 'lg':
            return 'text-md'
        default:
            return 'text-sm'
    }
});

const defaultWidth = computed(() => {
    switch(props.size) {
        default:
            return 'w-min'
    }
});

const classes = computed(() => `${paddingClasses.value} ${props.liquid ? 'w-full' : defaultWidth.value}`);

function handleClick(event) {
    emits('onClick', event);
}
</script>