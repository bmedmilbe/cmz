import { create } from "zustand";
import { chooseOrderTextForFilterCertificate } from "../utils/helper";

export interface CertificateStoreQuery {
  page: number;

  query: {
    search: string | undefined;
    ordering: string | undefined;
    status: string | undefined;
  };

  setSearch: (value: string) => void;

  setOrdering: (value: number) => void;

  setStatus: (value: string) => void;

  resetPage: () => void;

  setPage: (value: number) => void;
}

const useCerificateStoreQuery = create<CertificateStoreQuery>((set) => ({
  page: 1,
  query: {
    search: undefined,
    ordering: undefined,
    status: undefined,
  },
  setSearch: (value: string) =>
    set((store: CertificateStoreQuery) => ({
      query: { ...store.query, search: value || undefined },
    })),
  setOrdering: (value: number) =>
    set((store: CertificateStoreQuery) => ({
      query: {
        ...store.query,
        ordering: value
          ? chooseOrderTextForFilterCertificate(value)
          : undefined,
      },
    })),
  setStatus: (value: string) =>
    set((store: CertificateStoreQuery) => ({
      query: { ...store.query, status: value || undefined },
    })),
  resetPage: () =>
    set((store: CertificateStoreQuery) => ({
      ...store,
      page: 1,
    })),
  setPage: (value: number) =>
    set((store: CertificateStoreQuery) => ({
      ...store,
      page: value,
    })),
}));

export default useCerificateStoreQuery;
