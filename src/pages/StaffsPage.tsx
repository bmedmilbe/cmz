import Breadcrumb from "../components/layout/header/Breadcrumb";
import { useTeams } from "../hooks/cmz/useTeams";

const StaffsPage = () => {
  const { data: staffs } = useTeams();
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Composição"
        breadcrumbImage="/assets/images/service.webp"
      />
      <section className="creote-service-box">
        <div
          className="container row justify-content-around"
          style={{ margin: "0 auto" }}
        >
          {staffs?.map((staff, index) => (
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card" style={{ width: "18rem" }} key={index}>
                <img
                  src={staff.image}
                  className="card-img-top"
                  alt={staff.name}
                />
                {staff.role && (
                  <div className="card-body text-center">
                    <h5 className="card-title">{staff.name}</h5>
                    <p className="card-text">{staff.role.title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="pd_top_100" />
    </>
  );
};

export default StaffsPage;
