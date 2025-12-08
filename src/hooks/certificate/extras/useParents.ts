import useCertificateGet from "../useCertificateGet";
export interface Parent {
  id: number;
  title: string;
}
export const useParents = <Parent>() =>
  useCertificateGet<Parent>(`parents`, "parents");
