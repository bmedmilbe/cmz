import useCertificatePost from "../useCertificatePost";

export const useSimplePersonAdd = <SimplePerson>(titleId: number) =>
  useCertificatePost<SimplePerson>(`titles/${titleId}/person`, [
    "simplepersons",
  ]);
