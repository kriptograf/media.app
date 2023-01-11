<template>
    <div class="flex space-x-4 p-4">

        <div>
            <img class="h-10 w-10 rounded-full" :src="author.profileImage" alt="">
        </div>

        <div>
            <span class="font-medium text-gray-600">{{ author.name }}</span>
            <span class="ml-3 text-sm font-medium text-gray-400">
                <NuxtLink to="#">
                    {{ author.handle }}
                </NuxtLink>
                <span> , {{ post.postedAt }}</span>
            </span>
            
            <p v-if="post.replyTo" class="text-sm">
                <span class="text-gray-500">Replying to </span>
                <NuxtLink :to="replyToPostUrl" class="text-indigo-500">{{ post.replyTo.author.handle }}</NuxtLink>
            </p>
        </div>
        
    </div>
</template>

<script setup>
const prpos = defineProps({
    post: {
        type: Object,
        required: true,
    }
});

const author = prpos.post.author;
const replyToPostUrl = computed(() => `/status/${prpos.post.replyTo?.id}`);
</script>