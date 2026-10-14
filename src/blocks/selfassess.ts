// B09 – private self-assessment. Entry (M01) and exit (M12) use the shared Hägn–Habil–Hövisk
// test and are compared in a radar chart. Nothing leaves the browser.

import type { SelfAssessBlock } from '../content/types';
import { DIMS, SELFTEST, type Dim } from '../content/selftest';
import { h, s } from '../lib/dom';
import { t, tr } from '../lib/app';
import { store } from '../lib/store';
import { privateNote } from '../lib/ui';
import type { BlockCtx } from './ctx';

function scale(value: number | undefined, label: string, k: string, onPick: (n: number) => void): HTMLElement {
  return h(
    'div',
    null,
    h(
      'div',
      { class: 'scale', role: 'group', 'aria-label': label },
      [1, 2, 3, 4, 5].map((n) =>
        h('button', { type: 'button', 'data-k': `${k}-${n}`, 'aria-pressed': value === n ? 'true' : 'false', 'aria-label': `${n} – ${label}`, onclick: () => onPick(n) }, String(n)),
      ),
    ),
    h('div', { class: 'scale-legend', 'aria-hidden': 'true' }, h('span', null, t('scaleLow')), h('span', null, t('scaleHigh'))),
  );
}

export function averages(values: number[]): Record<Dim, number> {
  const out = { hagn: 0, habil: 0, hovisk: 0 } as Record<Dim, number>;
  for (const d of DIMS) {
    const vals = SELFTEST.map((q, i) => (q.dim === d.id ? values[i] : 0)).filter((v) => v > 0);
    out[d.id] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  }
  return out;
}

export function radar(series: { values: Record<Dim, number>; color: string; label: string }[]): HTMLElement {
  const size = 320;
  const c = size / 2;
  const r = 110;
  const angle = (i: number): number => -Math.PI / 2 + (i * 2 * Math.PI) / DIMS.length;
  const point = (i: number, v: number): [number, number] => [c + Math.cos(angle(i)) * r * (v / 5), c + Math.sin(angle(i)) * r * (v / 5)];
  const ring = (v: number): string => DIMS.map((_, i) => point(i, v).join(',')).join(' ');

  // A triangle (three dimensions) leaves the lower part empty; crop the view box to the drawing.
  const height = DIMS.length === 3 ? Math.round(c + r * 0.62 + 24) : size;
  const svg = s(
    'svg',
    { class: 'radar', viewBox: `0 0 ${size} ${height}`, role: 'img', 'aria-label': series.map((se) => `${se.label}: ${DIMS.map((d) => `${d.name} ${se.values[d.id].toFixed(1)}`).join(', ')}`).join('; ') },
    [1, 2, 3, 4, 5].map((v) => s('polygon', { points: ring(v), style: { fill: 'none', stroke: 'var(--border-strong)' }, 'stroke-width': v === 5 ? 1.5 : 0.8 })),
    DIMS.map((_, i) => {
      const [x, y] = point(i, 5);
      return s('line', { x1: c, y1: c, x2: x, y2: y, style: { stroke: 'var(--border-strong)' }, 'stroke-width': 0.8 });
    }),
    series.map((se) =>
      s('polygon', {
        points: DIMS.map((d, i) => point(i, se.values[d.id]).join(',')).join(' '),
        style: { fill: se.color, stroke: se.color },
        'fill-opacity': 0.18,
        'stroke-width': 2.2,
      }),
    ),
    DIMS.map((d, i) => {
      const [x, y] = point(i, 6.1);
      return s('text', { x, y: y + 4, 'text-anchor': 'middle', 'font-weight': 600 }, d.name);
    }),
  );
  return h(
    'div',
    null,
    svg,
    h('div', { class: 'legend' }, series.map((se) => h('span', null, h('i', { style: { background: se.color } }), se.label))),
  );
}

export function renderSelfAssess(b: SelfAssessBlock, ctx: BlockCtx): HTMLElement {
  if (b.mode === 'module') {
    const items = b.items ?? [];
    const values = store.answer<number[]>(ctx.id) ?? [];
    return h(
      'div',
      { class: 'stack' },
      h(
        'div',
        { class: 'card' },
        h('p', null, tr(b.intro)),
        items.map((item, i) =>
          h(
            'div',
            { class: 'sa-item' },
            h('p', { style: { margin: '0 0 4px', fontWeight: '550' } }, tr(item)),
            scale(values[i], tr(item), `q${i}`, (n) => {
              const next = [...values];
              next[i] = n;
              store.setAnswer(ctx.id, next);
              ctx.refresh();
            }),
          ),
        ),
        privateNote(),
      ),
    );
  }

  const which = b.mode;
  const values = (which === 'entry' ? store.data.selftest.entry : store.data.selftest.exit) ?? [];
  const complete = SELFTEST.every((_, i) => (values[i] ?? 0) > 0);
  const entry = store.data.selftest.entry;
  const entryComplete = entry && SELFTEST.every((_, i) => (entry[i] ?? 0) > 0);

  const pick = (i: number, n: number): void => {
    store.update((d) => {
      const arr = [...((which === 'entry' ? d.selftest.entry : d.selftest.exit) ?? [])];
      arr[i] = n;
      if (which === 'entry') {
        d.selftest.entry = arr;
        d.selftest.entryAt = Date.now();
      } else {
        d.selftest.exit = arr;
        d.selftest.exitAt = Date.now();
      }
    });
    ctx.refresh();
  };

  const series = [];
  if (which === 'exit' && entryComplete) series.push({ values: averages(entry), color: 'var(--brass)', label: t('entryTest') });
  if (complete) series.push({ values: averages(values), color: 'var(--accent)', label: which === 'entry' ? t('entryTest') : t('exitTest') });

  return h(
    'div',
    { class: 'stack' },
    h(
      'div',
      { class: 'card' },
      h('p', null, tr(b.intro)),
      h('p', { class: 'small muted' }, DIMS.map((d) => `${d.name} – ${tr(d.meaning)}`).join(' · ')),
      SELFTEST.map((q, i) =>
        h(
          'div',
          { class: 'sa-item' },
          h('span', { class: 'sa-dim' }, DIMS.find((d) => d.id === q.dim)?.name ?? ''),
          h('p', { style: { margin: '2px 0 4px', fontWeight: '550' } }, tr(q.text)),
          scale(values[i], tr(q.text), `st${i}`, (n) => pick(i, n)),
        ),
      ),
      privateNote(),
    ),
    complete
      ? h(
          'div',
          { class: 'card', tabindex: -1 },
          h('h3', null, which === 'entry' ? t('yourStart') : t('yourChange')),
          radar(series),
          h('p', { class: 'small muted', style: { marginTop: '12px' } }, which === 'entry' ? t('entryAfter') : entryComplete ? t('exitAfter') : t('exitNoEntry')),
        )
      : null,
  );
}
