// Shared view pieces: responsive images, quotes, icons.

import { IMAGES, imageInfo } from '../content/images';
import { srcLabel } from '../content/books';
import type { Quote, Src } from '../content/types';
import { h, s } from './dom';
import { state, t, tr } from './app';

const BASE = import.meta.env.BASE_URL;

export function img(key: string, opts: { sizes?: string; eager?: boolean; decorative?: boolean } = {}): HTMLImageElement {
  const info = imageInfo(key) ?? IMAGES['lighthouse-storm'];
  const el = h('img', {
    src: `${BASE}img/${key}-1600.webp`,
    srcset: `${BASE}img/${key}-800.webp 800w, ${BASE}img/${key}-1600.webp 1600w`,
    sizes: opts.sizes ?? '(max-width: 800px) 100vw, 50vw',
    alt: opts.decorative ? '' : tr(info.alt),
    loading: opts.eager ? 'eager' : 'lazy',
    decoding: 'async',
  });
  if (info.pos) el.style.objectPosition = info.pos;
  return el;
}

export function cite(src: Src): HTMLElement {
  return h('cite', null, srcLabel(src, state.lang));
}

/** Swedish original always; translation underneath for German and English. */
export function quote(q: Quote, cls = 'quote'): HTMLElement {
  return h(
    'blockquote',
    { class: cls, lang: 'sv' },
    h('p', { class: 'q-sv' }, `”${q.sv}”`),
    state.lang !== 'sv' ? h('p', { class: 'q-tr', lang: state.lang }, q[state.lang]) : null,
    h('span', { lang: state.lang }, cite(q.src)),
  );
}

export function sourceLine(src: Src): HTMLElement {
  return h('p', { class: 'small muted' }, `${t('source')}: `, srcLabel(src, state.lang));
}

type IconName = 'sun' | 'moon' | 'menu' | 'check' | 'lock' | 'arrow-right' | 'arrow-left' | 'print' | 'shield' | 'film' | 'compass';

const PATHS: Record<IconName, string> = {
  sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14-1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  check: 'm5 12 5 5 9-10',
  lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6z',
  'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
  'arrow-left': 'M19 12H5m6-6-6 6 6 6',
  print: 'M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z',
  shield: 'M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z',
  film: 'M4 5h16v14H4zM4 9h16M4 15h16M8 5v14M16 5v14',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z',
};

export function icon(name: IconName, size = 18): SVGElement {
  return s(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' },
    s('path', { d: PATHS[name] }),
  );
}

export function logo(size = 34): SVGElement {
  return s(
    'svg',
    { width: size, height: size, viewBox: '0 0 64 64', 'aria-hidden': 'true', focusable: 'false' },
    s('rect', { width: 64, height: 64, rx: 14, fill: '#0e4c5a' }),
    s('circle', { cx: 32, cy: 32, r: 19, fill: 'none', stroke: '#f5ecd9', 'stroke-width': 3 }),
    s('path', { d: 'M32 13 L37 32 L32 51 L27 32 Z', fill: '#d8b46c' }),
    s('circle', { cx: 32, cy: 32, r: 3, fill: '#0e4c5a' }),
  );
}

export function privateNote(): HTMLElement {
  return h('p', { class: 'private-note' }, icon('shield', 15), t('privateNote'));
}
