import { useState, useEffect } from 'react';
import { leadsSolutionTypeService } from '../services';

function useProductNeed() {
  const [productNeedList, setProductNeedList] = useState([])

  useEffect(() => {
    leadsSolutionTypeService.getService().then((value)=>{
      setProductNeedList(value)
    })
  }, []);

  return productNeedList;
}
export {
  useProductNeed
}
