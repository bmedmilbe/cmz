import useCertificatePost from "../useCertificatePost";
import type { County } from "../useCounties";
import type { Country } from "../useCountries";
import type { Street } from "../useStreets";
import type { Town } from "../useTowns";
export interface BirthAdddress {
  id: number;
  birth_street: Street;
  birth_town: Town;
  birth_county: County;
  birth_country: Country;
}
export interface BirthAdddressSaving {
  id: number;
  birth_street?: number;
  birth_town?: number;
  birth_county?: number;
  birth_country?: number;
}
export const useBirthAdddressAdd = <BirthAdddress>() =>
  useCertificatePost<BirthAdddress>("birthadddress/", ["birthadddress"]);
