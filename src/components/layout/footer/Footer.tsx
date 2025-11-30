import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_area  footer_eleven" id="footer_contents">
      <div className="footer_widgets_wrap bg_op_1">
        {/*===============spacing==============*/}
        <div className="pd_top_20" />
        {/*===============spacing==============*/}
        <div className="large-container">
          <div className="row gutter_15px">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer_widgets style_two">
                {/*===============spacing==============*/}
                <div className="pd_top_15" />
                {/*===============spacing==============*/}
                <div className="fo_wid_title text-center fo_wid_title_2">
                  <h2>Horário de Funcionamento</h2>
                </div>
                <div className="content_box ">
                  <p className="color_white text-center">
                    {" "}
                    Os nossos escritórios ficam aberto de segunda a sexta, entre
                    8 ás 17 horas com intervalo entre 13 e 14 horas .
                  </p>
                </div>
                {/*===============spacing==============*/}
                {/* <div className="pd_bottom_20" /> */}
                {/*===============spacing==============*/}
                <div className="gallery_repeater"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer_widgets style_two">
                {/*===============spacing==============*/}
                <div className="pd_top_15" />
                {/*===============spacing==============*/}
                <div className="fo_wid_title text-center fo_wid_title_2">
                  <h2>Contacte-nos</h2>
                </div>
                {/*===============spacing==============*/}
                {/* <div className="pd_bottom_15" /> */}
                {/*===============spacing==============*/}
                <div className="footer_contact_list type_two text-center">
                  <NavLink
                    to={"/mailto:cdmz.contact@creote.com"}
                    className="color_white"
                  >
                    <span className="icon-email color_white" />{" "}
                    cdmz.contact@gmail.com
                  </NavLink>
                </div>
                {/*===============spacing==============*/}
                {/* <div className="pd_bottom_15" /> */}
                {/*===============spacing==============*/}
                <div className="footer_contact_list type_two text-center">
                  <NavLink to="/tel:+2392271543" className="color_white">
                    <span className="icon-phone-call color_white" />
                    +239 2271 543
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        {/* <div className="pd_bottom_10" /> */}
        {/*===============spacing==============*/}
      </div>
      <div
        className="footer-copyright text-center bg_op_1"
        style={{ background: "url(/assets/images/home-11-patter-1.jpg)" }}
      >
        {/*===============spacing==============*/}
        <div className="pd_top_20" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="footer_copy_content color_white">
              © {new Date().getFullYear()} Câmara Distrital de Mé-Zóchi. Todos
              os Direitos Reservados. Desenvolvido por{" "}
              <NavLink
                to="https://www.edmilbe.pro"
                className="color_white"
                target="_blank"
              >
                SiteTops.
              </NavLink>{" "}
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_20" />
        {/*===============spacing==============*/}
      </div>
    </div>
  );
};

export default Footer;
