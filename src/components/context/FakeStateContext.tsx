import { createContext } from "react";

export interface FakeState {
  count: number;
  input: string;
  decrementCount: () => void;
  incrementCount: () => void;
}

export const FakeStateContext = createContext<FakeState | null>(null);
