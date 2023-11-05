'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';

import { useTranslations } from "next-intl";

export default function Navigasi() {
    const pathname = usePathname();
    // const t = useTranslations("Mainnav");
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link
                    href="/berita/press-release"
                    className={pathname == "/berita/press-release" ? "active" : ""}
                  >
                    Siaran Pers
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/berita/corporate-update"
                    className={pathname == "/berita/corporate-update" ? "active" : ""}
                  >
                    Berita dan Aktivitas Korporasi
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
