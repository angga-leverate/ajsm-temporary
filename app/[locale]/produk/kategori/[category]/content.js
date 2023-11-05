"use client";

import Link from "next/link";
import Image from "next/image";
import headerProduk from "../../../../../public/img/produk.jpeg";
import { useLocale, useTranslations } from "next-intl";
import { useProduct, useProductCategory } from "../../usecases";
import { useEffect, useState } from "react";
import {  useParams } from "next/navigation";
import { kebabCase } from "lodash";

export default function Page() {
  const t = useTranslations()
  const locale = useLocale()
  const params = useParams()
  const productChannelId = [1401, 1402,1301]
  const [checkedState, setCheckedState] = useState(
    [false, false, false]
  );
  const filterId = checkedState.reduce((prev, value, index)=>{
    if(value==true){
      return [...prev, productChannelId[index]]
    }else{
      return prev
    }
  }, [])
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }
  const {productItemsList, loadProductList} = useProduct()
  const { productCategories } = useProductCategory()
  const category = productCategories.find((value)=>{
    return params.category == value.slug
  })
  const productByCategory = productItemsList.filter((value)=>{
    return value.productCategory.id === category.id
  })
  const getInnerHTML = (data) => {
    const match = data.match(/<(\w+)>(.*?)<\/\1>/)
    if (match){
      return match[2]
    }
  }
  const productByChannel = productByCategory.filter((value)=>{
    if(filterId.length==0){
      return true
    }
    if(value.productChannel!=null){
      return filterId.includes(value.productChannel.id)
    }else{
      return false
    }
  })
  useEffect(()=>{
    loadProductList()
    console.log(category)
  },[])
  useEffect(()=>{
    console.log(category)
  },[productCategories])
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
                      {category && category[`categoryName${locale.toUpperCase()}`]}
                    </li>
                  </ol>
                </nav>
                <div className="row">
                  <div className="col">
                    <h1 className="page-header-ui-title mb-3">
                    {category && category[`categoryName${locale.toUpperCase()}`]}
                    </h1>

                  </div>
                  <div className="col d-flex justify-content-end align-items-start">
                    <div className="card me-2 " >
                      <div className="card-body ">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value={productChannelId[0]} name={'agency'} checked={checkedState[0]} onChange={()=>{
                            handleOnChange(0)
                          }} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              Agency
                            </label>
                          </div>
                      </div>
                    </div>
                    <div className="card me-2" >
                      <div className="card-body ">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value={productChannelId[1]} name={'bancassurance'} checked={checkedState[1]} onChange={()=>{
                            handleOnChange(1)
                          }} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              Bancassurance
                            </label>
                          </div>
                      </div>
                    </div>
                    <div className="card me-2" >
                      <div className="card-body ">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value={productChannelId[2]} name={'corporate'} checked={checkedState[2]} onChange={()=>{
                            handleOnChange(2)
                          }} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              Corporate
                            </label>
                          </div>
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
                  {productByChannel.length > 0 ? productByChannel.map((x, i) =>
                    <div className="col-12 col-md-4 product-card">
                      <div className="card-body pt-1 mb-4">
                        <div className="card text-left">
                          <div className="card-header">
                            {
                              (x.banksName && x.productChannel.id === 1402) ? <h5 className="card-title">{x.banksName.bankName}</h5> : <h5 className="card-title">{x[`title${locale.toUpperCase()}`]}</h5>
                            }
                          </div>
                          <div className="card-body">
                            {
                              (x.banksName && x.productChannel.id === 1402) ? <h5 className="card-title">{x[`title${locale.toUpperCase()}`]}</h5> : null
                            }
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
