import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Image from "next/image";
import Link from "next-intl/link";

import downloadPlaystore from "../../../public/img/playstore.png";
import downloadAppstore from "../../../public/img/appstore.png";

import appVega from "../../../public/img/desktop/appvega.png";
import logoVega from "../../../public/img/logo_vega_min.png";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function Vega() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="ajsm_fit desktop container my-5">
        <div className="row">
          <div className="col-4 text-right">
            <Image
              src={appVega}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
          <div className="col-8 ajsm-vega-apps-home">
            <div className="ajsm-vega-home">
            <h2 className={ubuntuh2.className}>
            {t("vega1")}
            </h2>
            <Image
                src={logoVega}
                width="120"
                alt="AJSM"
                className="img-fluid"
                loading="lazy"
              ></Image>
            </div>
            <div className="row">
              {/* <div className="col-4">
                <p>
                  <Image
                    src={logoVega}
                    alt="AJSM"
                    className="img-fluid"
                    loading="lazy"
                  ></Image>
                </p>
              </div> */}
              <div className="col">
                <div className="row text-center align-middle">
                  <div className="col-12">
                    <a href="https://play.google.com/store/apps/details?id=co.id.ajsmsig.cs.simpel" target="_blank">
                    <Image
                      src={downloadPlaystore}
                      alt="AJSM"
                      className="img-fluid m-2"
                      loading="lazy"
                    ></Image>
                    </a>
                    <a href="https://apps.apple.com/id/app/vega-by-sinarmas-msig-life/id1560944906" target="_blank">
                    <Image
                      src={downloadAppstore}
                      alt="AJSM"
                      className="img-fluid m-2"
                      loading="lazy"
                    ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ajsm_fit mobile container mt-5">
        <div className="row">
          <div className="col pb-1">
            <h2 className={ubuntuh2.className}>
            {t("vega1")}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image
              src={logoVega}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
          <div className="col">
            <div className="row text-center">
              <div className="col-12 pb-4">
                <a href="https://play.google.com/store/apps/details?id=co.id.ajsmsig.cs.simpel" target="_blank" >
                <Image
                  src={downloadPlaystore}
                  alt="AJSM"
                  className="img-fluid"
                  loading="lazy"
                ></Image>
                </a>
              </div>
              <div className="col-12">
              <a href="https://apps.apple.com/id/app/vega-by-sinarmas-msig-life/id1560944906" target="_blank">
                <Image
                  src={downloadAppstore}
                  alt="AJSM"
                  className="img-fluid"
                  loading="lazy"
                ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5 pb-0">
            <Image
              src={appVega}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}
