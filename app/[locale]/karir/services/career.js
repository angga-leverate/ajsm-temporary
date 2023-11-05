import {hcdAPI} from "@/app/[locale]/common/http";
import { memoize } from "lodash";

const _getPilarService = memoize(
  async ()=>{
    const response = await hcdAPI.get('/Pilar')
    const data = response.data;
    return data
  }
)
const getPilarService = _getPilarService

const _getDivisiService = memoize(
  async (pilar)=>{
    const response = await hcdAPI.get('/Division', {
      params: {
        pilar
      }
    })
    const data = response.data;
    return data
  }
)
const getDivisiService = _getDivisiService

const _getJabatanService = memoize(
  async (ldi_id)=>{
    const response = await hcdAPI.get('/Jabatan', {
      params: {
        ldi_id
      }
    })
    const data = response.data;
    return data
  }
)
const getJabatanService = _getJabatanService

const _getJabatanDetailService = memoize(
  async (ljb_id)=>{
    const response = await hcdAPI.get('/JabatanDetail', {
      params: {
        ljb_id
      }
    })
    const data = response.data;
    return data
  }
)
const getJabatanDetailService = _getJabatanDetailService
export default {
  getPilarService,
  getDivisiService,
  getJabatanService,
  getJabatanDetailService
}

