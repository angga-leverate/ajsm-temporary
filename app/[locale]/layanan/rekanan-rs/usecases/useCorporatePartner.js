import { useState } from 'react';
import { partnerService } from '../services';
import _ from 'lodash';

function useCorporatePartner(payload={}) {
  const [partnerList, setPartnerList] = useState([])
  const [partnerFee, setPartnerFee] = useState()

  const resetData = () => {
    setPartnerList([])
  }
  const fetchData = async() => {
    const mapPayload = {
      nama: payload.name,
      kota: payload.city,
      mcu: payload.category,
      type: payload.providerType
    };
    const data =  _.omitBy(mapPayload, (v) => _.isUndefined(v) || _.isNull(v) || v === '');;
    await partnerService.getService(data).then((value)=>{
      setPartnerList(value)
    })
  }

  const getPartnerByID = async(id)=>{
    await partnerService.getByIDService(id).then((value)=>{
      console.log(value)
      setPartnerFee(value)
    })
  }
  return {
    partnerList,
    partnerFee,
    getPartnerByID,
    fetchData,
    resetData
  };
}
export default useCorporatePartner

