import useCertificatePost from "../useCertificatePost";

export const useSimpleParentsAdd = <SimplePerson>(titleId: number) =>
  useCertificatePost<SimplePerson>(`titles/${titleId}/parent/`, [
    "simpleparents",
  ]);
