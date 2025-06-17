<script setup lang="ts">
import { watch } from "vue";
import { useLocale, useTheme } from "vuetify/lib/framework.mjs";

import { useExtensionOptions } from "../composables/useExtensionOptions";
import { Theme } from "../interfaces/theme.enum";
import { Language } from "../interfaces/language.enum";

const theme = useTheme();
const { options, saveOptions } = useExtensionOptions();
const { t, current } = useLocale();

console.log({ extensionOptions: options });
// theme.global.name.value = extensionOptions.theme;

const saveExtensionOptions = () => {
  saveOptions();
  theme.global.name.value = options.value.theme;
  current.value = options.value.language;
};

watch(options, () => {
  theme.global.name.value = options.value.theme;
  current.value = options.value.language;
});
</script>
<template>
  <!-- <v-form> -->
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-form @submit.prevent="saveExtensionOptions">
          <v-radio-group
            :label="t('$vuetify.optionsPage.optionsSection.theme')"
            v-model="options.theme"
            inline
          >
            <v-radio
              :label="t('$vuetify.optionsPage.optionsSection.lightTheme')"
              :value="Theme.Light"
            >
            </v-radio>
            <v-radio
              :label="t('$vuetify.optionsPage.optionsSection.darkTheme')"
              :value="Theme.Dark"
            >
            </v-radio>
          </v-radio-group>

          <v-radio-group
            :label="t('$vuetify.optionsPage.optionsSection.language')"
            v-model="options.language"
            inline
          >
            <v-radio
              :label="t('$vuetify.optionsPage.optionsSection.englishLanguage')"
              :value="Language.English"
            >
            </v-radio>
            <v-radio
              :label="t('$vuetify.optionsPage.optionsSection.spanishLanguage')"
              :value="Language.Spanish"
            >
            </v-radio>
          </v-radio-group>

          <v-btn 
            variant="outlined"
            class="mt-2" 
            type="submit"
            block
          >
            {{ t("$vuetify.optionsPage.optionsSection.saveOptions") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-form> -->
</template>

<style scoped></style>
