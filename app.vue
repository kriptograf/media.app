<template>
  <div>

    <LoadingPage v-if="isAuthLoading" />

    <div v-else-if="user" class="min-h-full">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w7xl lg:px-8 lg:gap-5">
          <!--        Left sidebar       -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!--        Main content       -->
          <div class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />
          </div>
          <!--        Right sidebar      -->
          <div class="hidden md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AuthPage v-else />

  </div>
</template>

<script setup>
const { useAuthUser, initAuth, useAuthLoading } = useAuth();

const isAuthLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>
