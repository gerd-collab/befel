// Content checks, run by `npm run check:content` and in development. Returns a list of problems.

import { MODULES, PARTS } from './course';
import { GLOSSARY } from './glossary';
import { MODELS } from './models';
import { IMAGES } from './images';
import { LANGS } from './types';
import sv from '../i18n/sv.json';
import de from '../i18n/de.json';
import en from '../i18n/en.json';

function isTrilingual(v: unknown): v is Record<string, string> {
  return typeof v === 'object' && v !== null && 'sv' in v && 'de' in v && 'en' in v;
}

/** Walk any content object and report trilingual texts with an empty language. */
function walk(value: unknown, path: string, out: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`, out));
    return;
  }
  if (typeof value !== 'object' || value === null) return;
  if (isTrilingual(value)) {
    for (const lang of LANGS) {
      const text = value[lang];
      if (typeof text !== 'string' || !text.trim()) out.push(`${path}: missing ${lang}`);
    }
  }
  for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`, out);
}

export function validate(): string[] {
  const out: string[] = [];
  const images = new Set(Object.keys(IMAGES));
  const img = (key: string | undefined, where: string): void => {
    if (key && !images.has(key)) out.push(`${where}: unknown image "${key}"`);
  };

  // UI string parity
  const keys = (o: object): string[] => Object.keys(o).sort();
  for (const [lang, dict] of [['de', de], ['en', en]] as const) {
    const missing = keys(sv).filter((k) => !(k in dict));
    const extra = keys(dict).filter((k) => !(k in sv));
    if (missing.length) out.push(`i18n/${lang}.json: missing ${missing.join(', ')}`);
    if (extra.length) out.push(`i18n/${lang}.json: extra ${extra.join(', ')}`);
  }

  Object.values(PARTS).forEach((p, i) => img(p.image, `part ${i + 1}`));
  MODELS.forEach((m) => walk(m, `model ${m.id}`, out));
  GLOSSARY.forEach((g) => walk(g, `glossary ${g.sv}`, out));

  MODULES.forEach((m, mi) => {
    const where = m.id;
    walk(m, where, out);
    img(m.image, where);
    if (m.num !== mi + 1) out.push(`${where}: num ${m.num} out of order`);
    if (m.keyTerms.length > 5) out.push(`${where}: more than five key terms`);
    const minutes = m.blocks.reduce((s, b) => s + b.min, 0);
    if (minutes < 43 || minutes > 47) out.push(`${where}: ${minutes} minutes (expected about 45)`);
    const slugs = new Set<string>();
    m.blocks.forEach((b) => {
      const at = `${where}-${b.slug}`;
      if (slugs.has(b.slug)) out.push(`${at}: duplicate slug`);
      slugs.add(b.slug);
      if (!/^[a-z0-9-]+$/.test(b.slug)) out.push(`${at}: slug must be kebab-case`);
      switch (b.type) {
        case 'lesson':
          if (b.cards.length > 5) out.push(`${at}: more than five concept cards`);
          b.slides.forEach((s, i) => img(s.image, `${at} slide ${i + 1}`));
          break;
        case 'scenario':
          img(b.image, at);
          b.nodes.forEach((n, i) => {
            const book = n.options.filter((o) => o.book).length;
            if (book !== 1) out.push(`${at} node ${i + 1}: ${book} book options (expected 1)`);
            if (n.options.length < 2 || n.options.length > 4) out.push(`${at} node ${i + 1}: needs 2–4 options`);
          });
          break;
        case 'quiz':
          b.questions.forEach((q, i) => {
            const ok = q.options.filter((o) => o.ok).length;
            if (ok !== 1) out.push(`${at} question ${i + 1}: ${ok} correct options (expected 1)`);
          });
          break;
        case 'inversion':
          b.items.forEach((it, i) => {
            if (!it.options[it.inverted]) out.push(`${at} item ${i + 1}: inverted index out of range`);
          });
          break;
        case 'classify': {
          const cats = new Set(b.categories.map((c) => c.id));
          b.items.forEach((it, i) => {
            if (!cats.has(it.cat)) out.push(`${at} item ${i + 1}: unknown category "${it.cat}"`);
          });
          break;
        }
        case 'builder': {
          const fields = new Set(b.fields.map((f) => f.id));
          b.checks.forEach((c) => {
            if (!fields.has(c.field)) out.push(`${at}: check refers to unknown field "${c.field}"`);
          });
          break;
        }
        default:
          break;
      }
    });
    if (m.blocks[m.blocks.length - 1]?.type !== 'assignment') out.push(`${where}: must end with the command assignment`);
  });

  if (!MODULES.some((m) => m.blocks.some((b) => b.type === 'selfassess' && b.mode === 'entry'))) out.push('no entry self-test');
  if (!MODULES.some((m) => m.blocks.some((b) => b.type === 'selfassess' && b.mode === 'exit'))) out.push('no exit self-test');
  return out;
}
