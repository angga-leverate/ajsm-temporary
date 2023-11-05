'use client'
import Link from 'next/link'
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

    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="col-md-12">
        <div className="card-body px-0 pt-1 spr_liputantitle">
          <div className="col-md-12" id="formHubungi">
          <h6><font color="red">*</font><font>{t('prospective-customer-service.required')}</font></h6>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={t("STICKY.F_NAME")} value={firstName} onChange={(e)=>{
                  setFirstName(e.target.value)
                }} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder={t("STICKY.L_NAME")} value={lastName} onChange={(e)=>{
                  setLastName(e.target.value)
                }}/>
          </div>
          <div className="mb-3">
            <input id="telp" name="telp" className="form-control" type="text" value={leadPhone} onChange={(e)=>{
                  setPhoneNumber(e.target.value)
                }} placeholder={t(`STICKY.PHONE`)} />
          </div>
          <div className="mb-3">
            <input id="email" name="email" className="form-control" type="email" value={leadEmail} onChange={(e)=>{
                  setEmail(e.target.value)
                }} placeholder={t(`STICKY.MAIL`)} />
          </div>
          <div className="mb-3">
            <select id="domisili"
              placeholder={t("STICKY.CITY")}
              value={leadResidentArea}
              className="form-select" data-live-search="true" tabIndex="-98"
              name='domisili'
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
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              name="produk"
              onChange={(e)=>handleSolutionTypeChecked(e.target.value)}
              placeholder={t("STICKY.SOLUTION")}>
              {
                productNeed.map((value, index)=>{
                  return (
                    <>
                    <option key={index} value={value.id}>{locale=='en' ? value.solutionTypeEn : value.solutionType}</option>
                    </>
                  )
                })
              }
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example" name="three" onChange={
                    (e)=>setLeadsTime(e.target.value)
                  } >
              <option value="DEFAULT">{t("STICKY.TIME_CONTACT")}</option>
              {
                leadsTimeList.map((value, index)=>{
                  return (<>
                    <option value={value.id} key={index}>{value.contactName}</option>
                  </>)
                })
              }
            </select>
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
        &nbsp;&nbsp;<input type="submit" className="btn btn-ajsm-dark my-3" name="submit" id="submit" value={t(`prospective-customer-service.send`)} disabled={!leadAgreement} />
        </div>
        </div>


      </div>
    </form>
  )
}
