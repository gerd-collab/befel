// Learner progress and private notes. Everything stays in this browser's localStorage;
// nothing is sent anywhere. Theme and language are NOT stored here – the URL owns them.

const KEY = 'ta-befal.v1';

export interface AssignmentRecord {
  text: string;
  at: number;
  status?: 'done' | 'notdone';
  checkedAt?: number;
}

export interface Data {
  blocksDone: Record<string, number>;
  modulesDone: Record<string, number>;
  /** Interaction state per block (choices, placements, quiz answers). */
  answers: Record<string, unknown>;
  /** Private free texts: reflections, builder fields, own inversions, own answers. */
  texts: Record<string, string>;
  selftest: { entry?: number[]; entryAt?: number; exit?: number[]; exitAt?: number };
  assignments: Record<string, AssignmentRecord>;
  diplomaName?: string;
}

function empty(): Data {
  return { blocksDone: {}, modulesDone: {}, answers: {}, texts: {}, selftest: {}, assignments: {} };
}

let data: Data = load();
let available = true;

function load(): Data {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty();
    return { ...empty(), ...(JSON.parse(raw) as Partial<Data>) };
  } catch {
    available = false;
    return empty();
  }
}

let timer: number | undefined;
function save(): void {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      available = false;
    }
  }, 150);
}

export const store = {
  get data(): Readonly<Data> {
    return data;
  },
  get available(): boolean {
    return available;
  },
  update(fn: (d: Data) => void): void {
    fn(data);
    save();
  },
  answer<T>(id: string): T | undefined {
    return data.answers[id] as T | undefined;
  },
  setAnswer(id: string, value: unknown): void {
    data.answers[id] = value;
    save();
  },
  text(id: string): string {
    return data.texts[id] ?? '';
  },
  setText(id: string, value: string): void {
    if (value.trim()) data.texts[id] = value;
    else delete data.texts[id];
    save();
  },
  exportJson(): string {
    return JSON.stringify({ app: 'ta-befal', version: 1, exportedAt: new Date().toISOString(), data }, null, 2);
  },
  importJson(raw: string): boolean {
    try {
      const parsed = JSON.parse(raw) as { app?: string; data?: Partial<Data> };
      if (parsed.app !== 'ta-befal' || !parsed.data) return false;
      data = { ...empty(), ...parsed.data };
      save();
      return true;
    } catch {
      return false;
    }
  },
  clear(): void {
    data = empty();
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* storage unavailable – nothing to remove */
    }
  },
};
