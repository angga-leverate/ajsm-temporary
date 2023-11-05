'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';
import { useTranslations } from 'next-intl';

export default function Navigasi() {
    const pathname = usePathname();
    const t = useTranslations("Mainnav");
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
            <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-group">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-group" aria-expanded="false" aria-controls="panelsStayOpen-group">
                    {t('group-insurance')}
                  </button>
                </h2>
                <div id="panelsStayOpen-group" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-group">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                    
                      <Link className={pathname == "/produk/produk-kumpulan/smile-medicare" ? "active" : ""} 
                      href="/produk/produk-kumpulan/smile-medicare">
                      {t("smile-medicare")}
                      </Link> 
                      <Link className={pathname == "/produk/produk-kumpulan/group-pa" ? "active" : ""} 
                      href="/produk/produk-kumpulan/group-pa">
                      {t("group-pa")}
                      </Link> 
                      <Link className={pathname == "/produk/produk-kumpulan/ekawarsa" ? "active" : ""} 
                      href="/produk/produk-kumpulan/ekawarsa">
                      {t("ekawarsa")}
                      </Link> 
                      <Link className={pathname == "/produk/produk-kumpulan/dplk-ppukp" ? "active" : ""} 
                      href="/produk/produk-kumpulan/dplk-ppukp">
                      {t("dplk-ppukp")}
                      </Link> 
                      <Link className={pathname == "/produk/produk-kumpulan/ekasejahtera" ? "active" : ""} 
                      href="/produk/produk-kumpulan/ekasejahtera">
                      {t("ekasejahtera")}
                      </Link> 
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              
            </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
