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
    <div className="ajsm_mainav desktop">
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
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Contact Us
                </a>
              </li>
            </ul>
            <Image
              alt="AJSM"
              src={logoMyfit}
              className="img-fluid navlogo_myfit"
              width={120}
            ></Image>
            <Image
              alt="AJSM"
              src={logoMyfit}
              className="img-fluid navlogo_myfit"
              width={120}
            ></Image>
            <div className="lang-switcher">
              <Switcher />
            </div>
            
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
