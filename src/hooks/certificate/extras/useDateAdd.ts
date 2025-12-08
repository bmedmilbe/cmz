import useCertificatePost from "../useCertificatePost";

export const useDateAdd = <Date>(titleId: number) =>
  useCertificatePost<Date>(`titles/${titleId}/date/`, ["dates"]);
