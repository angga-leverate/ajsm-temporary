import {corporateAPI} from "@/app/[locale]/common/http";

const getService = async ({
  nama,
  kota,
  mcu,
  type
})=>{
    try {
        const response = await corporateAPI.get('/rekanan/getSearch', {
          params: {
            nama,
            kota,
            mcu,
            type
          }
        })
        const data = response.data.result.type;
        return data
    } catch (error) {
        throw error
    }
}
const getByIDService = async(rsid)=>{
  try {
    const response = await corporateAPI.get('/rekanan/getBiayaProvider', {
      params: {
        rsid
      }
    })
    const data = response.data.result.biaya[0];
    return data
} catch (error) {
    throw error
}
}
export default {
    getService,
    getByIDService
}

