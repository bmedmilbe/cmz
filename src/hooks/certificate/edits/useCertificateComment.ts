import useCertificatePut from "../useCertificatePut";

export const useCertificateComment = <CertificateSaving>(id: number) =>
  useCertificatePut<CertificateSaving>(`certificatescomment/` + id + "/", [
    "certificates",
    id,
  ]);
