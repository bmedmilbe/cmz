import useCertificatePut from "../useCertificatePut";

export const usePersonEdit = <PersonSend>(id: number) =>
  useCertificatePut<PersonSend>(`persons/${id}/`, ["persons", id]);
