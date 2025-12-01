import ServiceList from "../../components/elements/ServiceList";
import Breadcrumb from "../../components/layout/header/Breadcrumb";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Serviços"
        breadcrumbImage="/assets/images/service.webp"
      />
      <ServiceList />
    </>
  );
};

export default ServicesPage;
