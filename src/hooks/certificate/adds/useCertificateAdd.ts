import useCertificatePost from "../useCertificatePost";

export const useCertificateAdd = <CertificateSaving>(titleId: number) =>
  useCertificatePost<CertificateSaving>(`titles/${titleId}/model/`, [
    "certificates",
  ]);
