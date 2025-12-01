import useCMZGeneralAll from "./useCMZGeneralAll";
import type { Image } from "./useToursInfinite";

export interface Extra {
  text_file: string;
  extra_images: Image[];
  id: number;
  image: string;
  picture: string;
  info: string;
  title: string;
  beginnig: string;
  slug: string;
  text: string;
  posted_at: string;
  date: string;
  prev: string;
  next: string;
}

const useExtras = () => useCMZGeneralAll<Extra>("extras", "extras");

export default useExtras;
