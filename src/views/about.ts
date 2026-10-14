// About the course: structure, didactics, books, privacy, draft status, embedding and image credits.

import { BOOKS } from '../content/books';
import { IMAGES, type ImageInfo } from '../content/images';
import { MODULES, moduleMinutes } from '../content/course';
import { h } from '../lib/dom';
import { t, tr } from '../lib/app';
import { img } from '../lib/ui';
import type { UiKey } from '../i18n';

const list = (keys: UiKey[]): HTMLElement => h('ul', null, keys.map((k) => h('li', null, t(k))));

export function renderAbout(): HTMLElement {
  const total = MODULES.reduce((s, m) => s + moduleMinutes(m), 0);
  const credits = Object.entries(IMAGES as Record<string, ImageInfo>).map(([key, info]) =>
    h(
      'tr',
      null,
      h('td', null, img(key, { sizes: '92px', decorative: true })),
      h('td', null, h('a', { href: info.page, target: '_blank', rel: 'noopener noreferrer' }, info.title)),
      h('td', null, info.author),
      h('td', null, info.licenseUrl ? h('a', { href: info.licenseUrl, target: '_blank', rel: 'noopener noreferrer license' }, info.license) : info.license),
    ),
  );

  return h(
    'div',
    null,
    h(
      'section',
      { class: 'banner' },
      img('cargo-sevensky', { sizes: '100vw', eager: true }),
      h('div', { class: 'wrap' }, h('p', { class: 'eyebrow' }, t('aboutEyebrow')), h('h1', { tabindex: -1 }, t('aboutTitle')), h('p', { style: { maxWidth: '640px', margin: 0 } }, t('aboutLead'))),
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
          h('div', { class: 'panel' }, h('h2', null, t('aboutStructureTitle')), h('p', null, t('aboutStructure', { minutes: Math.round(total / 60) }))),
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('aboutDidacticsTitle')),
            h('p', null, t('aboutDidactics')),
            list(['did1', 'did2', 'did3', 'did4', 'did5', 'did6']),
          ),
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('aboutUseTitle')),
            list(['use1', 'use2', 'use3', 'use4', 'use5']),
          ),
          h(
            'div',
            { class: 'panel', id: 'privacy' },
            h('h2', null, t('privacyTitle')),
            h('p', null, t('privacyText')),
            h('p', null, h('a', { href: '#screen=journal' }, t('journalTitle'))),
          ),
          h(
            'div',
            { class: 'panel', id: 'status' },
            h('h2', null, t('statusTitle')),
            h('p', null, t('statusLead')),
            list(['status1', 'status2', 'status3', 'status4', 'status5']),
          ),
          h(
            'div',
            { class: 'panel', id: 'credits' },
            h('h2', null, t('creditsTitle')),
            h('p', { class: 'small muted' }, t('creditsLead')),
            h(
              'table',
              { class: 'credits' },
              h('thead', null, h('tr', null, h('th', null, ''), h('th', null, t('creditImage')), h('th', null, t('creditAuthor')), h('th', null, t('creditLicense')))),
              h('tbody', null, credits),
            ),
          ),
        ),
        h(
          'aside',
          { class: 'stack' },
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('booksTitle')),
            h(
              'ul',
              { class: 'sources' },
              Object.values(BOOKS)
                .filter((b) => b.step)
                .map((b) => h('li', null, h('strong', null, b.title), ` (${b.step})`)),
            ),
            h('p', { class: 'small muted' }, t('booksAuthor')),
          ),
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('formatsTitle')),
            list(['format1', 'format2', 'format3', 'format4']),
          ),
          h(
            'div',
            { class: 'panel' },
            h('h2', null, t('embedTitle')),
            h('p', { class: 'small' }, t('embedText')),
            h('dl', { class: 'kv small' }, [
              h('dt', null, '?lang='), h('dd', null, 'sv · de · en'),
              h('dt', null, '?theme='), h('dd', null, 'light · dark'),
              h('dt', null, '?embed=1'), h('dd', null, t('embedHide')),
              h('dt', null, '?pace=1'), h('dd', null, t('embedPace')),
              h('dt', null, '#screen='), h('dd', null, 'm08 · m08-ladder · models · glossary'),
            ]),
          ),
          h('div', { class: 'panel' }, h('h2', null, t('contactTitle')), h('p', { class: 'small' }, t('contactText'))),
          h('p', { class: 'small muted' }, `${MODULES.length} ${t('modulesWord')} · ${MODULES.reduce((s, m) => s + m.blocks.length, 0)} ${t('blocksWord')} · ${tr({ sv: 'Version', de: 'Version', en: 'Version' })} 0.1`),
        ),
      ),
    ),
  );
}
