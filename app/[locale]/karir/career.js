'use client'
import Link from 'next/link'
import Image from "next/image";
import headerContact from "../../../public/img/bannerweb_karir.jpg";
import careerbenefit1 from "../../../public/img/corevalues icon-01.png";
import careerbenefit2 from "../../../public/img/corevalues icon-02.png";
import careerbenefit3 from "../../../public/img/corevalues icon-03.png";
import careerbenefit4 from "../../../public/img/corevalues icon-04.png";
import careerbenefit5 from "../../../public/img/corevalues icon-05.png";
import internimage from "../../../public/img/intern_recruit.jpg";
import salesforce from "../../../public/img/sales-force.jpg";
import testiAvatar1 from "../../../public/img/Testimony carmellita.png";
import testiAvatar2 from "../../../public/img/Testimony Marvin.png";
import testiAvatar3 from "../../../public/img/Testimony Timothy.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { useTranslations } from "next-intl";
import { useState } from 'react';
import { useCareer } from './usecases/career';
import JabatanDetail from './jabatanDetail';
export default function Page() {
  const t = useTranslations();
  const [isVacancyAccordionOpen, setVacancyAccordionOpen] = useState();
  const [isInternAccordionOpen, setInternAccordionOpen] = useState();
  const [result, setResult] = useState("");
  const [resultIntern, setResultIntern] = useState();
  const [divisionOpen, setDivisionOpen] = useState('')
  const [jobOpen, setJobOpen] = useState('')
  const toggleJob = (id) => {
    if (jobOpen === id) {
      setJobOpen();
    } else {
      setJobOpen(id);
    }
  };
  const toggleDivision = (id) => {
    if (divisionOpen === id) {
      setDivisionOpen();
    } else {
      setDivisionOpen(id);
    }
  };
  const { divisiList, setDivision, division, currentDivision, jabatanList, fetchDetail } = useCareer()
  const filteredDivisiList = divisiList.filter((value)=>{
    if(result){
      return value.LDI_DIVISION.toUpperCase().includes(result.toUpperCase());
    }
    return true
  })
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
      {/*       */}
      <Image src={headerContact} alt="AJSM" className="img-fluid mb-5" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        {t("Mainnav.home")}
                      </Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t("Footer.Career")}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t("Career.Career-Intro")}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4 mb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-md-12">

              <p className='lead'>{t("Career.Career-Body")}</p>
            </div>
          </div>
          <div className='row mb-5 py-5 mx-0'>
            <div className='col-2 offset-1 overlay-container'>
              <Image src={careerbenefit1} alt="AJSM" className="img-fluid w-75 d-block mx-auto" />
              <div className="overlay-bottom-slide">
                <div className="text">{t("Career.Career-point1")}</div>
              </div>
              {/* <p className='h5 text-center mt-3'>{t("Career.Career-point1")}</p> */}
            </div>
            <div className='col-2 overlay-container'>
              <Image src={careerbenefit2} alt="AJSM" className="img-fluid w-75 d-block mx-auto" />
              <div className="overlay-bottom-slide">
                <div className="text">{t("Career.Career-point2")}</div>
              </div>
              {/* <p className='h5 text-center mt-3'>{t("Career.Career-point2")}</p> */}
            </div>
            <div className='col-2 overlay-container'>
              <Image src={careerbenefit3} alt="AJSM" className="img-fluid w-75 d-block mx-auto" />
              <div className="overlay-bottom-slide">
                <div className="text">{t("Career.Career-point3")}</div>
              </div>
            </div>
            <div className='col-2 overlay-container'>
              <Image src={careerbenefit4} alt="AJSM" className="img-fluid w-75 d-block mx-auto" />
              <div className="overlay-bottom-slide">
                <div className="text">{t("Career.Career-point4")}</div>
              </div>
              {/* <p className='h5 text-center mt-3'>{t("Career.Career-point4")}</p> */}
            </div>
            <div className='col-2 overlay-container'>
              <Image src={careerbenefit5} alt="AJSM" className="img-fluid w-75 d-block mx-auto" />
              <div className="overlay-bottom-slide">
                <div className="text">{t("Career.Career-point5")}</div>
              </div>
              {/* <p className='h5 text-center mt-3'>{t("Career.Career-point5")}</p> */}
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-4 col">
              <a href="#" className="">
                <div className="card py-3 h-100">
                    <Image
                        src={testiAvatar1}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Carmellita Rosaria</p>
                    <p className='text-muted text-center'>Talent Acquisition</p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: t("Career.Career-testi1")}} />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 col">
              <a href="#" className="">
                <div className="card py-3 h-100">
                    <Image
                        src={testiAvatar2}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Marvin Erickson</p>
                    <p className='text-muted text-center'>HRIS and MIS</p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: t("Career.Career-testi2")}} />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 col">
              <a href="#" className="">
                <div className="card py-3 h-100">
                    <Image
                        src={testiAvatar3}
                        alt="AJSM"
                        className="img-fluid p-3 w-50 d-block mx-auto"
                        loading="lazy"
                      ></Image>
                  <div className="card-body">
                    <p className='h5 text-center mb-0'>Denny</p>
                    <p className='text-muted text-center'>Head of HC Learning and Development</p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: t("Career.Career-testi3")}}/>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Accordion id="accordionCareer" open={isVacancyAccordionOpen} toggle={(id)=>{
              }} className='accordion-career mb-2'>
                <AccordionItem>
                  <AccordionHeader id='headingOne' targetId="1" onClick={(e)=>{
                    e.preventDefault()
                  }}>
                  <input type='text' placeholder={t("Career.Career-search")} className='accordion-career-search-input' value={result} onChange={(e)=>{
                    setResult(e.target.value)
                  }} onFocus={()=>{
                    setVacancyAccordionOpen("1")}} onBlur={()=>{
                      setVacancyAccordionOpen()
                    }}></input>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <nav className="nav flex-column">
                      {
                        divisiList.length > 0 ?
                          filteredDivisiList.map((value, index)=>(
                            <a className="nav-link text-white" key={index} onClick={()=>{
                              setResult(value.LDI_DIVISION);
                              setDivision(value.LDI_ID);
                            }}>{value.LDI_DIVISION}</a>
                          ))
                          :
                        <div className="d-flex justify-content-center">
                          <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>

                      }
                    </nav>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='col-12'>
              {
                division && (

                      <Accordion open={divisionOpen} toggle={toggleDivision} className=' mb-5' id="divisionAccordion">
                        <AccordionItem >
                          <AccordionHeader  targetId={currentDivision.LDI_ID}>{currentDivision.LDI_DIVISION}</AccordionHeader>
                          <AccordionBody accordionId={currentDivision.LDI_ID} className='p-0 accordion-career-option'>

                            <Accordion open={jobOpen} toggle={toggleJob} className='accordion-career'>
                              {
                                jabatanList.map((valueJabatan, index)=>(
                                  <AccordionItem>
                                    <AccordionHeader targetId={valueJabatan.LJB_ID}>{valueJabatan.LJB_NOTE}</AccordionHeader>
                                    <AccordionBody accordionId={valueJabatan.LJB_ID} >
                                      {
                                        jobOpen==valueJabatan.LJB_ID ? <JabatanDetail ljb_id={valueJabatan.LJB_ID}/> : <></>
                                      }
                                    </AccordionBody>
                                  </AccordionItem>
                                ))
                              }
                            </Accordion>
                          </AccordionBody>
                        </AccordionItem>
                      </Accordion>
                  )
              }
            </div>
            <div className='col-12'>

            </div>
            <div className='col-12'>
              <p className='h3 mt-2'><span className='text-dark fw-light'>{t('Career.Question')}</span> <a href="">{t('Career.click')}</a></p>
            </div>
            <div className='col-12'>
              <hr className='my-5 py-5'></hr>
            </div>
          </div>
          <div className='row mb-5'>
            <div className='col-12 col-md-6'>
                <p className='h2'>{t('Career.intern_title')}</p>
                <p className='lead'>{t('Career.intern_desc')}</p>
            </div>
            <div className='col-12 col-md-6'>
              <Image
                src={internimage}
                alt="AJSM"
                className="img-fluid rounded-3"
                loading="lazy"
              ></Image>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Accordion id="accordionIntern" open={isInternAccordionOpen} toggle={()=>{
                setInternAccordionOpen()
              }} className='accordion-career mb-2'>
                  <AccordionItem>
                    <AccordionHeader id='headingOne' targetId="1" onClick={(e)=>{
                      e.preventDefault()
                    }}>
                    <input type='text' placeholder={t("Career.Career-search")} className='accordion-intern-search-input' value={resultIntern} onFocus={()=>{
                      setInternAccordionOpen("1")}} onBlur={()=>{
                        setInternAccordionOpen()
                      }}></input>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <nav className="nav flex-column">
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Internal Audit</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Finance Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Information Technology Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Marketing Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern('Branch & Representative Office')}>Branch & Representative Office</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Claims Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Underwriting & Reinsurance Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Administration Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Risk Management Department</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Actuary</a>
                        <a className="nav-link text-white" onClick={()=>setResultIntern("")}>Graduate Internship Programme</a>
                      </nav>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
            </div>
            <div className='col-12'>
            {
                resultIntern!="" && (<div className="accordion mb-5" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseItem" aria-expanded="true" aria-controls="collapseItem">
                    <p className='h5'>Branch Representative Office</p>
                    </button>
                  </h2>
                  <div id="collapseItem" className="accordion-collapse collapse show accordion-career-option" aria-labelledby="headingOne" data-bs-parent="#accordionIntern">
                    <div className="accordion-body p-0">
                    <div className="accordion accordion-career" id="accordionIntern">
                    <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                              Bandung Branch Office
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col'>
                                  <h6>General Requirements</h6>
                                </div>
                                <div className='col'>
                                  <ol>
                                    <li>Bachelor's degree from reputable university with minimum IPK 2.75 (scale 4)</li>
                                    <li>Good command of English</li>
                                    <li>Able to operate MS Office</li>
                                    <li>Experience in the general insurance industry, or in relevant jobs or work responsibilities is preferred</li>
                                    <li>Able to exhibit qualities that reflect MSIG’s core values: Customer Focused, Integrity, Teamwork, Innovation and Professionalism</li>
                                  </ol>
                                </div>
                              </div>
                              <div className='row border-top p-3'>
                                <div className='col'>
                                  <h6>Requirements</h6>
                                </div>
                                <div className='col'>
                                  <p>Work experience in General Insurance, especially in Marketing, is preferred</p>
                                  <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.apply")}</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                              Batam Branch Office
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col'>
                                  <h6>General Requirements</h6>
                                </div>
                                <div className='col'>
                                  <ol>
                                    <li>Bachelor's degree from reputable university with minimum IPK 2.75 (scale 4)</li>
                                    <li>Good command of English</li>
                                    <li>Able to operate MS Office</li>
                                    <li>Experience in the general insurance industry, or in relevant jobs or work responsibilities is preferred</li>
                                    <li>Able to exhibit qualities that reflect MSIG’s core values: Customer Focused, Integrity, Teamwork, Innovation and Professionalism</li>
                                  </ol>
                                </div>
                              </div>
                              <div className='row border-top p-3'>
                                <div className='col'>
                                  <h6>Requirements</h6>
                                </div>
                                <div className='col'>
                                  <p>Work experience in General Insurance, especially in Marketing, is preferred</p>
                                  <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.apply")}</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
            </div>
            <div className='col-12'>

            </div>
            <div className='col-12'>
              <p className='h3 mt-2'><span className='text-dark fw-light'>Mau bertanya terkait kesempatan intern di MSIG Life?</span> <a href="">Klik Di Sini</a></p>
            </div>
            <div className='col-12'>
              <hr className='my-5 py-5'></hr>
            </div>
          </div>

          <div className='row mb-5'>
            <div className='col-12 col-md-6'>
                <p className='h2'>Jadi Bagian dari Keluarga Besar MSIG Life</p>
                <p className='lead'>Saatnya kembangkan karier di industri
asuransi. Kamu akan didukung dengan
beragam program yang bisa membantu
langkahmu menuju sukses.</p>
            <div className="row mt-5">
              <div className="col-12 col-md-8 pb-3 text-left">
                <h4 className=" text-left mt-3">{t("Career.agency")}&nbsp;&nbsp;</h4>
              </div>
              <div className="col-12 col-md-4 pb-3 text-right">
                <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/agency"} >{t("Career.click")}</Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-8 pb-3 text-left">
                <h4 className="text-left mt-3">{t("Career.banca")}&nbsp;&nbsp;</h4>

              </div>
              <div className="col-12 col-md-4 pb-3 text-right">
                <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.click")}</Link>
              </div>
            </div>
            </div>
            <div className='col-12 col-md-6'>
              <Image
                src={salesforce}
                alt="AJSM"
                className="img-fluid rounded-3"
                loading="lazy"
              ></Image>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
