"use client";

import Link from "next/link";
import Image from "next/image";
import headerProduk from "../../../../public/img/produk.jpeg";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations();
  const product = [
    {
      title: 'Bank Sinarmas',key:"bank-sinarmas", value: [
        {"key":"smile-medical-as-charged","label":"Smile Medical-As Charged"},
        {"key":"simas-kid-insurance", "label": "Smile Kid Insurance"},
        {"key":"simas-kid-insurance-syariah", "label": "Smile Kid Insurance"},
        {"key":"simas-legacy-plan", "label": "Smile Income Protection X-Tra"},
        {"key":"smile-dana-sejahtera", "label": "Smile Pro Infinite"},
        {"key":"simas-income-protection", "label": "Smile Berkat"},
        {"key":"sinarmas-optima-plus", "label": "Smile Medika Ultimax (SMUAX)"},
        {"key":"sinarmas-pension-plan", "label": "Smile Medika Ultimax (SMUAX)"},
      ]
    },{
      title: 'Bank BJB',key:"bank-bjb", value: [
        {key: "smile-life-care-plus", "label": "Smile Personal Accident Syariah"},
      ]
    },
    {
      title: 'Bank BTN',key:"bank-btn", value: [
        {key: "smile-flexi-optima-link", "label": "Smile Personal Accident Syariah"},
        {key: "smile-life-guard", "label": "Smile Medical Syariah"},
      ]
    },
    {
      title: 'Bank Bukopin',key:"bank-bukopin", value: [
        {key: "smart-life-protection", "label": "Smile Personal Accident Syariah"},
        {key: "smart-plan-protection", "label": "Smile Medical Syariah"},
      ]
    },
    {
      title: 'Bank BTN Syariah',key:"bank-btn-syariah", value: [
        {key: "smart-life-syariah", "label": "Smile Personal Accident Syariah"},
      ]
    }
  ];
  return (
    
    <div className="ajsm_page produk_individu">
      <section className="header">
        <Image src={headerProduk} alt="AJSM" className="img-fluid" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('Mainnav.product')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      {t('Mainnav.bancassurance')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.bancassurance')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
        <div className="row">
          {product.map((category) => {
            
            const item = category.value.map((produk)=>{
                return (
                    <div className="col-12 col-md-4 product-card">
                        <div className="card-body pt-1 mb-4">
                            <div className="card text-center">
                            <div className="card-header">{category.title}</div>
                            <div className="card-body">
                              
                            
                                <h5 className="card-title">{t('Produk.'+produk.key+'.title')}</h5>
                                <p>{t('Produk.'+produk.key+'.sub-desc')}</p>
                                <div className="btn-wrapper">
                                    
                                <Link href={"/produk/produk-bancassurance/"+category.key+"/"+produk.key} className="btn btn-ajsm">
                                {t('Mainnav.see-more')}
                                </Link>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                item
            )
            
          }
          )}
          </div>
        </div>
      </section>
    </div>
  );
}
