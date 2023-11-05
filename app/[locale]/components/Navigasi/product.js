'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';
import { useProduct, useProductCategory } from '../../produk/usecases';
import { kebabCase } from 'lodash';
import { useEffect } from 'react';

export default function Navigasi() {
  const pathname = usePathname();
  const locale = useLocale()
  const t = useTranslations("Mainnav");
  const {
    productCategories
  } = useProductCategory()

  const {loadProductList, productItemsList} = useProduct()
  useEffect(()=>{

      loadProductList()
  },[])
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
            <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
            {
              productCategories.map((value, index)=>{
                const productItemByCategory = productItemsList.filter((item)=>item.productCategory.id==value.id)

                return (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`panelsStayOpenHeader-${kebabCase(value[`slug`])}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${kebabCase(value[`slug`])}`} aria-expanded="false" aria-controls={`panelsStayOpen-${kebabCase(value[`slug`])}`}>
                        {value[`categoryName${locale.toUpperCase()}`]}
                      </button>
                    </h2>
                    <div id={`panelsStayOpen-${kebabCase(value[`slug`])}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-${kebabCase(value[`slug`])}`}>
                      <div className="accordion-body">
                      <ul className="list-group">

                          {
                            productItemByCategory.map((filteredProduct, indexProduct)=>{
                              return(
                                <li className="list-group-item" key={indexProduct}>
                                  <Link className={pathname == `/produk/${kebabCase(value[`slug`])}/${filteredProduct.id}/${kebabCase(filteredProduct[`title${locale.toUpperCase()}`])}` ? "active" : ""}
                                  href={`/produk/${kebabCase(value[`slug`])}/${filteredProduct.id}/${kebabCase(filteredProduct[`title${locale.toUpperCase()}`])}`}>
                                  {filteredProduct[`title${locale.toUpperCase()}`]}
                                  </Link>
                                </li>
                              )
                            })
                          }

                          {/* <Link className={pathname == "/produk/produk-individu/smile-medical" ? "active" : ""}
                          href="/produk/produk-individu/smile-medical">
                          {t("smile-medical")}
                          </Link>
                          <Link className={pathname == "/produk/produk-individu/smile-kid-insurance" ? "active" : ""}
                          href="/produk/produk-individu/smile-kid-insurance">
                          {t("smile-kid-insurance")}
                          </Link>
                          <Link className={pathname == "/produk/produk-individu/smile-income-protection-x-tra" ? "active" : ""}
                          href="/produk/produk-individu/smile-income-protection-x-tra">
                          {t("smile-income-protection-x-tra")}
                          </Link>
                          <Link className={pathname == "/produk/produk-individu/smile-medika-ultimax" ? "active" : ""}
                          href="/produk/produk-individu/smile-medika-ultimax">
                          {t("smile-medika-ultimax")}
                          </Link>
                          <Link className={pathname == "/produk/produk-individu/smile-pro-infinite" ? "active" : ""}
                          href="/produk/produk-individu/smile-pro-infinite">
                          {t("smile-pro-infinite")}
                          </Link>
                          <Link className={pathname == "/produk/produk-individu/smile-berkat" ? "active" : ""}
                          href="/produk/produk-individu/smile-berkat">
                          {t("smile-berkat")}
                          </Link> */}


                      </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
              {/* <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-sharia">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-sharia" aria-expanded="false" aria-controls="panelsStayOpen-sharia">
                    {t('sharia-insurance')}
                  </button>
                </h2>
                <div id="panelsStayOpen-sharia" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-sharia">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">

                      <Link className={pathname == "/produk/produk-individu/smile-personal-accident-syariah" ? "active" : ""}
                      href="/produk/produk-individu/smile-personal-accident-syariah">
                      {t("smile-personal-accident-syariah")}
                      </Link>
                      <Link className={pathname == "/produk/produk-individu/smile-medical-syariah" ? "active" : ""}
                      href="/produk/produk-individu/smile-medical-syariah">
                      {t("smile-medical-syariah")}
                      </Link>
                      <Link className={pathname == "/produk/produk-individu/sharia-smua-insurance" ? "active" : ""}
                      href="/produk/produk-individu/sharia-smua-insurance">
                      {t("sharia-smua-insurance")}
                      </Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div> */}
            </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
