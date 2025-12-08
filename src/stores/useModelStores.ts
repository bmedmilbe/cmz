import { create } from "zustand";
import type { Person } from "../hooks/certificate/usePersons";

interface ModelFormState {
  mainPerson: Person | undefined;
  secondaryPerson: Person | undefined;
}

interface ModelStoreActions {
  setMainPerson: (person: Person) => void;

  setSecondaryPerson: (person: Person) => void;

  removeSecondaryPerson: () => void;

  removeMainPerson: () => void;
}

export type ModelStore = {
  modelForm: ModelFormState;
} & ModelStoreActions;
export const useModelStore = create<ModelStore>((set) => ({
  modelForm: {
    mainPerson: undefined,
    secondaryPerson: undefined,
  },
  setMainPerson: (person: Person) =>
    set((store) => ({ modelForm: { ...store.modelForm, mainPerson: person } })),
  setSecondaryPerson: (person: Person) =>
    set((store) => ({
      modelForm: { ...store.modelForm, secondaryPerson: person },
    })),
  removeSecondaryPerson: () =>
    set((store) => ({
      modelForm: { ...store.modelForm, secondaryPerson: undefined },
    })),
  removeMainPerson: () =>
    set((store) => ({
      modelForm: { ...store.modelForm, mainPerson: undefined },
    })),
}));

export default useModelStore;
