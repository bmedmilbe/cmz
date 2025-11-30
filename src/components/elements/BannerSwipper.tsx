import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useFront from "../../hooks/cmz/useFront";
const BannerSwipper = () => {
  const swiperOptions = {
    // General
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      380: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1281: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },

    // Navigation
    navigation: {
      nextEl: ".h9n",
      prevEl: ".h9p",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const { data: front } = useFront();

  return (
    <>
      <div className="pd_top_10" />

      {front && (
        <Swiper
          {...swiperOptions}
          direction={"horizontal"}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {front?.map((staff, index) => (
            <SwiperSlide key={index}>
              <div className="main-image-container">
                <img
                  src={staff.picture}
                  className="position-absolute top-50 start-50 translate-middle img-fluid rounded img-home "
                  alt="team image"
                  style={{ width: "100%" }}
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle rounded rounded-5 text-box"
                  style={{ background: "rgba(0,0,0,.3)" }}
                >
                  <h2 className="text-light text-center main-title">
                    {staff.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default BannerSwipper;
