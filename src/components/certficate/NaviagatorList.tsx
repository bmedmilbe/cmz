interface Props {
  page: number;
  pageSize: number;
  totalItem: number;
  setPage: (value: number) => void;
}
const NaviagatorList = ({ page, setPage, totalItem, pageSize }: Props) => {
  return (
    <>
      <div className="p-2 d-flex justify-content-evenly">
        <span
          className={`btn ${page == 1 ? "pe-none btn-secondary" : "btn-info"}`}
          onClick={() => setPage(page - 1)}
        >
          &larr; Página anterior
        </span>
        <span
          className={`btn ${
            page >= totalItem / pageSize ? "pe-none btn-secondary" : "btn-info"
          }`}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Página seguinte &rarr;
        </span>
      </div>
    </>
  );
};

export default NaviagatorList;
