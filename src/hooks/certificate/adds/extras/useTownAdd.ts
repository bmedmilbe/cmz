import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";
export interface TownEntry {
  id: number;
  name: string;
  slug: string;
  county: number | string;
}
export const useTownAdd = <TownEntry>(id?: number) =>
  id
    ? useCertificatePut<TownEntry>(`towns/${id}/`, ["towns"])
    : useCertificatePost<TownEntry>(`towns/`, ["towns"]);
