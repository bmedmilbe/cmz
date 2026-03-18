import useGeneralInfinite from "./useGeneralInfinite";

interface QueryParams {
  search?: string;
}
export interface Role {
  id: number;
  title: string;
}
export interface Image {
  id: number;
  image: string;
  role?: Role;
  name?: string;
}
export interface Tour {
  id: number;
  title: string;
  description: string;
  date: string;
  cms_images: Image[];
  slug: string;
  posted_at: string;
  location: string;
}

const useToursInfinite = (query_params: QueryParams) =>
  useGeneralInfinite<Tour>(query_params, "tours", "tours");

export default useToursInfinite;
