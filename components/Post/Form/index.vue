<template>
    <div>

        <div v-if="loading" class="flex items-center justify-center p-6">
            <UiSpinner />
        </div>

        <div v-else>
            <PostFormInput :user="props.user" @onSubmit="handleFormSubmit" />
        </div>
        
    </div>
</template>

<script setup>
const loading = ref(false);
const { sendPost } = usePosts();

const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
});

async function handleFormSubmit(data) {
    loading.value = true;
    try {
        const response = await sendPost({
            text: data.text,
            mediaFiles: data.mediaFiles
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
}
</script>