// B04 – classify by two-step tap: first the statement, then the category. Works with
// keyboard and touch; no drag-and-drop needed. Feedback explains why, without "wrong!".

import type { ClassifyBlock } from '../content/types';
import { h, announce } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

const selection = new Map<string, number | null>();

export function renderClassify(b: ClassifyBlock, ctx: BlockCtx): HTMLElement {
  const placed = store.answer<Record<number, string>>(ctx.id) ?? {};
  const selected = selection.get(ctx.id) ?? null;
  const open = b.items.map((_, i) => i).filter((i) => placed[i] === undefined);
  const catLabel = (id: string): string => tr(b.categories.find((c) => c.id === id)?.label ?? b.categories[0].label);

  const place = (catId: string): void => {
    if (selected === null) {
      announce(t('pickStatementFirst'));
      return;
    }
    store.setAnswer(ctx.id, { ...placed, [selected]: catId });
    selection.set(ctx.id, null);
    ctx.refresh();
  };

  const pool = h(
    'div',
    { class: 'pool', role: 'group', 'aria-label': t('statements') },
    open.length
      ? open.map((i) =>
          h(
            'button',
            {
              type: 'button',
              class: 'chip-btn',
              'data-k': `item-${i}`,
              'aria-pressed': selected === i ? 'true' : 'false',
              onclick: () => {
                selection.set(ctx.id, selected === i ? null : i);
                ctx.refresh();
              },
            },
            tr(b.items[i].text),
          ),
        )
      : h('span', { class: 'small muted' }, t('allPlaced')),
  );

  const bins = h(
    'div',
    { class: 'bins' },
    b.categories.map((cat) =>
      h(
        'div',
        { class: `bin${selected !== null ? ' target' : ''}` },
        h(
          'button',
          { type: 'button', class: 'bin-head', 'data-k': `cat-${cat.id}`, onclick: () => place(cat.id), 'aria-label': `${t('placeIn')} ${tr(cat.label)}` },
          tr(cat.label),
          cat.hint ? h('small', null, tr(cat.hint)) : null,
        ),
        h(
          'ul',
          { class: 'placed' },
          b.items
            .map((item, i) => ({ item, i }))
            .filter(({ i }) => placed[i] === cat.id)
            .map(({ item, i }) => {
              const match = item.cat === cat.id;
              return h(
                'li',
                { class: match ? 'match' : 'other' },
                tr(item.text),
                h(
                  'span',
                  { class: 'why' },
                  match ? `${t('asInBook')} ${tr(item.why)}` : `${t('bookPlacesUnder')} ${catLabel(item.cat)}. ${tr(item.why)}`,
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    class: 'move',
                    onclick: () => {
                      const next = { ...placed };
                      delete next[i];
                      store.setAnswer(ctx.id, next);
                      ctx.refresh();
                    },
                  },
                  t('moveBack'),
                ),
              );
            }),
        ),
      ),
    ),
  );

  const total = b.items.length;
  const asBook = b.items.filter((it, i) => placed[i] === it.cat).length;

  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'card' },
      h('p', { class: 'small muted' }, t('classifyHowTo')),
      pool,
      bins,
      open.length === 0
        ? h('div', { class: 'feedback calm', tabindex: -1 }, h('span', { class: 'label' }, t('classifySummary', { n: asBook, total })), h('p', null, t('classifyRetry')))
        : null,
      b.src ? sourceLine(b.src) : null,
    ),
  );
}
