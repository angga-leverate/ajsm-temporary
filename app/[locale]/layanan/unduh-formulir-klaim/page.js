
import Link from 'next/link'
import Image from "next/image";
import produkIndividu from "../../../../public/img/produk_individu.png";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  const form = [
    [t('form.attending-physician-statement'), 'Form Surat keterangan dokter_MSIG.pdf'],
    [t('form.death-benefit-claim-form'), 'Form Claim Manfaat Meninggal Dunia_MSIG.pdf'],
    [t('form.health-critical-illness-and-waiver-of-premium-claim-for'), 'Form Claim Kesehatan, penyakit kritis, dan Pembebasan premi_MSIG.pdf'],
    [t('form.health-claim-form-for-corporate-client'), 'Form Claim Nasabah Korporasi_MSIG.pdf'],
    [t('form.pre-authorization-form-japan'), 'Formulir Pra-Otorisasi Rumah Sakit_ Japan Overseas Treatment.pdf'],
    [t('form.consent-form-japan'), 'Surat Kuasa (Consent Forms) -Japan Overseas Treatment.pdf'],
    [t('form.pre-authorization-form'), 'Formulir Pra-Otorisasi Rumah Sakit.pdf'],
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
                      <a href="#">{t('Mainnav.services')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.download-claim-form')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.download-claim-form')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              {
                form.map((value)=>{
                  return (
                    <div className="row ajsm_laporan">
                      <div className="col-12 ">
                        <div className="card text-center mb-5">
                          <div className="card-body">
                            <h4>{value[0]}</h4>
                            <Link href={`/files/form/${value[1]}`} className="btn btn-ajsm-dark" download>
                              {t('form.download-pdf')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              
              
            </div> 
            <NavigasiLayanan/>                                                                               
          </div>
        </div>
      </section>
    </div>
  )
}