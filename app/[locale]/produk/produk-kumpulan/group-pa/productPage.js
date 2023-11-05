'use client'
import { usePathname, useRouter } from 'next/navigation'
import headerProduk from "../../../../../public/img/produk.jpeg";
import NavigasiProduk from "../../../components/Navigasi/NavigasiGroupWrapper";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


export default function ProductPage() {
  const {query} = useRouter()
  const t = useTranslations()
  const path = usePathname()
  const arrPath = path.split('/');
  const productSegment = arrPath[arrPath.length-1];
  const bankSegment = arrPath[arrPath.length-2];
  const file = t(`Produk.${productSegment}.file`);
  return (
    <div className="ajsm_page produk">
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
                        <a href="#">{t('Mainnav.group-insurance')}</a>
                      </li>
                      <li aria-current="page" className="breadcrumb-item active">
                      <a href="#">{t(`Produk.${productSegment}.title`)}</a>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="page-header-ui-title mb-3">{t(`Produk.${productSegment}.title`)}</h1>
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
                        <div dangerouslySetInnerHTML={{__html: t.raw(`Produk.${productSegment}.content`)}} />
                        <h4>{t('Produk.benefit')}</h4>
                        <div dangerouslySetInnerHTML={{__html: t.raw(`Produk.${productSegment}.benefit`)}} />
                        
                      </div>
                      <div className="col-12">
                          <a href={"#"} className="btn btn-ajsm-dark ">{t('Produk.download')}</a>
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
    </div>
  );
}
