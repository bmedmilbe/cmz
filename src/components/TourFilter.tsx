import React from "react";
import type { Tour } from "../hooks/cmz/useToursInfinite";
import useToursInfinite from "../hooks/cmz/useToursInfinite";
import { NavLink } from "react-router-dom";

interface Props {
  targetTour?: Tour;
}
const TourFilter = ({ targetTour }: Props) => {
  const query_param = {
    search: undefined,
  };
  const {
    data: tours,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useToursInfinite(query_param);
  return (
    <div>
      <div className="row">
        {tours?.pages.map((p) => (
          <React.Fragment>
            {" "}
            {p?.results
              ?.filter((t) => t.id != targetTour?.id)
              ?.map((tour, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                >
                  <div className="project_box style_two">
                    <div className="entry-thumbnail image">
                      <img
                        width={370}
                        height={247}
                        src={tour.images[0]?.image}
                        className="attachment-370x330 size-370x330 wp-post-image"
                        alt="img"
                        loading="lazy"
                      />
                      <div className="overlay">
                        <a data-fancybox="gallery" href={`/tours/${tour.slug}`}>
                          <span className="fa fa-search icon" />
                        </a>
                      </div>
                    </div>
                    <div className="content_inner">
                      <h2>
                        <NavLink to={`/tours/${tour.slug}`}>
                          {tour.title}
                        </NavLink>
                      </h2>
                      <div className="meta_value">
                        <NavLink to={`/tours/${tour.slug}`}>
                          {tour.description}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </React.Fragment>
        ))}
        {hasNextPage && (
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-center">
              {!isFetching && (
                <button
                  disabled={!hasNextPage}
                  onClick={() => fetchNextPage()}
                  className="btn btn-info"
                >
                  Ver mais &rarr;
                </button>
              )}
              {isFetching && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourFilter;
