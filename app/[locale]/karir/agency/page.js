
import Link from 'next/link'
import Image from "next/image";
import headerContact from "../../../../public/img/bannerweb_karir.jpg";
import internimage from "../../../../public/img/intern_recruit.jpg";
import { useTranslations } from "next-intl";
import Youtube from './Youtube';
export default function Page() {
  const t = useTranslations();
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
      {/*       */}
      <Image src={headerContact} alt="AJSM" className="img-fluid mb-5" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        {t("Mainnav.home")}
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t("Footer.Career")}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Career.agency_title")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4 mb-5">
        <div className="container">
          <div className='row mb-5'>
            <div className='col-12 col-md-6' dangerouslySetInnerHTML={{__html: t.raw("Career.agency_desc")}}></div>
            <div className='col-12 col-md-6'>
              <Image
                src={internimage}
                alt="AJSM"
                className="img-fluid rounded-3"
                loading="lazy"
              ></Image>
            </div>
          </div>

          <div className='row mb-5'>
            <div className='col-12 col-md-12'>
              <h2>{t(`Career.agency_criteria_title`)}</h2>
              <div dangerouslySetInnerHTML={{__html: t.raw(`Career.agency_criteria_desc`)}}/>
            </div>

          </div>
          <div className="row mt-5">
            <div className="col-12 pb-3 text-center">
              <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/agency"} >{t("Career.apply")}</Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 pb-3 text-center">
              <Youtube></Youtube>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
