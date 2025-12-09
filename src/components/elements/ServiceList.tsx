import useServicesCMZ from "../../hooks/cmz/useServicesCMZ";
import useServicesSocial from "../../hooks/cmz/useServicesSocial";

const ServiceList = () => {
  const { data: cmz, isLoading: cmzLoading } = useServicesCMZ();
  const { data: social, isLoading: socialLoading } = useServicesSocial();

  return (
    <>
      <div>
        <section className="creote-service-box">
          <div className="container">
            <div className="row">
              <div className="col-md-6  service-group ">
                <h2 className="service-group-title">Serviços Sociais</h2>

                {!socialLoading && (
                  <div className="service-items">
                    {social?.map((a, k) => (
                      <div
                        key={k}
                        className="d-flex align-items-stretch service-item"
                      >
                        <img className="service-item-image" src={a.picture} />
                        <h3 className="align-self-center service-item-name">
                          <a href={`/services/${a.slug}`}>{a.title}</a>
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-md-6 service-group">
                <h2 className="service-group-title">Serviços Camarários</h2>

                {!cmzLoading && (
                  <div className="service-items">
                    {cmz?.map((a, k) => (
                      <div
                        key={k}
                        className="d-flex align-items-stretch service-item"
                      >
                        <img className="service-item-image" src={a.picture} />
                        <h3 className="align-self-center service-item-name">
                          <a href={`/services/${a.slug}`}>{a.title}</a>
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="pd_top_100" />
      </div>
    </>
  );
};

export default ServiceList;
