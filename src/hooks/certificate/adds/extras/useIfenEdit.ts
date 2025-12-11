import useCertificatePut from "../../useCertificatePut";
export interface IfenEntry {
  id: number;
  size: number;
}
export const useIfenEdit = <IfenEntry>(id: number) =>
  useCertificatePut<IfenEntry>(`ifens/${id}/`, ["ifens"]);
