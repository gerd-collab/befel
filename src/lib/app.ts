// App state synced from the URL (?lang=sv|de|en&theme=light|dark&embed=1&pace=1).
// The URL is the single source of truth for language and theme, as in all MicroApps.

import { LANGS, type L, type Lang } from '../content/types';
import { translate, type UiKey } from '../i18n';

export type Theme = 'light' | 'dark';

export interface AppState {
  lang: Lang;
  theme: Theme;
  /** Running inside a parent container (iframe or ?embed=1): hide own language/theme controls. */
  embedded: boolean;
  /** Course pacing: modules unlock in order with at least 24 hours in between. */
  pace: boolean;
}

function browserLang(): Lang {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.slice(0, 2).toLowerCase() as Lang;
    if (LANGS.includes(base)) return base;
  }
  return 'sv';
}

function inFrame(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export const state: AppState = { lang: 'sv', theme: 'light', embedded: false, pace: false };

export function syncStateFromURL(): void {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') as Lang | null;
  const theme = params.get('theme');
  state.lang = lang && LANGS.includes(lang) ? lang : browserLang();
  state.theme = theme === 'dark' ? 'dark' : 'light';
  state.embedded = params.get('embed') === '1' || inFrame();
  state.pace = params.get('pace') === '1';
  const root = document.documentElement;
  root.lang = state.lang;
  root.dir = 'ltr';
  root.setAttribute('data-theme', state.theme);
}

/** Change a URL parameter without adding history entries, keeping the current screen. */
export function setParam(key: 'lang' | 'theme', value: string): void {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);
  history.replaceState(null, '', `${window.location.pathname}?${params.toString()}${window.location.hash}`);
}

export const t = (key: UiKey, vars?: Record<string, string | number>): string => translate(key, state.lang, vars);

/** Pick the current language from a trilingual text. */
export const tr = (text: L): string => text[state.lang] || text.sv;
