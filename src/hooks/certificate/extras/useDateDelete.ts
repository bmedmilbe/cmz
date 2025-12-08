import useCertificateDelete from "../useCertificateDelete";

export const useDateDelete = <Date>(titleId: number, personId: number) =>
  useCertificateDelete<Date>(`titles/${titleId}/date/${personId}`, ["dates"]);
