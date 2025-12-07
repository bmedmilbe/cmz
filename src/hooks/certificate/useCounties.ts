import useCertificateGet from "./useCertificateGet";
import type { Country } from "./useCountries";

export interface County {
  id: number;
  name: string;
  slug: string;
  country: Country;
}

const useCounties = () => useCertificateGet<County>("countys", "countys");

export default useCounties;
