// Diploma and certificate (LERNKONZEPT chapter 8). The diploma confirms participation;
// competence needs certificate + authorisation + responsibility – and only the learner's
// own organisation grants authorisation.

import { MODULES } from '../content/course';
import { h } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { store } from '../lib/store';
import { printSection } from '../lib/print';
import { isModuleDone, modulesDoneCount, quizResult } from '../lib/progress';
import { icon } from '../lib/ui';

export function renderDiploma(): HTMLElement {
  const done = modulesDoneCount();
  const complete = done === MODULES.length;
  const lastDone = Math.max(0, ...Object.values(store.data.modulesDone));
  const date = new Date(complete ? lastDone : Date.now()).toLocaleDateString(state.lang, { year: 'numeric', month: 'long', day: 'numeric' });

  const quizPassed = MODULES.filter((m) => {
    const r = quizResult(m);
    return r && r.first !== undefined && r.first >= Math.ceil(r.total * (2 / 3));
  }).length;
  const assignmentsDone = Object.values(store.data.assignments).filter((a) => a.status === 'done').length;

  const nameInput = h('input', {
    type: 'text',
    id: 'diploma-name',
    value: store.data.diplomaName ?? '',
    oninput: (e: Event) => {
      const v = (e.target as HTMLInputElement).value;
      store.update((d) => {
        d.diplomaName = v;
      });
      whoEl.textContent = v || t('yourName');
    },
  });
  const whoEl = h('p', { class: 'who' }, store.data.diplomaName || t('yourName'));

  const diploma = h(
    'div',
    { class: 'diploma' },
    h('p', { class: 'eyebrow' }, 'Ta Befäl – OVÄLD – Börja om!'),
    h('h2', null, t('diploma')),
    h('p', { class: 'muted' }, t('diplomaFor')),
    whoEl,
    h('p', null, t('diplomaText')),
    h('p', { class: 'muted small' }, date),
    h('p', { class: 'formula' }, t('formula')),
    h('p', { class: 'small' }, h('strong', null, t('authorityLine'))),
    h('p', { class: 'small muted' }, t('diplomaMeaning')),
    h('p', { class: 'small', style: { marginTop: '26px' } }, 'Torbjörn Holkner · 3H Hagnilsk AB – Hägn. Habil. Hövisk.'),
    complete ? null : h('p', { class: 'badge', style: { marginTop: '10px' } }, t('previewOnly', { n: done, total: MODULES.length })),
  );

  const criteria: { label: string; ok: boolean; value: string }[] = [
    { label: t('critModules'), ok: complete, value: `${done} / ${MODULES.length}` },
    { label: t('critQuiz'), ok: quizPassed === MODULES.length, value: `${quizPassed} / ${MODULES.length}` },
    { label: t('critAssignments'), ok: assignmentsDone >= 8, value: `${assignmentsDone} / 8` },
    { label: t('critExam'), ok: false, value: t('courseVersion') },
    { label: t('critTalk'), ok: false, value: t('optional') },
  ];

  return h(
    'div',
    { class: 'wrap' },
    h('div', { class: 'page-head read' }, h('p', { class: 'eyebrow' }, t('completion')), h('h1', { tabindex: -1 }, t('diplomaTitle')), h('p', { class: 'muted' }, t('diplomaLead'))),
    h(
      'div',
      { class: 'layout' },
      h(
        'div',
        { class: 'stack' },
        diploma,
        h(
          'div',
          { class: 'btn-row no-print' },
          h('button', { type: 'button', class: 'btn', disabled: !complete, onclick: () => printSection(diploma, t('diploma')) }, icon('print', 16), t('printDiploma')),
          complete ? null : h('span', { class: 'small muted' }, t('diplomaAfterAll')),
        ),
      ),
      h(
        'aside',
        { class: 'stack' },
        h('div', { class: 'panel' }, h('div', { class: 'field', style: { marginTop: 0 } }, h('label', { for: 'diploma-name' }, t('nameOnDiploma')), nameInput), h('p', { class: 'private-note' }, t('nameStaysLocal'))),
        h(
          'div',
          { class: 'panel' },
          h('h2', null, t('modulesProgress')),
          h(
            'ul',
            { class: 'sources', style: { listStyle: 'none', paddingLeft: 0 } },
            MODULES.map((m) =>
              h('li', null, isModuleDone(m) ? '✓ ' : '○ ', h('a', { href: `#screen=${m.id}` }, `${m.num}. ${tr(m.title)}`)),
            ),
          ),
        ),
        h(
          'div',
          { class: 'panel' },
          h('h2', null, t('certificate')),
          h('p', { class: 'small muted' }, t('certificateLead')),
          h(
            'dl',
            { class: 'kv' },
            criteria.flatMap((c) => [h('dt', null, `${c.ok ? '✓' : '○'} ${c.label}`), h('dd', null, c.value)]),
          ),
          h('p', { class: 'small', style: { marginTop: '12px' } }, t('authorityLine')),
        ),
      ),
    ),
  );
}
