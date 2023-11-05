import { useTranslations } from "next-intl";


import Image from "next/image";
import Link from "next-intl/link";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });

import produkIndividu from "../../../../public/img/produk_individu.png";
import produkKumpulan from "../../../../public/img/produk_kumpulan.png";
import produkBanc from "../../../../public/img/produk_bancassurance.png";

import produkIndividuMobile from "../../../../public/img/banner_mobile_produkIndividu-2.jpg";
import produkKumpulanMobile from "../../../../public/img/banner_Mobile_produk kumpulan- 1.jpg";
import produkBancMobile from "../../../../public/img/banner_mobile_produk Bancassurance-3.jpg";

export default function Produk() {
    const t = useTranslations("Index");
  return (
    <>
      <div className="ajsm_intro container-xxl my-md-5">
        <div className="row">
          <div className="col pb-3">
            <h2 className={ubuntuh2.className}>{t("home-product-heading")}</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-4">
            <div className="card border-0 text-center">
              <Link href="/produk/asuransi-kesehatan/1552/smi-le-medika-ultimax-smuax" >
              <Image
                alt="AJSM"
                src={produkIndividu}
                className="img-fluid d-none d-sm-inline"
              ></Image>
              <Image
                alt="AJSM"
                src={produkIndividuMobile}
                className="img-fluid d-flex d-sm-none  mb-2"
              ></Image>
              </Link>
              <div className="card-body pb-3 d-none d-sm-inline">
                <h5 className={ubuntuh5.className}>
                  {t("individual")}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 text-center">
            <Link href="/produk/asuransi-jiwa/1753/smile-pro-infinite" >
              <Image
                alt="AJSM"
                src={produkBanc}
                className="img-fluid d-none d-sm-inline"
              ></Image>
              <Image
                alt="AJSM"
                src={produkBancMobile}
                className="img-fluid d-flex d-sm-none  mb-2"
              ></Image>
              </Link>
              <div className="card-body pb-3 d-none d-sm-inline">
                <h5 className={ubuntuh5.className}>
                  {t("bancassurance")}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 text-center">
            <Link href="/produk/asuransi-jiwa/1752/smile-income-protection-x-tra-six" >
              <Image alt="AJSM" src={produkKumpulan} className="img-fluid d-none d-sm-inline"></Image>
              <Image alt="AJSM" src={produkKumpulanMobile} className="img-fluid d-flex d-sm-none mb-2"></Image>
              </Link>
              <div className="card-body pb-3 d-none d-sm-inline">
                <h5 className={ubuntuh5.className}>
                  {t("group")}
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <h5 className="mt-5 text-center">{t("msig_copy")}&nbsp;&nbsp;<a className="btn btn-ajsm px-5" href="https://www.msig.co.id/" target="_blank">{t("msig_link")}</a></h5> */}
        {/* <a className="btn btn-ajsm d-none" href="https://www.msig.co.id/" target="_blank">Temukan produk asuransi umum yang paling pas ngertiin kamu di sini</a> */}
      </div>
    </>
  );
}
