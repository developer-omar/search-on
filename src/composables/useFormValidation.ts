import {  onMounted, ref } from "vue";
import { useLocale } from "vuetify/lib/framework.mjs";
import { useSearchEngineList } from "./useSearchEngineList";
import { SearchEngine } from "../interfaces/search-engine.interface";

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

  const getNicknameRules = (searchEngine: SearchEngine) => {
    let nicknameRules = [
      (value: string) => {
        if(value) return true;
        return t('$vuetify.optionsPage.searchEnginesSection.formRules.requiredNickname');
      },
      (value: string) => {
        const searchEngineElement = searchEngineList.value.find(
          searchEngineParam => (searchEngineParam.nickname == value) && (searchEngineParam.id != searchEngine.id)
        );
        if(searchEngineElement == undefined) return true;
        return t('$vuetify.optionsPage.searchEnginesSection.formRules.validNickname');
      }
    ];

    return nicknameRules;
  }

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
    getNicknameRules,
    urlRules,
  }
}

export { useFormValidation };
