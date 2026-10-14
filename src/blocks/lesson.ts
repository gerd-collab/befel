// B01 – lesson: the script of Torbjörn's video lesson as slides, plus up to five concept cards.

import type { LessonBlock } from '../content/types';
import { h, replace, announce } from '../lib/dom';
import { t, tr } from '../lib/app';
import { icon, img, quote } from '../lib/ui';
import type { BlockCtx } from './ctx';

const position = new Map<string, number>();

export function renderLesson(b: LessonBlock, ctx: BlockCtx): HTMLElement {
  const root = h('div', { class: 'stack' });
  const slideHost = h('div', { class: 'card', 'aria-live': 'polite' });

  const show = (i: number): void => {
    const idx = Math.max(0, Math.min(b.slides.length - 1, i));
    const previous = position.get(ctx.id);
    position.set(ctx.id, idx);
    const sl = b.slides[idx];
    const dots = b.slides.map((_, j) =>
      h('button', {
        type: 'button',
        'aria-label': t('slideN', { n: j + 1, total: b.slides.length }),
        'aria-current': j === idx ? 'true' : 'false',
        onclick: () => show(j),
      }),
    );
    replace(
      slideHost,
      h(
        'div',
        { class: 'slide' },
        sl.image ? h('figure', null, img(sl.image, { sizes: '(max-width: 760px) 100vw, 720px' })) : null,
        h('p', { class: 'eyebrow' }, t('slideN', { n: idx + 1, total: b.slides.length })),
        h('h3', null, tr(sl.heading)),
        sl.body.map((p) => h('p', null, tr(p))),
        sl.list ? h('ul', { class: 'points' }, sl.list.map((li) => h('li', null, tr(li)))) : null,
        sl.quote ? quote(sl.quote) : null,
      ),
      h(
        'div',
        { class: 'slide-nav' },
        h('button', { type: 'button', class: 'btn ghost', disabled: idx === 0, onclick: () => show(idx - 1) }, icon('arrow-left', 16), t('prevSlide')),
        h('div', { class: 'dots' }, dots),
        idx < b.slides.length - 1
          ? h('button', { type: 'button', class: 'btn', onclick: () => show(idx + 1) }, t('nextSlide'), icon('arrow-right', 16))
          : h('span', { class: 'small muted' }, t('lessonEnd')),
      ),
    );
    if (previous !== undefined && previous !== idx) announce(tr(sl.heading));
  };

  root.append(
    h('div', { class: 'video-note' }, icon('film', 20), h('span', null, t('videoNote'))),
    slideHost,
  );
  show(position.get(ctx.id) ?? 0);

  if (b.cards.length) {
    root.append(
      h('h3', { style: { marginTop: '28px' } }, t('keyTerms')),
      h(
        'div',
        { class: 'terms' },
        b.cards.map((c) => h('div', { class: 'term' }, h('strong', null, tr(c.term)), h('span', null, tr(c.text)))),
      ),
    );
  }
  return root;
}
