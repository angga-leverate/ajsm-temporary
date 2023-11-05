'use client'
import Link from 'next/link'
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useLocale, useTranslations } from 'next-intl';
import { customerService, leadsContactTimeService} from './services'
import { useEffect, useState } from 'react';
import {useProvince} from '@/app/[locale]/common/usecase'
import { useProductNeed } from './usecases/use-product-need';
import moment from 'moment';
export default function Page() {
  const t = useTranslations();
  const locale = useLocale()
  const provinceList = useProvince()
  const productNeed = useProductNeed()
  const [leadsTimeList, setLeadsTimeList] = useState([])
  const [leadsTime, setLeadsTime] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [leadPhone, setPhoneNumber] = useState('')
  const [leadEmail, setEmail] = useState('')
  const [leadResidentArea, setResidentArea] = useState('')
  const [leadAgreement, setLeadAgreement] = useState(false)
  const [leadSolutionTypes, setSolutionType] = useState([])
  const [successAlert, setSuccessAlert] = useState(false)
  const [failAlert, setFailAlert] = useState(false)
  useEffect(()=>{
    leadsContactTimeService.getService().then((data)=>{
      setLeadsTimeList(data)
    })
  }, [])
  const handleSubmit = (e)=>{
    e.preventDefault();
    customerService.postService({
      createdDate: moment().format(),
      firstName,
      lastName,
      leadPhone,
      leadEmail,
      leadResidentArea: provinceList.find((value)=>value.id == leadResidentArea),
      leadAgreement,
      leadSolutionTypes: productNeed.find((value)=>value.id == leadSolutionTypes),
      leadsTime: leadsTimeList.find((value)=>value.id == leadsTime)
    }).then(()=>{
      resetForm()
      setSuccessAlert(true)
      setTimeout(() => setSuccessAlert(false), 3000)
    }).catch(()=>{
      setFailAlert(true)
      setTimeout(() => setFailAlert(false), 3000)
    })
  };
  const handleSolutionTypeChecked = (e) => {
    const isChecked = leadSolutionTypes.find((st)=>st == e);

    if(isChecked){
      setSolutionType(
        leadSolutionTypes.filter(
          (st) => st.value !== e
        )
      );
    }else{
      setSolutionType(leadSolutionTypes.concat(e))
    }
  }
  const resetForm = () => {
    setLeadsTime(null)
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setEmail('')
    setResidentArea('')
    setLeadAgreement(false)
    setSolutionType([])
  }
  return (
    <div className='ajsm_page layanan_pelanggan mb-5'>
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.prospective-customer-service')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.prospective-customer-service')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <form onSubmit={(e)=>handleSubmit(e)}>
                  <div className="col-md-12">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div className="col-md-12" id="formHubungi">
                      <h6><font color="red">*</font><font>{t('prospective-customer-service.required')}</font></h6>
                      <div className="col-md-12 mt-2 ">
                        <div className="form-group">
                          <label className="col-md-3 control-label">{t('prospective-customer-service.first-name')}<font color="red">*</font></label>
                          <div className="col-md-9">
                            <input id="namadp" name="namadp" className="form-control" type="text" placeholder="" value={firstName} onChange={(e)=>{
                              setFirstName(e.target.value)
                            }} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-3 control-label">{t('prospective-customer-service.last-name')}<font color="red">*</font> </label>
                        <div className="col-md-9">
                          <input id="namabl" name="namabl" className="form-control" type="text" placeholder="" value={lastName} onChange={(e)=>{
                              setLastName(e.target.value)
                            }}/>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-12 control-label">{t('prospective-customer-service.preferred-communication-method')}<font color="red">*</font> </label>
                          <div className="col-md-9 mb-3">
                            <input id="telp" name="telp" className="form-control" type="text" value={leadPhone} onChange={(e)=>{
                              setPhoneNumber(e.target.value)
                            }} placeholder={t('prospective-customer-service.no-telp')} />
                          </div>
                          <div className="col-md-9">
                          <input id="email" name="email" className="form-control" type="email" value={leadEmail} onChange={(e)=>{
                              setEmail(e.target.value)
                            }} placeholder="Email" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-3 control-label">{t('prospective-customer-service.resident')}</label>
                          <div className="col-md-3">
                            <div className="live-search">
                              <div className="dropdown bootstrap-select">

                                <select id="domisili"
                                value={leadResidentArea}
                                className="form-select" data-live-search="true" tabIndex="-98"
                                onChange={(e)=>setResidentArea(e.target.value)}>
                                  {
                                    provinceList.map((province, index)=>{
                                      return (
                                        <option key={index} value={province.id}>{province.provinceName}</option>
                                      )
                                    })
                                  }
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                    <div className="form-group">
                    <label className="col-md-12 control-label">{t('prospective-customer-service.preferred-communication-time')}</label>
                    <div className="col-md-9">
                      {
                        leadsTimeList.map((value, index)=>{
                          return (<>
                            <label key={index}>
                              <input id={`waktu${value.id}`}
                              type="radio" value={value.id} name="waktu" checked={leadsTime==value.id} onChange={
                                ()=>setLeadsTime(value.id)
                              } />&nbsp;&nbsp;{value.contactName}
                            </label>
                            <br />
                          </>)
                        })
                      }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <div className="form-group">
                    <label className="col-md-3 control-label">{t('prospective-customer-service.prod-need')} </label>
                    <div className="col-md-9">
                      {
                        productNeed.map((value, index)=>{
                          return (
                            <>
                            <label key={index}>
                              <input id="produk" type="checkbox"
                                checked={leadSolutionTypes.find((st)=> st == value.id) !== undefined ? true : false}
                                onChange={(e)=>handleSolutionTypeChecked(e.target.value)}
                                value={value.id}
                                name="produk"
                              />&nbsp;&nbsp; {locale=='en' ? value.solutionTypeEn : value.solutionType}
                            </label><br />
                            </>
                          )
                        })
                      }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12"><br />
                    &nbsp;&nbsp;<input type="checkbox" checked={leadAgreement}  name="setuju" onChange={e=>setLeadAgreement(e.target.checked)} /> <b> {t('prospective-customer-service.agree')}
                      <Link href="/privacy-policy"> <font color="red">{t('Footer.Privacy-Policy')} *</font></Link>
                    </b>
                    </div>
                    <br /><br />
                    <div className="col-md-12">
                      <div className={`alert alert-success ${(successAlert) ? 'd-block': 'd-none'}`} role="alert">
                      {t('prospective-customer-service.alert.success-submit')}
                      </div>
                      <div className={`alert alert-danger ${(failAlert) ? 'd-block': 'd-none'}`} role="alert">
                        {t('prospective-customer-service.alert.fail-submit')}
                      </div>
                    </div>
                    <div className="col-md-12">
                    &nbsp;&nbsp;<input type="submit" className="btn btn-ajsm-dark my-3" name="submit" id="submit" value="Kirim" disabled={!leadAgreement} />
                    </div>
                    </div>
                    </div>

                  </div>
                  </form>
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
