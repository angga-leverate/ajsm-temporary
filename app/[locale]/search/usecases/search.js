import { useState } from 'react';
import { productItemService } from '../services';

function useSearch() {
  const [productItemsList, setProductsList] = useState([])

  const loadProductList = (qs) => {
    productItemService.getSearchService(qs).then((value)=>{
      setProductsList(value)
    })
  }

  return {
    loadProductList,
    productItemsList,
    setProductsList
  };
}
export {
  useSearch
}
