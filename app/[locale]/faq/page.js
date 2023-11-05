import { useTranslations,  } from "next-intl";

import Link from "next/link";

export default function Page() {
  const t = useTranslations("faq-item");
  const h = useTranslations();
  const faqList = {
    "claim": 5,
    "service": 5,
    "premi": 5,
    "vega": 4
  };
  return (
    <div className="ajsm_page privacy-policy">
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4 mb-5">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{h("Mainnav.home")}</a>
                    </li>
                    <li className="breadcrumb-item">
                      {h("Footer.FAQ")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
				        {h("Footer.FAQ")}
                </h1>
                <h1 className="page-header-ui-title mb-3">
				        
                </h1>
                {
                  Object.keys(faqList).map((value)=>{
                    let itemList = [];
                    
                    for( let i = 0; i < faqList[value]; i++){
                      itemList.push(
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t(`${value}.item${(i+1)}.question`)}
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                            <div dangerouslySetInnerHTML={{__html: t.raw(`${value}.item${(i+1)}.answer`)}} />
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div>
                        <h4 className="h4">{t(`${value}.title`)}</h4>
                        <div class="accordion mb-5 pb-5" id="accordionPanelsStayOpenExample">
                          {itemList.map(itemList => itemList)}
                        </div>
                      </div>
                    )
                  })
                }
              </header>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
