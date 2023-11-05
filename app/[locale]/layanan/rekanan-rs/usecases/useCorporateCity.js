import { useState, useEffect } from 'react';
import { cityService } from '../services';

function useCorporateCity() {
  const [cityList, setCityList] = useState([])

  useEffect(() => {
    cityService.getService().then((value)=>{
      setCityList(value)
    })
  }, []);

  return cityList;
}
export default useCorporateCity
