import { useState, useEffect } from 'react';
import { productCategory } from '../services';

function useProductCategory() {
  const [productCategories, setProductCategoryList] = useState([])
  useEffect(() => {
    productCategory.getService().then((value)=>{
      setProductCategoryList(value)
    })

  }, []);

  return {
    productCategories
  };
}
export {
  useProductCategory
}
