// Block player: one block per screen, with step bar and previous/next.

import { PARTS, blockKey } from '../content/course';
import type { Module } from '../content/types';
import { KIND_CODE, KIND_KEY, blockIntro, renderBlock } from '../blocks';
import { h, replace } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { icon } from '../lib/ui';

export function renderPlayer(m: Module, index: number, go: (screen: string) => void): HTMLElement {
  const b = m.blocks[index];
  const id = blockKey(m, b);
  const prev = m.blocks[index - 1];
  const next = m.blocks[index + 1];

  const host = h('div');
  const draw = (): void => {
    replace(host, renderBlock(b, { id, module: m, refresh }));
  };
  // Re-render the block after an interaction, keeping scroll position and keyboard focus.
  const refresh = (): void => {
    const active = document.activeElement as HTMLElement | null;
    const k = active?.dataset.k;
    const y = window.scrollY;
    draw();
    window.scrollTo(0, y);
    if (!k) return;
    const el = host.querySelector<HTMLElement>(`[data-k="${k}"]`);
    if (el && !(el as HTMLButtonElement).disabled) el.focus({ preventScroll: true });
    else el?.closest('.card')?.querySelector<HTMLElement>('[tabindex="-1"]')?.focus({ preventScroll: true });
  };
  draw();

  const markDone = (): void => {
    store.update((d) => {
      d.blocksDone[id] = d.blocksDone[id] ?? Date.now();
    });
  };

  const finish = (): void => {
    markDone();
    store.update((d) => {
      d.modulesDone[m.id] = d.modulesDone[m.id] ?? Date.now();
    });
    go(m.id);
  };

  const intro = blockIntro(b);

  return h(
    'div',
    null,
    h(
      'div',
      { class: 'player-head' },
      h(
        'div',
        { class: 'wrap' },
        h(
          'nav',
          { class: 'player-crumbs', 'aria-label': t('breadcrumb') },
          h('a', { href: '#screen=home' }, t('course')),
          h('span', { 'aria-hidden': 'true' }, '/'),
          h('span', null, tr(PARTS[m.part].title)),
          h('span', { 'aria-hidden': 'true' }, '/'),
          h('a', { href: `#screen=${m.id}` }, `${t('moduleN', { n: m.num })} · ${tr(m.title)}`),
        ),
        h(
          'div',
          { class: 'steps', role: 'list', 'aria-label': t('blockOf', { n: index + 1, total: m.blocks.length }) },
          m.blocks.map((x, i) =>
            h('a', {
              role: 'listitem',
              href: `#screen=${blockKey(m, x)}`,
              class: i === index ? 'current' : store.data.blocksDone[blockKey(m, x)] ? 'done' : '',
              'aria-label': `${i + 1}. ${tr(x.title)}`,
              'aria-current': i === index ? 'step' : undefined,
            }),
          ),
        ),
      ),
    ),
    h(
      'div',
      { class: 'player' },
      h(
        'div',
        { class: 'wrap' },
        h(
          'div',
          { class: 'read' },
          h('p', { class: 'block-kind' }, `${KIND_CODE[b.type]} · ${t(KIND_KEY[b.type])} · ${t('min', { n: b.min })}`),
          h('h1', { class: 'block-title', tabindex: -1 }, tr(b.title)),
          intro ? h('p', { class: 'block-intro' }, tr(intro)) : null,
          host,
          h(
            'nav',
            { class: 'player-nav', 'aria-label': t('blockNav') },
            prev
              ? h('a', { class: 'btn ghost', href: `#screen=${blockKey(m, prev)}` }, icon('arrow-left', 16), t('previous'))
              : h('a', { class: 'btn ghost', href: `#screen=${m.id}` }, icon('arrow-left', 16), t('overview')),
            next
              ? h('button', { type: 'button', class: 'btn', onclick: () => { markDone(); go(blockKey(m, next)); } }, t('next'), icon('arrow-right', 16))
              : h('button', { type: 'button', class: 'btn', onclick: finish }, t('finishModule'), icon('check', 16)),
          ),
        ),
      ),
    ),
  );
}
