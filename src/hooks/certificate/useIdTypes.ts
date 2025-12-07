import useCertificateGet from "./useCertificateGet";

export interface IdType {
  id: number;
  name: string;
}

const useIdTypes = () => useCertificateGet<IdType>("idtypes", "idtypes");

export default useIdTypes;
