// Course structure: three parts, twelve modules (titles from the course folder).

import { l, type Block, type L, type Module, type Part } from './types';
import { m01 } from './modules/m01';
import { m02 } from './modules/m02';
import { m03 } from './modules/m03';
import { m04 } from './modules/m04';
import { m05 } from './modules/m05';
import { m06 } from './modules/m06';
import { m07 } from './modules/m07';
import { m08 } from './modules/m08';
import { m09 } from './modules/m09';
import { m10 } from './modules/m10';
import { m11 } from './modules/m11';
import { m12 } from './modules/m12';

export const MODULES: Module[] = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12];

export const PARTS: Record<Part, { title: L; question: L; image: string; books: string }> = {
  1: {
    title: l('Över dig själv', 'Über dich selbst', 'Over yourself'),
    question: l('Bär jag det jag säger?', 'Trage ich, was ich sage?', 'Do I carry what I say?'),
    image: 'binnacle',
    books: 'Steg 1 · Steg 2',
  },
  2: {
    title: l('Över andra', 'Über andere', 'Over others'),
    question: l(
      'Bär jag ansvaret när andras vilja krockar med verkligheten?',
      'Trage ich die Verantwortung, wenn der Wille anderer mit der Wirklichkeit kollidiert?',
      'Do I carry the responsibility when other people’s will collides with reality?',
    ),
    image: 'rowing',
    books: 'Steg 3 · Steg 4',
  },
  3: {
    title: l('Över organisationen – och börja om', 'Über die Organisation – und neu beginnen', 'Over the organisation – and begin again'),
    question: l(
      'Håller systemet även när jag inte är där?',
      'Hält das System, auch wenn ich nicht da bin?',
      'Does the system hold even when I am not there?',
    ),
    image: 'windlass',
    books: 'Steg 4 · Steg 5',
  },
};

/** The four-step arc of every module, taken from the 50-minute lecture in book 1. */
export const ARC: { sv: string; title: L; text: L }[] = [
  {
    sv: 'Igenkänning',
    title: l('Igenkänning', 'Wiedererkennen', 'Recognition'),
    text: l('En situation som alla känner igen.', 'Eine Situation, die jeder kennt.', 'A situation everyone knows.'),
  },
  {
    sv: 'Skav',
    title: l('Skav', 'Reibung', 'Friction'),
    text: l('Inversionen – den obekväma vändningen.', 'Die Inversion – die unbequeme Umkehr.', 'The inversion – the uncomfortable reversal.'),
  },
  {
    sv: 'Klarhet',
    title: l('Klarhet', 'Klarheit', 'Clarity'),
    text: l('Modellen ur boken, kort och skarpt.', 'Das Modell aus dem Buch, kurz und scharf.', 'The model from the book, short and sharp.'),
  },
  {
    sv: 'Ansvar',
    title: l('Ansvar', 'Verantwortung', 'Responsibility'),
    text: l(
      'Ett beslut i scenariot och ett uppdrag för din egen verklighet.',
      'Eine Entscheidung im Szenario und ein Auftrag für deine eigene Wirklichkeit.',
      'A decision in the scenario and an assignment for your own reality.',
    ),
  },
];

/** Shared rules for facilitators, from the Instruktörshandbok in book 1. */
export const FACILITATOR_RULES = {
  allowed: [
    l('Förtydligande', 'Klärung', 'Clarification'),
    l('Konsekvens', 'Konsequenz', 'Consequence'),
    l('Tillämpning', 'Anwendung', 'Application'),
  ],
  cut: [
    {
      track: l('Debattförsök', 'Debattenversuch', 'Attempt to debate'),
      line: l('Det där är en annan diskussion. Här pratar vi ansvar.', 'Das ist eine andere Diskussion. Hier sprechen wir über Verantwortung.', 'That is a different discussion. Here we talk responsibility.'),
    },
    {
      track: l('Offerposition', 'Opferhaltung', 'Victim position'),
      line: l('Då är frågan: vad är ditt mandat – på riktigt?', 'Dann ist die Frage: Was ist dein Mandat – wirklich?', 'Then the question is: what is your mandate – for real?'),
    },
    {
      track: l('Moraliserande invändning', 'Moralisierender Einwand', 'Moralising objection'),
      line: l('God intention är inte samma sak som fungerande handling.', 'Gute Absicht ist nicht dasselbe wie funktionierendes Handeln.', 'Good intention is not the same as working action.'),
    },
  ],
};

export const blockKey = (m: Module, b: Block): string => `${m.id}-${b.slug}`;

export function findModule(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function moduleMinutes(m: Module): number {
  return m.blocks.reduce((sum, b) => sum + b.min, 0);
}
