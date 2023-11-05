import {corporateAPI} from "@/app/[locale]/common/http";

const getService = async ()=>{
    try {
        const response = await corporateAPI.get('/rekanan/getKota')
        const data = response.data.result.kota;
        return data
    } catch (error) {
        throw error
    }
}
export default {
    getService
}

