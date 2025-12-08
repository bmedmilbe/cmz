import useCertificatePost from "../useCertificatePost";

export const useParentsAdd = <SimplePerson>() =>
  useCertificatePost<SimplePerson>(`parents/`, ["parents"]);
