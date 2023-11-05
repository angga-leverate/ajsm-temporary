import { useTranslations,  } from "next-intl";

import Link from "next/link";

export default function Page() {
  const t = useTranslations();
  return (
    <div className="ajsm_page tata_kelola">
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">{t("Mainnav.home")}</a>
                    </li>
                    <li className="breadcrumb-item">
                      {t("Footer.Terms-of-Condition")}
                    </li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">
                  {t("Footer.Terms-of-Condition")}
                </h1>
				
                <h3>{t('terms-condition.sub')}</h3>
				<div dangerouslySetInnerHTML={{__html: t.raw(`terms-condition.content`)}} />
               
              </header>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
