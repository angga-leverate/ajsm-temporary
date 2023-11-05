
import Link from 'next/link'
import Image from "next/image";
import { useLocale } from 'next-intl';
import prosedurkomplainID from "../../../../public/img/komplain_Id.jpg";
import prosedurkomplainEN from "../../../../public/img/komplain_En.jpg";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useTranslations } from 'next-intl';
export default function Page() {
  const locale = useLocale();
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.procedure-for-complaints')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.procedure-for-complaints')}</h1>
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
                  <Image src={locale==='id' ? prosedurkomplainID:prosedurkomplainEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />                      
                    
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