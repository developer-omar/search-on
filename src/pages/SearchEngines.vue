<script setup lang="ts">
import { ref } from "vue";
import { useLocale } from "vuetify/lib/framework.mjs";

import { useSearchEngineManager } from "../composables/useSearchEngineManager";
import { SearchEngine } from "../interfaces/search-engine.interface";

const { searchEngineList, selectSearchEngine, deleteSearchEngine } =
  useSearchEngineManager();
const { t } = useLocale();
const activeDialog = ref(false);

const handleDelete = (searchEngine: SearchEngine) => {
  deleteSearchEngine(searchEngine);
  activeDialog.value = false;
}
</script>

<template>
  <v-container fluid>
    <v-row justify="end" class="mb-4">
      <v-col>
        <v-btn
          color="#016c48"
          prepend-icon="mdi-plus"
          variant="outlined"
          class="mr-3"
          to="/add-search-engine"
        >
          {{ t("$vuetify.optionsPage.searchEnginesSection.newSearchEngine") }}
        </v-btn>
        <!-- <v-btn prepend-icon="mdi-import" variant="outlined" class="mr-3"> -->
        <!--   {{ t("$vuetify.optionsPage.searchEnginesSection.import") }} -->
        <!-- </v-btn> -->
        <!-- <v-btn variant="outlined" prepend-icon="mdi-export" class="mr-3"> -->
        <!--   {{ t("$vuetify.optionsPage.searchEnginesSection.export") }} -->
        <!-- </v-btn> -->
      </v-col>
    </v-row>
    <v-row>
      <table>
        <thead>
          <tr>
            <th>{{ t("$vuetify.optionsPage.searchEnginesSection.icon") }}</th>
            <th>{{ t("$vuetify.optionsPage.searchEnginesSection.name") }}</th>
            <th>
              {{ t("$vuetify.optionsPage.searchEnginesSection.nickname") }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="searchEngine in searchEngineList" :key="searchEngine.id">
            <td class="align-center">
              <v-icon :icon="'mdi-' + searchEngine.iconName"></v-icon>
            </td>
            <td>
              {{ searchEngine.name }}
            </td>
            <td class="align-center">
              {{ searchEngine.nickname }}
            </td>
            <td>
              <v-btn
                prepend-icon="mdi-note-edit-outline"
                variant="outlined"
                class="mr-3"
                :to="'edit-search-engine/' + searchEngine.id"
                :disabled="searchEngine.id < 6"
              >
                {{ t("$vuetify.optionsPage.searchEnginesSection.edit") }}
              </v-btn>

              <v-btn
                prepend-icon="mdi-trash-can-outline"
                variant="outlined"
                class="mr-3"
                :disabled="searchEngine.id < 6"
                @click="activeDialog = true"
              >
                {{ t("$vuetify.optionsPage.searchEnginesSection.delete") }}
              </v-btn>
              <v-dialog 
                v-model="activeDialog"
                transition="dialog-top-transition"
                width="auto"
                opacity="0.07"
              >
                <v-card
                  max-width="500"
                  :text="t('$vuetify.optionsPage.searchEnginesSection.form.dialogMessage')"
                >
                  <template v-slot:actions>
                    <v-btn
                      :text="t('$vuetify.optionsPage.searchEnginesSection.form.yesButton')"
                      @click="handleDelete(searchEngine)"
                      variant="outlined"
                    ></v-btn>

                    <v-btn
                      :text="t('$vuetify.optionsPage.searchEnginesSection.form.cancelButton')"
                      @click="activeDialog = false"
                      variant="outlined"
                    ></v-btn>

                  </template>
                </v-card>
              </v-dialog>

              <v-btn
                prepend-icon="mdi-check-circle-outline"
                variant="outlined"
                :disabled="searchEngine.selected == 1"
                class="mr-3"
                @click="selectSearchEngine(searchEngine)"
              >
                {{ t("$vuetify.optionsPage.searchEnginesSection.select") }}
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-row>
  </v-container>
</template>

<style scoped>
th,
td {
  padding: 10px;
}

.align-center {
  text-align: center;
}
</style>
