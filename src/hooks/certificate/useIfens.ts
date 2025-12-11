import useCertificateGet from "./useCertificateGet";

export interface Ifen {
  id: number;
  name: string;
  size: number;
}

const useIfens = () => useCertificateGet<Ifen>("ifens", "ifens");

export default useIfens;
