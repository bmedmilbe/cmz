import useCertificateGet from "./useCertificateGet";

export interface Building {
  id: number;
  name: string;
  prefix: string;
}

const useBuildings = () =>
  useCertificateGet<Building>("buildings", "buildings");

export default useBuildings;
