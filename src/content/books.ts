// The book series by Torbjörn Holkner that the course is built on.

import type { BookId, Lang, Src } from './types';

export const BOOKS: Record<BookId, { title: string; step: string }> = {
  steg1: { title: 'Ta Befäl – över dig själv', step: 'Steg 1' },
  steg2: { title: 'Ta Befäl – bli OVÄLD', step: 'Steg 2' },
  'steg3-1': { title: 'Ta Befäl – över andra, del I', step: 'Steg 3' },
  'steg3-2': { title: 'Ta Befäl – över andra, del II', step: 'Steg 3' },
  steg4: { title: 'Ta Befäl – över organisationer', step: 'Steg 4' },
  steg5: { title: 'Ta Befäl – Börja om!', step: 'Steg 5' },
  folder: { title: 'Webbkurs Ta Befäl (folder)', step: '' },
};

export const STEP_WORD: Record<Lang, string> = { sv: 'Steg', de: 'Stufe', en: 'Step' };

/** "Ta Befäl – över andra, del II · Kap. 8 Att sätta gränsen" */
export function srcLabel(src: Src, lang: Lang): string {
  const b = BOOKS[src.book];
  const step = b.step ? ` (${b.step.replace('Steg', STEP_WORD[lang])})` : '';
  return `${b.title}${step} · ${src.ch}`;
}
