import useCertificateGet from "./useCertificateGet";
import type { Certificate } from "./useCertificatesInfinite";

const useCertificate = (id: number) =>
  useCertificateGet<Certificate>("certificates", ["certificates", id]);

export default useCertificate;
