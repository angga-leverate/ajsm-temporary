
import Link from 'next/link'

import Image from "next/image";
import produkIndividu from "../../../../public/img/produk_individu.png";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper';
import { useTranslations } from 'next-intl';


export default function Page() {
  const t = useTranslations();
  const form = [
    [t('form.policyholder-change-form-individual'), 'PAS001_Form Perubahan Pemegang Polis_MSIG.pdf'],
    [t('form.policyholder-change-letter-of-attorney'),'PAS001A_Surat Kuasa Perubahan Pemegang Polis_MSIG.pdf' ],
    [t('form.minor-alteration-form'), 'PAS002_Form Perubahan Polis Minor_MSIG.pdf'],
    [t('form.coverage-alteration-form'),'PAS003_Form Perubahan Pertanggungan_MSIG.pdf' ],
    [t('form.reprint-policy-medical-card-form'),'PAS004_Form Cetak Ulang Polis _ Kartu Medical_MSIG.pdf' ],
    [t('form.personal-information-alteration-form'), 'PAS005_PAS005_Form FORMULIR PERUBAHAN INFORMASI NASABAH_MSIG.pdf'],
    [t('form.health-declaration-form'),'PAS006_Form Pernyataan Kesehatan_MSIG.pdf' ],
    [t('form.financial-transaction-form'), 'PAS007_Form Transaksi Finansial_MSIG.pdf'],
    [t('form.financial-transaction-form-spulbsim-'), 'PAS007A_Form Transaksi Finansial (khusus SPUL)_MSIG.pdf'],
    [t('form.policy-cancellation-freelook-form'),'PAS008_Form Pembatalan Polis_MSIG.pdf' ],
    [t('form.fatca-or-crs-declaration-form'), 'PAS009_Form Domisili Perpajakan (FATCA atau CRS)_MSIG.pdf'],
    [t('form.premium-refund-form'), 'PAS010_Formulir Permohonan Pengembalian Premi_MSIG.pdf'],
    [t('form.reinstatement-form'),'PAS011_Form Pemulihan Polis_MSIG.pdf' ],
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.download-transaction-form')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.download-transaction-form')}</h1>
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