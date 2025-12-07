import useCertificateGet from "./useCertificateGet";
import type { CertificateTitle } from "./useTitles";

const useTitlesByType = (type?: number) => {
  let end = "";
  let value = 0;
  if (type == 1) {
    value = 1;
  }
  if (type && type > 1) {
    end = "__gt";
    value = 1;
  }
  return useCertificateGet<CertificateTitle>(
    `titles/?certificate_type${end}=${value}`,
    `titlesbytype${type || ""}`
  );
};

export default useTitlesByType;
