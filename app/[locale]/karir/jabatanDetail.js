'use client'
import { useEffect, useState } from "react"
import { useCareer } from "./usecases/career"
import Link from "next/link"
import { useTranslations } from "use-intl";

export default function JabatanDetail({
  ljb_id
}){
  const t = useTranslations();
  const {fetchDetail} = useCareer()
  const [detail, setDetail] = useState()
  useEffect(()=>{
    if(ljb_id){
      setDetail()
      fetchDetail(ljb_id).then((value)=>{
        const jobs = value.result.division.reduce((prev, val) => {
          if(val.STS_VACANT === 0){
            return false
          }
          if(prev.length === 0){
            const arr = [];
            arr.push(val.REQUIREMENT)
            val['REQUIREMENT'] = arr;
            return val
          }else{
            prev['REQUIREMENT'].push(val.REQUIREMENT)
            return prev
          }

        }, [])
        setDetail(jobs);
      })

    }

  }, [ljb_id])
  return (
  <div className="accordion-body p-3">{
    detail ?
    <>
    <div className='row'>
      <div className='col'>
        <h6>General Requirements</h6>
      </div>
      <div className='col' >
        <p dangerouslySetInnerHTML={{__html: detail.JOBDESC.replace(/(?:\r\n|\r|\n)/g, '<br>')}}></p>
      </div>
    </div>
    <div className='row border-top p-3'>
      <div className='col'>
        <h6>Requirements</h6>
      </div>
      <div className='col'>
      { detail.REQUIREMENT.map((valReq, index)=>(<p key={index}>{valReq}</p>))}
      <Link className="btn btn-ajsm px-5 mt-3" href={"/karir/consultant"} >{t("Career.apply")}</Link>
      </div>
    </div></>: <p>No Vacancy Available</p>
    }
  </div>
  )
}
