'use client'

import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useTranslations } from 'next-intl';
import { getLocalData } from '@/common/localdata';
import { useEffect, useState } from 'react';
import files from '@/public/json/file.json'
import moment from 'moment';

export default function Page() {
  const t = useTranslations();

  const [year, setYear] = useState()
  useEffect(()=>{
    console.log(files.files)
  //   getLocalData().then((value)=>{
  //     setFiles(value)
  //   });
  }, [])

  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.home')}</a>
                    </li>
                    <li className="breadcrumb-item">
                    <a href="#">{t('Mainnav.services')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active"><a href="#">{t('Mainnav.fund-fact-sheet')}</a></li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.fund-fact-sheet')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4" id="fund-fact-sheet">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                    <div className="pr-10 mb-5">
                      <h5>{t("fund-fact-sheet.pick-year")}</h5>
                      <select name="years" id="years" className="form-control" onChange={(e)=>{
                        setYear(e.target.value);
                      }}>
                        {
                          Object.keys(files.files).map((val)=>(
                            <option value={val} key={val}  >{val}</option>
                          ))
                        }
                      </select>
                    </div>
                    {
                      (year && files.files[year].length > 0) ? (
                        <div className='d-flex flex-wrap'>
                          {
                            files.files[year].map((value)=>(
                              <div id="DivAug" className="col-md-6">
                                <h5>{moment().set('month', (parseInt(value.month) - 1)).format('MMMM')}</h5>
                                <ul id="aug">
                                  {
                                    value.list.map((fileVal)=>(
                                      <li><a href={fileVal.url} className="btn-lg-link" target="_blank">{fileVal.name}</a></li>
                                    ))
                                  }
                                </ul>
                              </div>
                            ))
                          }

                        </div>
                      ) : <div>No Result</div>
                    }

                  </div>
                </div>
              </div>
            </div>
            <NavigasiLayanan/>
          </div>
        </div>
      </section>
    </div>
  )
}
