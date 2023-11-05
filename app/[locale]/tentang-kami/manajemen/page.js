import { useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import StrukturOrganisasi from "./component/strukturorganisasi";
import IndrawidjayaBio from "./component/indrawidjaya";
import ToshinariTokoi from "./component/toshinaritokoi";
import HideakiNomura from "./component/hideakinomura";
import ArdhayadiMitroatmodjo from "./component/ardhayadimitroatmodjo";
import SidhartaAkmam from "./component/sidhartaakmam";
import NazlyParlindunganSiregar from "./component/nazlyparlindungansiregar";
import Wianto from "./component/wianto";
import Andrew from "./component/andrew";
import Shiratani from "./component/shiratani";
import Monden from "./component/monden";
import Terada from "./component/terada";
import Herman from "./component/herman";
import Bambang from "./component/bambang";
import Endy from "./component/endy";
import Ahmadi from "./component/ahmadi";
import Karel from "./component/karel";
import Leony from "./component/leony";
import NazlyParlindunganSiregar2 from "./component/nazlyparlindungansiregar2";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'

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
                      <a href="#">{t("Mainnav.home")}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.about-us")}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      {t("Mainnav.management")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                  {t("Mainnav.management")}
                </h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="mt-0">
                <div className="row g-4 mb-2 ajsm_management">
                  <div className="col-md-12 mt-0">

                    <div className="pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.board-commissioner')}</h4>
                      <div className="row ajsm_people">
                        <div className="col-12 col-md-4 mb-5"><IndrawidjayaBio /></div>
                        <div className="col-12 col-md-4 mb-5"><ToshinariTokoi /></div>
                        <div className="col-12 col-md-4 mb-5"><HideakiNomura /></div>
                        <div className="col-12 col-md-4 mb-5"><ArdhayadiMitroatmodjo /></div>
                        <div className="col-12 col-md-4 mb-5"><SidhartaAkmam /></div>
                        <div className="col-12 col-md-4 mb-5"><NazlyParlindunganSiregar /></div>
                      </div>
                    </div>

                    <div className="px-0 pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.board-director')}</h4>
                      <div className="row ajsm_people">
                        <div className="col-12 col-md-4 mb-5"><Wianto /></div>
                        <div className="col-12 col-md-4 mb-5"><Shiratani /></div>
                        <div className="col-12 col-md-4 mb-5"><Monden /></div>
                        <div className="col-12 col-md-4 mb-5"><Herman /></div>
                        <div className="col-12 col-md-4 mb-5"><Andrew /></div>
                        <div className="col-12 col-md-4 mb-5"><Terada /></div>
                      </div>
                    </div>

                    <div className="px-0 pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.shariasupervisoryboard')}</h4>
                      <div className="row ajsm_people">
                        <div className="col-12 col-md-4 mb-5"><Endy /></div>
                        <div className="col-12 col-md-4"><Ahmadi /></div>
                      </div>
                    </div>

                    <div className="px-0 pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.auditcommittee')}</h4>
                      <div className="row ajsm_people">
                        <div className="col-12 col-md-4 mb-5"><NazlyParlindunganSiregar2 /></div>
                        <div className="col-12 col-md-4"><Karel /></div>
                        <div className="col-12 col-md-4"><Bambang /></div>
                      </div>
                    </div>

                    <div className="px-0 pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.corpsecretary')}</h4>
                      <div className="row ajsm_people">
                      <div className="col-12 col-md-4 mb-5"><Leony /></div>
                      </div>
                    </div>
                    <div className="px-0 pt-1 mb-2">
                      <h4 className="mb-4">{t('Management.struktur')}</h4>
                      <div className="row ajsm_people">
                      <div className="col-12 mb-5"><StrukturOrganisasi /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavigasiTentang />
          </div>
        </div>
      </section>
    </div>
  );
}
