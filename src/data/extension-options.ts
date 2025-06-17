import { ExtensionOptions } from "../interfaces/extension-options.interface";
import { Language } from "../interfaces/language.enum";
import { Theme } from "../interfaces/theme.enum";

const defaultExtensionOptions: ExtensionOptions = {
  theme: Theme.Light,
  language: Language.English
};

export default defaultExtensionOptions;
