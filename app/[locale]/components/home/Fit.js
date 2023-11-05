import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Image from "next/image";
import Link from "next-intl/link";

import myFitplus from "../../../../public/img/myfitplus_app.png";
import myFitplusapp from "../../../../public/img/desktop/myfitplus_desktop.png";

import logoMyfit from "../../../../public/img/logomyfit.png";

import downloadPlaystore from "../../../../public/img/playstore.png";
import downloadAppstore from "../../../../public/img/appstore.png";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function Fit() {
  const t = useTranslations("Index");
  const tg = useTranslations();
  return (
    <>
      <div className="ajsm_fit desktop container my-5">
        <div className="row">
          <div className="col pb-1">
            <h2 className={ubuntuh2.className}>
            {t("myfitplus1")}<br></br>{t("myfitplus2")}
            </h2>
            <p className="app-desc mb-5">{tg("application.myfit")}</p>
            <div className="row">
              <div className="col">
                <p>
                  <Image
                    src={logoMyfit}
                    alt="AJSM"
                    className="img-fluid"
                    loading="lazy"
                  ></Image>
                </p>
              </div>
              <div className="col-8">
                <div className="row text-left">
                  <div className="col-12 pb-4">
                  <a href="https://play.google.com/store/apps/details?id=app.goodlife.msig" target="_blank">
                    <Image
                      src={downloadPlaystore}
                      alt="AJSM"
                      className="img-fluid"
                      loading="lazy"
                    ></Image>
                    </a>
                  </div>
                  <div className="col-12">
                  <a href="https://apps.apple.com/id/app/myfit-by-sinarmas-msig-life/id6445908080" target="_blank">
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
          </div>
          <div className="col">
            <Image
              src={myFitplusapp}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <div className="ajsm_fit mobile container mt-5">
        <div className="row">
          <div className="col pb-1">
            <h2 className={ubuntuh2.className}>
            {t("myfitplus1")}<br></br>{t("myfitplus2")}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image
              src={logoMyfit}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
          <div className="col">
            <div className="row text-center">
              <div className="col-12 pb-4">
                <a href="https://play.google.com/store/apps/details?id=app.goodlife.msig" target="_blank">
                <Image
                  src={downloadPlaystore}
                  alt="AJSM"
                  className="img-fluid"
                  loading="lazy"
                ></Image>
                </a>
              </div>
              <div className="col-12">
                <a href="https://apps.apple.com/id/app/myfit-by-sinarmas-msig-life/id6445908080" target="_blank">
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
          <div className="col-12 p-5">
            <Image
              src={myFitplus}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>

    </>
  );
}
