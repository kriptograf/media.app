<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <Head>
        <Title>Home / Posts</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <PostForm :user="user" />
      </div>
      
      <div>
        <PostListFeed :posts="homePosts" />
      </div>

    </MainSection>
  </div>
</template>

<script setup>
import {ref} from "vue";

const { getHomePosts } = usePosts();
const homePosts = ref([]);
const { twitterBorderColor } = useTailwindConfig();
const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;

  try {
    const { posts } = await getHomePosts();

    homePosts.value = posts;

  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>