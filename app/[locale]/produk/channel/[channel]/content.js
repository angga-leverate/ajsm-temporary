"use client";

import Link from "next/link";
import Image from "next/image";
import headerProduk from "../../../../../public/img/produk.jpeg";
import { useLocale, useTranslations } from "next-intl";
import { useProduct, useProductCategory } from "../../usecases";
import { useEffect, useState } from "react";
import {  useParams } from "next/navigation";
import { kebabCase } from "lodash";
import { Input, Label } from "reactstrap";

export default function Page() {
  const t = useTranslations()
  const locale = useLocale()
  const params = useParams()
  const [categoryFilter, setCategoryFilter] = useState()
  const productChannelId = [1401, 1402, 1301]
  const productChannelName = ['agency','bancassurance','group']
  const productChannelKey = ['individual-insurance','bancassurance','group-insurance']
  const {productItemsList, loadProductList,} = useProduct()
  const { productCategories } = useProductCategory()
  // const category = productCategories.find((value)=>{
  //   return params.category == value.slug
  // })
  const channel = productChannelName.findIndex((value)=>{
    return params.channel == value
  })
  const productByChannel = productItemsList.filter((value)=>{

    if(value.productChannel){
      return value.productChannel.id === productChannelId[channel]
    }
    return false
  }).filter((value)=>{

    if(categoryFilter && categoryFilter!=='all'){
      return value.productCategory.id === categoryFilter
    }else{
      return true
    }

  })
  const getInnerHTML = (data) => {
    const match = data.match(/<(\w+)>(.*?)<\/\1>/)
    if (match){
      return match[2]
    }
  }
  useEffect(()=>{
    loadProductList()
  },[])
  return (
    <div className="ajsm_page produk_kumpulan produk_individu mb-5">
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
                      {t(`Mainnav.${productChannelKey[channel]}`)}
                    </li>
                  </ol>
                </nav>
                <div className="row">
                  <div className="col">
                    <h1 className="page-header-ui-title mb-3">
                    {t(`Mainnav.${productChannelKey[channel]}`)}
                    </h1>

                  </div>
                  <div className="col d-flex  align-items-start">
                    <div className="card me-2 " >
                      <div className="card-body d-flex flex-col">
                      <Label for="productCategory" className="me-5">
                        Category
                      </Label>
                      <Input
                        id="productCategory"
                        name="category"
                        type="select"
                        value={categoryFilter}
                        onChange={(e)=>{
                          setCategoryFilter(parseInt(e.target.value))
                        }}
                      >
                        <option value={'all'}>All</option>
                        {
                          productCategories.map((value, index)=>{

                            return (
                            <option value={value.id} key={index} >
                              {value[`categoryName${locale.toUpperCase()}`]}
                            </option>
                          )})
                        }

                      </Input>
                      </div>
                    </div>
                  </div>

                </div>
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
                  {productByChannel.length > 0 ? productByChannel.map((x, i) => {
                    let category =  productCategories.find((value)=>{
                        return value.id == x.productCategory.id
                      })
                    return (
                      <div className="col-12 col-md-4 product-card">
                      <div className="card-body pt-1 mb-4">
                        <div className="card text-center">
                          <div className="card-header">
                            <h5 className="card-title">{x[`title${locale.toUpperCase()}`]}</h5>
                          </div>
                          <div className="card-body">
                            <p dangerouslySetInnerHTML={{__html: getInnerHTML(x[`description${locale.toUpperCase()}`]) }} />
                            <div className="btn-wrapper">
                              <Link href={`/produk/${category.slug}/${x.id}/${kebabCase(x[`title${locale.toUpperCase()}`])}`} className="btn btn-ajsm">
                              {t('Mainnav.see-more')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  }

                  ) : <p className="text-center">No Result Found</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
