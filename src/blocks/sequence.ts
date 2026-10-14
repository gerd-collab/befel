// B04 variant – put the steps of a model in the book's order by tapping them one after another.

import type { SequenceBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

/** Stable shuffle per block so the order does not jump between renders. */
function shuffled(n: number, seed: string): number[] {
  let x = [...seed].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    x = (x * 1103515245 + 12345) >>> 0;
    const j = x % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  if (idx.every((v, i) => v === i)) idx.reverse();
  return idx;
}

export function renderSequence(b: SequenceBlock, ctx: BlockCtx): HTMLElement {
  const order = store.answer<number[]>(ctx.id) ?? [];
  const done = order.length === b.steps.length;
  const display = shuffled(b.steps.length, ctx.id).filter((i) => !order.includes(i));

  const set = (next: number[]): void => {
    store.setAnswer(ctx.id, next);
    ctx.refresh();
  };

  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'card' },
      h('p', { class: 'small muted' }, t('sequenceHowTo')),
      h(
        'ol',
        { class: 'seq', 'aria-label': t('yourOrder') },
        order.map((i, pos) => h('li', null, h('span', { class: 'n' }, String(pos + 1)), h('span', null, tr(b.steps[i].text)))),
      ),
      display.length
        ? h(
            'div',
            { class: 'pool' },
            display.map((i) =>
              h('button', { type: 'button', class: 'chip-btn', 'data-k': `s-${i}`, onclick: () => set([...order, i]) }, tr(b.steps[i].text)),
            ),
          )
        : null,
      h(
        'div',
        { class: 'btn-row' },
        h('button', { type: 'button', class: 'btn ghost', disabled: order.length === 0, onclick: () => set(order.slice(0, -1)) }, t('undoLast')),
        h('button', { type: 'button', class: 'btn quiet', disabled: order.length === 0, onclick: () => set([]) }, t('startOver')),
      ),
    ),
    done
      ? h(
          'div',
          { class: 'card', tabindex: -1 },
          h('h3', null, t('booksOrder')),
          h('p', { class: 'small muted' }, t('sequenceMatches', { n: order.filter((v, i) => v === i).length, total: b.steps.length })),
          h(
            'ol',
            { class: 'seq' },
            b.steps.map((st, i) =>
              h(
                'li',
                null,
                h('span', { class: 'n' }, String(i + 1)),
                h('span', null, h('strong', null, tr(st.text)), h('br'), h('span', { class: 'small muted' }, tr(st.why))),
              ),
            ),
          ),
          sourceLine(b.src),
        )
      : null,
  );
}
