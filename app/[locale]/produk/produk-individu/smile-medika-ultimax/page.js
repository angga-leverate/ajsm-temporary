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
                    {t('Produk.smile-medika-ultimax.title')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Produk.smile-medika-ultimax.title')}</h1>
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
                      <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-medika-ultimax.content')}} />
                      <h4>{t('Produk.benefit')}</h4>
                      <div dangerouslySetInnerHTML={{__html: t.raw('Produk.smile-medika-ultimax.benefit')}} />
                    </div>
                    <div className="col-12 d-flex">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-ajsm-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {t('Produk.download')}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item" href="/files/produk/Asuransi_Kesehatan_Smile_Medika_Ultimax.pdf">{t('Produk.brochure')}</a></li>
                          <li><a className="dropdown-item" href="/files/produk/ProdukIndividu_Konvensional_RIPLAY Umum - Asuransi Kesehatan SMiLe Medika Ultimax.pdf">Riplay</a></li>
                          
                        </ul>
                      </div>
                        {/* <a href="/files/produk/Asuransi_Kesehatan_Smile_Medika_Ultimax.pdf" className="btn btn-ajsm-dark "></a> */}
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
