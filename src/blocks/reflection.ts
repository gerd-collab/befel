// B10 – private reflection. Saved only in this browser, deletable at any time.

import type { ReflectionBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { privateNote, sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

export function renderReflection(b: ReflectionBlock, ctx: BlockCtx): HTMLElement {
  return h(
    'div',
    { class: 'stack' },
    b.prompts.map((p, i) => {
      const id = `${ctx.id}-r${i}`;
      const key = `${ctx.id}.r${i}`;
      return h(
        'div',
        { class: 'card' },
        h('label', { for: id, class: 'scene', style: { display: 'block', marginBottom: '10px' } }, tr(p)),
        h('textarea', { id, rows: 5, value: store.text(key), oninput: (e: Event) => store.setText(key, (e.target as HTMLTextAreaElement).value) }),
        h(
          'div',
          { class: 'btn-row', style: { justifyContent: 'space-between', marginTop: '6px' } },
          privateNote(),
          h(
            'button',
            {
              type: 'button',
              class: 'btn quiet',
              onclick: () => {
                store.setText(key, '');
                ctx.refresh();
              },
            },
            t('delete'),
          ),
        ),
      );
    }),
    b.src ? sourceLine(b.src) : null,
  );
}
