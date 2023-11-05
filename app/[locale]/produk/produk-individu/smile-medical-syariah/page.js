import { useTranslations } from "next-intl";
import Image from "next/image";
import headerProduk from "../../../../../public/img/produk.jpeg";
import NavigasiProduk from "../../../components/Navigasi/NavigasiIndividuWrapper";
import Link from "next/link";

export default function Page() {
  const t = useTranslations();  
  return (
    <div className="ajsm_page produk">
      <section className="header">
        <Image src={headerProduk} alt="AJSM" className="img-fluid" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">{t('Mainnav.home')}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.individual-insurance')}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.traditional-sharia-insurance")}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {t('Produk.smile-medical-syariah.title')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Produk.smile-medical-syariah.title')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 spr_liputanwrap">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-12">
                    <div className="card-body px-0 pt-1">
                      <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-medical-syariah.content')}} />
                      <h4>{t('Produk.benefit')}</h4>
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a className="nav-link active" aria-current="page" data-bs-toggle="pill" data-bs-target="#pills-as-charged" type="button" role="tab" aria-controls="pills-as-charged" aria-selected="true">{t('Produk.smile-medical-syariah.type.smile-medical-syariah-as-charged.title')}</a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" aria-current="page" data-bs-toggle="pill" data-bs-target="#pills-inner-limit" type="button" role="tab" aria-controls="pills-inner-limit" aria-selected="false">{t('Produk.smile-medical-syariah.type.smile-medical-syariah-inner-limit.title')}</a>
                        </li>
                      </ul>
                      
                      <div className="tab-content pt-3" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-as-charged" role="tabpanel" aria-labelledby="pills-as-charged-tab">
                          
                          <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-medical-syariah.type.smile-medical-syariah-as-charged.content')}} />
                          <a href="/files/produk/Asuransi_Kesehatan_Smile_Medical_as_Charged.pdf" className="btn btn-ajsm-dark ">{t('Produk.download')}</a>
                          <Link href={"/layanan/layanan-calon-nasabah"} className="btn btn-ajsm-dark ms-2">{t('Produk.register')}</Link>
                        </div>
                        <div className="tab-pane fade" id="pills-inner-limit" role="tabpanel" aria-labelledby="pills-inner-limit-tab">
                          <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-medical-syariah.type.smile-medical-syariah-inner-limit.content')}} />
                          <a href="/files/produk/Asuransi_Kesehatan_Smile_Medika_Ultimax_Syariah.pdf" className="btn btn-ajsm-dark ">{t('Produk.download')}</a>
                          <Link href={"/layanan/layanan-calon-nasabah"} className="btn btn-ajsm-dark ms-2">{t('Produk.register')}</Link>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-12">
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavigasiProduk />
          </div>
        </div>
      </section>
    </div>
  );
}
