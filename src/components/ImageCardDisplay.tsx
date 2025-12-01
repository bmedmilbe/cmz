import type { Image } from "../hooks/cmz/useToursInfinite";
interface Props {
  images: Image[] | undefined;
}
const ImageCardDisplay = ({ images }: Props) => {
  return (
    <>
      <section className="creote-service-box">
        <div
          className="container row justify-content-around"
          style={{ margin: "0 auto" }}
        >
          {images?.map((image, index) => (
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card" style={{ width: "18rem" }} key={index}>
                <img
                  src={image.image}
                  className="card-img-top"
                  alt={image.name}
                />
                {image.role && (
                  <div className="card-body text-center">
                    <h5 className="card-title">{image.name}</h5>
                    <p className="card-text">{image.role.title}</p>
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

export default ImageCardDisplay;
