// B06 – responsibility point finder. The test from book 4, chapter 5:
// "Vem fattade beslutet?" A name: the system has a responsibility point. A function: doubtful.
// A process: the system has already failed.

import type { FinderBlock, FinderKind } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { quote } from '../lib/ui';
import type { BlockCtx } from './ctx';

const KINDS: FinderKind[] = ['name', 'function', 'process'];

export function renderFinder(b: FinderBlock, ctx: BlockCtx): HTMLElement {
  const picks = store.answer<Record<number, FinderKind>>(ctx.id) ?? {};

  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'card' },
      quote({
        sv: 'Vem fattade beslutet? Om du får ett namn har systemet en ansvarspunkt. Om du får en funktion är det tveksamt. Om du får en process har systemet redan fallerat.',
        de: 'Wer hat die Entscheidung getroffen? Bekommst du einen Namen, hat das System einen Verantwortungspunkt. Bekommst du eine Funktion, ist es zweifelhaft. Bekommst du einen Prozess, hat das System bereits versagt.',
        en: 'Who made the decision? If you get a name, the system has a responsibility point. If you get a function, it is doubtful. If you get a process, the system has already failed.',
        src: { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt' },
      }),
    ),
    b.cases.map((c, i) => {
      const pick = picks[i];
      return h(
        'div',
        { class: 'card' },
        h('p', { class: 'eyebrow' }, t('caseN', { n: i + 1, total: b.cases.length })),
        h('p', { class: 'scene' }, tr(c.text)),
        h('p', null, h('span', { class: 'muted' }, `${t('theAnswerYouGet')} `), h('strong', null, `”${tr(c.answer)}”`)),
        h(
          'div',
          { class: 'choice-row', role: 'group', 'aria-label': t('whatKind') },
          KINDS.map((k) =>
            h(
              'button',
              {
                type: 'button',
                class: 'chip-btn',
                'data-k': `f${i}-${k}`,
                'aria-pressed': pick === k ? 'true' : 'false',
                onclick: () => {
                  store.setAnswer(ctx.id, { ...picks, [i]: k });
                  ctx.refresh();
                },
              },
              t(`kind_${k}` as 'kind_name'),
            ),
          ),
        ),
        pick
          ? h(
              'div',
              { class: pick === c.kind ? 'feedback yes' : 'feedback calm', tabindex: -1 },
              h('span', { class: 'label' }, pick === c.kind ? t('finderSame') : t('finderBook', { kind: t(`kind_${c.kind}` as 'kind_name') })),
              h('p', null, t(`verdict_${c.kind}` as 'verdict_name')),
              h('p', null, tr(c.why)),
            )
          : null,
      );
    }),
  );
}
