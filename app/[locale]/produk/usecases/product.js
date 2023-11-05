import { useState, useEffect } from 'react';
import { productItemService } from '../services';

function useProduct() {
  const [productItemsList, setProductsList] = useState([])
  const [productItem, setProducts] = useState({})

  const loadProductList = () => {
    productItemService.getProductListService().then((value)=>{
      setProductsList(value)
    })
  }
  const getProductByID = (id) =>{
    productItemService.getProductByIDService(id).then((value)=>{
      setProducts(value)
    })
  }
  return {
    loadProductList,
    getProductByID,
    productItemsList,
    productItem
  };
}
export {
  useProduct
}
