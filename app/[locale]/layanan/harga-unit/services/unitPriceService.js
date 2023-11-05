import {corporateAPI} from "@/app/[locale]/common/http";

const getService = async ()=>{
    try {
        const response = await corporateAPI.get('/getNav')
        const data = response.data.result.nav;
        return data
    } catch (error) {
        throw error
    }
}
export default {
    getService
}

