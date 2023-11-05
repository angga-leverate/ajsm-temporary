
import Link from 'next/link'
import Image from "next/image";
import headerContact from "../../../../public/img/bannerweb_karir.jpg";
import internimage from "../../../../public/img/intern_recruit.jpg";
import testiAvatar from "../../../../public/img/avatar.png";
import { useTranslations } from "next-intl";
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
                <h1 className="page-header-ui-title mb-3">{t("Career.banca_tele")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4 mb-5">
        <div className="container">
          <div className='row mb-5'>
            <div className='col-12 col-md-6'>
                <p className='lead' dangerouslySetInnerHTML={{ __html: t.raw(`Career.banca_desc`)}}></p>
            </div>
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
                <h5>{t('Career.banca_consultant')}</h5>
                <ol>
                  <li>Establish and maintain good business relationships with bank partner when giving financial solution</li>
                  <li>Consultation on protection planning and customer financial goals</li>
                  <li>Creating productive, synergistic and effective relationships with all bank partners.</li>
                  <li>Ensure that all business processes run in accordance with company standard procedures.</li>
                  <li>Fulfill the work performance targeted by the Company</li>
                </ol>
                <h6>{t('Career.banca_consultant_criteria')}</h6>
                <ol>
                  <li>Minimum education: Diploma 3</li>
                  <li>Minimum age: 23 years old</li>
                  <li>A minimum of 1 year of experience in sales and marketing in the insurance or banking industry</li>
                  <li>Good personality and appearance</li>
                  <li>Strong communication skills</li>
                  <li>High level of motivation for work</li>
                  <li>Target-driven and ambitious in achieving goals</li>
                </ol>


                <div className="col-12 col-md-3 pb-3 text-right">
                  <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.apply")}</Link>
                </div>
            </div>

          </div>
          <div className='row mb-5'>
            <div className='col-12 col-md-12'>
                <h5>{t('Career.telemarketing')}</h5>
                <ol>
                <li>Offering MSIG Life Insurance products to customers by phone</li>
                <li>Giving accurate information about MSIG Life insurance products.</li>
                <li>Creating positive relationships with customers of MSIG Life.</li>
                </ol>
                <h6>{t('Career.telemarketing_criteria')}</h6>
                <ol>
                  <li>Minimum education: Diploma 3</li>
                  <li>A minimum of 1 year of experience in telemarketing</li>
                  <li>Maximum age:35 years old</li>
                  <li>Strong communication skills</li>
                  <li>Willing to be placed in Semarang & Jakarta</li>
                </ol>
                <div className="col-12 col-md-3 pb-3 text-right">
                  <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.apply")}</Link>
                </div>
            </div>

          </div>

          {/* <div className="row mb-5">
            <div className="col-12 col-md-3 col">
              <a href="#" className="">
                <div className="card py-3">
                    <Image
                        src={testiAvatar}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Muhammad Nur Arief</p>
                    <p className='text-muted text-center'>Konsultasi Resiko</p>
                    <p className="card-text">
                      &quot;{t("Career.Career-testi1")}&quot;
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-3 col">
              <a href="#" className="">
                <div className="card py-3">
                    <Image
                        src={testiAvatar}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Muhammad Nur Arief</p>
                    <p className='text-muted text-center'>Konsultasi Resiko</p>
                    <p className="card-text">
                      &quot;{t("Career.Career-testi2")}&quot;
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-3 col">
              <a href="#" className="">
                <div className="card py-3">
                    <Image
                        src={testiAvatar}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Muhammad Nur Arief</p>
                    <p className='text-muted text-center'>Konsultasi Resiko</p>
                    <p className="card-text">
                      &quot;{t("Career.Career-testi3")}&quot;
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-3 col">
              <a href="#" className="">
                <div className="card py-3">
                    <Image
                        src={testiAvatar}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Muhammad Nur Arief</p>
                    <p className='text-muted text-center'>Konsultasi Resiko</p>
                    <p className="card-text">
                        &quot;{t("Career.Career-testi4")}&quot;
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}
