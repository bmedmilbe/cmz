import { useState } from "react";
import Breadcrumb from "../components/layout/header/Breadcrumb";
import CountyAdd from "../components/settings/CountyAdd";
import TownAdd from "../components/settings/TownAdd";
import StreetAdd from "../components/settings/StreetAdd";
import IntituitionAdd from "../components/settings/IntituitionAdd";
import UniversitieAdd from "../components/settings/UniversitieAdd";
import IfenAdd from "../components/settings/IfenAdd";
import CountryAdd from "../components/settings/CountryAdd";

const SettingsPage = () => {
  const [index, setIndex] = useState("");
  const links = [
    { title: "Países", content: <CountryAdd /> },
    { title: "Distritos", content: <CountyAdd /> },
    { title: "Cidades", content: <TownAdd /> },
    { title: "Localidades", content: <StreetAdd /> },
    { title: "Instituições", content: <IntituitionAdd /> },
    { title: "Universidades", content: <UniversitieAdd /> },
    { title: "Ifens", content: <IfenAdd /> },
  ];
  return (
    <>
      <Breadcrumb breadcrumbTitle={"Definições"} breadcrumbImage={"#"} />
      <div className="pd_top_100" />
      <main id="main" className="site-main" role="main">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              {links.map((item, k) => (
                <li
                  className={`list-group-item ${
                    item.title == index ? "active" : ""
                  }`}
                  key={k}
                  onClick={() => setIndex(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-9">
            <h1>{index}</h1>
            {links.filter((i) => i.title == index)[0]?.content}
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </main>
    </>
  );
};

export default SettingsPage;
