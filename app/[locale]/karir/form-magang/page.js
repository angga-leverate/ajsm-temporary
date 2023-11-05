
import Link from 'next/link'
import Image from "next/image";
import headerContact from "../../../../public/img/hubungi_kami.jpeg";
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
                    <li className="breadcrumb-item">
                      <Link href="/karir">
                        {t("Footer.Career")}
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t("Career.Form-intern")}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Career.Form-intern")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4 mb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-md-12">
            <form className="row g-3">
              <div className="col-12">
                <select className="form-select form-select-lg mb-3" id="inputPosiiton4">
                  <option selected>{t("Career.Posisi-field")}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12">
                <input type="text" className="form-control form-control-lg mb-3" id="inputAddress" placeholder={t("Career.Name-field")}></input>
              </div>
              <div className="col-12">
                <input type="text" className="form-control form-control-lg mb-3" id="inputName" placeholder={t("Career.Email-field")}></input>
              </div>
              <div className="col-12">
                <input type="text" className="form-control form-control-lg mb-3" id="inputAddress2" placeholder={t("Career.Kontak-field")}></input>
              </div>
              <div className="col-md-6">
                <select id="inputState" className="form-select form-select-lg mb-3">
                  <option selected>{t("Career.Pendidikan-field")}</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control form-control-lg mb-3" id="inputAddress2" placeholder={t("Career.Sekolah-field")}></input>
              </div>
              <div className="col-6">
                <div className="input-group custom-file-button mb-3">
                  <label className="input-group-text" for="inputGroupFile01">{t("Career.Resume-field")}</label>
                  <input type="file" className="form-control form-control-lg" id="inputGroupFile01"s></input>
                </div>
              </div>
              <div className="">
                <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="6" placeholder={t("Career.Pesan-field")}></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-lg">{t("Career.Submit-button")}</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
