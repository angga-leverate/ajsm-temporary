'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';

import { useTranslations } from "next-intl";
import { useEffect } from 'react';

export default function Navigasi() {
    const pathname = usePathname();
    let pathWithHash;
    useEffect(()=>{
      pathWithHash = window.location.hash
    })
    
    const t = useTranslations("Mainnav");
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link
                    href="/tentang-kami/profil-perusahaan"
                    className={pathname == "/tentang-kami/profil-perusahaan" ? "active" : ""}
                  >
                    {t("company-profile")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/tentang-kami/kisah-merek-kami"
                    className={pathname == "/tentang-kami/kisah-merek-kami" ? "active" : ""}
                  >
                    {t("our-brand-story")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/tentang-kami/manajemen" 
                  className={pathname == "/tentang-kami/manajemen" ? "active" : ""}>
                    {t("management")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/tentang-kami/laporan-keuangan" className={pathname == "/tentang-kami/laporan-keuangan" ? "active" : ""}>
                  {t("company-reports")}
                  </Link>
                </li>
               
                {/* <li className="list-group-item">
                  <Link href="/tentang-kami/laporan-keuangan#nav-annual-report" 
                  className={(pathname == "/tentang-kami/laporan-keuangan" && pathWithHash == '#nav-annual-report') ? "active" : ""}>
                  {t("annual-report")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/tentang-kami/laporan-keuangan#annual-unit-link"
                    className={(pathname == "/tentang-kami/laporan-keuangan" && pathWithHash =='#annual-unit-link') ? "active" : ""}
                  >
                   {t("unit-link-annual-reports")}
                  </Link>
                </li> */}
                <li className="list-group-item">
                  <Link href="/tentang-kami/penghargaan" className={pathname == "/tentang-kami/penghargaan" ? "active" : ""}>
                  {t("awards")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/tentang-kami/tata-kelola-perusahaan-yang-baik"
                    className={pathname == "/tentang-kami/tata-kelola-perusahaan-yang-baik" ? "active" : ""}
                  >
                    {t("good-corporate-governance")}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/tentang-kami/informasi-investor" className={pathname == "/tentang-kami/informasi-investor" ? "active" : ""}>
                  {t("investor-information")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
