import useCMZGeneralAll from "./useCMZGeneralAll";

export interface Budget {
  id: number;
  title: string;
  slug: string;
  text_file: string;
  date: string;
  year: number;
  type: string;
}

const useBudgets = () => useCMZGeneralAll<Budget>("budgets", "budgets");

export default useBudgets;
