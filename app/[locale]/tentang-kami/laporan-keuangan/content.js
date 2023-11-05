'use client';
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import Link from "next/link";
import Moment from 'moment';
import { useEffect } from "react";

export default function Page() {
  const laporanTahunanUnitLink = {
    '2022': 'Ular2022.pdf',
    '2021': 'UNIT LINK ANNUAL REPORT 2021.pdf',
    '2020': 'Laporan Tahunan Unit Link 2020.pdf',
    '2019': 'Laporan Tahunan Unit Link 2019.pdf',
    '2018': 'Laporan Tahunan Unit Link 2018.pdf',
    '2017': 'Laporan Tahunan Unit Link 2017.pdf',
    '2016': 'Laporan Tahunan Unit Link 2016.pdf'
  };
  const annualReport = [
    {
      'year': 2013,
      'type': 'annual-report',
      'file': '_2013 Annual Report_SMiLe.pdf'
    },
    {
      'year': 2014,
      'type': 'annual-report',
      'file': '_2014 Annual Report_SMiLe.pdf'
    },
    {
      'year': 2015,
      'type': 'annual-report',
      'file': '_Annual Report 2015.pdf'
    },
    {
      'year': 2016,
      'type': 'annual-report',
      'file': '_Annual Report 2016.pdf'
    },
    {
      'year': 2017,
      'type': 'annual-report',
      'file': '_Annual Report 2017.pdf'
    },
    {
      'year': 2018,
      'type': 'annual-report',
      'file': '_annual_report_2018_lowres.pdf'
    },
    {
      'year': 2019,
      'type': 'annual-report',
      'file': '_Laporan Tahunan 2019.pdf'
    },
    {
      'year': 2020,
      'type': 'annual-report',
      'file': '_Laporan Tahunan 2020.pdf'
    },
    {
      'year': 2020,
      'type': 'sustainability-report',
      'file': '_Laporan_Keberlanjutan_2020.pdf'
    },
    {
      'year': 2021,
      'type': 'annual-sustainability-report',
      'file': '_LIFE - Laporan Tahunan dan Keberlanjutan 2021.pdf'
    },
    {
      'year': 2022,
      'type': 'annual-sustainability-report',
      'file': '_Annual_Report_and_Sustainability_Report_2022.pdf'
    }
  ]
  const monthlyReport = {
    2023: [
      [3, '2023_04laporan bulanan konven_april.pdf','2023_04laporan bulanan syariah_april.pdf'],
      [4, '2023_05laporan bulanan konven_Mei.pdf','2023_052023_laporan bulanan syariah_Mei.pdf'],
      [5, '2023_06laporan bulanan konven_Juni.pdf','2023_06laporan bulanan syariah_Juni.pdf']
    ]
  };
  const annualFinancialReport = {
    2023: [['Laporan Keuangan Konsolidasian Interim Tengah Tahunan 2023','2023_tahunan_laporan_koran_Konsolidasi_Juni23.pdf']],
    2022: [
      ['Laporan Keuangan Konsolidasian Interim Tengah Tahunan 2022','2022_tahunan_laporan_koran_Konsolidasi_Maret23v2.pdf'],
      ['Laporan Keuangan Konvensional  Per 31 Desember 2022 dan 2021','2022_tahunan_Laporan_koran_2022__2021_1.pdf'],
    ],
    2021: [
      ['Laporan Keuangan Konvensional Per 31 Desember 2021 dan 2020','2021_tahunan_Laporan_Koran_2021_2020.pdf'],
    ]
  }
  const quarterFinancialReport = {
    2023: {
      1:['2023_triwulan1_lap_keuangan_Konvensional_TW1_23.pdf','2023_triwulan1_lap_keuangan_Syariah_TW1_23.pdf'],
    },
    2022: {
      1:['2022_triwulan1_lap_keuangan_Konvensional_TW1_22.pdf','2022_triwulan1_lap_keuangan_Syariah_TW1_22.pdf'],
      2:['2022_triwulan2_lap_keuangan_Konvensional_TW2_22.pdf','2022_triwulan2_lap_keuangan_Syariah_TW2_22.pdf'],
      3:['2022_triwulan3_lap_keuangan_Konvensional_TW3_22.pdf','2022_triwulan3_lap_keuangan_Syariah_TW3_22.pdf'],
      4:['2022_triwulan4_lap_keuangan_Konvensional_TW4_22.pdf','2022_triwulan4_lap_keuangan_Syariah_TW4_22.pdf']
    },
    2021: {
      1: ['2021_triwulan1_lap_keuangan_Konvensional_TW1_2021.pdf','2021_triwulan1_lap_keuangan_Syariah_TW1_2021.pdf'],
      2: ['2021_triwulan2_lap_keuangan_Konvensional_TW2_2021.pdf','2021_triwulan2_lap_keuangan_Syariah_TW2_2021.pdf']
    }
  }
  const t = useTranslations();  
  const locale = useLocale();
  let bootstrap;
  let tabId;
  useEffect(() => {
    bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    tabId = window && window.location.hash ? window.location.hash : null;

  }, []);
  useEffect(()=>{
    bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    if(bootstrap){
        
        const triggerTabList = window.document.querySelectorAll('#nav-tab-main button')
        triggerTabList.forEach(triggerEl => {
            let tabTrigger = new bootstrap.Tab(triggerEl)

            triggerEl.addEventListener('click', event => {
                event.preventDefault()
                tabTrigger.show()
            })
        })

        const triggerAnnualReportList = window.document.querySelectorAll('#annual-report button')
        triggerAnnualReportList.forEach(triggerEl => {
            let tabTrigger = new bootstrap.Tab(triggerEl)

            triggerEl.addEventListener('click', event => {
                event.preventDefault()
                tabTrigger.show()
            })
        })

        
        if(tabId){

            let triggerEl;
            if(tabId=='#annual-unit-link'){
                triggerEl = window.document.querySelector('#nav-tab-main button[data-bs-target="#nav-annual-report"]')
                bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name
                
                const subEl = window.document.querySelector('#annual-report button[data-bs-target="'+tabId+'"]')
                // console.log(subEl)
                bootstrap.Tab.getInstance(subEl).show() // Select tab by name
                return
            }
            triggerEl = window.document.querySelector('#nav-tab-main button[data-bs-target="'+tabId+'"]')
            bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name
        }
    }
  }, [bootstrap, tabId])
  return (
    <div className="ajsm_page laporan_keuangan">
      <section className="header">
        <Image src={headerTentang} alt="AJSM" className="img-fluid" />
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
                    <a href="#">{t("Mainnav.about-us")}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                    {t("Mainnav.company-reports")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Mainnav.company-reports")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row ajsm_laporan">
              <div className="col-md-12">
                <nav>
                  <div class="nav nav-tabs nav-fill" id="nav-tab-main" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{t('financial-report.financial-report')}</button>
                    <button class="nav-link" id="nav-annual-report-tab" data-bs-toggle="tab" data-bs-target="#nav-annual-report" type="button" role="tab" aria-controls="nav-annual-report" aria-selected="false">{t('financial-report.annual-report')}</button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade border border-top-0 show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                    <ul class="nav nav-pills nav-fill mb-3 pt-3 px-4" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('financial-report.annual')}</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('financial-report.quarter')}</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t('financial-report.monthly')}</button>
                      </li>
                      
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane px-4 fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <h4 className="mt-4">{t('financial-report.annual-financial-report')}</h4>
                        <hr></hr>
                        {
                          Object.keys(annualFinancialReport).reverse().map((val)=>{
                            
                            return (
                              <>
                                <h5>{val}</h5>
                                <div className="row mb-3">
                                  <div className="col-sm-12 mb-4 mb-sm-0">
                                  {
                                          annualFinancialReport[val].map((value)=>{
                                            if (value!=null) {
                                              return (
                                    <div className="card mb-3">
                                      <div className="card-body">
                                        
                                              <div>
                                                <h5 className="card-title">{value[0]}</h5>
                                                <Link 
                                                  href={`/files/Laporan Keuangan Tahunan/${value[1]}`} 
                                                  className="btn btn-ajsm float-end">
                                                  {t('financial-report.download-pdf')}
                                                </Link>
                                              </div>
                                            
                                        
                                      </div>
                                    </div>
                                    ) } else {
                                      return null;
                                    }
                                  })
                                }
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                        
                        
                      </div>
                      <div class="tab-pane px-4 fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <h4 className="mt-4">{t('financial-report.quarter-financial-report')}</h4>
                        {
                          Object.keys(quarterFinancialReport).map((year)=>(
                            <>
                            <hr></hr> 
                            <div className="mb-4">
                              <h5>{year}</h5>
                              {
                                Object.keys(quarterFinancialReport[year]).map((quarter)=>(
                                  <div className="mb-2">
                                    <h6>{t('financial-report.quarter-report')} {quarter}</h6>
                                    <div className="row">
                                      
                                      <div className="col-sm-6">
                                        <div className="card mb-3">
                                          <div className="card-body">
                                            <h5 className="card-title">{t('financial-report.conventional-financial-report')}</h5>
                                            <Link href={`/files/Laporan Keuangan SMiLe/${quarterFinancialReport[year][quarter][0]}`} className="btn btn-ajsm">
                                              {t('financial-report.download-pdf')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card mb-3">
                                          <div className="card-body">
                                            <h5 className="card-title">{t('financial-report.sharia-financial-report')}</h5>
                                            <Link href={`/files/Laporan Keuangan SMiLe/${quarterFinancialReport[year][quarter][1]}`} className="btn btn-ajsm">
                                              {t('financial-report.download-pdf')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div> 
                                  </div>
                                ))
                              } 
                              <hr></hr>
                            </div>

                            </>
                          ))
                        }
                        
                      </div>
                      <div class="tab-pane px-4 fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <h4 className="mt-4">{t('financial-report.monthly-financial-report')}</h4>
                        <hr></hr>
                        {
                            Object.keys(monthlyReport).reverse().map((value)=>{
                              return monthlyReport[value].map((valueMonth)=>{
                                const monthName = Moment().locale(locale).month(valueMonth[0]).format('MMMM');
                                const idMonthName = Moment().locale(locale).month(valueMonth[0]).format('MMMM');
                                return (
                                  <div className="mb-4">
                                    <h6>{monthName}</h6>
                                    <div className="row mb-4">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card">
                                          <div className="card-body">
                                            <h6 className="card-title">{t('financial-report.monthly-financial-report')}</h6>
                                            <Link href={`/files/Laporan Keuangan Bulanan/${idMonthName}/${valueMonth[1]}`} className="btn btn-ajsm">
                                              {t('financial-report.download-pdf')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card">
                                          <div className="card-body">
                                            <h6 className="card-title">{t('financial-report.sharia-financial-report')}</h6>
                                            <Link href={`/files/Laporan Keuangan Bulanan/${idMonthName}/${valueMonth[2]}`} className="btn btn-ajsm">
                                              {t('financial-report.download-pdf')}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>              
                                  </div>
                                )
                              })
                              
                            }
                        )}

                      </div>
                    </div>
                  </div>
                  <div class="tab-pane border border-top-0 fade" id="nav-annual-report" role="tabpanel" aria-labelledby="nav-annual-report-tab" tabIndex="0">
                      <ul class="nav nav-pills nav-fill mb-3 pt-3 px-4" id="annual-report" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home2-tab" data-bs-toggle="pill" data-bs-target="#pills-home2" type="button" role="tab" aria-controls="pills-home2" aria-selected="true">{t('financial-report.annual-report')}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="annual-unit-link-tab" data-bs-toggle="pill" data-bs-target="#annual-unit-link" type="button" role="tab" aria-controls="annual-unit-link" aria-selected="false">{t('financial-report.annual-unit-link-report')}</button>
                        </li>
                      </ul>
                      <div class="tab-content px-4" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home2-tab" tabIndex="0">
                          <p>{t('financial-report.annual-report-desc')}</p>
                          {
                            annualReport.reverse().map((value)=>{
                              return (<div className="row ajsm_laporan">
                                <div className="col-12 ">
                                  <div className="card text-center">
                                    <h4 className="card-header">{value.year}</h4>
                                    <div className="card-body">
                                      <h4>{t(`financial-report.${value.type}`)} {value.year}</h4>
                                      <Link href={`/files/Laporan Tahunan SMiLe/${value.file}`} className="btn btn-ajsm">
                                      {t('financial-report.download-pdf')}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>);
                            })
                          }
                            
                        </div>
                        <div class="tab-pane fade show" id="annual-unit-link" role="tabpanel" aria-labelledby="annual-unit-link" tabIndex="1">
                          <p>{t(`financial-report.annual-unit-link-report-desc`)}</p>
                          {
                            Object.keys(laporanTahunanUnitLink).reverse().map((value)=>{
                              return (<div className="row ajsm_laporan">
                                <div className="col-12 ">
                                  <div className="card text-center">
                                    <h4 className="card-header">{value}</h4>
                                    <div className="card-body">
                                      <h4>{t(`financial-report.annual-unit-link-report`)} {value}</h4>
                                      <Link href={`/files/Laporan Tahunan Unit Link/${laporanTahunanUnitLink[value]}`} className="btn btn-ajsm">
                                      {t('financial-report.download-pdf')}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>);
                            })
                          }
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <NavigasiTentang />
            </div>
            
          </div>
        
      </section>
    </div>
  );
}
