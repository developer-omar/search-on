import { isRef, onMounted, ref, toRaw, toValue, unref } from "vue";
import browser from "webextension-polyfill";

import { ExtensionOptions } from "../interfaces/extension-options.interface";

const useExtensionOptions = () => {

  const options = ref<ExtensionOptions>({} as ExtensionOptions);

  const setStoredOptions = async () => {
    const { extensionOptions: storedOptions } = await browser.storage.local.get("extensionOptions");
    options.value = storedOptions;
  }

  const saveOptions = () => {
    // alternatively JSON.parse(JSON.stringify(myRefObject.value));
    browser.storage.local.set({ extensionOptions: { ...options.value } });
  }

  onMounted(async () => {
    await setStoredOptions();
  })

  return {
    options,
    saveOptions,
  }
}

export { useExtensionOptions };
