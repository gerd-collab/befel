// Entry and exit self-test Hägn – Habil – Hövisk (book 1, chapter 20; course plan session 7:
// "Självtest: var brister min ryggrad?"). Ten statements, private, compared at the end.

import { l, type L } from './types';

export type Dim = 'hagn' | 'habil' | 'hovisk';

export const DIMS: { id: Dim; name: string; meaning: L }[] = [
  { id: 'hagn', name: 'Hägn', meaning: l('gränser', 'Grenzen', 'boundaries') },
  { id: 'habil', name: 'Habil', meaning: l('förmåga', 'Fähigkeit', 'ability') },
  { id: 'hovisk', name: 'Hövisk', meaning: l('hållning', 'Haltung', 'bearing') },
];

export const SELFTEST: { dim: Dim; text: L }[] = [
  {
    dim: 'hagn',
    text: l(
      'Jag vet vad som är mitt ansvar – och vad som inte är det.',
      'Ich weiß, was meine Verantwortung ist – und was nicht.',
      'I know what is my responsibility – and what is not.',
    ),
  },
  {
    dim: 'hagn',
    text: l(
      'Jag säger nej när något inte är mitt att bära.',
      'Ich sage Nein, wenn etwas nicht meins zu tragen ist.',
      'I say no when something is not mine to carry.',
    ),
  },
  {
    dim: 'hagn',
    text: l(
      'Jag tar inte på mig mer än jag kan bära.',
      'Ich nehme nicht mehr auf mich, als ich tragen kann.',
      'I do not take on more than I can carry.',
    ),
  },
  {
    dim: 'hagn',
    text: l(
      'Jag låter inte andra kliva in där de inte hör hemma.',
      'Ich lasse andere nicht dort eintreten, wo sie nicht hingehören.',
      'I do not let others step in where they do not belong.',
    ),
  },
  {
    dim: 'habil',
    text: l(
      'Jag kan utföra det jag åtar mig, på en nivå som andra kan lita på.',
      'Ich kann ausführen, was ich übernehme, auf einem Niveau, auf das andere sich verlassen können.',
      'I can carry out what I take on, at a level others can rely on.',
    ),
  },
  {
    dim: 'habil',
    text: l(
      'Jag vet när jag inte räcker till – och säger det.',
      'Ich weiß, wann ich nicht ausreiche – und sage es.',
      'I know when I am not enough – and I say so.',
    ),
  },
  {
    dim: 'habil',
    text: l(
      'Jag underhåller min förmåga och prövar den mot verkligheten.',
      'Ich halte meine Fähigkeit instand und prüfe sie an der Wirklichkeit.',
      'I maintain my ability and test it against reality.',
    ),
  },
  {
    dim: 'hovisk',
    text: l(
      'Jag använder aldrig min position för att förnedra någon eller hävda mig själv.',
      'Ich nutze meine Position nie, um jemanden zu erniedrigen oder mich selbst zu behaupten.',
      'I never use my position to humiliate anyone or to assert myself.',
    ),
  },
  {
    dim: 'hovisk',
    text: l(
      'Jag fattar beslut utan att gömma mig bakom regler.',
      'Ich treffe Entscheidungen, ohne mich hinter Regeln zu verstecken.',
      'I make decisions without hiding behind rules.',
    ),
  },
  {
    dim: 'hovisk',
    text: l(
      'Jag tar ansvar utan att kräva beundran – även när beslutet drabbar någon.',
      'Ich übernehme Verantwortung, ohne Bewunderung zu verlangen – auch wenn die Entscheidung jemanden trifft.',
      'I take responsibility without demanding admiration – even when the decision hurts someone.',
    ),
  },
];
