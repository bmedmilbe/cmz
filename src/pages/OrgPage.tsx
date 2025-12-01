import { useNavigate, useParams } from "react-router-dom";
import ExtrasMenu from "../components/ExtrasMenu";
import OrgDisplay from "../components/OrgDisplay";
import useBudgets from "../hooks/cmz/useBudgets";
import Spinner from "../components/Spinner";

const OrgPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/");
    return null;
  }

  // Use the parsed ID directly
  const { data: budgets, isLoading } = useBudgets();

  if (!isLoading && !budgets) {
    navigate("/");
    return null;
  }
  if (isLoading) return <Spinner />;

  const datas = {
    ["budgets"]: {
      letter: "B",
      breadcrumbTitle: "Orçamentos",
      breadcrumbImage:
        "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    ["laws"]: {
      letter: "L",
      breadcrumbTitle: "Legislações",
      breadcrumbImage:
        "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    ["report"]: {
      letter: "R",
      breadcrumbTitle: "Relatórios",
      breadcrumbImage:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  };

  const data =
    slug == "budgets"
      ? datas.budgets
      : slug == "laws"
      ? datas.laws
      : slug == "report"
      ? datas.report
      : undefined;
  if (!data) {
    navigate("/");
    return null;
  }
  return (
    <>
      <OrgDisplay
        budgets={budgets.filter((c) => c.type == data.letter)}
        breadcrumbTitle={data.breadcrumbTitle}
        breadcrumbImage={data.breadcrumbImage}
      >
        <ExtrasMenu target={slug} />
      </OrgDisplay>
    </>
  );
};

export default OrgPage;
