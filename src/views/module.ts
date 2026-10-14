// Module overview: goal, key terms, sources, block timeline, follow-up of the last assignment,
// and the facilitator cards (B13).

import { FACILITATOR_RULES, PARTS, blockKey, moduleMinutes } from '../content/course';
import { srcLabel } from '../content/books';
import type { Module } from '../content/types';
import { KIND_KEY } from '../blocks';
import { h } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { store } from '../lib/store';
import { blocksDone, isModuleDone, nextModule, previousModule, unlockInfo } from '../lib/progress';
import { icon, img } from '../lib/ui';

function followUp(m: Module, rerender: () => void): HTMLElement | null {
  const prev = previousModule(m);
  const rec = prev ? store.data.assignments[prev.id] : undefined;
  if (!prev || !rec) return null;
  if (rec.status) {
    // Show the calm answer right after marking, then let it go – no reminders, no history.
    const recent = rec.checkedAt !== undefined && Date.now() - rec.checkedAt < 5 * 60 * 1000;
    if (!recent) return null;
    return h(
      'div',
      { class: 'followup', tabindex: -1 },
      h('p', { class: 'eyebrow' }, t('lastAssignment')),
      h('p', { class: 'prev' }, `”${rec.text}”`),
      h('p', { style: { margin: 0, fontWeight: 600 } }, rec.status === 'done' ? t('followDone') : t('followNotDone')),
    );
  }
  const mark = (status: 'done' | 'notdone'): void => {
    store.update((d) => {
      d.assignments[prev.id] = { ...rec, status, checkedAt: Date.now() };
    });
    rerender();
  };
  return h(
    'div',
    { class: 'followup' },
    h('p', { class: 'eyebrow' }, t('lastAssignment')),
    h('p', { style: { margin: 0 } }, t('lastTimeYouTook', { n: prev.num })),
    h('p', { class: 'prev' }, `”${rec.text}”`),
    h(
      'div',
      { class: 'btn-row' },
      h('button', { type: 'button', class: 'btn', onclick: () => mark('done') }, t('done')),
      h('button', { type: 'button', class: 'btn ghost', onclick: () => mark('notdone') }, t('notDone')),
    ),
  );
}

export function renderModule(m: Module, rerender: () => void): HTMLElement {
  const lock = unlockInfo(m);
  const done = isModuleDone(m);
  const count = blocksDone(m);
  const firstOpen = m.blocks.find((b) => !store.data.blocksDone[blockKey(m, b)]) ?? m.blocks[0];
  const next = nextModule(m);

  const startLabel = done ? t('reviewModule') : count > 0 ? t('continueHere') : t('startModule');

  const timeline = h(
    'ol',
    { class: 'timeline' },
    m.blocks.map((b, i) => {
      const isDone = Boolean(store.data.blocksDone[blockKey(m, b)]);
      return h(
        'li',
        { class: isDone ? 'done' : '' },
        h(
          'a',
          { href: lock.open ? `#screen=${blockKey(m, b)}` : undefined, 'aria-disabled': lock.open ? undefined : 'true' },
          h('span', { class: 't-dot', 'aria-hidden': 'true' }, isDone ? icon('check', 14) : String(i + 1)),
          h('span', null, h('span', { class: 't-title' }, tr(b.title)), h('span', { class: 't-kind' }, t(KIND_KEY[b.type]))),
          h('span', { class: 't-min' }, t('min', { n: b.min })),
        ),
      );
    }),
  );

  const lockedNote = !lock.open
    ? h(
        'div',
        { class: 'notice' },
        h('strong', null, t('lockedTitle')),
        lock.at ? t('lockedUntil', { time: new Date(lock.at).toLocaleString(state.lang) }) : t('lockedPrev'),
      )
    : null;

  const facilitator = h(
    'details',
    { class: 'facil' },
    h('summary', null, t('facilitatorCards')),
    h('h4', null, t('facOpen')),
    h('p', null, tr(m.facilitator.open)),
    h('h4', null, t('facQuestions')),
    h('ul', null, m.facilitator.questions.map((q) => h('li', null, tr(q)))),
    h('h4', null, t('facAllowed')),
    h('p', null, FACILITATOR_RULES.allowed.map(tr).join(' · ')),
    h('h4', null, t('facCut')),
    h('ul', null, FACILITATOR_RULES.cut.map((c) => h('li', null, h('strong', null, `${tr(c.track)}: `), `”${tr(c.line)}”`))),
    m.facilitator.note ? [h('h4', null, t('facNote')), h('p', null, tr(m.facilitator.note))] : null,
    h('h4', null, t('facClose')),
    h('p', null, tr(m.facilitator.close)),
  );

  return h(
    'div',
    null,
    h(
      'section',
      { class: 'banner' },
      img(m.image, { sizes: '100vw', eager: true }),
      h(
        'div',
        { class: 'wrap' },
        h('nav', { class: 'crumbs', 'aria-label': t('breadcrumb') }, h('a', { href: '#screen=home' }, t('course')), ' / ', `${t('partN', { n: ['I', 'II', 'III'][m.part - 1] })} · ${tr(PARTS[m.part].title)}`),
        h('p', { class: 'eyebrow' }, `${t('moduleN', { n: m.num })} · ${t('minutes', { n: moduleMinutes(m) })}`),
        h('h1', { tabindex: -1 }, tr(m.title)),
        tr(m.title) !== m.title.sv ? h('p', { class: 'orig', lang: 'sv' }, m.title.sv) : null,
      ),
    ),
    h(
      'div',
      { class: 'wrap' },
      h(
        'div',
        { class: 'layout' },
        h(
          'div',
          { class: 'stack' },
          followUp(m, rerender),
          m.needsAuthor ? h('div', { class: 'notice' }, h('strong', null, t('draftContent')), tr(m.needsAuthor)) : null,
          done
            ? h(
                'div',
                { class: 'panel complete', tabindex: -1 },
                h('div', { class: 'mark' }, icon('check', 26)),
                h('h2', null, t('moduleComplete')),
                store.data.assignments[m.id]
                  ? h('p', null, t('yourAssignmentWas'), h('br'), h('strong', null, `”${store.data.assignments[m.id].text}”`))
                  : h('p', { class: 'muted' }, t('noAssignmentWritten')),
                next ? h('a', { class: 'btn', href: `#screen=${next.id}` }, t('toModule', { n: next.num }), icon('arrow-right', 16)) : h('a', { class: 'btn', href: '#screen=diploma' }, t('toDiploma')),
              )
            : null,
          h(
            'div',
            { class: 'panel' },
            h('p', { class: 'eyebrow' }, t('goal')),
            h('p', { class: 'goal' }, tr(m.goal)),
            h('p', { class: 'muted', style: { margin: 0 } }, tr(m.teaser)),
          ),
          h('div', { class: 'panel' }, h('h2', null, t('keyTerms')), h('ul', { class: 'chips' }, m.keyTerms.map((k) => h('li', null, tr(k))))),
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('sources')),
            h('ul', { class: 'sources' }, m.sources.map((s) => h('li', null, srcLabel(s, state.lang)))),
          ),
          facilitator,
        ),
        h(
          'aside',
          null,
          h(
            'div',
            { class: 'panel', style: { position: 'sticky', top: '84px' } },
            h('h2', null, t('flow')),
            lockedNote,
            timeline,
            lock.open
              ? h('a', { class: 'btn', href: `#screen=${blockKey(m, firstOpen)}`, style: { width: '100%', marginTop: '14px' } }, startLabel, icon('arrow-right', 16))
              : null,
            h('p', { class: 'small muted', style: { marginTop: '12px' } }, t('arcNote')),
          ),
        ),
      ),
    ),
  );
}
