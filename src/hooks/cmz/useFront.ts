import useCMZGeneralAll from "./useCMZGeneralAll";

interface Front {
  id: number;
  title: string;
  slug: string;
  picture: string;
}

export const useFront = () => {
  return useCMZGeneralAll<Front>(
    "posts?active=&featured=&is_a_service=&is_social_service=&is_to_front=true",
    "posts?active=&featured=&is_a_service=&is_social_service=&is_to_front=true",
  );
};

export default useFront;
