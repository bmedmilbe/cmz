import Breadcrumb from "../../components/layout/header/Breadcrumb";
import TourFilter from "../../components/TourFilter";

const ToursPage = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Locais Turísticos do Distrito de Mé-Zóchi"
        breadcrumbImage="/assets/images/tours.webp"
      />
      <div>
        {/*===============spacing==============*/}
        <div className="pd_top_10" />
        {/*===============spacing==============*/}
        <section className="creote-service-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_five text-center dark_color">
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="project_all filt_style_eight filter_enabled text-center">
              {/* {console.log(tours)} */}
              <TourFilter />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToursPage;
