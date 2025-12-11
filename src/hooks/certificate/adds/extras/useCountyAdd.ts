import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";
export interface CountyEntry {
  id: number;
  name: string;
  slug: string;
  country: number | string;
}
export const useCountyAdd = <CountyEntry>(id?: number) =>
  id
    ? useCertificatePut<CountyEntry>(`countys/${id}/`, ["countys"])
    : useCertificatePost<CountyEntry>(`countys/`, ["countys"]);
