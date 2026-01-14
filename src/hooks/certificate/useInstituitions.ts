import useCertificateGet from "./useCertificateGet";

export interface Instituition {
  id: number;
  name: string;
  code: number;
}

const useInstituitions = () =>
  useCertificateGet<Instituition>("intituitions", "intituitions");

export default useInstituitions;
