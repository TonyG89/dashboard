<template>
  <v-app-bar app color="red" elevate-on-scroll elevation="4">
    <v-app-bar-nav-icon @click="$emit('handlerDrawer')"></v-app-bar-nav-icon>
    <v-spacer />
    <v-toolbar-title
      >Рабочий стол <span>{{ user.login }}</span></v-toolbar-title
    >
    <v-spacer />
    <v-form v-if="search" class="form mt-5">
      <v-text-field rounded outlined dense placeholder="Поиск" />
    </v-form>
    <v-btn @click="onSearch" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
const search = ref(false);

const onSearch = () => {
  search.value = !search.value;
  this.disabled;
};
defineProps({
  user: {
    type: Object,
    default: () => ({
      login: String,
      email: String,
      tel: String,
      status: String,
    }),
  },
});
</script>

<style scoped>
span {
  color: greenyellow;
  font-weight: 700;
  text-transform: uppercase;
}
.form {
  width: 30%;
  max-width: 200px;
}
</style>
