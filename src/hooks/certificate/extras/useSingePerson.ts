import useCertificateGet from "../useCertificateGet";

export const useSingePerson = <SimplePerson>(titleId: number) =>
  useCertificateGet<SimplePerson>(
    `titles/${titleId}/singleperson`,
    "singlepersons"
  );
