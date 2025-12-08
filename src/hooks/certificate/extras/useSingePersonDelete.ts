import useCertificateDelete from "../useCertificateDelete";

export const useSingePersonDelete = <SimplePerson>(
  titleId: number,
  personId: number
) =>
  useCertificateDelete<SimplePerson>(
    `titles/${titleId}/singleperson/${personId}`,
    ["singlepersons"]
  );
