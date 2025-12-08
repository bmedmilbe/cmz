import useCertificateGet from "../useCertificateGet";
export interface DateEntry {
  id: number;
  date: string;
}
export const useDates = <DateEntry>(titleId: number) =>
  useCertificateGet<DateEntry>(`titles/${titleId}/date`, "dates");
