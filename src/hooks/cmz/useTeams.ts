import useCMZGeneralAll from "./useCMZGeneralAll";
import type { Image } from "./useToursInfinite";

export const useTeams = () => useCMZGeneralAll<Image>("teams", "teams");
