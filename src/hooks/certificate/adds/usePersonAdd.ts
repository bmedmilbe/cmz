import useCertificatePost from "../useCertificatePost";

export const usePersonAdd = <PersonSend>() =>
  useCertificatePost<PersonSend>("persons", ["persons"]);
