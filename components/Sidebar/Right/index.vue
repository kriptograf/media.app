<template>
  <div class="flex flex-col">

    <!--    Widget: What's happening?       -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
        <div>
          <h2 class="font-bold text-md text-gray-600">{{ whatsHappening.title }}</h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!--    Following      -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row gap-3">
            <img class="h-10 w-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
            <div class="flex flex-col">
              <h1 class="text-sm font-bold text-gray-600">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 text-bold text-xs text-white bg-indigo-600 rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const whatsHappeningItems = ref([
  {
    title: 'Item 1',
    count: '18.8k Tweets'
  },
  {
    title: 'Item 2',
    count: '18.8k Tweets'
  },
  {
    title: 'Item 3',
    count: '18.8k Tweets'
  },
  {
    title: 'Item 4',
    count: '18.8k Tweets'
  },
  {
    title: 'Item 5',
    count: '18.8k Tweets'
  }
]);
const whoToFollowItems = ref([
  {
    name: 'John Doe',
    handle: '@johnDoe',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Ilon Mask',
    handle: '@mask',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Babayka',
    handle: '@babayka',
    image: 'https://picsum.photos/200/200'
  }
]);
</script>