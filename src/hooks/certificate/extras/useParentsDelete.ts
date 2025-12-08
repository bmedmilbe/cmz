import useCertificateDelete from "../useCertificateDelete";

export const useParentsDelete = <SimplePerson>(personId: number) =>
  useCertificateDelete<SimplePerson>(`parents/${personId}`, ["parents"]);
