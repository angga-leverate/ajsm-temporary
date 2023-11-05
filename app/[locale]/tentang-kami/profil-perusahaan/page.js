import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import tabelA from '../../../../public/img/Asset2.png'
import tabelAEn from '../../../../public/img/Asset2_en.png'

export default function Page() {
  const t = useTranslations();  
  const locale = useLocale();
  return (
    <div className="ajsm_page tentang_kami">
      <section className="header">
        <Image src={headerTentang} alt="AJSM" className="img-fluid" />
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
                      <a href="#">{t('Mainnav.about-us')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {t('Mainnav.company-profile')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.company-profile')}</h1>
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
                      <div dangerouslySetInnerHTML={{__html: t.raw('Konten.profil_perusahaan')}} />
                    </div>
                    <div className="col-12 col-md-8 offset-md-2">
                    <Image src={locale==='id' ? tabelA:tabelAEn}  className="img-fluid desktop" alt="AJSM" />   
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
