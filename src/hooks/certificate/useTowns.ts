import useCertificateGet from "./useCertificateGet";
import type { County } from "./useCounties";

export interface Town {
  id: number;
  name: string;
  slug: string;
  county: County;
  country: string;
}

const useTowns = () => useCertificateGet<Town>("towns", "towns");

export default useTowns;
