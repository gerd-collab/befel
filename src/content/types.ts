// Data model for the course, following chapter 11 of LERNKONZEPT-TA-BEFAEL.md.
// Every learner-facing text exists in Swedish (original), German and English.

export type Lang = 'sv' | 'de' | 'en';
export const LANGS: readonly Lang[] = ['sv', 'de', 'en'];

/** A text in all three course languages. Swedish is the original. */
export type L = Record<Lang, string>;
export const l = (sv: string, de: string, en: string): L => ({ sv, de, en });

export type BookId = 'steg1' | 'steg2' | 'steg3-1' | 'steg3-2' | 'steg4' | 'steg5' | 'folder';

/** Traceable reference into the book series. Chapter labels stay Swedish, like the books. */
export interface Src {
  book: BookId;
  ch: string;
}

/** Quotes are always shown in the Swedish original, with translation and source. */
export interface Quote {
  sv: string;
  de: string;
  en: string;
  src: Src;
}

export interface Card {
  term: L;
  text: L;
}

// ---------------------------------------------------------------- blocks

export interface LessonSlide {
  heading: L;
  body: L[];
  list?: L[];
  quote?: Quote;
  image?: string;
}

/** B01 – lesson. Video with Torbjörn is planned; the draft carries the script as text. */
export interface LessonBlock {
  type: 'lesson';
  slides: LessonSlide[];
  cards: Card[];
}

export interface InversionItem {
  habit: L;
  options: L[];
  inverted: number;
  pattern: L;
  src?: Src;
}

/** B02 – inversion: turn a "child logic" sentence into "adult logic". */
export interface InversionBlock {
  type: 'inversion';
  intro: L;
  items: InversionItem[];
  ownPrompt: L;
}

/** Consequence trail in the format of book 5: Orsak → Verkan → Konsekvens. */
export interface Consequence {
  orsak: L;
  verkan: L;
  konsekvens: L;
  bearer: L;
}

export interface ScenarioOption {
  label: L;
  c: Consequence;
  /** The choice the book describes (the author's own path). */
  book?: boolean;
}

export interface ScenarioNode {
  situation: L;
  options: ScenarioOption[];
}

/** B03 – branching scenario built on a skröna from the books. */
export interface ScenarioBlock {
  type: 'scenario';
  source: Src;
  /** Invented cases must be marked as such. */
  invented?: boolean;
  image?: string;
  intro: L;
  nodes: ScenarioNode[];
  outcome: L;
  quote?: Quote;
}

export interface ClassifyCategory {
  id: string;
  label: L;
  hint?: L;
}

export interface ClassifyItem {
  text: L;
  cat: string;
  why: L;
}

/** B04 – classify by two-step tap (or keyboard), never drag only. */
export interface ClassifyBlock {
  type: 'classify';
  intro: L;
  categories: ClassifyCategory[];
  items: ClassifyItem[];
  src?: Src;
}

/** B04 variant – put the steps of a model in the book's order. */
export interface SequenceBlock {
  type: 'sequence';
  intro: L;
  steps: { text: L; why: L }[];
  src: Src;
}

export type Step = 1 | 2 | 3 | 4 | 5;

/** B05 – escalation ladder (femstegsraketen). */
export interface LadderBlock {
  type: 'ladder';
  intro: L;
  situations: { text: L; step: Step; why: L }[];
  note: L;
}

export type FinderKind = 'name' | 'function' | 'process';

/** B06 – responsibility point finder: "Vem fattade beslutet?" */
export interface FinderBlock {
  type: 'finder';
  intro: L;
  cases: { text: L; answer: L; kind: FinderKind; why: L }[];
}

export type BuilderTool = 'routine' | 'delegation' | 'consequence' | 'zeropoint' | 'hagn' | 'maintenance';

export interface BuilderField {
  id: string;
  label: L;
  help: L;
  multiline?: boolean;
  choices?: { id: string; label: L }[];
}

export interface BuilderCheck {
  /** "missing": field empty. "collective": field names a group instead of a function or person. */
  when: 'missing' | 'collective';
  field: string;
  message: L;
}

/** B07 – builder: apply a model from the books to the learner's own reality. */
export interface BuilderBlock {
  type: 'builder';
  tool: BuilderTool;
  intro: L;
  fields: BuilderField[];
  checks: BuilderCheck[];
  done: L;
  src: Src;
}

/** B08 – befälssvar trainer. */
export interface ObjectionBlock {
  type: 'objection';
  intro: L;
  items: { objection: L; answer: L; src: Src }[];
}

/** B09 – private self-assessment. Entry and exit use the shared Hägn–Habil–Hövisk test. */
export interface SelfAssessBlock {
  type: 'selfassess';
  mode: 'entry' | 'exit' | 'module';
  intro: L;
  items?: L[];
}

/** B10 – private reflection. */
export interface ReflectionBlock {
  type: 'reflection';
  prompts: L[];
  src?: Src;
}

export interface QuizOption {
  text: L;
  ok: boolean;
  fb: L;
}

/** B11 – knowledge check aimed at typical misunderstandings. */
export interface QuizBlock {
  type: 'quiz';
  questions: { q: L; options: QuizOption[]; misconception: L }[];
}

/** B12 – command assignment. Followed up at the next module start, without reminders. */
export interface AssignmentBlock {
  type: 'assignment';
  text: L;
  hint: L;
}

export type BlockBody =
  | LessonBlock
  | InversionBlock
  | ScenarioBlock
  | ClassifyBlock
  | SequenceBlock
  | LadderBlock
  | FinderBlock
  | BuilderBlock
  | ObjectionBlock
  | SelfAssessBlock
  | ReflectionBlock
  | QuizBlock
  | AssignmentBlock;

export type BlockType = BlockBody['type'];

export type Block = BlockBody & {
  /** Stable slug, part of the deep link (#screen=m08-ladder). Never change once published. */
  slug: string;
  min: number;
  title: L;
};

/** B13 – facilitator cards for groups and the lecture series. */
export interface Facilitator {
  open: L;
  questions: L[];
  close: L;
  note?: L;
}

export type Part = 1 | 2 | 3;

export interface Module {
  id: string;
  num: number;
  part: Part;
  /** Episode title from the course folder (Swedish original). */
  title: L;
  /** Episode description from the course folder. */
  teaser: L;
  goal: L;
  keyTerms: L[];
  sources: Src[];
  image: string;
  /** M09 and M10 have no own basis in the books yet; content from the author is pending. */
  needsAuthor?: L;
  blocks: Block[];
  facilitator: Facilitator;
}
