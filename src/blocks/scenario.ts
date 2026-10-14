// B03 – scenario from a skröna. No points: every choice shows its trail
// Orsak → Verkan → Konsekvens and who carries it. At the end: your path next to the book's.

import type { Consequence, ScenarioBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { img, quote, sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

function trail(c: Consequence): HTMLElement {
  return h(
    'div',
    null,
    h(
      'div',
      { class: 'trail' },
      h('div', null, h('b', null, t('orsak')), tr(c.orsak)),
      h('div', null, h('b', null, t('verkan')), tr(c.verkan)),
      h('div', null, h('b', null, t('konsekvens')), tr(c.konsekvens)),
    ),
    h('p', { class: 'bearer' }, h('b', null, `${t('carriedBy')}: `), tr(c.bearer)),
  );
}

export function renderScenario(b: ScenarioBlock, ctx: BlockCtx): HTMLElement {
  const choices = store.answer<number[]>(ctx.id) ?? [];
  const finished = choices.length >= b.nodes.length;

  const nodes = b.nodes.slice(0, Math.min(choices.length + 1, b.nodes.length)).map((node, i) => {
    const chosen = choices[i];
    return h(
      'div',
      { class: 'card' },
      h('p', { class: 'eyebrow' }, t('decisionN', { n: i + 1, total: b.nodes.length })),
      h('p', { class: 'scene' }, tr(node.situation)),
      h(
        'ul',
        { class: 'options' },
        node.options.map((opt, j) =>
          h(
            'li',
            null,
            h(
              'button',
              {
                type: 'button',
                class: 'opt',
                'data-k': `n${i}-o${j}`,
                'aria-pressed': chosen === j ? 'true' : 'false',
                disabled: chosen !== undefined,
                onclick: () => {
                  store.setAnswer(ctx.id, [...choices.slice(0, i), j]);
                  ctx.refresh();
                },
              },
              tr(opt.label),
            ),
          ),
        ),
      ),
      chosen !== undefined ? h('div', { class: 'feedback calm', tabindex: -1 }, trail(node.options[chosen].c)) : null,
    );
  });

  const result = finished
    ? h(
        'div',
        { class: 'card' },
        h('h3', null, t('yourPathBookPath')),
        h(
          'ol',
          { class: 'path' },
          b.nodes.map((node, i) => {
            const mine = node.options[choices[i]];
            const bookIdx = node.options.findIndex((o) => o.book);
            const book = node.options[bookIdx];
            const same = choices[i] === bookIdx;
            return h(
              'li',
              null,
              h('div', null, h('span', { class: 'muted small' }, `${t('youChose')}: `), tr(mine.label)),
              book
                ? h(
                    'div',
                    null,
                    h('span', { class: same ? 'same small' : 'diff small' }, same ? t(b.invented ? 'sameAsPrinciple' : 'sameAsBookPath') : `${t(b.invented ? 'bookPrinciple' : 'bookPath')}: `),
                    same ? null : tr(book.label),
                  )
                : null,
            );
          }),
        ),
        h('h3', { style: { marginTop: '22px' } }, t(b.invented ? 'whatBookSays' : 'whatHappened')),
        h('p', { class: 'scene' }, tr(b.outcome)),
        b.quote ? quote(b.quote) : null,
        h(
          'div',
          { class: 'btn-row no-print' },
          h('button', { type: 'button', class: 'btn ghost', onclick: () => { store.setAnswer(ctx.id, []); ctx.refresh(); } }, t('restartScenario')),
        ),
      )
    : null;

  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'card' },
      b.image ? h('div', { class: 'scene-img' }, img(b.image, { sizes: '(max-width: 760px) 100vw, 720px' })) : null,
      b.invented ? h('p', null, h('span', { class: 'badge' }, t('invented'))) : h('p', null, h('span', { class: 'badge ok' }, t('fromTheBook'))),
      h('p', { class: 'scene' }, tr(b.intro)),
      sourceLine(b.source),
    ),
    nodes,
    result,
  );
}
