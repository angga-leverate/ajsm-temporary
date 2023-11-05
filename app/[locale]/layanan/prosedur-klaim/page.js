
import Link from 'next/link'
import Image from "next/image";
import { useLocale } from 'next-intl';
import perorangan1 from "../../../../public/img/perorangan1.jpeg";
import perorangan2 from "../../../../public/img/perorangan2.jpeg";
import perorangan3 from "../../../../public/img/perorangan3.jpeg";
import perorangan4 from "../../../../public/img/perorangan4.jpeg";
import perorangan5 from "../../../../public/img/perorangan5.jpeg";
import perusahaan1 from "../../../../public/img/perusahaan1.jpg";
import perusahaan2 from "../../../../public/img/perusahaan2.jpeg";
import perusahaan3 from "../../../../public/img/perusahaan3.jpg";
import reimburseID from "../../../../public/img/reimburse_id.jpg";
import reimburseEN from "../../../../public/img/reimburse_en.jpg";
import bayarpremiID from "../../../../public/img/bayarpremi_id.jpg";
import bayarpremiEN from "../../../../public/img/bayarpremi_En.jpg";
import klaimpolisID from "../../../../public/img/klaimpolis_Id.png";
import klaimpolisEN from "../../../../public/img/klaimpolis_En.png";
import cashlessdatangID from "../../../../public/img/cashless-daftarID.jpg";
import cashlessdatangEN from "../../../../public/img/cashless-daftarEN.jpg";
import cashlesspulangID from "../../../../public/img/cashless-pulangID.jpg";
import cashlesspulangEN from "../../../../public/img/cashless-pulangEN.jpg";
import companycashlessdatangID from "../../../../public/img/companyregis_Id.jpg";
import companycashlessdatangEN from "../../../../public/img/companyregis_En.jpg";
import companycashlesspulangID from "../../../../public/img/companypulang_Id.jpg";
import companycashlesspulangEN from "../../../../public/img/companypulang_En.jpg";
import companyreimburseID from "../../../../public/img/companyreimburse_Id.jpg";
import companyreimburseEN from "../../../../public/img/companyreimburse_En.jpg";
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper';
import { useTranslations } from 'next-intl';
export default function Page() {
  const locale = useLocale();
  const t = useTranslations();
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.claim-procedure')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.claim-procedure')}</h1>
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
                <div className="row ajsm_laporan">
                  <div className="col-md-12">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab-main" role="tablist">
                      <button class="nav-link active" id="nav-ind" data-bs-toggle="tab" data-bs-target="#nav-ind-tab" type="button" role="tab" aria-controls="nav-ind" aria-selected="true">{t('claim-procedure.individual')}</button>
                      <button class="nav-link" id="corp-tab" data-bs-toggle="tab" data-bs-target="#corp-tab-pane" type="button" role="tab" aria-controls="corp-pane" aria-selected="false">{t('claim-procedure.company')}</button>
                    </div>
                  </nav>
                  <div class="tab-content border border-top-0 pt-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="nav-ind-tab" role="tabpanel" aria-labelledby="nav-ind-pane" tabIndex="0">
                      <ul class="nav nav-pills mb-3 pt-3 px-4 nav-fill" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.registration')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.discharge')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.reimbursement')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.manfaat')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-last-tab" data-bs-toggle="pill" data-bs-target="#pills-last" type="button" role="tab" aria-controls="pills-last" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.panduan')}} /></button>
                        </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <Image src={locale==='id' ? cashlessdatangID:cashlessdatangEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <Image src={locale==='id' ? cashlesspulangID:cashlesspulangEN} className="img-fluid mobile d-block mx-auto" alt="AJSM" />    
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                          <Image src={locale==='id' ? reimburseID:reimburseEN} className="img-fluid mobile d-block mx-auto" alt="AJSM" />
                        </div>
                        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                          <Image src={locale==='id' ? klaimpolisID:klaimpolisEN} className="img-fluid mobile d-block mx-auto" alt="AJSM" />                      
                        </div>
                        <div class="tab-pane fade" id="pills-last" role="tabpanel" aria-labelledby="pills-last-tab" tabIndex="0">
                          <Image src={locale==='id' ? bayarpremiID:bayarpremiEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />                      
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="corp-tab-pane" role="tabpanel" aria-labelledby="corp-tab" tabIndex="0">
                      <ul class="nav nav-pills mb-3 pt-3 px-4 nav-fill" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home-tab-1" data-bs-toggle="pill" data-bs-target="#pills-home-1" type="button" role="tab" aria-controls="pills-home-1" aria-selected="true"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.registration')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab-1" data-bs-toggle="pill" data-bs-target="#pills-profile-1" type="button" role="tab" aria-controls="pills-profile-1" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.discharge')}} /></button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-contact-tab-1" data-bs-toggle="pill" data-bs-target="#pills-contact-1" type="button" role="tab" aria-controls="pills-contact-1" aria-selected="false"><div dangerouslySetInnerHTML={{__html: t.raw('claim-procedure.reimbursement')}} /></button>
                        </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home-1" role="tabpanel" aria-labelledby="pills-home-tab-1" tabIndex="0">
                        <Image src={locale==='id' ? companycashlessdatangID:companycashlessdatangEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />
                        </div>
                        <div class="tab-pane fade" id="pills-profile-1" role="tabpanel" aria-labelledby="pills-profile-tab-1" tabIndex="0">
                          <Image src={locale==='id' ? companycashlesspulangID:companycashlesspulangEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />
                        </div>
                        <div class="tab-pane fade" id="pills-contact-1" role="tabpanel" aria-labelledby="pills-contact-tab-1" tabIndex="0">
                        <Image src={locale==='id' ? companyreimburseID:companyreimburseEN} className="img-fluid d-block mobile mx-auto" alt="AJSM" />
                        </div>
                      </div>
                    </div>
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