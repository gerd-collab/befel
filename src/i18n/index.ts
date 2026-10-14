// UI strings (navigation, buttons, labels). Course content lives in src/content with all
// three languages side by side; these files hold only the interface around it.

import sv from './sv.json';
import de from './de.json';
import en from './en.json';
import type { Lang } from '../content/types';

export type UiKey = keyof typeof sv;

export const TRANSLATIONS: Record<Lang, Record<string, string>> = { sv, de, en };

export function translate(key: UiKey, lang: Lang, vars?: Record<string, string | number>): string {
  let text = TRANSLATIONS[lang][key] ?? TRANSLATIONS.sv[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) text = text.split(`{${k}}`).join(String(v));
  }
  return text;
}
