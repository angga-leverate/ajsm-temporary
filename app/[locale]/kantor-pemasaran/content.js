'use client'
import { useTranslations,  } from "next-intl";

import Link from "next/link";
import { useSalesOffice } from "./usecase";
import { Input, Label } from "reactstrap";
import { useEffect, useState } from "react";

export default function Page() {
  const t = useTranslations();
  const [selectedArea, setSelectArea] = useState('')
  const { salesOfficeList, area, loadSalesOfficeList } = useSalesOffice()

  useEffect(()=>{
    loadSalesOfficeList()

  }, [])
  return (
    <div className="ajsm_page sales-office mb-5">
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.home")}</a>
                    </li>
                    <li className="breadcrumb-item">
                      {t("Footer.Marketing-Offices")}
                    </li>
                  </ol>
                </nav>

              </header>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="page-header-ui-title mb-3">
              {t(`sales-office.title`)}
              </h1>

            </div>
            <div className="col d-flex  align-items-start">
              <div className="card me-2 " >
                <div className="card-body d-flex flex-col">
                <Label for="area" className="me-5">
                  Area
                </Label>
                <Input
                  id="area"
                  name="category"
                  type="select"
                  value={selectedArea}
                  onChange={(e)=>{
                    setSelectArea(e.target.value)
                  }}
                >
                  <option value={''}>All</option>
                  {
                    area.map((value, index)=>{

                      return (
                      <option value={value} key={index} >
                        {value}
                      </option>
                    )})
                  }

                </Input>
                </div>
              </div>
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
                  {salesOfficeList.length > 0 ? salesOfficeList.filter((val)=>{
                    if(selectedArea==='') {
                      return true
                    }
                      return val.officeArea === selectedArea
                  }).filter((val)=>val.officeType==='MARKETING_OFFICE').map((x, i) => {

                    return (
                      <div className="col-12 col-md-4 product-card">
                      <div className="card-body pt-1 mb-4  h-100">
                        <div className="card text-left  h-100">
                          <div className="card-header pt-3">
                            <h5 className="card-title">{x.officeName}</h5>
                          </div>
                          <div className="card-body">
                            <p>{x.officeAddress}</p>
                            {x.officePhone!='' ? <p><i className="fa fa-phone"></i>&nbsp;{x.officePhone}</p> : null}
                            {x.officeFax!='' ? <p><i className="fa fa-fax"></i>&nbsp;{x.officeFax}</p> : null}
                            {x.officePic!='' ? <p><i className="fa fa-user"></i>&nbsp;{x.officePic}</p> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  }

                  ) : <p className="text-center">No Result Found</p>}
                </div>
                {salesOfficeList.length > 0 ?  <h4>{t(`sales-office.akm`)}</h4> : <></>}
                <div className="row g-4 mb-2">

                  {salesOfficeList.length > 0 ? salesOfficeList.filter((val)=>{
                    if(selectedArea==='') {
                      return true
                    }
                      return val.officeArea === selectedArea
                  }).filter((val)=>val.officeType==='AKM').map((x, i) => {

                    return (
                      <div className="col-12 col-md-4 product-card">
                      <div className="card-body pt-1 mb-4 h-100">
                        <div className="card text-left h-100">
                          <div className="card-header pt-3">
                            <h5 className="card-title">{x.officeName}</h5>
                          </div>
                          <div className="card-body h-100">
                            <p>{x.officeAddress}</p>
                            {x.officePhone!='' && x.officePhone!='-' ? <p><i className="fa fa-phone"></i>&nbsp;{x.officePhone}</p> : null}
                            {x.officeFax!=''&&x.officeFax!='-' ? <p><i className="fa fa-fax"></i>&nbsp;{x.officeFax}</p> : null}
                            {x.officePic!=''&&x.officePic!='-' ? <p><i className="fa fa-user"></i>&nbsp;{x.officePic}</p> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  }

                  ) : <></>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
