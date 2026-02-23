<script lang="ts" setup>
import { onActivated, onMounted, onUnmounted, onUpdated, ref, useTemplateRef, watch } from "vue";
import browser, { runtime } from "webextension-polyfill";

import { usePopup } from "../composables/usePopup";
import { useExtensionOptions } from "../composables/useExtensionOptions";
import { useLocale, useTheme } from "vuetify/lib/framework.mjs";
import { preproccessText } from "../utils/text-utils";
import { SelectedText } from "../interfaces/selected-text.interface";

const searchedText = ref<string>("");
const { selectedSearchEngine, selectSearchEngineByNickname } = usePopup();
const { options } = useExtensionOptions();

const theme = useTheme();
const { t, current } = useLocale();

watch(options, () => {
  theme.global.name.value = options.value.theme;
  current.value = options.value.language;
});

// Communication with content script for getting a selected text from a webpage
const getSelectedTextFromPage = async () => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  // Send message to the content script of the active tab
  const response: SelectedText = await browser.tabs.sendMessage(tabs[0].id ?? 0, { command: "get_selected_text" });
  // console.log("Received response from content script:", response);

  // Use the response text
  searchedText.value = response.text;
}

// Function for changing the search engine
const changeSearchEngine = () => {
  selectSearchEngineByNickname(searchedText.value);
  searchedText.value = "";
};

// Action for searching on a determinate search engine
const search = async () => {
  searchedText.value = searchedText.value.trim();
  if (searchedText.value.length == 0) return;

  const processedText = preproccessText(searchedText.value);
  browser.tabs.create({
    active: true,
    url: selectedSearchEngine.value.url?.replace("%s", processedText),
  });
  window.close();
};

// Open extension page options 
const openOptionsPage = () => {
  runtime.openOptionsPage();
  window.close();
};

const input = useTemplateRef("searchField");

// lifecycle hooks
onMounted(() => {
  getSelectedTextFromPage();
  setTimeout(() => {
    input.value?.focus();
  }, 200);
})

</script>

<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="11">
          <v-form @submit="search">
            <v-text-field type="input" :prepend-inner-icon="selectedSearchEngine.iconName != '' ? 'mdi-' + selectedSearchEngine.iconName : ''
              " :placeholder="t('$vuetify.popup.placeholder', [selectedSearchEngine.name])
                " variant="outlined" v-model="searchedText" clearable append-inner-icon="mdi-magnify"
              @click:append-inner="search" @keydown.ctrl.space="changeSearchEngine" autocomplete="off"
              ref="searchField">
            </v-text-field>
          </v-form>
        </v-col>
        <!-- icon="mdi-cog-outline" -->
        <v-col cols="1">
          <v-btn icon="mdi-cog-outline" variant="text" @click="openOptionsPage"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
html,
body {
  width: 550px;
  padding: 0;
  margin: 0;
}
</style>
