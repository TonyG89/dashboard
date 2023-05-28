<template>
  <v-app id="inspire">
    <Header @handlerDrawer="drawer = !drawer" :user="user" />
    <Sidebar :drawer="drawer" :links="links" :user="user" />
    <Main :cards="cards" />
  </v-app>
</template>

<script setup>
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import { ref, reactive } from 'vue';

const cards = ref(['Today', 'Yesterday']);
const drawer = ref(false);

const user = reactive({
  login: 'Glazik',
  email: 'glaznoe@gmail.com',
  tel: '+38(093)152-03-52',
  status: 'admin',
});

const links = ref([
  ['mdi-inbox-arrow-down', 'Dashboard'],
  ['mdi-send', 'Profile'],
  ['mdi-delete', 'Product'],
  ['mdi-alert-octagon', 'System'],
]);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
