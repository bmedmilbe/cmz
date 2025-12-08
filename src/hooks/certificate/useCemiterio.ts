import useCertificateGet from "./useCertificateGet";

export interface Cemiterio {
  id: number;
  name: string;
  county: number;
}

const useCemiterios = () =>
  useCertificateGet<Cemiterio>("cemiterios", "cemiterios");

export default useCemiterios;
