"use client";

import Link from "next/link";
import Image from "next/image";
import headerProduk from "../../../../public/img/produk.jpeg";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations();
  const product = [
    {
      key: 'traditional-insurance', value: [
        {"key":"smile-personal-accident", "label": "Smile Personal Accident"},
        {"key":"smile-medical", "label": "Smile Medical"},
        {"key":"smile-kid-insurance", "label": "Smile Kid Insurance"},
        {"key":"smile-income-protection-x-tra", "label": "Smile Income Protection X-Tra"},
        {"key":"smile-pro-infinite", "label": "Smile Pro Infinite"},
        {"key":"smile-berkat", "label": "Smile Berkat"},
        {"key":"smile-medika-ultimax", "label": "Smile Medika Ultimax (SMUAX)"},
      ]
    },{
        key: 'sharia-insurance', value: [
            {key: "smile-personal-accident-syariah", "label": "Smile Personal Accident Syariah"},
            {key: "smile-medical-syariah", "label": "Smile Medical Syariah"},
            {key: "sharia-smua-insurance", "label": "Sharia SMUA Insurance"},
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
                      {t('Mainnav.individual-insurance')}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.individual-insurance')}</h1>
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
                            <div className="card-header">{t('Mainnav.'+category.key)}</div>
                            <div className="card-body">
                                <h5 className="card-title">{produk.label}</h5>
                                <p>{t('Produk.'+produk.key+'.sub-desc')}</p>
                                <div className="btn-wrapper">
                                    
                                <Link href={"/produk/produk-individu/"+produk.key} className="btn btn-ajsm">
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
