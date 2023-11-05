'use client'
import { useLocale, useTranslations } from "next-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useSearchParams } from "next/navigation";
import { useSearch } from "./usecases/search";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProductCategory } from "../produk/usecases";
import { kebabCase } from "lodash";

export default function Search() {
  const q = useSearchParams()
  const t = useTranslations("Index");
  const locale = useLocale()
  const {productCategories} = useProductCategory()
  const [qs, setQs] = useState()
  const {loadProductList, productItemsList, setProductsList } = useSearch()
  useEffect(()=>{
    loadProductList(q.get('qs'))
  }, [])

  return (
    <>
      <div className="ajsm_fit desktop container my-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="input-group mt-5 w-75 mx-auto">
              <input type="text" className="form-control form-control-lg border-0 border-bottom" placeholder={t("Search")} aria-label="Recipient's username" aria-describedby="button-addon2" defaultValue={q.get('qs')} value={qs} onChange={(e)=>{
                setQs(e.target.value)
              }}></input>
              <button className="btn btn-outline-secondary border-0 border-bottom" type="button" id="button-addon2" onClick={()=>{
                setProductsList([])
                loadProductList(qs)
              }}>
                <FontAwesomeIcon icon={faSearch} className="fas fa-search h6 mb-0"></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-10 offset-md-1">
          <ul className="nav nav-pills nav-justified mt-5 mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected="false">Product</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-article-tab" data-bs-toggle="pill" data-bs-target="#pills-article" type="button" role="tab" aria-controls="pills-article" aria-selected="false">Article</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-documents-tab" data-bs-toggle="pill" data-bs-target="#pills-documents" type="button" role="tab" aria-controls="pills-documents" aria-selected="false">Documents</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
              <p className="lead fw-bold mb-3 mt-4">
                {productItemsList.length} {t("Search_Result")}
              </p>
              {productItemsList.map((value, index)=>{
                const category = productCategories.find((valueCat)=>value.productCategory.id === valueCat.id)
                return (
                  <Link href={`/produk/${category.slug}/${value.id}/${kebabCase(value[`title${locale.toUpperCase()}`])}`} key={index} >
                    <div className="card mb-3 rounded-3">
                      <div className="card-body">
                        <p className="fw-bold">
                          Product
                        </p>
                        <p className="h3">
                          {value.titleID}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}


            </div>
            <div className="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab" tabIndex="0">...</div>
            <div className="tab-pane fade" id="pills-article" role="tabpanel" aria-labelledby="pills-article-tab" tabIndex="0">...</div>
            <div className="tab-pane fade" id="pills-documents" role="tabpanel" aria-labelledby="pills-documents-tab" tabIndex="0">...</div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
