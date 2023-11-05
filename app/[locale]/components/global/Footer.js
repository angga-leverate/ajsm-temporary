import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoMsig from "../../../../public/img/logo_mobile.png";
import sloganAjsm from "../../../../public/img/tagline_new.png";
import memberAjsm from "../../../../public/img/member.png";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <div className="container">
        <footer className="pt-5 ajsm_footer desktop">
          <div className="row mb-5">
            <div className="col-3">
              <Image alt="AJSM" src={sloganAjsm} className="img-fluid "></Image>
            </div>
            {/* <div className="col">
              <Image alt="AJSM" src={logoMsig} className="img-fluid"></Image>
            </div> */}
          </div>
          <div className="row ajsm_sosmed my-5">
            <div className="col-4">
              <div className="row">
              <div className="col">
            <a href="https://www.facebook.com/sinarmasmsig" target="_blank"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/sinarmasmsiglife/" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/company/1537390?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1537390%2Cidx%3A2-1-2%2CtarId%3A1476328953553%2Ctas%3Asinarmas%20ms" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="col">
            <a href="https://www.youtube.com/user/SMiLe140485" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
              </div>
              <div className="row ajsm_footernav pt-5">
            <div className="col-4">
              <ul className="nav flex-column">
                {/* <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {t("Home")}
                  </a>
                </li> */}
                <li className="nav-item mb-2">
                  <a href="/karir" className="nav-link p-0 text-body-secondary">
                  {t("Career")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://www.msig.co.id/id/unduh-singkat" target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("Download")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/faq" target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("FAQ")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/hubungi-kami" className="nav-link p-0 text-body-secondary">
                  {t("Contact-Us")}
                  </Link>
                </li>
                
              </ul>
            </div>
            <div className="col">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href='/files/kantor_pemasaran_Agustus23_MSIG.pdf' target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("Marketing-Offices")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/files/data-tenaga-pemasar-sinarmas-msig-life-per-juni-2021.pdf" target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("List-Agents")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/syarat-ketentuan" className="nav-link p-0 text-body-secondary">
                  {t("Terms-of-Condition")}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/privacy-policy" className="nav-link p-0 text-body-secondary">

                  {t("Privacy-Policy")}
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
            </div>
            <div className="col ajsm_footerlogo">
            <Image alt="AJSM" src={logoMsig} width={400}></Image>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <Image alt="AJSM" src={memberAjsm} className="img-fluid"></Image>
            </div>
          </div>
          <div className="py-4">
            <p className="mb-2">
            {t("disclaimer1")}
            </p>
            <p>
            {t("disclaimer2")}
            </p>
          </div>
        </footer>
        <footer className="pt-5 ajsm_footer mobile">
          <div className="row mb-5">
          <div className="col">
              <Image alt="AJSM" src={sloganAjsm} className="img-fluid"></Image>
            </div>
            <div className="col">
              <Image alt="AJSM" src={logoMsig} className="img-fluid"></Image>
            </div>

          </div>
          <div className="row ajsm_sosmed text-center my-5">
          <div className="col">
            <a href="https://www.facebook.com/sinarmasmsig" target="_blank"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/sinarmasmsiglife/" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/company/1537390?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1537390%2Cidx%3A2-1-2%2CtarId%3A1476328953553%2Ctas%3Asinarmas%20ms" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="col">
            <a href="https://www.youtube.com/user/SMiLe140485" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
          </div>
          <div className="row ajsm_footernav">
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {t("Home")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/karir" target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("Career")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://www.msig.co.id/id/unduh-singkat" target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("Download")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/faq"target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("FAQ")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href='/files/kantor_pemasaran_Agustus23_MSIG.pdf' target="_blank" className="nav-link p-0 text-body-secondary">
                  {t("Marketing-Offices")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/syarat-ketentuan" className="nav-link p-0 text-body-secondary">
                {t("Terms-of-Condition")}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/privacy-policy" className="nav-link p-0 text-body-secondary">
                  {t("Privacy-Policy")}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/hubungi-kami" className="nav-link p-0 text-body-secondary">
                  {t("Contact-Us")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Image alt="AJSM" src={memberAjsm} className="img-fluid w-75"></Image>
            </div>
          </div>
          <div className="py-4">
            <p className="mb-3">
            {t("disclaimer1")}
            </p>
            <p>
            {t("disclaimer2")}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
