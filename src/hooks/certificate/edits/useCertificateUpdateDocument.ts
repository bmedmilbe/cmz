import useCertificatePut from "../useCertificatePut";

export const useCertificateUpdateDocument = <CertificateSaving>(
  titleId: number,
  id: number
) =>
  useCertificatePut<CertificateSaving>(`titles/${titleId}/model/${id}`, [
    ["certificates", id],
  ]);
