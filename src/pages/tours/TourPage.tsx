import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import useTour from "../../hooks/cmz/useTour";
import type { Tour } from "../../hooks/cmz/useToursInfinite";
import TourFilter from "../../components/TourFilter";
import { useState } from "react";
import ImageGallery from "../../components/ImageGallery";

const TourPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/");
    return null;
  }

  const { data: tour, isLoading } = useTour<Tour>(slug);

  if (!isLoading && !tour) {
    navigate("/");
    return null;
  }
  const [selectedImageIndex, setSelectedImageIndex] = useState<
    number | undefined
  >(undefined);

  const openPopup = (index: number) => {
    setSelectedImageIndex(index);
  };
  if (isLoading) return <Spinner />;
  return (
    <>
      <ImageGallery
        images={tour?.cms_images}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <Breadcrumb
        breadcrumbTitle={tour?.title}
        breadcrumbImage={tour?.cms_images[0]?.image}
      />

      <main id="main" className="site-main" role="main">
        <section className="blog_single_details_outer">
          <div className="container">
            <section className="blog_single_details_outer title_all_box style_five text-center dark_color">
              <div className="title_sections five">
                <p>{tour?.description}</p>
              </div>
              <div className="row images-gallery">
                {tour?.cms_images?.map((image, index) => {
                  return (
                    <div className="image-gallery-box">
                      <img
                        src={image.image}
                        alt="image"
                        onClick={() => openPopup(index + 1)}
                        className="image-gallery"
                      />
                    </div>
                  );
                })}
                <div className="pd_top_40" />
              </div>
            </section>
          </div>
        </section>
        <TourFilter targetTour={tour} />

        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </main>
    </>
  );
};

export default TourPage;
