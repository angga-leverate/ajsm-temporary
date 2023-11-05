import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Image from "next/image";
import Link from "next-intl/link";

import iconHospital from "../../../../public/img/ico-hospital.png";
import iconFun from "../../../../public/img/ico-fundfact.png";
import iconSave from "../../../../public/img/ico-savesheet.png";

import iconUnit from "../../../../public/img/price-tag-yen-svgrepo-com.png";
import iconComplaints from "../../../../public/img/ico-complaints.png";
import iconCustomer from "../../../../public/img/ico-csgov.png";
import iconClaim from "../../../../public/img/ico-claimprocedure.png";
import iconDownloadclaim from "../../../../public/img/ico-dldclaimform.png";
import iconDownloadtransaction from "../../../../public/img/ico-dldtransform.png";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });


export default function Shortcut() {
  const t = useTranslations("Index");  
  return (
    <>
      <div className="ajsm_shortcut desktop">
        <div className="top container">
          <div className="row">
            <div className="col">
              <div className="row ajsm_shortcut_heading">
                <div className="col-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    {t("shortcut-head1")}
                    <br />
                    {t("shortcut-head2")}
                  </h1>
                  <p className="lead">
                    {t("shortcut-subhead1")}
                    <br />
                    {t("shortcut-subhead2")}
                  </p>
                </div>
                <div className="col-6">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a
                      className="btn btn-ajsm btn-lg px-5 me-md-2 shortcut"
                      data-bs-toggle="collapse"
                      href="#collapseShortcut"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseShortcut"
                    >
                     {t("find-below")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom ajsm_expandicon">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row flex-lg-row align-items-center g-5 pb-5">
                  <div className="col-lg-12">
                    <div className="card card-body border-0">
                      <div className="row">
                        <div className="col text-center">
                          <Link href="/layanan/rekanan-rs">
                          <Image
                            src={iconHospital}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          </Link>
                          <h5>{t("hospital-partners1")}<br></br>{t("hospital-partners2")}</h5>
                        </div>
                        <div className="col text-center">
                        
                        <Link href="/layanan/lembar-fakta-reksadana">
                          <Image
                            src={iconFun}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          </Link>
                          <h5>{t("ffs1")}<br></br>{t("ffs2")}</h5>
                        </div>
                        <div className="col text-center">
                        <Link href="/layanan/suku-bunga-simpanan">
                          <Image
                            src={iconSave}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          </Link>
                          <h5>{t("ssir1")}<br></br>{t("ssir2")}</h5>
                        </div>
                        <div className="col text-center">
                        <Link href="/layanan/harga-unit">
                            <Image
                              src={iconUnit}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            </Link>
                            <h5>{t("unit-price")}</h5>
                          </div>
                                               
                      </div>
                    </div>
                    <div className="collapse" id="collapseShortcut">
                      <div className="card card-body border-0">
                        <div className="row">
                          <div className="col text-center">
                          <Link href="/layanan/prosedur-pengajuan-komplain">
                            <Image
                              src={iconComplaints}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={65}
                            ></Image>
                            </Link>
                            <h5>{t("complaints-prochedure")}</h5>
                          </div>   
                          <div className="col text-center">
                          <Link href="/layanan/tata-kelola-layanan-nasabah">
                            <Image
                              src={iconCustomer}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            </Link>
                            <h5>{t("csg1")}<br></br>{t("csg2")}</h5>
                          </div>
                          <div className="col text-center">
                          <Link href="/layanan/prosedur-klaim">
                            <Image
                              src={iconClaim}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            </Link>
                            <h5>{t("claim-prochedure")}</h5>
                          </div>
                          <div className="col text-center">
                          <Link href="/layanan/unduh-formulir-klaim">
                            <Image
                              src={iconDownloadclaim}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            </Link>
                            <h5>{t("dcf1")}<br></br>{t("dcf2")}</h5>
                          </div>
                          <div className="col text-center">
                          <Link href="/layanan/unduh-formulir-transaksi">
                            <Image
                              src={iconDownloadtransaction}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            </Link>
                            <h5>{t("dtf1")}<br></br>{t("dtf2")}</h5>
                          </div>                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className="ajsm_shortcut mobile">
        <div className="top container">
          <div className="row">
            <div className="col">
              <div className="row flex-lg-row align-items-center g-5 pb-4">
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  {t("shortcut-head1")}
                    <br />
                    {t("shortcut-head2")}
                  </h1>
                  <p className="lead">
                    {t("shortcut-subhead1")}
                    <br/>
                    {t("shortcut-subhead2")}
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a
                      className="btn btn-ajsm btn-lg px-4 me-md-2"
                      data-bs-toggle="collapse"
                      href="#collapseShortcut"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseShortcut"
                    >
                      {t("find-below")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom ajsm_expandicon">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row flex-lg-row align-items-center g-5 pb-5">
                  <div className="col-lg-6">
                    <div className="card card-body border-0">
                      <div className="row">
                        <div className="col text-center">
                          <Image
                            src={iconHospital}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          <h5>{t("hospital-partners1")}<br></br>{t("hospital-partners2")}</h5>
                        </div>
                        <div className="col text-center">
                          <Image
                            src={iconFun}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          <h5>{t("ffs1")}<br></br>{t("ffs2")}</h5>
                        </div>
                        <div className="col text-center">
                          <Image
                            src={iconSave}
                            alt="AJSM"
                            className="img-fluid"
                            loading="lazy"
                            height={70}
                          ></Image>
                          <h5>{t("ssir1")}<br></br>{t("ssir2")}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="collapse" id="collapseShortcut">
                      <div className="card card-body border-0">
                        <div className="row">
                          <div className="col text-center">
                            <Image
                              src={iconUnit}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("unit-price")}</h5>
                          </div>
                          <div className="col text-center">
                            <Image
                              src={iconComplaints}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("complaints-prochedure")}</h5>
                          </div>
                          <div className="col text-center">
                            <Image
                              src={iconCustomer}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("csg1")}<br></br>{t("csg2")}</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-center">
                            <Image
                              src={iconClaim}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("claim-prochedure")}</h5>
                          </div>
                          <div className="col text-center">
                            <Image
                              src={iconDownloadclaim}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("dcf1")}<br></br>{t("dcf2")}</h5>
                          </div>
                          <div className="col text-center">
                            <Image
                              src={iconDownloadtransaction}
                              alt="AJSM"
                              className="img-fluid"
                              loading="lazy"
                              height={70}
                            ></Image>
                            <h5>{t("dtf1")}<br></br>{t("dtf2")}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
