import { useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'

export default function Page() {
  const t = useTranslations();
  return (
    <div className="ajsm_page laporan_tahunan_unit_link">
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
                      {t("Mainnav.unit-link-annual-reports")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                  {t("Mainnav.unit-link-annual-reports")}
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
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <p>Laporan Tahunan Unit Link memuat penjelasan mengenai aktivitas, kinerja dan prestasi yang dicapai Sinarmas MSIG Life selama satu tahun.</p>
                  <div className="card text-center">
                    <h4 className="card-header">2022</h4>
                    <div className="card-body">
                      <h4>Laporan Tahunan Unit Link 2022</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2021</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2021</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>    
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2020</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2020</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>     
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2019</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2019</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>   
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2018</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2018</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>    
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2017</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2017</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>    
              <div className="row ajsm_laporan">
                <div className="col-12">
                  <div className="card text-center">
                    <h4 className="card-header">2016</h4>
                    <div className="card-body">
                    <h4>Laporan Tahunan Unit Link 2016</h4>
                      <a href="#" className="btn btn-ajsm">
                        Unduh PDF
                      </a>
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
