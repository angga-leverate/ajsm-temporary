
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import informasiInvestor from "../../../../public/img/informasi_investor.png";
import informasiInvestorEn from "../../../../public/img/informasi_investor_en.png";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import Link from 'next/link';

export default function Page() {
 
  const locale = useLocale();
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
                      <a href="/">{t("Mainnav.home")}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.about-us")}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {t("Mainnav.investor-information")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                {t("Mainnav.investor-information")}
                </h1>
                
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 spr_liputanwrap">
            <p>
            {t("investor-information.desc")}
                </p>
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-10">
                  <Image src={locale==='id' ? informasiInvestor:informasiInvestorEn}  className="img-fluid mobile" alt="AJSM" />
                  </div>
                  <div className="col-12">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <div className="card mb-4">
                            <div className="card-body">
                              <h5 className="card-title">{t("investor-information.rups")}</h5>
                              <p className="card-text">
                              {t("investor-information.sub-rups")}
                              </p>
                              <Link href="/tentang-kami/rups" className="btn btn-ajsm">
                              {t("Mainnav.see-more")}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card mb-4">
                            <div className="card-body">
                              <h5 className="card-title">{t("investor-information.cor-action")}</h5>
                              <p className="card-text">
                              {t("investor-information.sub-cor-action")}
                              </p>
                              <a href="#" className="btn btn-ajsm">
                                {t("Mainnav.see-more")}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card mb-4">
                            <div className="card-body">
                              <h5 className="card-title">{t("investor-information.other")}</h5>
                              <p className="card-text">
                              {t("investor-information.sub-other")}
                              </p>
                              <a href="#" className="btn btn-ajsm">
                                {t("Mainnav.see-more")}
                              </a>
                            </div>
                          </div>
                        </div>                        
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
