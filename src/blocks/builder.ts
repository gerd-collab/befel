// B07 – builder: apply a model from the books to a real case. Checks answer with the book's
// own sentences (e.g. "Ett uppdrag utan mandat skapar frustration"). Results stay private;
// "print" lets the learner save them as PDF.

import type { BuilderBlock, Lang } from '../content/types';
import { h, replace } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { store } from '../lib/store';
import { printSection } from '../lib/print';
import { icon, privateNote, sourceLine } from '../lib/ui';
import type { BlockCtx } from './ctx';

/** Words that name a group instead of a function or a person. */
const COLLECTIVE: Record<Lang, RegExp> = {
  sv: /\b(vi|alla|gruppen|teamet|ledningen|man|styrgruppen|organisationen|ingen)\b/i,
  de: /\b(wir|alle|die gruppe|das team|die leitung|man|die organisation|niemand|gemeinsam)\b/i,
  en: /\b(we|everyone|everybody|all of us|the group|the team|management|the organisation|the organization|nobody|together)\b/i,
};

export function renderBuilder(b: BuilderBlock, ctx: BlockCtx): HTMLElement {
  const key = (field: string): string => `${ctx.id}.${field}`;
  const checksHost = h('ul', { class: 'checks', 'aria-live': 'polite' });

  const evaluate = (): void => {
    const messages = b.checks.filter((c) => {
      const value = store.text(key(c.field)).trim();
      if (c.when === 'missing') return value === '';
      return value !== '' && COLLECTIVE[state.lang].test(value);
    });
    const filled = b.fields.filter((f) => store.text(key(f.id)).trim() !== '').length;
    if (filled === 0) {
      replace(checksHost, h('li', null, t('builderStart')));
    } else if (messages.length) {
      replace(checksHost, messages.map((m) => h('li', null, tr(m.message))));
    } else {
      replace(checksHost, h('li', { class: 'okline' }, tr(b.done)));
    }
  };

  const fields = b.fields.map((f) => {
    const id = `${ctx.id}-${f.id}`;
    let control: HTMLElement;
    if (f.choices) {
      const current = store.text(key(f.id));
      control = h(
        'div',
        { class: 'choice-row', role: 'group', 'aria-labelledby': `${id}-label` },
        f.choices.map((c) =>
          h(
            'button',
            {
              type: 'button',
              class: 'chip-btn',
              'data-k': `${f.id}-${c.id}`,
              'aria-pressed': current === c.id ? 'true' : 'false',
              onclick: () => {
                store.setText(key(f.id), current === c.id ? '' : c.id);
                ctx.refresh();
              },
            },
            tr(c.label),
          ),
        ),
      );
    } else {
      const attrs = {
        id,
        value: store.text(key(f.id)),
        'aria-describedby': `${id}-help`,
        oninput: (e: Event) => {
          store.setText(key(f.id), (e.target as HTMLTextAreaElement).value);
          evaluate();
        },
      };
      control = f.multiline === false ? h('input', { type: 'text', ...attrs }) : h('textarea', attrs);
    }
    return h(
      'div',
      { class: 'field' },
      h('label', { for: f.choices ? undefined : id, id: `${id}-label` }, tr(f.label)),
      h('p', { class: 'help', id: `${id}-help` }, tr(f.help)),
      control,
    );
  });

  const form = h('div', { class: 'card' }, h('p', null, tr(b.intro)), fields, checksHost, privateNote());
  evaluate();

  return h(
    'div',
    { class: 'stack' },
    form,
    h(
      'div',
      { class: 'btn-row no-print' },
      h('button', { type: 'button', class: 'btn ghost', onclick: () => printSection(form, tr(ctx.module.title)) }, icon('print', 16), t('printSave')),
      h(
        'button',
        {
          type: 'button',
          class: 'btn quiet',
          onclick: () => {
            if (!window.confirm(t('confirmClearBuilder'))) return;
            b.fields.forEach((f) => store.setText(key(f.id), ''));
            ctx.refresh();
          },
        },
        t('clearFields'),
      ),
    ),
    sourceLine(b.src),
  );
}
