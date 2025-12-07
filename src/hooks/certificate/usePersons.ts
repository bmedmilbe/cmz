import type { BirthAdddress } from "./adds/useBirthAdddressAdd";
import useCertificateGet from "./useCertificateGet";
import type { Country } from "./useCountries";
import type { House } from "./useHouses";
import type { IdType } from "./useIdTypes";
import type { Instituition } from "./useInstituitions";

export interface Person {
  id: number;
  name: string;
  surname: string;
  birth_date: string;

  id_number: string;

  id_issue_date: string;
  id_expire_date: string;
  father_name: string;
  mother_name: string;
  status: string;
  gender: string;
  birth_address: BirthAdddress;
  id_type: IdType;
  address: House;
  id_issue_local: Instituition;
  id_issue_country: Country;
  nationality: Country;
}

export interface PersonSend {
  id: number;
  name: string;
  surname: string;
  birth_date: string;
  birth_address: number;
  id_type: number;
  id_number: string;
  id_issue_local: number;
  id_issue_country: number;
  nationality: number;
  id_issue_date: string;
  id_expire_date: string;
  father_name: string | null;
  mother_name: string | null;
  address: number;
  status: string;
  gender: string;
}
const usePersons = () => useCertificateGet<Person>("persons", "persons");

export default usePersons;
