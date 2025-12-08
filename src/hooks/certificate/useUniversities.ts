import useCertificateGet from "./useCertificateGet";

export interface Universitie {
  id: number;
  name: string;
}

const useUniversities = () =>
  useCertificateGet<Universitie>("universities", "universities");

export default useUniversities;
