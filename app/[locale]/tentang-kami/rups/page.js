
import Link from 'next/link'
import Image from "next/image";
import produkIndividu from "../../../../public/img/produk_individu.png";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  const rups = [
    {
        'date': 'RUPS 22 Agustus 2019',
        'link': [
            'Pengumuman RUPS 22 Aug',
            'Pemanggilan RUPS 22 Aug',
            'Agenda RUPS 22 Aug',
            'Kandidat Dewan Komisaris',
            'Pemberitahuan Ringkasan Risalah RUPS 22 Aug'
        ]
    },
    {
        'date': 'RUPS 22 Oktober 2019',
        'link': [
            'Pengumuman RUPS 22 Oct',
            'Pembatalan RUPS 22 Oct'
        ]
    },
    {
        'date': 'RUPS Tahunan 2020',
        'link': [
            'Pengumuman RUPST 2020',
            'Pengumuman Penundaan RUPS 2020',
            'Pemanggilan RUPS 2020',
            'Surat Kuasa dan Lembar Pertanyaan RUPST 2020',
            'Materi Rapat RUPST 2020',
            'Profil Kandidate Direktur/ anggota Dewan Komisaris',
            'Risalah RUPS 2020'
        ]
    },
    {
        'date': 'RUPS Tahunan 2021',
        'link': [
            'Pengumuman RUPST 2021',
            'Pemanggilan RUPS 2021',
            'Surat Kuasa dan lembar pertanyaan RUPST 2021',
            'Materi Rapat RUPST 2021',
            'Profile Kandidat Direktur/anggota Dewan Komisaris',
            'Surat Pernyataan Kesehatan',
            'Risalah RUPS 2021'
        ]
    },
    {
        'date': 'RUPS Tahunan 2022',
        'link': [
            'Pengumuman RUPS 2022',
            'Pemanggilan RUPS 2022',
            'Lembar Pertanyaan',
            'Materi RUPST 22 Juni 2022',
            'Ringkasan Risalah RUPST 22 Juni 2022',
            'Surat Kuasa RUPST 22 Juni 2022',
            'Tata Tertib RUPST 22 Juni 2022'
        ]
    },
    {
        'date': 'RUPSLB 22 Maret 2022',
        'link': [
            'Pengumuman RUPSLB 22 Maret 2022',
            'Pemanggilan RUPSLB 22 Maret 2022',
            'Surat Kuasa dan lembar pertanyaan RUPSLB 22 Maret 2022',
            'Materi RUPSLB 22 Maret 2022',
            'Profil Calon Wakil Presiden Direktur dan Direktur RUPSLB 22 Maret 2022',
            'Risalah Rapat RUPSLB 22 Maret 2022'
        ]
    },
    {
        'date': 'RUPSLB 22 November 2022',
        'link': [
            'Pengumuman RUPSLB 22 November 2022',
            'Pemanggilan RUPSLB 22 November 2022',
            'Form Deklarasi Kesehatan',
            'Lembar Pertanyaan',
            'Profil Kandidat BOC BOD',
            'Surat Kuasa RUPSLB 22 Nov 22',
            'Materi RUPSLB 22 November 2022',
            'Tata Tertib RUPSLB 22 November 2022',
            'Ringkasan Risalah RUPSLB 22 November 2022'
        ]
    },
    {
        'date': 'RUPS Tahunan dan RUPS Luar Biasa 27 Juni 2023',
        'link': [
            'Pengumuman RUPST dan RUPSLB 27 Juni 2023',
            'Pemanggilan RUPST dan RUPSLB 27 Juni 2023',
            'Profil Kandidat BOC-BOD-DPS',
            'Surat Kuasa RUPST dan RUPSLB 27 Juni 2023',
            'Materi RUPST dan RUPSLB 27 Juni 2023',
            'Tata Tertib RUPST dan RUPSLB 27 Juni 2023',
            'Ringkasan Risalah RUPST 27 Juni 2023',
            'Ringkasan Risalah RUPSLB 27 Juni 2023'
        ]
    }
  ]
  return (
    <div className='ajsm_page tentang_kami'>
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
                    <a href="#">{t('Mainnav.about-us')}</a>
                    </li>
                    <li className="breadcrumb-item">
                    <a href="#">{t('Mainnav.investor-information')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active"><a href="#">{t('investor-information.rups')}</a></li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('investor-information.rups')}</h1>
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
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                  
                  <div className='d-flex flex-wrap'>
                    {
                        rups.map((value)=>{
                            return (
                                <div  class="col-md-6 mb-5">         
                                    <h5 className='h5'>{value.date}</h5>
                                    <ul>
                                        {
                                            value.link.map((link)=>{
                                                return (<li>
                                                    <Link href={`/files/rups/${link}.pdf`} class="btn-lg-link" target="_blank">{link}</Link>
                                                </li>)
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                  </div>
                  </div>
                </div>
              </div>
            </div> 
            <NavigasiLayanan/>                                                                              
          </div>
        </div>
      </section>
    </div>
  )
}