import http from "@/app/[locale]/common/http";

const getSearchService = async (qs)=>{
  console.log(qs)
    try {
        const response = await http.get('/product-items', {
          params: {
            'titleID.contains': qs,
            'descriptionID.contains': qs,
            'descriptionEN.contains': qs
          }
        })
        const data = response.data;
        return data
    } catch (error) {
        throw error
    }
}

export default {
  getSearchService
}

