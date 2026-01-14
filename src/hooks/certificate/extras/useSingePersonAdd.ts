import useCertificatePost from "../useCertificatePost";

export const useSingePersonAdd = <SimplePerson>(titleId: number) =>
  useCertificatePost<SimplePerson>(`titles/${titleId}/singleperson`, [
    "singlepersons",
  ]);
