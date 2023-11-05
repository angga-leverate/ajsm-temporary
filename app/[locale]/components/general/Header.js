import React from "react";
// import Link from 'next/link'
import Switcher from "../Switcher";
import Link from "next-intl/link";
import { usePathname, useRouter } from "next-intl/client";
import { redirect } from "next-intl/server";
import { useTranslations } from "next-intl";

import Image from "next/image";
import logoMobile from "../../../../public/img/logo_mobile.png";
import logoMyfit from "../../../../public/img/logo_myfit.png";

function Header() {
  const t = useTranslations("Mainnav");
  return (
    <div className="ajsm_mainav mobile">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-white bg-white"
          aria-label="Main navigation"
        >
          <div className="container">
            <Link href="/">
              <Image
                alt="AJSM"
                src={logoMobile}
                className="img-fluid"
                width={120}
              ></Image>
            </Link>
            <div className="lang-switcher">
              <Switcher />
            </div>
            <button
              className="navbar-toggler p-0 border-0 ajsm_toogler"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="ajsm_mobilenav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {t("home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("about-us")}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/profil-perusahaan"
                      >
                        {t("company-profile")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/manajemen"
                      >
                        {t("management")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/laporan-keuangan"
                      >
                        {t("financial-reports")}
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/laporan-keuangan-bulanan"
                      >
                        {t("monthly-financial-reports")}
                      </a>
                    </li> */}
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/laporan-keuangan#nav-annual-report"
                      >
                        {t("annual-report")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/laporan-keuangan#annual-unit-link"
                      >
                        {t("unit-link-annual-reports")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/penghargaan"
                      >
                        {t("awards")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/tata-kelola-perusahaan-yang-baik"
                      >
                        {t("good-corporate-governance")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tentang-kami/informasi-investor"
                      >
                        {t("investor-information")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("product")}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/produk/produk-individu"
                      >
                        {t("individual-insurance")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/produk/produk-bancassurance"
                      >
                        {t("bancassurance")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/produk/produk-kumpulan"
                      >
                        {t("group-insurance")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("news")}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a className="dropdown-item" href="/berita/press-release">
                        {t("press-release")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/berita/corporate-update"
                      >
                        {t("corporate-update-activity")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("services")}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/layanan/layanan-calon-nasabah"
                      >
                        {t("prospective-customer")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/layanan/layanan-nasabah"
                      >
                        {t("customer-service")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/hubungi-kami"
                  >
                    {t("contact-us")}
                  </a>
                </li>
                <div className="row">
                  <div className="col-6">
                    <Image
                      alt="AJSM"
                      src={logoMyfit}
                      className="img-fluid navlogo_myfit"
                      width={120}
                    ></Image>
                  </div>
                  <div className="col-6">
                    <Image
                      alt="AJSM"
                      src={logoMyfit}
                      className="img-fluid navlogo_myfit"
                      width={120}
                    ></Image>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
