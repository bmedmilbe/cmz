import useCertificateDelete from "../useCertificateDelete";

export const useSimplePersonDelete = <SimplePerson>(
  titleId: number,
  personId: number
) =>
  useCertificateDelete<SimplePerson>(`titles/${titleId}/person/${personId}`, [
    "simplepersons",
  ]);
