import useCertificateGet from "../useCertificateGet";

export interface SimplePerson {
  id?: number;
  name: string;
  birth_date?: string;
  gender: string;
  type: number;
}

export const useSimplePersons = <SimplePerson>(titleId: number) =>
  useCertificateGet<SimplePerson>(`titles/${titleId}/person`, "simplepersons");
