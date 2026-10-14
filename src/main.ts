// Ta Befäl – interactive course after the book series by Torbjörn Holkner.
// URL parameters own language and theme; the hash (#screen=<id>) owns the current view.

import '@fontsource-variable/inter';
import '@fontsource-variable/source-serif-4';
import './style.css';

import { findModule } from './content/course';
import { h, replace } from './lib/dom';
import { setParam, state, syncStateFromURL, t } from './lib/app';
import { icon, logo } from './lib/ui';
import { renderHome } from './views/home';
import { renderModule } from './views/module';
import { renderPlayer } from './views/player';
import { renderGlossary, renderModels } from './views/reference';
import { renderJournal } from './views/journal';
import { renderDiploma } from './views/diploma';
import { renderAbout } from './views/about';

const app = document.getElementById('app')!;

function screen(): string {
  const params = new URLSearchParams(window.location.hash.slice(1));
  return params.get('screen') ?? 'home';
}

export function go(id: string): void {
  window.location.hash = `screen=${id}`;
}

const NAV: { id: string; key: Parameters<typeof t>[0] }[] = [
  { id: 'home', key: 'navCourse' },
  { id: 'models', key: 'navModels' },
  { id: 'glossary', key: 'navGlossary' },
  { id: 'journal', key: 'navJournal' },
  { id: 'diploma', key: 'navDiploma' },
  { id: 'about', key: 'navAbout' },
];

function section(id: string): string {
  if (/^m\d\d/.test(id)) return 'home';
  return NAV.some((n) => n.id === id) ? id : 'home';
}

function header(current: string): HTMLElement {
  const nav = h(
    'nav',
    { class: 'nav', id: 'site-nav', 'aria-label': t('mainNav') },
    NAV.map((n) => h('a', { href: `#screen=${n.id}`, 'aria-current': section(current) === n.id ? 'page' : undefined }, t(n.key))),
  );
  const menu = h(
    'button',
    {
      type: 'button',
      class: 'icon-btn menu-btn',
      'aria-label': t('menu'),
      'aria-expanded': 'false',
      'aria-controls': 'site-nav',
      onclick: () => {
        const open = nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', String(open));
      },
    },
    icon('menu'),
  );
  return h(
    'header',
    { class: 'topbar' },
    h(
      'div',
      { class: 'wrap' },
      h('a', { class: 'brand', href: '#screen=home' }, logo(), h('span', null, h('span', { class: 'brand-name' }, 'Ta Befäl'), h('span', { class: 'brand-sub' }, 'OVÄLD · Börja om'))),
      nav,
      h(
        'div',
        { class: 'controls' },
        h(
          'div',
          { class: 'seg', role: 'group', 'aria-label': t('language') },
          (['sv', 'de', 'en'] as const).map((lang) =>
            h(
              'button',
              {
                type: 'button',
                lang,
                'aria-pressed': state.lang === lang ? 'true' : 'false',
                'aria-label': { sv: 'Svenska', de: 'Deutsch', en: 'English' }[lang],
                onclick: () => {
                  setParam('lang', lang);
                  sync(false);
                },
              },
              lang.toUpperCase(),
            ),
          ),
        ),
        h(
          'button',
          {
            type: 'button',
            class: 'icon-btn theme-btn',
            'aria-label': state.theme === 'dark' ? t('lightMode') : t('darkMode'),
            onclick: () => {
              setParam('theme', state.theme === 'dark' ? 'light' : 'dark');
              sync(false);
            },
          },
          icon(state.theme === 'dark' ? 'sun' : 'moon'),
        ),
        menu,
      ),
    ),
  );
}

function footer(): HTMLElement {
  return h(
    'footer',
    { class: 'site' },
    h(
      'div',
      { class: 'wrap' },
      h('span', null, t('footerLine')),
      h(
        'nav',
        { 'aria-label': t('footerNav') },
        h('a', { href: '#screen=about' }, t('navAbout')),
        h('a', { href: '#screen=about', onclick: () => window.setTimeout(() => document.getElementById('privacy')?.scrollIntoView(), 50) }, t('privacyTitle')),
        h('a', { href: '#screen=about', onclick: () => window.setTimeout(() => document.getElementById('credits')?.scrollIntoView(), 50) }, t('creditsTitle')),
      ),
    ),
  );
}

function view(id: string): HTMLElement {
  const rerender = (): void => render(false);
  const block = /^(m\d\d)-(.+)$/.exec(id);
  if (block) {
    const m = findModule(block[1]);
    const idx = m ? m.blocks.findIndex((b) => b.slug === block[2]) : -1;
    if (m && idx >= 0) return renderPlayer(m, idx, go);
  }
  const m = findModule(id);
  if (m) return renderModule(m, rerender);
  switch (id) {
    case 'models':
      return renderModels();
    case 'glossary':
      return renderGlossary();
    case 'journal':
      return renderJournal(rerender);
    case 'diploma':
      return renderDiploma();
    case 'about':
      return renderAbout();
    default:
      return renderHome();
  }
}

let lastScreen = '';

function render(focus: boolean): void {
  const id = screen();
  const y = window.scrollY;
  const main = h('main', { id: 'main' }, view(id));
  replace(
    app,
    h('a', { class: 'skip', href: '#main', onclick: (e: Event) => { e.preventDefault(); main.querySelector<HTMLElement>('h1')?.focus(); } }, t('skipToContent')),
    header(id),
    main,
    footer(),
    h('div', { id: 'live', class: 'sr-only', 'aria-live': 'polite' }),
  );
  document.title = `${titleFor(id)} · Ta Befäl`;
  if (focus && id !== lastScreen) {
    window.scrollTo(0, 0);
    main.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
  } else {
    window.scrollTo(0, y);
  }
  lastScreen = id;
}

function titleFor(id: string): string {
  const m = findModule(id.slice(0, 3));
  if (m) return `${t('moduleN', { n: m.num })}`;
  const n = NAV.find((x) => x.id === id);
  return n ? t(n.key) : t('navCourse');
}

function sync(focus: boolean): void {
  syncStateFromURL();
  document.body.classList.toggle('embedded', state.embedded);
  render(focus);
}

window.addEventListener('popstate', () => sync(screen() !== lastScreen));
window.addEventListener('hashchange', () => sync(true));

sync(false);

// In development, report content problems (missing translations, broken references) in the console.
if (import.meta.env.DEV) {
  void import('./content/validate').then(({ validate }) => validate().forEach((p) => console.warn(`[content] ${p}`)));
}
