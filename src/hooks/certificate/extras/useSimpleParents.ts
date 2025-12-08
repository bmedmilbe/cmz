import useCertificateGet from "../useCertificateGet";

export interface SimplePerson {
  id?: number;
  name: string;
  birth_date?: string;
  gender: string;
  type: number;
}

export const useSimpleParents = <SimplePerson>(titleId: number) =>
  useCertificateGet<SimplePerson>(`titles/${titleId}/parent`, "simpleparents");
