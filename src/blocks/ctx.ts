import type { Module } from '../content/types';

/** Context handed to every block renderer. */
export interface BlockCtx {
  /** Stable key "m08-ladder", used for stored answers and private texts. */
  id: string;
  module: Module;
  /** Re-render the block body after a state change. */
  refresh: () => void;
}
