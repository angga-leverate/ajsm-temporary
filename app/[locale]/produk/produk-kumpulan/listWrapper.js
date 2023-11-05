"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import headerProduk from "../../../../public/img/produk.jpeg";
import produkBanc from "../../../../public/img/produk_bancassurance.png";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations()
  const product = [
    {"key": "smile-medicare",
    "label": "Smile Medicare"},
    {"key": "group-pa",
    "label":  "Group PA"},
    {"key": "ekawarsa",
    "label": "Ekawarsa"},
    {"key": "dplk-ppukp",
    "label": "DPLK PPUKP"},
    {"key": "ekasejahtera",
    "label": "Ekasejahtera"}
  ]
  return (
    <div className="ajsm_page produk_kumpulan produk_individu">
      <section className="header">
        <Image src={headerProduk} alt="AJSM" className="img-fluid" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"> {t('Mainnav.product')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      {t('Mainnav.group-insurance')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                {t('Mainnav.group-insurance')}
                </h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  {product.map((x, i) => 
                    <div className="col-12 col-md-4 product-card">
                      <div className="card-body pt-1 mb-4">
                        <div className="card text-center">
                          <div className="card-header">
                            <h5 className="card-title">{x.label}</h5>
                            
                          </div>
                          <div className="card-body">
                            <p>{t('Produk.'+x.key+'.sub-desc')}</p>
                            <div className="btn-wrapper">
                              <Link href={`/produk/produk-kumpulan/${x.key}`} className="btn btn-ajsm">
                              {t('Mainnav.see-more')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
