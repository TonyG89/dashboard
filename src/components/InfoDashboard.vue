<template>
  <div class="text-left w-25 border">
    <h3>INFORMATIONS:</h3>
    <!-- TODO: TABLE  -->
    <v-card>
      <li class="d-flex" v-for="item in entity" :key="item">
        <h4>{{ item.title }}</h4>
        <div class="ml-1">{{ item.value }}</div>
      </li>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import translate from '../composables/translation.js';

defineProps({
  entity: { type: Array, default: () => [] }, // [{title: '', value: ''}]
});
</script>

<style lang="scss" scoped></style>
