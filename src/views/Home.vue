<template>
  <h1 class="mt-10" v-if="flag">HELLO MAN! DONWLOAD...</h1>
  <div class="block" v-for="item in state.newsList" :key="item.publishedAt">
    <h1>{{ item.title }}</h1>
    <div>
      <img :src="item.image" alt="item.title" />
      <div>{{ item.description }}</div>
    </div>
    <h4>{{ item.publishedAt }}</h4>
    <a :href="item.url" />  
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useNews from '../composables/useNews';

localStorage.setItem('status', 'gotov4enko - v home');

const { newsFolder, newsItem, flag, getLocalStorageNews, getNewsFolder } =
  useNews();

console.log(getLocalStorageNews());
const loadData = async () => {
  getNewsFolder();
  console.log(newsItem);
};

getLocalStorageNews() || loadData();

const state = computed(() => ({
  newsList: newsFolder.value?.slice(0, 6) || [], //
}));
</script>

<style scoped>
.block {
  width: 100%;
  height: 500px;
  background: gray;
}
</style>
