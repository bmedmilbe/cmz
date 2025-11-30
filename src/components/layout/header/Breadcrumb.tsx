interface Props {
  breadcrumbTitle?: string;
  breadcrumbImage?: string;
}
const Breadcrumb = ({ breadcrumbTitle, breadcrumbImage }: Props) => {
  return (
    <>
      {breadcrumbTitle && (
        <div className={`page_header_default style_one`}>
          <div className="parallax_cover">
            <div className="simpleParallax">
              <img
                src={
                  breadcrumbImage || "/assets/images/page-header-default.jpg"
                }
                alt="bg_image"
                className="cover-parallax"
              />
            </div>
          </div>
          <div className="page_header_content">
            <div className="auto-container pd_top_100">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner_title_inner">
                    <div className="title_page">{breadcrumbTitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Breadcrumb;
