import { useState, useEffect } from 'react';
import { provinces } from '../services';

function useProvince() {
  const [leadsResidentAreaList, setResidentAreaList] = useState([])

  useEffect(() => {
    provinces.getService().then((value)=>{
      setResidentAreaList(value)
    })
  }, []);

  return leadsResidentAreaList;
}
export {
  useProvince
}
