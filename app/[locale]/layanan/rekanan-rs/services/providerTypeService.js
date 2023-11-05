import {corporateAPI} from "@/app/[locale]/common/http";

const getService = async ()=>{
    try {
        const response = await corporateAPI.get('/rekanan/getProvidertype')
        const data = response.data.result.type;
        return data
    } catch (error) {
        throw error
    }
}
export default {
    getService
}

