import http from "@/app/[locale]/common/http";

const getService = async ()=>{
    try {
        const response = await http.get('/provinces')
        const data = response.data;
        return data
    } catch (error) {
        throw error
    }
}
export default {
    getService
}

