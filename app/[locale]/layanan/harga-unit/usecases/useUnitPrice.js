import { useState, useEffect } from 'react';
import { unitPriceService } from '../services';

function useUnitPrice() {
  const [unitPriceList, setUnitPriceList] = useState([])

  useEffect(() => {
    unitPriceService.getService().then((value)=>{
      setUnitPriceList(value)
    })
  }, []);

  return unitPriceList;
}
export default useUnitPrice
