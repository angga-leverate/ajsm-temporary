
import Link from 'next/link'
import Image from "next/image";
import kelola1 from "../../../../public/img/1 Pengaduan Nasabah.jpeg";
import kelola2 from "../../../../public/img/2 Pengaduan Nasabah.jpeg";
import kelola3 from "../../../../public/img/3 Pengaduan Nasabah.jpeg";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper';
import { useTranslations } from 'next-intl';
export default function Page() {
  const t = useTranslations();
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.home')}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.services')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.customer-service-governance')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.customer-service-governance')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                    
                    <Image
                    alt="AJSM"
                    src={kelola1}
                    className="d-block img-fluid mx-auto"
                  ></Image>

                  <Image
                    alt="AJSM"
                    src={kelola2}
                    className="d-block img-fluid mx-auto"
                  ></Image>

                  <Image
                    alt="AJSM"
                    src={kelola3}
                    className="d-block img-fluid mx-auto"
                  ></Image>
                    
                  </div>
                </div>
              </div>
            </div> 
            <NavigasiLayanan/> 
          </div>
        </div>
      </section>
    </div>
  )
}