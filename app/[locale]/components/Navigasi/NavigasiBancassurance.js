'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';

export default function Navigasi() {
    const pathname = usePathname();
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-sinarmas">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-sinarmas" aria-expanded="false" aria-controls="panelsStayOpen-sinarmas">
                    Bank Sinarmas
                  </button>
                </h2>
                <div id="panelsStayOpen-sinarmas" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-sinarmas">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <Link 
                        className={pathname == "/produk/produk-bancassurance/bank-sinarmas/smile-medical-as-charged" ? "active" : ""}
                        href="/produk/produk-bancassurance/bank-sinarmas/smile-medical-as-charged">
                        Smile Medical -as charged
                      </Link>                                                                                                                                                                                                                                              
                    </li>
                    <li className="list-group-item">
                      <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/simas-kid-insurance" ? "active" : ""}
                       href="/produk/produk-bancassurance/bank-sinarmas/simas-kid-insurance">
                              Simas Kid insurance
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/simas-kid-insurance" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/simas-kid-insurance-syariah">
                              Simas Kid Insurance Syariah
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/simas-legacy-plan" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/simas-legacy-plan">
                              Simas Legacy Plan
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/smile-dana-sejahtera" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/smile-dana-sejahtera">
                              Smile Dana Sejahtera
                              </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/simas-income-protection" ? "active" : ""}
                       href="/produk/produk-bancassurance/bank-sinarmas/simas-income-protection">
                              Simas Income Protection
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/sinarmas-maxi-life" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/sinarmas-maxi-life">
                              Sinarmas Maxi Life
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/sinarmas-optima-plus" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/sinarmas-optima-plus">
                              Sinarmas Optima Plus 
                              </Link>
                    </li>
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-sinarmas/sinarmas-pension-plan" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-sinarmas/sinarmas-pension-plan">
                              Sinarmas Pension Plan
                              </Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-bjb">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-bjb" aria-expanded="false" aria-controls="panelsStayOpen-bjb">
                    Bank BJB
                  </button>
                </h2>
                <div id="panelsStayOpen-bjb" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-bjb">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                    <Link className={pathname == "/produk/produk-bancassurance/bank-bjb/smile-life-care-plus" ? "active" : ""}
                     href="/produk/produk-bancassurance/bank-bjb/smile-life-care-plus">
                              Smile Life Care Plus
                              </Link>                                                                                                                                                                                                                                              
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-btn">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-btn" aria-expanded="false" aria-controls="panelsStayOpen-btn">
                    Bank BTN
                  </button>
                </h2>
                <div id="panelsStayOpen-btn" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-btn">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">    
                      <Link className={pathname == "/produk/produk-bancassurance/bank-btn/smile-life-guard" ? "active" : ""} href="/produk/produk-bancassurance/bank-btn/smile-life-guard">
                      Smile Life Guard
                      </Link>                                                                                                                                                                                                                                       
                    </li>
                    <li className="list-group-item">    
                      <Link
                      className={pathname == "/produk/produk-bancassurance/bank-btn/smile-flexi-optima-link" ? "active" : ""}
                      href="/produk/produk-bancassurance/bank-btn/smile-flexi-optima-link">
                              Smile Flexi Optima Link
                              </Link>                                                                                                                                                                                                                                      
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-bukopin">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-bukopin" aria-expanded="false" aria-controls="panelsStayOpen-bukopin">
                  Bank Bukopin
                  </button>
                </h2>
                <div id="panelsStayOpen-bukopin" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-bukopin">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">    
                      <Link className={pathname == "/produk/produk-bancassurance/bank-bukopin/smart-plan-protection" ? "active" : ""} href="/produk/produk-bancassurance/bank-bukopin/smart-plan-protection">
                      Smile Plan Protection
                      </Link>                                                                                                                                                                                                                                       
                    </li>
                    <li className="list-group-item">    
                      <Link
                      className={pathname == "/produk/produk-bancassurance/bank-bukopin/smart-life-protection" ? "active" : ""}
                      href="/produk/produk-bancassurance/bank-bukopin/smart-life-protection">
                              Smile Life Protection
                              </Link>                                                                                                                                                                                                                                      
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpenHeader-btn-syariah">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-btn-syariah" aria-expanded="false" aria-controls="panelsStayOpen-btn-syariah">
                  Bank BTN Syariah
                  </button>
                </h2>
                <div id="panelsStayOpen-btn-syariah" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-btn-syariah">
                  <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">    
                      <Link className={pathname == "/produk/produk-bancassurance/bank-btn-syariah/smart-life-syariah" ? "active" : ""} href="/produk/produk-bancassurance/bank-btn-syariah/smart-life-syariah">
                      Smart Life Syariah
                      </Link>                                                                                                                                                                                                                                       
                    </li>
                    
                  </ul>
                  </div>
                </div>
              </div>
            </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
