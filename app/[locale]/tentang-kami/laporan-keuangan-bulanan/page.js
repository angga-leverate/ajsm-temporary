import { useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";


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
                    {t("Mainnav.monthly-financial-reports")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Mainnav.monthly-financial-reports")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row ajsm_laporan">
            <div className="col-12 col-md-10">
              <h4>2023</h4>
              <h5>AGUSTUS</h5>
              <div className="row mb-4">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Syariah</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>              
              <h5>JULI</h5>
              <div className="row mb-4">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Syariah</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                      Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>   
              <h5>JUNI</h5>
              <div className="row pb-4">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Syariah</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                      Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>    
              <h5>MEI</h5>
              <div className="row pb-4">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Syariah</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                      Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>    
              <h5>APRIL</h5>
              <div className="row pb-4">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Syariah</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Laporan Keuangan Konvensional</h5>
                      <a href="#" className="btn btn-ajsm-dark">
                      Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>                                                        
            </div>        
          </div>
        </div>
      </section>
    </div>
  );
}
