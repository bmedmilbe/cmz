import { create } from "zustand";
import { chooseOrderTextForPersonFilter } from "../utils/helper";

export interface PersonStoreQuery {
  page: number;

  query: {
    search: string | undefined;
    ordering: string | undefined;
  };

  setSearch: (value: string) => void;

  setOrdering: (value: number) => void;

  resetPage: () => void;

  setPage: (value: number) => void;
}

const usePersonStoreQuery = create<PersonStoreQuery>((set) => ({
  page: 1,
  query: {
    search: undefined,
    ordering: undefined,
  },
  setSearch: (value: string) =>
    set((store: PersonStoreQuery) => ({
      query: { ...store.query, search: value || undefined },
    })),
  setOrdering: (value: number) => {
    return set((store: PersonStoreQuery) => ({
      query: {
        ...store.query,
        ordering: value ? chooseOrderTextForPersonFilter(value) : undefined,
      },
    }));
  },
  resetPage: () =>
    set((store: PersonStoreQuery) => ({
      ...store,
      page: 1,
    })),
  setPage: (value: number) =>
    set((store: PersonStoreQuery) => ({
      ...store,
      page: value,
    })),
}));

export default usePersonStoreQuery;
