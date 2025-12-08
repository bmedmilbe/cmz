import useCertificateGet from "./useCertificateGet";

interface CertificateType {
  id: number;
  name: string;
  gender: string;
  slug: string;
}

export interface CertificateTitle {
  id: number;
  certificate_type: CertificateType;
  type_price: number;
  name: string;
  goal: string;
}

const useTitles = () => useCertificateGet<CertificateTitle>("titles", "titles");

export default useTitles;
