import useCertificatePost from "../../useCertificatePost";
import useCertificatePut from "../../useCertificatePut";

export interface InstituitionEntry {
  id: number;
  name: string;
}
export const useInstituitionAdd = <InstituitionEntry>(id?: number) =>
  id
    ? useCertificatePut<InstituitionEntry>(`intituitions/${id}/`, [
        "intituitions",
      ])
    : useCertificatePost<InstituitionEntry>(`intituitions/`, ["intituitions"]);
