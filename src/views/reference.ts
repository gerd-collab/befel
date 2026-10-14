// Models and glossary pages.

import { MODELS } from '../content/models';
import { GLOSSARY } from '../content/glossary';
import { findModule } from '../content/course';
import { srcLabel } from '../content/books';
import { h, replace } from '../lib/dom';
import { state, t, tr } from '../lib/app';
import { img } from '../lib/ui';

function banner(image: string, eyebrow: string, title: string, lead: string): HTMLElement {
  return h(
    'section',
    { class: 'banner' },
    img(image, { sizes: '100vw', eager: true }),
    h('div', { class: 'wrap' }, h('p', { class: 'eyebrow' }, eyebrow), h('h1', { tabindex: -1 }, title), h('p', { style: { maxWidth: '640px', margin: 0 } }, lead)),
  );
}

export function renderModels(): HTMLElement {
  return h(
    'div',
    null,
    banner('chart-culebra', t('reference'), t('modelsTitle'), t('modelsLead')),
    h(
      'div',
      { class: 'wrap section' },
      h(
        'div',
        { class: 'model-grid' },
        MODELS.map((m) =>
          h(
            'article',
            { class: 'panel model', id: `model-${m.id}` },
            h('h3', null, tr(m.name)),
            h(
              'ul',
              { class: 'flow' },
              m.flow.flatMap((f, i) => {
                const item = h('li', null, tr(f));
                return m.shape === 'chain' && i > 0 ? [h('li', { class: 'arrow', 'aria-hidden': 'true' }, '→'), item] : [item];
              }),
            ),
            h('p', { style: { margin: 0 } }, tr(m.essence)),
            h('p', { class: 'small muted', style: { margin: '10px 0 0' } }, srcLabel(m.src, state.lang)),
            h(
              'div',
              { class: 'links' },
              m.modules.map((id) => {
                const mod = findModule(id);
                return mod ? h('a', { href: `#screen=${mod.id}` }, `${t('moduleN', { n: mod.num })} · ${tr(mod.title)}`) : null;
              }),
            ),
          ),
        ),
      ),
    ),
  );
}

export function renderGlossary(): HTMLElement {
  const list = h('dl', { class: 'gloss' });
  const draw = (q: string): void => {
    const needle = q.trim().toLowerCase();
    const hits = GLOSSARY.filter((g) => !needle || [g.sv, tr(g.name), tr(g.text)].some((s) => s.toLowerCase().includes(needle)));
    replace(
      list,
      hits.length
        ? hits.map((g) =>
            h(
              'div',
              { class: 'panel' },
              h('dt', { lang: 'sv' }, g.sv, tr(g.name) !== g.sv ? h('small', { lang: state.lang }, tr(g.name)) : null),
              h('dd', null, tr(g.text), h('span', { class: 'src' }, srcLabel(g.src, state.lang))),
            ),
          )
        : h('p', { class: 'muted' }, t('noHits')),
    );
  };
  draw('');
  const search = h('input', {
    type: 'text',
    class: 'search',
    'aria-label': t('searchTerms'),
    placeholder: t('searchTerms'),
    oninput: (e: Event) => draw((e.target as HTMLInputElement).value),
  });
  return h(
    'div',
    null,
    banner('flag-table', t('reference'), t('glossaryTitle'), t('glossaryLead')),
    h('div', { class: 'wrap section' }, search, list),
  );
}
