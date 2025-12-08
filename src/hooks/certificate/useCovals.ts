import useCertificateGet from "./useCertificateGet";

export interface Coval {
  id: number;
  nick_number: string;
  number: string;
  name: string;
  date_used: string;
  closed: boolean;
  selled: boolean;
}

const useCovals = () => useCertificateGet<Coval>("covals", "covals");

export default useCovals;
