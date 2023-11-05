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
                    <li aria-current="page" className="breadcrumb-item active">
                    {t('Produk.smile-personal-accident.title')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Produk.smile-personal-accident.title')}</h1>
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
                      <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-personal-accident.content')}} />
                      <h4>{t('Produk.benefit')}</h4>
                      <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-personal-accident.benefit')}} />
                    </div>
                    <div className="col-12">
                        <a href="/files/produk/Asuransi_Jiwa_Smile_Personal_Accident.pdf" className="btn btn-ajsm-dark ">{t('Produk.download')}</a>
                        <Link href={"/layanan/layanan-calon-nasabah"} className="btn btn-ajsm-dark ms-2">{t('Produk.register')}</Link>
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
