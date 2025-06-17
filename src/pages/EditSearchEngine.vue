<script setup lang="ts">
import SearchEngineForm from '../components/SearchEngineForm.vue';
import { useSearchEngineManager } from '../composables/useSearchEngineManager';

const { searchEngine, updateSearchEngine } = useSearchEngineManager();

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <SearchEngineForm 
          :search-engine="searchEngine"
          @save-data="updateSearchEngine"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
