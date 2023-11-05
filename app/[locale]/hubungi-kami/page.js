
import Link from 'next/link'
import Image from "next/image";
import headerContact from "../../../public/img/bannerweb_karir.jpg";
import headerMobile from "../../../public/img/bannerweb_mobileKarir.jpg";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations();
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
      <Image src={headerContact} alt="AJSM" className="img-fluid d-none d-md-block" />
      <Image src={headerMobile} alt="AJSM" className="img-fluid d-block d-md-none" />
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
                    <li aria-current="page" className="breadcrumb-item active">{t("Footer.Contact-Us")}</li>
                  </ol>
                </nav>

              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className='col-md-12'>
                    <h1 className="page-header-ui-title mb-3">{t("Contact-Us.contact-us")}</h1>
                    <p className='lead'>
                    {t("Contact-Us.body")}
                    </p>
                  </div>
                  <div className='col-md-4'>
                      <div className='card h-100'>
                        <div className='card-body'>
                          <p className='h4'>{t("Contact-Us.ask")}</p>
                          <p>{t("Contact-Us.question-desc")}</p>
                        </div>
                        <div className='card-footer'>
                        <Link href="/faq" className="btn btn-ajsm btn-lg px-4 me-sm-3">
                        {t("Contact-Us.read-more")}
                        </Link>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card h-100'>
                        <div className='card-body'>
                          <p className='h4'>{t("Contact-Us.testimony")}</p>
                          <p>{t("Contact-Us.testi-desc")}</p>
                        </div>
                        <div className='card-footer'>
                        <Link href="/#" className="btn btn-ajsm btn-lg px-4 me-sm-3">
                        {t("Contact-Us.read-more")}
                        </Link>
                        </div>
                      </div>
                    </div>
                  <div className='col-md-4'>
                  <div className='card h-100'>
                        <div className='card-body'>
                          <p className='h4'>RS Rekanan</p>
                          <p>{t("Contact-Us.hospital-desc")}</p>
                        </div>
                        <div className='card-footer'>
                        <Link href="/layanan/rekanan-rs" className="btn btn-ajsm btn-lg px-4 me-sm-3">
                        {t("Contact-Us.read-more")}
                        </Link>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-12'>
                    <hr className='my-5'></hr>
                  </div>
                  <div className="col-md-12">
                    <h1 className="page-header-ui-title mb-3">{t("Contact-Us.customer-services")}</h1>
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div className='d-flex address-wrapper'>
                        <div className='address-section col-12 col-md-6'>
                          <h6 className='h6'><b>{t('Contact-Us.head-offices')}</b></h6>
                          <p>PT MSIG Life Insurance Indonesia Tbk</p>
                          <br />


                        </div>
                        <div className='address-section col-12 col-md-6'>
                          <h6 className='h6'><b>Sinarmas MSIG Tower Lt. 6</b></h6>
                            <p>Jl Jend. Sudirman Kav.21</p>
                            <p>Setiabudi, Jakarta Selatan 12920 </p>
                            <p>Tel: (021) 50609999</p>
                            <p>WhatsApp: 088 - 1234 - 1088</p>
                            <br></br>

                          <br />
                          <h6 className='h6'><b>{t('Contact-Us.working-hours')}</b></h6>
                            <p><b>{t('Contact-Us.monday')} - {t('Contact-Us.friday')}</b></p>
                            <p><b>{t('Contact-Us.o-clock')} 08.00 - 17.00 WIB</b></p>
                            <p>{t('Contact-Us.except-holiday')}</p>
                        </div>
                      </div>
                      <div className='mt-2 mt-md-0'>
                        <div className='address-section'>
                        <h6 className='h6'><b>{t('Contact-Us.title-akm')}</b></h6>
                          <p>{t('Contact-Us.click')} <a href='/files/kantor_pemasaran_Agustus23_MSIG.pdf' className='cta-download'><b>{t('Contact-Us.here')}</b></a> {t('Contact-Us.desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
