<script setup lang="ts">
import { useLocale } from "vuetify/lib/framework.mjs";
import { SearchEngine } from "../interfaces/search-engine.interface";
import { useFormValidation } from "../composables/useFormValidation";

defineProps<{
  searchEngine: SearchEngine
}>();
const emit = defineEmits(["saveData"])

const { valid, nameRules, getNicknameRules, urlRules } = useFormValidation();
const { t } = useLocale();

const handleSubmit = () => {
  emit("saveData");
}
</script>

<template>
  <v-form 
    @submit.prevent.once="handleSubmit" 
    validate-on="invalid-input eager"
    v-model="valid"
  >
    <v-alert 
    >
      {{ t('$vuetify.optionsPage.searchEnginesSection.form.note') }}
      <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a>
    </v-alert>
    <br>
    <v-text-field
      variant="outlined"
      clearable
      :rules="nameRules"
      v-model="searchEngine.name"
      :label="t('$vuetify.optionsPage.searchEnginesSection.form.name')"
      :hint="t('$vuetify.optionsPage.searchEnginesSection.form.nameHint')"
      autocomplete="off"
      class="mb-2"
    >
    </v-text-field>

    <v-text-field
      variant="outlined"
      clearable
      v-model="searchEngine.iconName"
      :label="t('$vuetify.optionsPage.searchEnginesSection.form.iconName')"
      :hint="t('$vuetify.optionsPage.searchEnginesSection.form.iconNameHint')"
      autocomplete="off"
      class="mb-2"
    >
    </v-text-field>

    <v-text-field
      variant="outlined"
      clearable
      :rules="getNicknameRules(searchEngine)"
      v-model="searchEngine.nickname"
      :label="t('$vuetify.optionsPage.searchEnginesSection.form.nickname')"
      :hint="t('$vuetify.optionsPage.searchEnginesSection.form.nicknameHint')"
      maxlength="3"
      autocomplete="off"
      class="mb-2"
    >
    </v-text-field>

    <v-text-field
      variant="outlined"
      clearable
      :rules="urlRules"
      v-model="searchEngine.url"
      type="url"
      :label="t('$vuetify.optionsPage.searchEnginesSection.form.url')"
      :hint="t('$vuetify.optionsPage.searchEnginesSection.form.urlHint')"
      autocomplete="off"
      class="mb-2"
    >
    </v-text-field>

    <v-checkbox
      :label="t('$vuetify.optionsPage.searchEnginesSection.form.select')"
      v-model="searchEngine.selected"
      false-value="0"
      value="1"
    >
    </v-checkbox>
    <v-btn 
      variant="outlined" 
      class="mt-2" type="submit" 
      block
      :disabled="!valid"
    >
      {{ t("$vuetify.optionsPage.searchEnginesSection.form.saveData") }}
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>
