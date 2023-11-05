
import Image from "next/image";

import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'

import Awards1Popup from "./component/awards1popup"
import Awards2Popup from "./component/awards2popup"
import Awards3Popup from "./component/awards3popup"
import Awards4Popup from "./component/awards4popup"
import Awards5Popup from "./component/awards5popup"
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations(); 
  return (
    <div className="ajsm_page tentang_kami">
      <section className="header">
        <Image src={headerTentang} alt="AJSM" className="img-fluid" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.about-us")}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {t("Mainnav.awards")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3"> {t("Mainnav.awards")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-md-6"><Awards1Popup /></div>
                <div className="col-12 col-md-6"><Awards2Popup /></div>
                <div className="col-12 col-md-6"><Awards3Popup /></div>
                <div className="col-12 col-md-6"><Awards4Popup /></div>
                <div className="col-12 col-md-6 offset-md-3"><Awards5Popup /></div>  
              </div> 
            </div>
            <NavigasiTentang />                                     
          </div>
        </div>
      </section>
    </div>
  );
}
