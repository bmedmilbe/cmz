import useCertificateGet from "./useCertificateGet";
import type { Street } from "./useStreets";

export interface House {
  id: number;
  house_number: string;
  street: Street;
}
export interface HouseSaving {
  id: number;
  house_number: string;
  street: number;
}

const useHouses = () => useCertificateGet<House>("house", "house");

export default useHouses;
