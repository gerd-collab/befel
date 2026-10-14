// B11 – knowledge check. Questions target typical misunderstandings, not memory.
// The first answer counts for the certificate; "try again" is allowed for learning.

import type { QuizBlock } from '../content/types';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import type { BlockCtx } from './ctx';

export interface QuizState {
  picks: Record<number, number>;
  first?: number;
}

export function quizScore(b: QuizBlock, picks: Record<number, number>): number {
  return b.questions.filter((q, i) => picks[i] !== undefined && q.options[picks[i]].ok).length;
}

export function renderQuiz(b: QuizBlock, ctx: BlockCtx): HTMLElement {
  const st = store.answer<QuizState>(ctx.id) ?? { picks: {} };
  const answered = Object.keys(st.picks).length;
  const all = answered === b.questions.length;

  const pick = (i: number, j: number): void => {
    const picks = { ...st.picks, [i]: j };
    const next: QuizState = { ...st, picks };
    if (Object.keys(picks).length === b.questions.length && st.first === undefined) next.first = quizScore(b, picks);
    store.setAnswer(ctx.id, next);
    ctx.refresh();
  };

  return h(
    'div',
    { class: 'stack' },
    b.questions.map((q, i) => {
      const chosen = st.picks[i];
      const opt = chosen !== undefined ? q.options[chosen] : undefined;
      return h(
        'div',
        { class: 'card' },
        h('p', { class: 'eyebrow' }, t('questionN', { n: i + 1, total: b.questions.length })),
        h('p', { class: 'scene' }, tr(q.q)),
        h(
          'ul',
          { class: 'options' },
          q.options.map((o, j) =>
            h(
              'li',
              null,
              h(
                'button',
                {
                  type: 'button',
                  class: `opt${chosen !== undefined && o.ok ? ' book' : ''}`,
                  'data-k': `q${i}-${j}`,
                  'aria-pressed': chosen === j ? 'true' : 'false',
                  disabled: chosen !== undefined,
                  onclick: () => pick(i, j),
                },
                tr(o.text),
                chosen !== undefined && o.ok ? h('span', { class: 'tag' }, t('holdsInBook')) : null,
              ),
            ),
          ),
        ),
        opt
          ? h(
              'div',
              { class: opt.ok ? 'feedback yes' : 'feedback calm', tabindex: -1 },
              h('p', null, tr(opt.fb)),
              h('p', { class: 'small muted' }, h('strong', null, `${t('misconception')}: `), tr(q.misconception)),
            )
          : null,
      );
    }),
    all
      ? h(
          'div',
          { class: 'card' },
          h('p', { class: 'label', style: { fontWeight: '650', margin: 0 } }, t('quizResult', { n: quizScore(b, st.picks), total: b.questions.length })),
          h('p', { class: 'small muted' }, t('quizNote')),
          h('button', { type: 'button', class: 'btn ghost', onclick: () => { store.setAnswer(ctx.id, { picks: {}, first: st.first }); ctx.refresh(); } }, t('tryAgain')),
        )
      : null,
  );
}
