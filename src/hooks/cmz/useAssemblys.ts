import useCMZGeneralAll from "./useCMZGeneralAll";
import type { Image } from "./useToursInfinite";

export const useAssemblys = () =>
  useCMZGeneralAll<Image>("assemblys", "assemblys");
