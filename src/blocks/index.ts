// Block dispatcher: one renderer per block type (B01–B12; B13 facilitator cards and B14 quote
// and term cards are rendered on the module page, in lessons and in the glossary).

import type { Block, BlockType, L } from '../content/types';
import type { UiKey } from '../i18n';
import type { BlockCtx } from './ctx';
import { renderLesson } from './lesson';
import { renderInversion } from './inversion';
import { renderScenario } from './scenario';
import { renderClassify } from './classify';
import { renderSequence } from './sequence';
import { renderLadder } from './ladder';
import { renderFinder } from './finder';
import { renderBuilder } from './builder';
import { renderObjection } from './objection';
import { renderSelfAssess } from './selfassess';
import { renderReflection } from './reflection';
import { renderQuiz } from './quiz';
import { renderAssignment } from './assignment';

export type { BlockCtx } from './ctx';

export const KIND_KEY: Record<BlockType, UiKey> = {
  lesson: 'kind_lesson',
  inversion: 'kind_inversion',
  scenario: 'kind_scenario',
  classify: 'kind_classify',
  sequence: 'kind_sequence',
  ladder: 'kind_ladder',
  finder: 'kind_finder',
  builder: 'kind_builder',
  objection: 'kind_objection',
  selfassess: 'kind_selfassess',
  reflection: 'kind_reflection',
  quiz: 'kind_quiz',
  assignment: 'kind_assignment',
};

/** Block type ids from the learning concept (B01–B12). */
export const KIND_CODE: Record<BlockType, string> = {
  lesson: 'B01',
  inversion: 'B02',
  scenario: 'B03',
  classify: 'B04',
  sequence: 'B04',
  ladder: 'B05',
  finder: 'B06',
  builder: 'B07',
  objection: 'B08',
  selfassess: 'B09',
  reflection: 'B10',
  quiz: 'B11',
  assignment: 'B12',
};

export function renderBlock(b: Block, ctx: BlockCtx): HTMLElement {
  switch (b.type) {
    case 'lesson':
      return renderLesson(b, ctx);
    case 'inversion':
      return renderInversion(b, ctx);
    case 'scenario':
      return renderScenario(b, ctx);
    case 'classify':
      return renderClassify(b, ctx);
    case 'sequence':
      return renderSequence(b, ctx);
    case 'ladder':
      return renderLadder(b, ctx);
    case 'finder':
      return renderFinder(b, ctx);
    case 'builder':
      return renderBuilder(b, ctx);
    case 'objection':
      return renderObjection(b, ctx);
    case 'selfassess':
      return renderSelfAssess(b, ctx);
    case 'reflection':
      return renderReflection(b, ctx);
    case 'quiz':
      return renderQuiz(b, ctx);
    case 'assignment':
      return renderAssignment(b, ctx);
  }
}

/** Intro line shown under the block title (blocks that render their intro themselves are excluded). */
export function blockIntro(b: Block): L | undefined {
  switch (b.type) {
    case 'inversion':
    case 'classify':
    case 'sequence':
    case 'ladder':
    case 'finder':
    case 'objection':
      return b.intro;
    default:
      return undefined;
  }
}
