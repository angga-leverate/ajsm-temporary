'use client'

import NavigasiLayanan from '../../components/Navigasi/NavigasiLayananWrapper'
import { useTranslations } from 'next-intl';
import { useUnitPrice } from './usecases';

export default function Page() {
  const t = useTranslations();
  const unitPrice = useUnitPrice()
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
                    <li aria-current="page" className="breadcrumb-item active">{t('Mainnav.unit-price')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('Mainnav.unit-price')}</h1>
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
                <div className="col-md-12 ">
                  <div className='overflow-auto'>
                  <table id="nab" className="table table-colored result-table">
                  <thead>
                  <tr>
                  <th rowSpan="2"><br />No<br /><br /></th>
                  <th rowSpan="2">{t('unit-price.name')}<br /><br /></th>
                  <th rowSpan="2">{t('unit-price.currency')}<br /><br /></th>
                  <th rowSpan="2">{t('unit-price.net-asset-value')}<br /><br /></th>
                  <th rowSpan="2">{t('unit-price.total-outstanding-units')}<br /><br /></th>
                  <th rowSpan="2">{t('unit-price.last-unit-price')}<br /><br /></th>
                  <th className="text-center" colSpan="6">{t('unit-price.last-unit-price')}</th>
                  </tr>
                  <tr>
                  <th>1 {t('unit-price.day')}</th>
                  <th>1 {t('unit-price.month')}</th>
                  <th>3 {t('unit-price.month')}</th>
                  <th>6 {t('unit-price.month')}</th>
                  <th>1 {t('unit-price.year')}</th>
                  <th>{t('unit-price.ytd')}</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    unitPrice.map((val, index)=>{
                      return (
                        <tr key={index}>

                        <td>{val.NO}</td>
                        <td>
                        <b>{val.NAMA_DANA}</b>
                        </td>
                        <td>{val.KURS}</td>
                        <td align="right">{val.NAB}</td>
                        <td align="right">{val.TOTAL_UNIT_BEREDAR}</td>
                        <td align="right">{val.HARGA_UNIT_TERAKHIR}<br />{val.TGL}</td>
                        <td align="right">{val.D1}</td>
                        <td align="right">{val.M1}</td>
                        <td align="right">{val.M3}</td>
                        <td align="right">{val.M6}</td>
                        <td align="right">{val.Y1}</td>
                        <td align="right">{val.YTD}</td>
                      </tr>
                      )
                    })
                  }

                  </tbody>
                </table>
                  </div>

                  <br />
                  Note : <br />
                  <font color="red">*</font> Unit Link Fund untuk produk Asuransi Unit Link "Magna Link"<br />
                  <font color="red">*</font> NAV yang di tampilkan adalah NAV Jual (Bid), untuk NAV Beli (Offer) adalah NAV Jual (Bid) + 5%<br />
                  &nbsp;&nbsp;Contoh :<br />
                  &nbsp;&nbsp;NAV Jual (Bid) adalah 1000 <br />
                  &nbsp;&nbsp;NAV beli (offer) adalah 1050
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
