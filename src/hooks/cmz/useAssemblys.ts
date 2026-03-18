import useCMZGeneralAll from "./useCMZGeneralAll";
import type { Image } from "./useToursInfinite";

export const useAssemblys = () =>
  useCMZGeneralAll<Image>(
    "teams?from_assembly=true",
    "teams?from_assembly=true",
  );
