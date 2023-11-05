import { useEffect, useState } from 'react';
import { salesOfficeService } from '../services';
import _ from 'lodash';

function useSalesOffice() {
  const [salesOfficeList, setSalesOfficeList] = useState([])

  const loadSalesOfficeList = () => {
    salesOfficeService.getService().then((value)=>{
      setSalesOfficeList(value)
    })
  }
  const area = _.uniq(salesOfficeList.map((val)=>{
    return val.officeArea
  }));
  return {
    loadSalesOfficeList,
    salesOfficeList,
    area
  };
}
export {
  useSalesOffice
}
