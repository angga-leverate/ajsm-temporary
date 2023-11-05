'use client'
import { useState } from "react"
import NavigasiLayanan from '../../../components/Navigasi/NavigasiLayananWrapper'
import { useCorporatePartner } from "../usecases"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl";
import { rupiahFormat } from '@/common/util'

export default function Page() {
  const t = useTranslations();
  const params = useParams()
  const { getPartnerByID, partnerFee } = useCorporatePartner()
  useState(()=>{
    getPartnerByID(params.id)

  }, [])
  useState(()=>{
    console.log(partnerFee)

  }, [partnerFee])
return (
<div className='ajsm_page rekanan-rs'>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.home')}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.services')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.hospital-partners')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.hospital-partners')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card border-0 mt-0">
                {
                  partnerFee ?
                  <>
                <table width="100%" cellSpacing="0" cellPadding="0" border="0" >
                <tbody>
                <tr>
                <td colSpan="3"><h4 >Informasi Umum</h4></td>
                </tr>
                <tr>
                <td >Nama</td>
                <td >:</td>
                <td >{partnerFee.NAMA_RUMAH_SAKIT}</td>
                </tr>
                <tr>
                <td colSpan="3" align="center"><h4>&nbsp;</h4></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>{partnerFee.ALAMAT_RS}</td>
                </tr>
                <tr>
                <td>Kabupaten</td>
                <td>:</td>
                <td>{partnerFee.KABUPATEN}</td>
                </tr>
                <tr>
                <td>Kode Pos</td>
                <td>:</td>
                <td>{partnerFee.KODE_POS}</td>
                </tr>
                <tr>
                <td>Contact Person</td>
                <td>:</td>
                <td>{partnerFee.CONTACT_PERSON}</td>
                </tr>
                <tr>
                <td>Telepon</td>
                <td>:</td>
                <td>{partnerFee.TELEPON}</td>
                </tr>
                <tr>
                <td>No. Fax</td>
                <td>:</td>
                <td>{partnerFee.NO_FAX}</td>
                </tr>
                <tr>
                <td>Email</td>
                <td>:</td>
                <td>{partnerFee.EMAIL}</td>
                </tr>
                </tbody>
                </table>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" className="mt-3">
                  <tbody><tr>
                  <td colSpan="3" align="center"><h6 >Harga Rawat Inap</h6></td>
                  <td colSpan="3" align="center"><h6 >Harga Rawat Bersalin Normal</h6></td>
                  <td colSpan="3" align="center"><h6 >Harga Rawat Bersalin Cesar</h6></td>
                  </tr>
                  <tr>
                  <td width="15%">Kelas I</td><td width="2%">:</td><td width="16%">Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_1)} </td>
                  <td width="15%">Kelas I</td><td width="2%">:</td><td width="16%">Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_1)}</td>
                  <td width="15%">Kelas I</td><td width="2%">:</td><td width="16%">Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_1)}</td>
                  </tr>
                  <tr>
                  <td>Kelas II</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_2)}</td>
                  <td>Kelas II</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_2)}</td>
                  <td>Kelas II</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_2)}</td>
                  </tr>
                  <tr>
                  <td>Kelas III</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_3)}</td>
                  <td>Kelas III</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_3)}</td>
                  <td>Kelas III</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_3)}</td>
                  </tr>
                  <tr>
                  <td>Kelas Utama</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_UTAMA)}</td>
                  <td>Kelas Utama</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_UTAMA)}</td>
                  <td>Kelas Utama</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_UTAMA)}</td>
                  </tr>
                  <tr>
                  <td>Kelas VIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_VIP)}</td>
                  <td>Kelas VIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_VIP)}</td>
                  <td>Kelas VIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_VIP)}</td>
                  </tr>
                  <tr>
                  <td>Kelas VVIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_INAP_KELAS_VVIP)}</td>
                  <td>Kelas VVIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_NORMAL_KELAS_VVIP)}</td>
                  <td>Kelas VVIP</td><td>:</td><td>Rp{rupiahFormat(partnerFee.RAWAT_BERSALIN_CAESAR_KELAS_VVIP)}</td>
                  </tr>
                  </tbody></table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" className="mt-5">
                  <tbody><tr>
                  <td colspan="3" align="center"><h6 >Biaya Dokter</h6></td>
                  <td colspan="3" align="center"><h6 >Fasilitas</h6></td>
                  </tr>
                  <tr>
                  <td width="25%">Dokter Umum</td><td width="2%">:</td><td width="33%">Rp{rupiahFormat(partnerFee.BIAYA_DOKTER_UMUM)}</td>
                  <td width="25%">Rawat Inap</td><td width="2%">:</td><td width="33%">{partnerFee.FASILITAS_RI ==='Yes'?'YA': 'TIDAK'}</td>
                  </tr>
                  <tr>
                  <td colspan="6">&nbsp;</td>
                  </tr>
                  <tr>
                  <td>Dokter Spesialis</td><td>:</td><td>Rp{rupiahFormat(partnerFee.BIAYA_DOKTER_SPESIALIS)}</td>
                  <td>Rawat Jalan</td><td>:</td><td>{partnerFee.FASILITAS_RJ ==='Yes'?'YA': 'TIDAK'}</td>
                  </tr>
                  <tr>
                  <td colspan="6">&nbsp;</td>
                  </tr>
                  <tr>
                  <td colspan="3">&nbsp;</td>
                  <td>Rawat Bersalin</td><td>:</td><td>{partnerFee.FASILITAS_RB ==='Yes'?'YA': 'TIDAK'}</td>
                  </tr>
                  <tr>
                  <td colspan="6">&nbsp;</td>
                  </tr>
                  <tr>
                  <td colspan="3">&nbsp;</td>
                  <td>Rawat Gigi</td><td>:</td><td>{partnerFee.FASILITAS_RG ==='Yes'?'YA': 'TIDAK'}</td>
                  </tr>
                  <tr>
                  <td colspan="6">&nbsp;</td>
                  </tr>
                  </tbody></table>
                </>
                : <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>}
              </div>
            </div>
            <NavigasiLayanan/>
          </div>
        </div>
      </section>
    </div>
)
}
