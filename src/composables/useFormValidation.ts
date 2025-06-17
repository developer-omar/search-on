import {  onMounted, ref } from "vue";
import { useLocale } from "vuetify/lib/framework.mjs";
import { useSearchEngineList } from "./useSearchEngineList";

const useFormValidation = () => {
  const valid = ref(false);
  const { t } = useLocale();
  const { searchEngineList, initSearchEngineList } = useSearchEngineList();

  const nameRules = [
    (value: string) => {
      if(value) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.requiredName');
    },
  ];

  const nicknameRules = [
    (value: string) => {
      if(value) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.requiredNickname');
    },
    (value: string) => {
      const searchEngineElement = searchEngineList.value.find(searchEngineParam => searchEngineParam.nickname == value);
      if(searchEngineElement == undefined) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.validNickname');
    }
  ];

  const urlRules = [
    (value: string) => {
      if(value) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.requiredUrl');
    },
    (value: string) => {
      if(/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(value)) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.validUrl')
    },
    (value: string) => {
      if(value.includes('%s')) return true;
      return t('$vuetify.optionsPage.searchEnginesSection.formRules.requiredUrlPart')
    }

  ];

  onMounted(async () => {
    await initSearchEngineList();
  })

  return {
    valid,
    nameRules,
    nicknameRules,
    urlRules,
  }
}

export { useFormValidation };
