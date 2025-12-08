import { create } from "zustand";

export interface ParentEntry {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  relation: number;
}

interface ParentsStoreState {
  parents: ParentEntry[];
  parent: ParentEntry;
}

interface ParentsStoreActions {
  setParentName: (name: string) => void;
  setParentGender: (gender: string) => void;
  setParentDate: (date: string) => void;
  setParentRelation: (relation: number) => void;
  addParents: (person: ParentEntry) => void;
  removeParents: (person: { id: number }) => void;
}

export type ParentsStore = ParentsStoreState & ParentsStoreActions;

const useParentsStore = create<ParentsStore>((set) => ({
  parents: [],
  parent: {
    id: 0,
    name: "",
    gender: "",
    birth_date: "",
    relation: 0,
  },

  setParentName: (name) =>
    set((store) => ({ parent: { ...store.parent, name } })),
  setParentGender: (gender) =>
    set((store) => ({
      parent: { ...store.parent, gender },
    })),
  setParentDate: (date) =>
    set((store) => ({
      parent: { ...store.parent, birth_date: date },
    })),
  setParentRelation: (relation) =>
    set((store) => ({
      parent: { ...store.parent, relation },
    })),

  addParents: (person) =>
    set((store) => ({
      parents: [...store.parents, person],
    })),
  removeParents: (person) =>
    set((store) => ({
      parents: store.parents.filter((p) => p.id !== person.id),
    })),
}));

export default useParentsStore;
