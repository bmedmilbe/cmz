import useGeneralOne from "./useGeneralOne";

const usePost = <T>(slug: string) =>
  useGeneralOne<T>("posts", slug, ["posts", slug]);

export default usePost;
