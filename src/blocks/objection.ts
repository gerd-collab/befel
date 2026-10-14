// B08 – befälssvar trainer: answer calmly, briefly, without defending. Then the book's answer.

import type { ObjectionBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { quote } from '../lib/ui';
import type { BlockCtx } from './ctx';

export function renderObjection(b: ObjectionBlock, ctx: BlockCtx): HTMLElement {
  const revealed = store.answer<Record<number, boolean>>(ctx.id) ?? {};

  return h(
    'div',
    { class: 'stack' },
    h('div', { class: 'notice info' }, h('strong', null, t('befalsRule')), t('befalsRuleText')),
    b.items.map((item, i) => {
      const field = h('textarea', {
        id: `${ctx.id}-a${i}`,
        rows: 2,
        value: store.text(`${ctx.id}.answer.${i}`),
        oninput: (e: Event) => store.setText(`${ctx.id}.answer.${i}`, (e.target as HTMLTextAreaElement).value),
      });
      return h(
        'div',
        { class: 'card' },
        h('p', { class: 'eyebrow' }, t('objectionN', { n: i + 1, total: b.items.length })),
        h('p', { class: 'objection' }, tr(item.objection)),
        h('div', { class: 'field' }, h('label', { for: `${ctx.id}-a${i}` }, t('yourAnswer')), field),
        revealed[i]
          ? h('div', { tabindex: -1 }, h('p', { class: 'label', style: { marginTop: '14px', fontWeight: '650' } }, t('befalssvar')), quote({ ...item.answer, src: item.src }))
          : h(
              'div',
              { class: 'btn-row', style: { marginTop: '12px' } },
              h(
                'button',
                {
                  type: 'button',
                  class: 'btn ghost',
                  'data-k': `o${i}`,
                  onclick: () => {
                    store.setAnswer(ctx.id, { ...revealed, [i]: true });
                    ctx.refresh();
                  },
                },
                t('showBefalssvar'),
              ),
            ),
      );
    }),
  );
}
