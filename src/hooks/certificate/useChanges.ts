import useCertificateGet from "./useCertificateGet";

export interface Change {
  id: number;
  name: string;
}

const useChanges = () => useCertificateGet<Change>("changes", "changes");

export default useChanges;
