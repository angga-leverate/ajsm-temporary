import http from "@/app/[locale]/common/http";

const postService = async (payload)=>{
    try {
        const response = await http.post('/leads', payload)
        const data = response.data;
        return data
    } catch (error) {
        throw new error
    }
}
export default {
    postService
}

