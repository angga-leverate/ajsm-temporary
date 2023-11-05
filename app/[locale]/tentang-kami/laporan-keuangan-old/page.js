import { useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'

export default function Page() {
  const t = useTranslations();  
  return (
    <div className="ajsm_page laporan_keuangan">
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
                    {t("Mainnav.financial-reports")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Mainnav.financial-reports")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row ajsm_laporan">
                <div className="col-12 col-md-12">
                  <h4>2023</h4>
                  <h5>Laporan Tahunan</h5>
                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Konsolidasian Interim Tengah Tahunan 2023</h5>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5>Laporan Triwulan 1</h5>
                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Syariah</h5>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>   
                  <h5>Laporan Bulanan</h5>
                  <h6>AGUSTUS</h6>
                  <div className="row mb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Syariah</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Konvensional</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <h6>JULI</h6>
                  <div className="row mb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Syariah</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Konvensional</h6>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>   
                  <h6>JUNI</h6>
                  <div className="row pb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Syariah</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Konvensional</h6>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>    
                  <h6>MEI</h6>
                  <div className="row pb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Syariah</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Konvensional</h6>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>    
                  <h6>APRIL</h6>
                  <div className="row pb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Syariah</h6>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title">Laporan Keuangan Konvensional</h6>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>              
                </div>
              </div>
              <div className="row ajsm_laporan">
                <div className="col-12 col-md-12">
                  <h4 className="mt-4">2022</h4>
                  <h5>Laporan Tahunan</h5>
                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Konsolidasian Interim Tengah Tahunan 2022</h5>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5>Laporan Triwulan 1</h5>
                  <div className="row pb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Syariah</h5>
                          <a href="#" className="btn btn-ajsm">
                            Unduh PDF
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                          <a href="#" className="btn btn-ajsm">
                          Unduh PDF
                          </a>
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
