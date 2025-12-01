import useGeneralOne from "./useGeneralOne";

const useTour = <T>(slug: string) =>
  useGeneralOne<T>("tours", slug, ["tours", slug]);

export default useTour;
