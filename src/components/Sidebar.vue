<template>
  <v-navigation-drawer :model-value="drawer" app>
    <v-img
      src="https://img.freepik.com/free-photo/beautiful-scenery-of-a-pathway-in-a-forest-with-trees-covered-with-frost_181624-42376.jpg?size=626&ext=jpg"
    >
      <div class="text-center pa-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://download-cs.net/steam/avatars/3428.jpg"
          ></v-img>
        </v-avatar>
        <v-sheet color="red lighten-1" class="bg-white rounded text-1">
          <h3>
            {{ user.email }}
          </h3>
        </v-sheet>
      </div>
    </v-img>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="link in links" :key="link.icon" link>
        <template v-slot:prepend>
          <v-icon>{{ link.icon }}</v-icon>
        </template>
        <router-link :to="link.route">
          <v-list-item-title class="text-red">{{
            link.title
          }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  drawer: {
    type: Boolean,
  },
  links: {
    type: Array,
    default: () => [],
  },
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
defineEmits(['update:drawer']);

const openMainPage = (e) => {
  console.log(e.target);
};
</script>
