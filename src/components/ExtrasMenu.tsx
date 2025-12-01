import { NavLink } from "react-router-dom";

interface Props {
  target: string;
}

const ExtrasMenu = ({ target }: Props) => {
  return (
    <div className="shadow-section">
      <h5>Saiba mais sobre a Câmara Distrital de Mé-Zóchi</h5>
      <ul className="list-group list-group-flush">
        <li
          className={`list-group-item ${
            target == "composition" ? "fw-bold" : ""
          }`}
        >
          <NavLink to="/staffs">&rarr; Composição </NavLink>
        </li>
        <li
          className={`list-group-item ${target == "assembly" ? "fw-bold" : ""}`}
        >
          <NavLink to="/assemblys">&rarr; Assembleia </NavLink>
        </li>
        <li className={`list-group-item ${target == "law" ? "fw-bold" : ""}`}>
          <NavLink to="/orgs/laws"> &rarr; Legislações</NavLink>
        </li>
        <li
          className={`list-group-item ${target == "report" ? "fw-bold" : ""}`}
        >
          <NavLink to="/orgs/report"> &rarr; Relatórios Financeiros</NavLink>
        </li>
        <li
          className={`list-group-item ${target == "budget" ? "fw-bold" : ""}`}
        >
          <NavLink to="/orgs/budgets"> &rarr; Orçamentos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ExtrasMenu;
