// B12 – command assignment. Every module ends with "Vad tar DU befäl över till nästa gång?"
// No reminders. At the next module start the app only asks: done or not done.

import type { AssignmentBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { privateNote } from '../lib/ui';
import type { BlockCtx } from './ctx';

export function renderAssignment(b: AssignmentBlock, ctx: BlockCtx): HTMLElement {
  const mid = ctx.module.id;
  const rec = store.data.assignments[mid];
  const id = `${ctx.id}-mine`;
  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'assignment' },
      h('p', { class: 'eyebrow' }, t('befalsuppdrag')),
      h('p', { class: 'a-text' }, tr(b.text)),
      h('p', { class: 'a-q', lang: 'sv' }, 'Vad tar DU befäl över till nästa gång?'),
      t('assignmentQuestionTr') ? h('p', { class: 'small', style: { color: '#b9c9cd' } }, t('assignmentQuestionTr')) : null,
      h(
        'div',
        { class: 'field' },
        h('label', { for: id }, t('myAssignment')),
        h('textarea', {
          id,
          rows: 3,
          value: rec?.text ?? '',
          oninput: (e: Event) => {
            const text = (e.target as HTMLTextAreaElement).value;
            store.update((d) => {
              if (text.trim()) d.assignments[mid] = { text, at: Date.now() };
              else delete d.assignments[mid];
            });
          },
        }),
      ),
    ),
    h('p', { class: 'small muted' }, tr(b.hint)),
    privateNote(),
  );
}
