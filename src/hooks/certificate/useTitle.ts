import useCertificateGetOne from "./useCertificateGetOne";
import type { CertificateTitle } from "./useTitles";

const useTitle = (id: number) =>
  useCertificateGetOne<CertificateTitle>(`titles`, ["titles", id], id);

export default useTitle;
