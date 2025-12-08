import { create } from "zustand";
import type { SimplePerson } from "../hooks/certificate/extras/useSimplePerson";
interface CurrentPersonState {
  id: number | undefined;
  name: string | undefined;
  gender: string | undefined;
  date: string | undefined;
}

interface SinglePersonState {
  personList: SimplePerson[];
  person: CurrentPersonState;
}

interface SinglePersonActions {
  setPersonName: (name: string) => void;
  setPersonGender: (gender: string) => void;
  setPersonDate: (date: string) => void;
  addPersonList: (person: SimplePerson) => void;
  removePersonList: (person: SimplePerson) => void;
}
type SinglePersonStore = SinglePersonState & SinglePersonActions;
const useSinglePersonsStore = create<SinglePersonStore>((set) => ({
  personList: [],
  person: {
    id: undefined,
    name: undefined,
    gender: undefined,
    date: undefined,
  },
  setPersonName: (name: string) =>
    set((store) => ({ person: { ...store.person, name } })),
  setPersonGender: (gender: string) =>
    set((store) => ({
      person: { ...store.person, gender },
    })),
  setPersonDate: (date: string) =>
    set((store) => ({
      person: { ...store.person, date: date },
    })),
  addPersonList: (person: SimplePerson) =>
    set((store) => ({
      personList: [...store.personList, person],
    })),
  removePersonList: (person: SimplePerson) =>
    set((store) => ({
      personList: store.personList.filter((p) => p.id !== person.id),
    })),
}));

export default useSinglePersonsStore;
