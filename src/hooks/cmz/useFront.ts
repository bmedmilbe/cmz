import useCMZGeneralAll from "./useCMZGeneralAll";

interface Front {
  id: number;
  title: string;
  slug: string;
  picture: string;
}

export const useFront = () => {
  return useCMZGeneralAll<Front>("fronts", "fronts");
};

export default useFront;
