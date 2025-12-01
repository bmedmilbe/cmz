import type { Image } from "../hooks/cmz/useToursInfinite";

interface Props {
  selectedImageIndex: number | undefined;
  setSelectedImageIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  images: Image[];
}

const ImageGallery = ({
  images,
  selectedImageIndex,
  setSelectedImageIndex,
}: Props) => {
  const closePopup = () => {
    setSelectedImageIndex(undefined);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prevIndex) => ((prevIndex || 0) + 1) % (images.length + 1)
      );
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : (prevIndex || 0) - 1
      );
    }
  };

  return (
    <div className={`popupfull ${selectedImageIndex ? "" : "hidden"}`}>
      <button
        type="button"
        className="btn-close"
        id="btn-close"
        aria-label="Close"
        onClick={() => closePopup()}
      ></button>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {images?.map((i, index) => (
            <div
              className={`carousel-item ${
                selectedImageIndex == index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <img src={i.image} className="d-block carousel-image" alt="..." />
              {i.role && (
                <div className="carousel-caption d-none d-md-block">
                  <h5>{i.name}</h5>
                  <p>{i.role.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => prevImage()}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => nextImage()}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
