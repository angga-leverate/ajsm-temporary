import { useTranslations } from "next-intl";

import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import Link from "next/link";


export default function Page() {
  const t = useTranslations();
  return (
    <div className="ajsm_page tata_kelola mb-5">
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
                    <li className="breadcrumb-item">
                      {t("Mainnav.good-corporate-governance")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                  {t("Mainnav.good-corporate-governance")}
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
                  {t('Konten.gcg.desc')}
                </p>
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  
                  <div className="col-md-10 offset-md-1">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {t('Konten.gcg.struktur-tata-kelola-perusahaan')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="#">
                                    {t('Konten.gcg.struktur-tata-kelola-perusahaan')}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              {t('Konten.gcg.good-corporate-governance-report')}
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2022
                                    Syariah
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2022
                                    Konvensional
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2021
                                    Syariah
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2021
                                    Konvensional
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2020
                                    Syariah
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2020
                                    Konvensional
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    Laporan Tahunan Penerapan Tata Kelola 2019
                                    Syariah
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="true"
                              aria-controls="collapseThree"
                            >
                               {t('Konten.gcg.board-chartered')}
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="#">
                                   {t('Konten.gcg.board-chartered')}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="true"
                              aria-controls="collapseFour"
                            >
                              {t('Konten.gcg.risk-management-policy')}
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <Link href="#">
                                  {t('Konten.gcg.risk-management-policy')}
                                  </Link>
                                </li>
                              </ul>
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
