import ImageCardDisplay from "../components/ImageCardDisplay";
import Breadcrumb from "../components/layout/header/Breadcrumb";
import { useAssemblys } from "../hooks/cmz/useAssemblys";

const AssemblysPage = () => {
  const { data: images } = useAssemblys();
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Assembleia"
        breadcrumbImage="/assets/images/service.webp"
      />
      <ImageCardDisplay images={images} />
    </>
  );
};

export default AssemblysPage;
