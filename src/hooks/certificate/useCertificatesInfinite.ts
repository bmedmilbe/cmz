import { useQuery } from "@tanstack/react-query";
import type { CertificateTitle } from "./useTitles";
import type { Person } from "./usePersons";
import useCerificateStoreQuery from "../../stores/useCerificateStoreQuery";
import type { ResponseA } from "../../services/api-client";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";

export interface Certificate {
  id: number;
  type: CertificateTitle;
  number: string;
  main_person: Person;
  status: string;
  secondary_person?: Person;
  date_issue: string;
  file: string;
  text: string;
  house: string;
  status_detail: string;
  obs: string;
}
export interface CertificateSaving {
  id: number;
  type: number;
  main_person: number;
  secondary_person?: number;
  status: string;
}
export interface CertificateStatus {
  id: number;

  status: string;
}
export interface CertificateObs {
  id: number;

  obs: string;
}

const useCertificatesInfinite = (type: number) => {
  const queryParam = useCerificateStoreQuery();

  const apiClient = new ApiClient<Certificate>(
    `${apiCERTIFICATEEndpoint}/certificates`
  );
  return useQuery<ResponseA<Certificate>>({
    queryFn: () => {
      return apiClient.getAllSecond({
        params: {
          ...queryParam,
          limit: 10,
          offset: queryParam.page * 10,
          ["type__certificate_type" + (type == 2 ? "__gt" : "")]: type,
        },
      });
    },
    queryKey: [
      "certificates",
      {
        query: { ...queryParam.query, page: queryParam.page },
        type__certificate_type: type,
      },
    ],
    keepPreviousData: true,

    getNextPageParam: (lastPage, allPage) => {
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default useCertificatesInfinite;
