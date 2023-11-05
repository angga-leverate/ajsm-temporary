import http from "@/app/[locale]/common/http";

const getProductListService = async ()=>{
    try {
        const response = await http.get('/product-items')
        const data = response.data;
        return data
    } catch (error) {
        throw error
    }
}
const getProductByIDService = async (id)=>{
  try {
      const response = await http.get(`/product-items/${id}`)
      const data = response.data;
      return data
  } catch (error) {
      throw error
  }
}
export default {
  getProductListService,
  getProductByIDService
}

