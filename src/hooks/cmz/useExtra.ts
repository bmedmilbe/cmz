import useGeneralOne from "./useGeneralOne";

const useExtra = <T>(slug: string) =>
  useGeneralOne<T>("extras", slug, ["extras", slug]);

export default useExtra;
