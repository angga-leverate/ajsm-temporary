import { useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import logoMobile from "../../../../public/img/group_2405_1.png";

export default function Page() {
  const t = useTranslations();  
  return (
    <div className="ajsm_page our-brand">
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
                    {t("Mainnav.our-brand-story")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Mainnav.our-brand-story")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h4 className="mb-4">{t('Pages.our-brand-story.title')}</h4>
              <div dangerouslySetInnerHTML={{__html: t.raw(`Pages.our-brand-story.content`)}} />
               
                
            </div>
            <NavigasiTentang />
          </div>
        </div>
      </section>
    </div>
  );
}
