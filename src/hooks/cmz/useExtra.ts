import useGeneralOne from "./useGeneralOne";

const useExtra = <T>(slug: string) =>
  useGeneralOne<T>("extra-docs", slug, ["extra-docs", slug]);

export default useExtra;
