
import { useTranslations } from 'next-intl';
import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'

export default function Page() {
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
                      <a href="#">{t('Mainnav.about-us')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.save-series-interest-rates')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.save-series-interest-rates')}</h1>
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
                  <p>{t('save-series-interest-rates.desc')}</p>
                  <b>{t('save-series-interest-rates.period')} : 01 September 2023 - 30 September 2023</b>
                  <table className="table table-colored result-table mt-3">
                  <thead class="">
                  <tr>
                  <th>{t('save-series-interest-rates.product')}</th>
                  <th>IDR (%)</th>
                  <th>USD (%)</th>
                  </tr>
                  </thead>
                  <tbody id="tbhasil"><tr><td>POWER SAVE</td><td>2.50</td><td>0.25</td></tr><tr><td>POWER SAVE SYARIAH</td><td>2.50</td><td>0.00</td></tr><tr><td>SIMAS PRIMA</td><td>2.50</td><td>0.25</td></tr><tr><td>SIMAS PRIMA SYARIAH</td><td>2.50</td><td>0.00</td></tr></tbody>
                  </table>
                  <a href="/files/Save_Series.pdf"  className="btn btn-ajsm-dark my-3" target='_blank'>{t('save-series-interest-rates.download')}</a>
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