import useCertificatePut from "../useCertificatePut";

export const useCertificateEdit = <CertificateSaving>(id: number) =>
  useCertificatePut<CertificateSaving>(`certificates/${id}`, [
    "certificates",
    id,
  ]);
