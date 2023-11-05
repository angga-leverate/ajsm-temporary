'use client'
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useTranslations } from 'next-intl';
import { useCorporateCity, useCorporatePartner, useCorporateProviderType } from './usecases';
import { useState } from 'react';
import Link from 'next/link';
export default function Page() {
  const t = useTranslations();
  const cityList = useCorporateCity()
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const providerTypeList = useCorporateProviderType()
  const [providerType, setProviderType] = useState('')
  const {
    partnerList,
    fetchData,
    resetData
  } = useCorporatePartner({
    city,
    providerType,
    name,
    category
  })



  const handleSubmit = () => {
    resetData()
    fetchData()
  }
  return (
    <div className='ajsm_page rekanan-rs'>
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.hospital-partners')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.hospital-partners')}</h1>
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
                  <div className="col-md-12">
                  <label>{t('hospital-partners.category')}</label>
                  <select id="hospital_categories" className="form-control" name="hospital_categories" onChange={(e)=>{
                    if(e.target.value=='5'){
                      setCategory(1);
                    }else{
                      setCategory(0);
                    }

                  }}>
                  <option value="" key={""}>-- {t('hospital-partners.category-option')} --</option>
                  <option value="1" key={"1"}>Eka Medicare-Non AdMedika</option>
                  <option value="2" key={"2"}>Eka Medicare-AdMedika</option>
                  <option value="3" key={"3"}>Eka Medicare-Small Group</option>
                  <option value="4" key={"4"}>Smile Medical</option>
                  <option value="5" key={"5"}>Medical Check Up</option>
                  <option value="6" key={"6"}>Smile Link Medivest</option>
                  <option value="7" key={"7"}>Cerdas Care</option>
                  <option value="8" key={"8"}>Personal Accident Sinarmas MSIG Life (PAS)</option>
                  <option value="9" key={"9"}>Smile Hospital Protection</option>
                  </select>
                  <label >{t('hospital-partners.type')}</label>
                  <select id="hospital_types" className="form-control" name="hospital_types" onChange={(e)=>setProviderType(e.target.value)}>
                    <option value="">{t('hospital-partners.all')}</option>
                    {
                      providerTypeList.map((val, index)=>{
                        return (
                          <option value={val.JENIS_PROVIDER} key={index}>{val.JENIS}</option>
                        )
                      })
                    }
                  </select>
                  <br></br>
                  <h4><b>{t('hospital-partners.sub-title')}</b></h4>
                  <label>{t('hospital-partners.name')}</label>
                  <input type="text" name="nama" id="nama" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}></input>
                  <label >{t('hospital-partners.location')}</label>
                    <select id="lokasi" className="form-control" name="lokasi" onChange={(e)=>setCity(e.target.value)}>
                    <option value="">{t('hospital-partners.all')}</option>
                    {
                      cityList.map((val)=>{
                        return (
                          <option key={val.ID_KOTA} value={val.ID_KOTA}>{val.NAMA_KOTA}</option>
                        )
                      })
                    }
                    </select>

                    <input type="button" value={t('hospital-partners.search')} id="cari" name="cari" className="btn btn-ajsm-dark my-3" onClick={()=>{
                      handleSubmit()
                    }}/>
                    <div className='table-responsive' style={{maxHeight: '400px'}}
                    >
                      <table className="table table-striped table-colored result-table table-responsive" >
                    <thead>
                    <tr>
                    <th>{t('hospital-partners.name')}</th>
                    <th>{t('hospital-partners.location')}</th>
                    <th>{t('hospital-partners.address')}</th>
                    </tr>
                    </thead>
                    <tbody id="tbhasil" className='overflow-scroll'>
                    {
                      partnerList.length > 0 ? partnerList.map((partner)=>{
                          return (
                            <tr key={partner.RSID}>
                              <td><Link href={`/layanan/rekanan-rs/${partner.RSID}`}>{partner.RSNAMA}</Link></td>
                              <td>{partner.KOTA}</td>
                              <td>{partner.RSALAMAT}</td>
                            </tr>
                          )
                        })
                       : (
                        <tr>
                          <td colSpan={3} align='center'>{t('hospital-partners.not-found')}</td>
                        </tr>
                      )
                    }</tbody>
                    </table>
                    </div>

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
