import { createContext } from "react";

export interface RandomStringItem {
  id: string;
  value: string;
}

export interface ListContextType {
  list: RandomStringItem[];
  removeItem: (id: string) => void;
  addItem: () => void;
}

export const ListContext = createContext<ListContextType | null>(null);
