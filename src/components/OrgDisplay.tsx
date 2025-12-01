import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "./layout/header/Breadcrumb";
import type { Budget } from "../hooks/cmz/useBudgets";
interface Props {
  budgets: Budget[];
  children: React.ReactNode | "";

  breadcrumbTitle: string;
  breadcrumbImage: string;
}
const OrgDisplay = ({
  budgets,
  children,
  breadcrumbTitle,
  breadcrumbImage,
}: Props) => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle={breadcrumbTitle}
        breadcrumbImage={breadcrumbImage}
      />
      <main id="main" className="site-main" role="main">
        <section className="blog_single_details_outer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ul className="list-group list-group-flush">
                  {budgets?.map((b) => (
                    <li className="list-group-item fw-bold text-start">
                      <NavLink
                        to={b.text_file}
                        style={{ color: "#212529" }}
                        target="_blank"
                      >
                        {b.title}{" "}
                        <span className="fw-normal">
                          (.pdf){" "}
                          <span className="fw-bold">&rarr; {b.year}</span>
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <hr />
                <div className="pd_top_10" />
              </div>
              <div className="col-md-3">{children}</div>
            </div>
          </div>
        </section>

        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </main>
    </>
  );
};

export default OrgDisplay;
