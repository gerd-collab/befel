// Start page: hero, the four-step arc, the three parts with their modules.

import { ARC, MODULES, PARTS, moduleMinutes } from '../content/course';
import type { Module, Part } from '../content/types';
import { h } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { STEP_WORD } from '../content/books';
import { blocksDone, continueModule, isModuleDone, modulesDoneCount, unlockInfo } from '../lib/progress';
import { icon, img, quote } from '../lib/ui';

export function moduleCard(m: Module): HTMLElement {
  const done = isModuleDone(m);
  const count = blocksDone(m);
  const lock = unlockInfo(m);
  const pct = Math.round((count / m.blocks.length) * 100);
  return h(
    'a',
    { class: `mcard${lock.open ? '' : ' locked'}`, href: `#screen=${m.id}` },
    h(
      'div',
      { class: 'thumb' },
      img(m.image, { sizes: '(max-width: 640px) 100vw, 360px', decorative: true }),
      h('span', { class: 'num' }, t('moduleN', { n: m.num })),
      h(
        'span',
        { class: 'state' },
        done
          ? h('span', { class: 'badge ok' }, icon('check', 13), t('completed'))
          : !lock.open
            ? h('span', { class: 'badge' }, icon('lock', 13), t('locked'))
            : m.needsAuthor
              ? h('span', { class: 'badge', title: t('draftContent') }, t('draftShort'))
              : null,
      ),
    ),
    h(
      'div',
      { class: 'body' },
      h('h3', null, tr(m.title)),
      tr(m.title) !== m.title.sv ? h('span', { class: 'orig', lang: 'sv' }, m.title.sv) : null,
      h('p', null, tr(m.teaser)),
      h(
        'div',
        { class: 'meta' },
        h('span', null, t('minutes', { n: moduleMinutes(m) })),
        count > 0 && !done
          ? h('span', { class: 'progress-mini', role: 'img', 'aria-label': t('progressPct', { n: pct }) }, h('span', { style: { width: `${pct}%` } }))
          : null,
      ),
    ),
  );
}

export function renderHome(): HTMLElement {
  const next = continueModule();
  const started = modulesDoneCount() > 0 || blocksDone(next) > 0;
  const parts = ([1, 2, 3] as Part[]).map((p) => {
    const part = PARTS[p];
    return h(
      'section',
      { class: 'part', 'aria-labelledby': `part-${p}` },
      h(
        'div',
        { class: 'part-banner' },
        img(part.image, { sizes: '(max-width: 1180px) 100vw, 1180px', decorative: true }),
        h(
          'div',
          null,
          h('p', { class: 'eyebrow' }, `${t('partN', { n: ['I', 'II', 'III'][p - 1] })} · ${part.books.split('Steg').join(STEP_WORD[state.lang])}`),
          h('h2', { id: `part-${p}` }, tr(part.title)),
          h('p', { class: 'part-q' }, tr(part.question)),
        ),
      ),
      h('div', { class: 'grid' }, MODULES.filter((m) => m.part === p).map(moduleCard)),
    );
  });

  return h(
    'div',
    null,
    h(
      'section',
      { class: 'hero' },
      img('lighthouse-storm', { sizes: '100vw', eager: true }),
      h(
        'div',
        { class: 'wrap' },
        h('p', { class: 'eyebrow' }, t('heroEyebrow')),
        h('h1', { tabindex: -1 }, 'Ta Befäl'),
        h('p', { class: 'tagline' }, t('heroTagline')),
        h('p', { class: 'lead' }, t('heroLead')),
        h(
          'div',
          { class: 'btn-row', style: { marginTop: '26px' } },
          h(
            'a',
            { class: 'btn light', href: `#screen=${next.id}` },
            started ? t('continueModule', { n: next.num }) : t('startCourse'),
            icon('arrow-right', 16),
          ),
          h('a', { class: 'btn ghost', href: '#screen=about', style: { color: '#f4f1ea', borderColor: 'rgb(255 255 255 / 0.4)' } }, t('aboutCourse')),
        ),
        h(
          'div',
          { class: 'hero-meta' },
          h('span', null, t('metaModules')),
          h('span', null, t('metaMinutes')),
          h('span', null, t('metaLanguages')),
          h('span', null, h('span', { class: 'badge on-dark' }, t('draftBadge'))),
        ),
      ),
    ),
    h(
      'section',
      { class: 'section' },
      h(
        'div',
        { class: 'wrap' },
        h(
          'div',
          { class: 'section-head' },
          h('p', { class: 'eyebrow' }, t('howEyebrow')),
          h('h2', null, t('howTitle')),
          h('p', { class: 'muted' }, t('howText')),
        ),
        h(
          'ol',
          { class: 'arc' },
          ARC.map((a) => h('li', null, h('em', { lang: 'sv' }, a.sv), h('strong', null, tr(a.title)), h('p', null, tr(a.text)))),
        ),
        parts,
      ),
    ),
    h(
      'section',
      { class: 'quote-band' },
      h(
        'div',
        { class: 'wrap' },
        quote(
          {
            sv: 'Ansvar är inte något man säger. Det är något man bär.',
            de: 'Verantwortung ist nichts, was man sagt. Sie ist etwas, das man trägt.',
            en: 'Responsibility is not something you say. It is something you carry.',
            src: { book: 'steg1', ch: 'Inledning' },
          },
          'quote-band-q',
        ),
      ),
    ),
  );
}
