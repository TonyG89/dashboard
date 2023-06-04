// https://www.youtube.com/watch?v=_EiPwgrTYGY

<template>
  <v-app id="inspire">
    <Header @handlerDrawer="drawer = !drawer" :user="user" />
    <Sidebar :drawer="drawer" :links="links" :user="user" />
    <v-main class="w-100 bg-black dashboard">
      <v-container class="py-8 px-6 w-100 bg-green" fluid>
        <v-row class="bg-red">
          <v-col cols="12">
            <v-sheet class="d-flex bg-surface-variant">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row> </v-container
    ></v-main>
    <!-- <Main :cards="cards" /> -->
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
  {
    icon: 'mdi-car',
    title: 'Борт журнал Aveo',
    route: 'logbook',
  },
  {
    icon: 'mdi-inbox-arrow-down',
    title: 'Dashboard',
    route: 'home',
  },
  // {
  //   icon: 'mdi-send',
  //   title: 'Profile',
  //   route: '',
  // },
  // {
  //   icon: 'mdi-delete',
  //   title: 'Product',
  //   route: '',
  // },
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
.v-main {
  min-width: 300px;
}
</style>
