'use client'
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import headerProduk from "@/public/img/produk.jpeg";
import NavigasiProduk from "../../../../components/Navigasi/wrapper";
import Link from "next/link";
import { useProduct, useProductCategory } from "../../../usecases";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { kebabCase } from "@/common/util";
export default function Page() {
  const locale = useLocale()
  const params = useParams()
  const t = useTranslations();

  const {
    getProductByID,
    productItem
  } = useProduct()
  const {productCategories} = useProductCategory()
  const productCategoryBreadcrumb = productCategories.find((value)=>{
    if(productItem.productCategory!=undefined){
      return value.id === productItem.productCategory.id
    }
    return null
  }) ?? {}
  useEffect(()=>{
    getProductByID(params.id)
  },[])
  return (
    <div className="ajsm_page produk">
      <section className="header">
        <Image src={headerProduk} alt="AJSM" className="img-fluid" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">{t('Mainnav.home')}</Link>
                    </li>
                    <li className="breadcrumb-item">
                      {
                        productCategoryBreadcrumb[`categoryName${locale.toUpperCase()}`] &&
                          <Link
                          href={`/produk/kategori/${ kebabCase(productCategoryBreadcrumb[`categoryName${locale.toUpperCase()}`])}`}>
                          {productCategoryBreadcrumb[`categoryName${locale.toUpperCase()}`]}
                        </Link>
                      }
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {productItem[`title${locale.toUpperCase()}`]}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{productItem[`title${locale.toUpperCase()}`]}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 spr_liputanwrap">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-12">
                    <div className="card-body px-0 pt-1">
                    <div dangerouslySetInnerHTML={{__html: productItem[`description${locale.toUpperCase()}`]}} />
                    </div>
                    <div className="col-12">
                        <a href="/files/produk/Asuransi_Jiwa_Smile_Personal_Accident.pdf" className="btn btn-ajsm-dark ">{t('Produk.download')}</a>
                        <Link href={"/layanan/layanan-calon-nasabah"} className="btn btn-ajsm-dark ms-2">{t('Produk.register')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavigasiProduk />
          </div>
        </div>
      </section>
    </div>
  );
}
