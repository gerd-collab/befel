// B02 – inversion: "vänd ett eget problem upp och ner" (book 1, 0.2 Inversion som metod).

import type { InversionBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { privateNote, sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

export function renderInversion(b: InversionBlock, ctx: BlockCtx): HTMLElement {
  const picks = store.answer<Record<number, number>>(ctx.id) ?? {};

  const items = b.items.map((item, i) => {
    const chosen = picks[i];
    const answered = chosen !== undefined;
    return h(
      'div',
      { class: 'card' },
      h('p', { class: 'eyebrow' }, t('habitual')),
      h('p', { class: 'scene' }, tr(item.habit)),
      h('p', { class: 'small muted' }, t('turnIt')),
      h(
        'ul',
        { class: 'options' },
        item.options.map((opt, j) =>
          h(
            'li',
            null,
            h(
              'button',
              {
                type: 'button',
                class: `opt${answered && j === item.inverted ? ' book' : ''}`,
                'data-k': `i${i}-o${j}`,
                'aria-pressed': chosen === j ? 'true' : 'false',
                disabled: answered,
                onclick: () => {
                  store.setAnswer(ctx.id, { ...picks, [i]: j });
                  ctx.refresh();
                },
              },
              tr(opt),
              answered && j === item.inverted ? h('span', { class: 'tag' }, t('booksInversion')) : null,
            ),
          ),
        ),
      ),
      answered
        ? h(
            'div',
            { class: chosen === item.inverted ? 'feedback yes' : 'feedback calm', tabindex: -1 },
            h('span', { class: 'label' }, chosen === item.inverted ? t('sameAsBook') : t('bookTurnsIt')),
            h('p', null, tr(item.pattern)),
            item.src ? sourceLine(item.src) : null,
          )
        : null,
    );
  });

  const ownProblem = h('textarea', {
    id: `${ctx.id}-own-a`,
    value: store.text(`${ctx.id}.own.habit`),
    oninput: (e: Event) => store.setText(`${ctx.id}.own.habit`, (e.target as HTMLTextAreaElement).value),
  });
  const ownTurned = h('textarea', {
    id: `${ctx.id}-own-b`,
    value: store.text(`${ctx.id}.own.turned`),
    oninput: (e: Event) => store.setText(`${ctx.id}.own.turned`, (e.target as HTMLTextAreaElement).value),
  });

  return h(
    'div',
    { class: 'stack' },
    items,
    h(
      'div',
      { class: 'card' },
      h('h3', null, t('ownInversion')),
      h('p', null, tr(b.ownPrompt)),
      h('div', { class: 'field' }, h('label', { for: `${ctx.id}-own-a` }, t('ownHabit')), ownProblem),
      h('div', { class: 'field' }, h('label', { for: `${ctx.id}-own-b` }, t('ownTurned')), ownTurned),
      h('p', { class: 'small muted', style: { marginTop: '10px' } }, t('inversionQuestion')),
      privateNote(),
    ),
  );
}
