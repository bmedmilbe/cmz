import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";
export interface StreetEntry {
  id: number;
  name: string;
  town: number | string;
}
export const useStreetAdd = <StreetEntry>(id?: number) =>
  id
    ? useCertificatePut<StreetEntry>(`streets/${id}`, ["streets"])
    : useCertificatePost<StreetEntry>(`streets`, ["streets"]);
