'use client'

import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';
import { useTranslations } from 'next-intl';

export default function Navigasi() {
    const pathname = usePathname();
    const t = useTranslations("Mainnav");
  return (
    <>
      <div className="col-12 col-md-4 ajsm_navigasi">
        <div className="z-1 position-sticky sticky-top">
          <div className="ajsm_navigasi">
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link
                    href="/layanan/layanan-calon-nasabah"
                    className={pathname == "/layanan/layanan-calon-nasabah" ? "active" : ""}
                  >
                    {t("prospective-customer")}
                  </Link>                                                                                                                                                                                                                                                       
                </li>
                <li className="list-group-item">
                  <Link
                    href="/layanan/rekanan-rs"
                    className={pathname == "/layanan/rekanan-rs" ? "active" : ""}
                  >
                    {t('hospital-partners')}
                  </Link>                                                                                                                                                                                                                                                       
                </li>
                <li className="list-group-item">
                  <Link href="/layanan/lembar-fakta-reksadana" 
                  className={pathname == "/layanan/lembar-fakta-reksadana" ? "active" : ""}>
                    {t('fund-fact-sheet')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/layanan/suku-bunga-simpanan" className={pathname == "/layanan/suku-bunga-simpanan" ? "active" : ""}>
                  {t('save-series-interest-rates')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/layanan/harga-unit" className={pathname == "/layanan/harga-unit" ? "active" : ""}>
                  {t('unit-price')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/layanan/prosedur-pengajuan-komplain" className={pathname == "/layanan/prosedur-pengajuan-komplain" ? "active" : ""}>
                  {t('procedure-for-complaints')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/layanan/tata-kelola-layanan-nasabah"
                    className={pathname == "/layanan/tata-kelola-layanan-nasabah" ? "active" : ""}
                  >
                     {t('customer-service-governance')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/layanan/prosedur-klaim"
                    className={pathname == "/layanan/prosedur-klaim" ? "active" : ""}
                  >
                     {t('claim-procedure')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/layanan/unduh-formulir-klaim" className={pathname == "/layanan/unduh-formulir-klaim" ? "active" : ""}>
                  {t('download-claim-form')}
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    href="/layanan/unduh-formulir-transaksi"
                    className={pathname == "/layanan/unduh-formulir-transaksi" ? "active" : ""}
                  >
                    {t('download-transaction-form')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
