// Progress, unlocking and the done/not-done follow-up of command assignments.

import { MODULES, blockKey } from '../content/course';
import type { Module } from '../content/types';
import { state } from './app';
import { store } from './store';
import type { QuizState } from '../blocks/quiz';

const DAY = 24 * 60 * 60 * 1000;

export function blocksDone(m: Module): number {
  return m.blocks.filter((b) => store.data.blocksDone[blockKey(m, b)]).length;
}

export function isModuleDone(m: Module): boolean {
  return Boolean(store.data.modulesDone[m.id]);
}

export function modulesDoneCount(): number {
  return MODULES.filter(isModuleDone).length;
}

export function previousModule(m: Module): Module | undefined {
  return MODULES.find((x) => x.num === m.num - 1);
}

export function nextModule(m: Module): Module | undefined {
  return MODULES.find((x) => x.num === m.num + 1);
}

/** In pace mode (?pace=1) modules open in order, at least 24 hours apart. Otherwise all are open. */
export function unlockInfo(m: Module): { open: boolean; at?: number } {
  if (!state.pace || m.num === 1) return { open: true };
  const prev = previousModule(m);
  const doneAt = prev ? store.data.modulesDone[prev.id] : undefined;
  if (!doneAt) return { open: false };
  const at = doneAt + DAY;
  return { open: Date.now() >= at, at };
}

/** The module to continue with: the first one that is not finished. */
export function continueModule(): Module {
  return MODULES.find((m) => !isModuleDone(m)) ?? MODULES[MODULES.length - 1];
}

/** The previous module's assignment, if it has not been marked done or not done yet. */
export function pendingFollowUp(m: Module): Module | undefined {
  const prev = previousModule(m);
  if (!prev) return undefined;
  const rec = store.data.assignments[prev.id];
  return rec && !rec.status ? prev : undefined;
}

export function quizResult(m: Module): { first?: number; total: number } | undefined {
  const b = m.blocks.find((x) => x.type === 'quiz');
  if (!b || b.type !== 'quiz') return undefined;
  const st = store.answer<QuizState>(blockKey(m, b));
  return { first: st?.first, total: b.questions.length };
}
