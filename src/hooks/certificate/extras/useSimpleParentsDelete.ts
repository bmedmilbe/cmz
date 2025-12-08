import useCertificateDelete from "../useCertificateDelete";

export const useSimpleParentsDelete = <ParentEntry>(
  titleId: number,
  personId: number
) =>
  useCertificateDelete<ParentEntry>(`titles/${titleId}/parent/${personId}`, [
    "simpleparents",
  ]);
