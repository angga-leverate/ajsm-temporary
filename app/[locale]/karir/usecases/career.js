import { useEffect, useState } from 'react';
import { careerService } from '../services';

function useCareer() {
  const [pilarList, setPilarList] = useState([])
  const [divisiList, setDivisiList] = useState([])
  const [division, setDivision] = useState()
  const [jabatanList, setJabatanList] = useState([])

  const fetchPilar = () => {
    careerService.getPilarService().then((value)=>{
      setPilarList(value.result.list_pilar.reduce((prev, valuePilar)=>{
        return [...prev, valuePilar.PILAR]
      }, []))
    })
  }

  const fetchDivisi = async (pilar) => {
    careerService.getDivisiService(pilar).then((values)=>{
      values.result.division.map((val)=>{
        setDivisiList(list=>[...list, val])
      })
    })
  }
  const currentDivision = divisiList.find((val)=>val.LDI_ID===division)

  const fetchJabatan = (ldi_id) => {
    careerService.getJabatanService(ldi_id).then((value)=>{
      setJabatanList(value.result.division)
    })
  }

  const fetchDetail = async (ljb_id) => {
    return careerService.getJabatanDetailService(ljb_id)
  }
  useEffect(()=>{
    fetchPilar()
  }, [])

  useEffect(()=>{
    pilarList.forEach(async(value)=>{
      await fetchDivisi(value)
    })
  }, [pilarList])

  useEffect(()=>{
    setJabatanList([])
    fetchJabatan(division)
  }, [division])


  return {
    divisiList,
    division,
    setDivision,
    setDivisiList,
    currentDivision,
    jabatanList,
    fetchDetail
  };
}
export {
  useCareer
}
