// B05 – escalation ladder: the femstegsraketen from book 3 part II, chapter 8.

import type { LadderBlock, Step } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import type { BlockCtx } from './ctx';

const STEPS: Step[] = [1, 2, 3, 4, 5];

export function stepName(n: Step): string {
  return t(`step${n}` as 'step1');
}

export function renderLadder(b: LadderBlock, ctx: BlockCtx): HTMLElement {
  const picks = store.answer<Record<number, Step>>(ctx.id) ?? {};

  const legend = h(
    'div',
    { class: 'card' },
    h('h3', null, t('rocketTitle')),
    h('div', { class: 'rocket', 'aria-hidden': 'true' }, STEPS.map((n) => h('div', null, `${n} · ${stepName(n)}`))),
    h('div', { class: 'rocket-split' }, h('span', null, t('relationSide')), h('span', null, t('systemSide'))),
    h('p', { class: 'small muted', style: { marginTop: '10px' } }, t('rocketRequires')),
  );

  const situations = b.situations.map((sit, i) => {
    const pick = picks[i];
    const answered = pick !== undefined;
    const why = h('input', {
      type: 'text',
      'aria-label': t('yourReason'),
      placeholder: t('yourReason'),
      value: store.text(`${ctx.id}.why.${i}`),
      oninput: (e: Event) => store.setText(`${ctx.id}.why.${i}`, (e.target as HTMLInputElement).value),
    });
    return h(
      'div',
      { class: 'card' },
      h('p', { class: 'eyebrow' }, t('situationN', { n: i + 1, total: b.situations.length })),
      h('p', { class: 'scene' }, tr(sit.text)),
      h(
        'div',
        { class: 'ladder-steps', role: 'group', 'aria-label': t('chooseStep') },
        STEPS.map((n) =>
          h(
            'button',
            {
              type: 'button',
              'data-k': `l${i}-${n}`,
              class: answered && n === sit.step ? 'suggested' : '',
              'aria-pressed': pick === n ? 'true' : 'false',
              onclick: () => {
                store.setAnswer(ctx.id, { ...picks, [i]: n });
                ctx.refresh();
              },
            },
            h('b', null, String(n)),
            h('span', null, stepName(n)),
          ),
        ),
      ),
      h('div', { class: 'field' }, why),
      answered
        ? h(
            'div',
            { class: pick === sit.step ? 'feedback yes' : 'feedback calm', tabindex: -1 },
            h(
              'span',
              { class: 'label' },
              pick === sit.step
                ? t('ladderSame', { n: sit.step, name: stepName(sit.step) })
                : t('ladderBook', { n: sit.step, name: stepName(sit.step), mine: pick }),
            ),
            h('p', null, tr(sit.why)),
          )
        : null,
    );
  });

  return h('div', { class: 'stack' }, legend, situations, h('div', { class: 'notice info' }, tr(b.note)));
}
