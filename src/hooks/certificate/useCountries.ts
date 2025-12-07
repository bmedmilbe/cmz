import useCertificateGet from "./useCertificateGet";

export interface Country {
  id: number;
  name: string;
  code: number;
}

const useCountries = () => useCertificateGet<Country>("countries", "countries");

export default useCountries;
