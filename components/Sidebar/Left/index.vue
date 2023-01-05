<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min" :class="defaultTransition">
      <NuxtLink to="/">
        <LogoModern />
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-2 text-gray-600">
      <SidebarLeftTab>
        <template v-slot:icon>
          <HomeIcon/>
        </template>
        <template v-slot:title>
          Home
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon/>
        </template>
        <template v-slot:title>
          Explore
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon/>
        </template>
        <template v-slot:title>
          Notifications
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon/>
        </template>
        <template v-slot:title>
          Messages
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon/>
        </template>
        <template v-slot:title>
          Bookmarks
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon/>
        </template>
        <template v-slot:title>
          Lists
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UsersIcon/>
        </template>
        <template v-slot:title>
          Profile
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon/>
        </template>
        <template v-slot:title>
          More
        </template>
      </SidebarLeftTab>

    </div>


  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid';
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UsersIcon, DotsCircleHorizontalIcon } from '@heroicons/vue/outline';
import useTailwindConfig from "~/composables/useTailwindConfig";

const { defaultTransition } = useTailwindConfig();
</script>

<style scoped>

</style>