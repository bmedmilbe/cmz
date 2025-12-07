import useCertificateGet from "./useCertificateGet";
import type { Town } from "./useTowns";

export interface Street {
  id: number;
  name: string;
  town: Town;
}

const useStreets = () => useCertificateGet<Street>("streets", "streets");

export default useStreets;
