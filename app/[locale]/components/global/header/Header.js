'use client'
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import Switcher from "../../Switcher";
import logoMobile from "@/public/img/logo_mobile.png";
import logoMyfit from "@/public/img/myfit.png";
import logoMyhrs from "@/public/img/logo_vega_min.png";
import { useProduct, useProductCategory } from "../../../produk/usecases";
import { useEffect, useState } from "react";
import { kebabCase } from "@/common/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
export default function Header() {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("Mainnav");
  const {
    productCategories
  } = useProductCategory()

  const {loadProductList, productItemsList} = useProduct()
  const [ querySearch, setQuerySearch ] = useState()

  useEffect(()=>{
    loadProductList()
  },[])
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-white bg-white ajsm_header sticky-top"
        aria-label="AJSM"
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              alt="AJSM"
              src={logoMobile}
              className="img-fluid desktop"
              width={180}
              priority={true}
            ></Image>
          </Link>
          <div className="lang-switcher mobile">
            <Switcher />
          </div>
          <button
            className="navbar-toggler collapsed ajsm_burgermenu"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse mega-menu-navbar" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown me-3" id="product-nav">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"

                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  {t("product")}
                </a>
                <div className="dropdown-menu shadow-sm">
                  <div className="d-flex flex-row justify-content-between row-cols-3 flex-wrap">
                    {
                      productCategories.map((value, index)=>{
                        if(value[`flag`] == 'ACTIVE'){
                        const productItemByCategory = productItemsList.filter((item)=>item.productCategory.id==value.id)
                        return (
                          <section key={index} className="mb-3">
                            <span className="mega-menu-title"><b>{value[`categoryName${locale.toUpperCase()}`]}</b></span>
                            <ul>
                              {
                                productItemByCategory.map((filteredProduct, indexProduct)=>{
                                  if(indexProduct>2){
                                    return<></>
                                  }
                                  return (
                                    <li key={indexProduct}>
                                      <Link className="dropdown-item" href={`/produk/${value.slug}/${filteredProduct.id}/${kebabCase(filteredProduct[`title${locale.toUpperCase()}`])}`}>{filteredProduct[`title${locale.toUpperCase()}`]}</Link>
                                    </li>
                                  );
                                })
                              }
                              {
                                productItemByCategory.length > 2 ? <li><Link className="dropdown-item see-all" href={`/produk/kategori/${value.slug}`}>{t("see_all")} &#62;&#62;</Link></li> : null
                              }
                            </ul>

                            <span >

                            </span>
                          </section>
                        )
                            }
                      })
                    }
                  </div>

                </div>

              </li>
              <li className="nav-item dropdown me-3" id="about-us">
                <a className="nav-link dropdown-toggle" href="#"

                data-bs-auto-close="outside"
                  aria-expanded="false">
                {t("about-us")}
                </a>
                <div className="dropdown-menu shadow-sm">
                  <span className="mega-menu-title"><b>{t("about-us")}</b></span>
                  <ul>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/profil-perusahaan">
                      {t("company-profile")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/kisah-merek-kami">
                      {t("our-brand-story")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/manajemen">
                      {t("management")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/laporan-keuangan">
                      {t("company-reports")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="/tentang-kami/laporan-keuangan#nav-annual-report">
                      {t("annual-report")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/laporan-keuangan#annual-unit-link">
                      {t("unit-link-annual-reports")}
                      </Link>
                    </li>                                                                          */}
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/penghargaan">
                      {t("awards")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/tata-kelola-perusahaan-yang-baik">
                      {t("good-corporate-governance")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tentang-kami/informasi-investor">
                      {t("investor-information")}
                      </Link>                  </li>

                  </ul>
                </div>

              </li>

              <li className="nav-item dropdown me-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"

                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  {t("news")}
                </a>
                <div className="dropdown-menu shadow-sm">
                  <span className="mega-menu-title"><b>{t("news")}</b></span>
                  <section>
                  <ul>
                    <li>
                      <a className="dropdown-item" href="/berita/press-release">
                      {t("press-release")}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/berita/corporate-update">
                      {t("corporate-update-activity")}
                      </a>
                    </li>
                  </ul>
                  </section>

                </div>

              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"

                  aria-expanded="false"
                >
                  {t("services")}
                </a>
                <div className="dropdown-menu shadow-sm">
                  <div className="d-flex flex-row ">
                    <section className="flex-fill">
                      <span className="mega-menu-title"><b>{t("prospective-customer-service")}</b></span>
                      <ul >
                        <li>
                          <a className="dropdown-item" href="/layanan/layanan-calon-nasabah">
                          {t("prospective-customer")}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/layanan/application">
                          {t("application")}
                          </a>
                        </li>
                      </ul>
                    </section>
                    <section className="flex-fill">
                      <span className="mega-menu-title"><b>{t("customer-service")}</b></span>
                      <ul id="cs-nav">
                        <li>
                          <Link href="/layanan/rekanan-rs" className="dropdown-item">
                          {t("hospital-partners")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/layanan/lembar-fakta-reksadana" className="dropdown-item">
                          {t("fund-fact-sheet")}
                          </Link>
                        </li>
                        <li>
                        <Link href="/layanan/suku-bunga-simpanan" className="dropdown-item">
                          {t("save-series-interest-rates")}
                          </Link>
                        </li>
                        <li>
                        <Link href="/layanan/harga-unit" className="dropdown-item">
                          {t("unit-price")}
                          </Link>
                        </li>
                        <li>
                        <Link href="/layanan/prosedur-pengajuan-komplain" className="dropdown-item">
                          {t("procedure-for-complaints")}
                        </Link>

                        </li>
                        <li>
                          <Link href="/layanan/tata-kelola-layanan-nasabah" className="dropdown-item">
                          {t("customer-service-governance")}
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/layanan/prosedur-klaim">
                          {t("claim-procedure")}
                          </a>
                          {/* <ul>
                            <li>
                            <a className="dropdown-item" href="/layanan/layanan-nasabah">
                            {t("individual-customer")}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/layanan/layanan-nasabah">
                            {t("company-customer")}
                            </a>
                          </li>
                          </ul> */}
                        </li>

                        <li>
                        <Link href="/layanan/unduh-formulir-klaim" className="dropdown-item">
                          {t("download-claim-form")}
                          </Link>
                        </li>
                        <li>
                        <Link href="/layanan/unduh-formulir-transaksi" className="dropdown-item">
                          {t("download-transaction-form")}
                          </Link>
                        </li>
                        {/* <li>
                          <a className="dropdown-item" href="/layanan/layanan-nasabah">
                          {t("vega")}
                          </a>
                        </li> */}
                      </ul>
                    </section>
                  </div>

                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hubungi-kami">
                {t("contact-us")}
                </a>
              </li>
            </ul>
            <div className="navimage navlogo-list">
              <Link href="/vega">
                <Image
                  alt="AJSM"
                  src={logoMyhrs}
                  className="img-fluid navlogo_myfit"
                  width={120}
                ></Image>
              </Link>
              <Link href="/my-fit">
                <Image
                  alt="AJSM"
                  src={logoMyfit}
                  className="img-fluid navlogo_myfit"
                  width={120}
                ></Image>
              </Link>
            </div>
            <div className="lang-switcher desktop">
              <Switcher />
              <a className="ms-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" href="">
                <FontAwesomeIcon icon={faSearch} className="fas fa-search h6 mb-0"></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="pt-4"></div>
          <div className="input-group mt-5 w-75 mx-auto">
            <input type="text"
              className="form-control form-control-lg border-0 border-bottom"
              placeholder={t("Search")}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={querySearch}
              onChange={(e)=>setQuerySearch(e.currentTarget.value)}
            ></input>
            <button className="btn btn-outline-secondary border-0 border-bottom" type="button" id="button-addon2" onClick={()=>{
              // const qs = new URLSearchParams({
              //   titleID: querySearch,
              //   descriptionID: querySearch,
              //   descriptionEN: querySearch
              // })
              router.push(`/search?qs=${querySearch}`)
            }}>
              <FontAwesomeIcon icon={faSearch} className="fas fa-search h6 mb-0"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end ajsm_offcanvas"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header" data-bs-theme="dark">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mt-4 ps-0">
          <ul className="ajsm_mobilenav ps-4">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {t("home")}
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                {t("product")}
              </a>
              <ul className="dropdown">
                <li>
                  <a className="dropdown-item" href="/produk/produk-individu">
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
                  <a className="dropdown-item" href="/produk/produk-kumpulan">
                    {t("group-insurance")}
                  </a>
                </li>
              </ul>
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
                  <a className="dropdown-item" href="/tentang-kami/manajemen">
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
                    href="/tentang-kami/laporan-keuangan#nav-annual-report"
                  >
                    {t("annual-report")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/tentang-kami/laporan-tahunan-unit-link#annual-unit-link"
                  >
                    {t("unit-link-annual-reports")}
                  </a>
                </li> */}
                <li>
                  <a className="dropdown-item" href="/tentang-kami/penghargaan">
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
                {t("news")}
              </a>
              <ul className="dropdown">
                <li>
                  <a className="dropdown-item" href="/berita/press-release">
                    {t("press-release")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/berita/corporate-update">
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
                  <a className="dropdown-item" href="/layanan/layanan-nasabah">
                    {t("customer-service")}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/hubungi-kami">
                {t("contact-us")}
              </a>
            </li>
            <div className="row">
              <div className="col-6">
              <Link href="/vega">
                <Image
                  alt="AJSM"
                  src={logoMyhrs}
                  className="img-fluid navlogo_myfit"
                  // width={120}
                ></Image></Link>
              </div>
              <div className="col-6">
              <Link href="/my-fit" target="_blank">
                <Image
                  alt="AJSM"
                  src={logoMyfit}
                  className="img-fluid navlogo_myfit"
                  width={120}
                ></Image></Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
