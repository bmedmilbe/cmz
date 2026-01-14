import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";

export interface UniversitieEntry {
  id: number;
  name: string;
}
export const useUniversitieAdd = <UniversitieEntry>(id?: number) =>
  id
    ? useCertificatePut<UniversitieEntry>(`universities/${id}`, [
        "universities",
      ])
    : useCertificatePost<UniversitieEntry>(`universities`, ["universities"]);
