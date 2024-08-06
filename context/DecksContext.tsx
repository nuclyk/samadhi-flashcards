import { createContext, useContext, useEffect, useReducer } from "react";
import initialDecks from "@/mock/decks.json";
import { DeckModel } from "@/models/DeckModel";

export const DecksContext = createContext(null as any);
export const DecksDispatchContext = createContext(null as any);

export function DecksProvider({ children }: any) {
  const [decks, dispatch] = useReducer(decksReducer, initialDecks);

  return (
    <DecksContext.Provider value={decks}>
      <DecksDispatchContext.Provider value={dispatch}>
        {children}
      </DecksDispatchContext.Provider>
    </DecksContext.Provider>
  );
}

export function useDecks() {
  return useContext(DecksContext);
}

export function useDecksDispatch() {
  return useContext(DecksDispatchContext);
}

function decksReducer(decks: DeckModel[], action: any) {
  switch (action.type) {
    case "add": {
      return [
        ...decks,
        {
          id: 1,
          name: action.name,
          details: { due: 0, new: 0, total: 0 },
          cards: [],
        },
      ];
    }
    case "edit": {
      return decks.map((d) => {
        if (d.id === action.deck.id) {
          return action.deck;
        } else {
          return d;
        }
      });
    }
    case "delete": {
      return decks.filter((d) => d.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
