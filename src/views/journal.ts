// "Min loggbok": everything the learner has written, gathered per module. Private; it can be
// printed, downloaded as a file, moved to another device, or deleted completely.

import { MODULES, blockKey } from '../content/course';
import type { Module } from '../content/types';
import { averages, radar } from '../blocks/selfassess';
import { SELFTEST } from '../content/selftest';
import { h } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { store } from '../lib/store';
import { printSection } from '../lib/print';
import { icon } from '../lib/ui';

interface Entry {
  label: string;
  value: string;
}

function entriesFor(m: Module): Entry[] {
  const out: Entry[] = [];
  for (const b of m.blocks) {
    const id = blockKey(m, b);
    const add = (label: string, key: string, map?: (v: string) => string): void => {
      const v = store.text(key);
      if (v.trim()) out.push({ label, value: map ? map(v) : v });
    };
    switch (b.type) {
      case 'inversion':
        add(`${tr(b.title)} – ${t('ownHabit')}`, `${id}.own.habit`);
        add(`${tr(b.title)} – ${t('ownTurned')}`, `${id}.own.turned`);
        break;
      case 'ladder':
        b.situations.forEach((s, i) => add(tr(s.text), `${id}.why.${i}`));
        break;
      case 'builder':
        b.fields.forEach((f) =>
          add(`${tr(b.title)} – ${tr(f.label)}`, `${id}.${f.id}`, (v) => (f.choices ? tr(f.choices.find((c) => c.id === v)?.label ?? { sv: v, de: v, en: v }) : v)),
        );
        break;
      case 'objection':
        b.items.forEach((it, i) => add(`”${tr(it.objection)}”`, `${id}.answer.${i}`));
        break;
      case 'reflection':
        b.prompts.forEach((p, i) => add(tr(p), `${id}.r${i}`));
        break;
      default:
        break;
    }
  }
  const a = store.data.assignments[m.id];
  if (a) {
    const status = a.status === 'done' ? t('done') : a.status === 'notdone' ? t('notDone') : t('open');
    out.push({ label: `${t('befalsuppdrag')} (${status})`, value: a.text });
  }
  return out;
}

function download(): void {
  const blob = new Blob([store.exportJson()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = h('a', { href: url, download: `ta-befal-${new Date().toISOString().slice(0, 10)}.json` });
  document.body.append(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function renderJournal(rerender: () => void): HTMLElement {
  const groups = MODULES.map((m) => ({ m, entries: entriesFor(m) })).filter((g) => g.entries.length);
  const st = store.data.selftest;
  const entryDone = st.entry && SELFTEST.every((_, i) => (st.entry?.[i] ?? 0) > 0);
  const exitDone = st.exit && SELFTEST.every((_, i) => (st.exit?.[i] ?? 0) > 0);

  const content = h(
    'div',
    null,
    entryDone || exitDone
      ? h(
          'div',
          { class: 'panel' },
          h('h2', null, t('selftestTitle')),
          radar([
            ...(entryDone && st.entry ? [{ values: averages(st.entry), color: 'var(--brass)', label: t('entryTest') }] : []),
            ...(exitDone && st.exit ? [{ values: averages(st.exit), color: 'var(--accent)', label: t('exitTest') }] : []),
          ]),
        )
      : null,
    groups.length
      ? groups.map((g) =>
          h(
            'section',
            { class: 'j-module panel' },
            h('h2', null, `${t('moduleN', { n: g.m.num })} · ${tr(g.m.title)}`),
            g.entries.map((e) => h('div', { class: 'j-entry' }, h('h4', null, e.label), h('p', null, e.value))),
          ),
        )
      : h('div', { class: 'panel' }, h('p', { style: { margin: 0 } }, t('journalEmpty'))),
  );

  const fileInput = h('input', {
    type: 'file',
    accept: 'application/json,.json',
    class: 'sr-only',
    id: 'import-file',
    onchange: async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const ok = store.importJson(await file.text());
      window.alert(ok ? t('importOk') : t('importFail'));
      rerender();
    },
  });

  return h(
    'div',
    { class: 'wrap' },
    h(
      'div',
      { class: 'page-head read' },
      h('p', { class: 'eyebrow' }, t('private')),
      h('h1', { tabindex: -1 }, t('journalTitle')),
      h('p', { class: 'muted' }, t('journalLead')),
      !store.available ? h('div', { class: 'notice' }, t('storageUnavailable')) : null,
    ),
    h(
      'div',
      { class: 'btn-row no-print', style: { margin: '18px 0 26px' } },
      h('button', { type: 'button', class: 'btn', onclick: () => printSection(content, `${t('journalTitle')} – Ta Befäl`) }, icon('print', 16), t('printSave')),
      h('button', { type: 'button', class: 'btn ghost', onclick: download }, t('downloadData')),
      h('label', { class: 'btn ghost', for: 'import-file', tabindex: 0, onkeydown: (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); } } }, t('importData')),
      fileInput,
      h(
        'button',
        {
          type: 'button',
          class: 'btn danger',
          onclick: () => {
            if (!window.confirm(t('confirmDeleteAll'))) return;
            store.clear();
            rerender();
          },
        },
        t('deleteAll'),
      ),
    ),
    h('div', { class: 'stack', style: { paddingBottom: '72px' }, lang: state.lang }, content),
  );
}
