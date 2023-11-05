import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Image from "next/image";
import Link from "next-intl/link";

import myHRS from "../../../../public/img/myhrs.jpg";
import desktopmyHRS from "../../../../public/img/desktop/MyHRS.png";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function Hrs() {
  const t = useTranslations("Index");
  const tg = useTranslations();
  return (
    <>
 <div className="ajsm_myhrs desktop my-md-5">
        <div className="container">
            <div className="row container">
            <div className="col-6">
                <Image
                  src={desktopmyHRS}
                  alt="AJSM"
                  className="img-fluid"
                  height="auto"
                  loading="lazy"
                />
              </div>
              <div className="col-6">
                <p className="lead">My Health Risk Score</p>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1">
                {t("myhrs1")}<br></br>{t("myhrs2")}
                </h1>
                <p className="app-desc ">{tg("application.myhrs")}</p>
                <div className="d-grid mt-4 d-md-flex justify-content-md-start">
                <a className="btn btn-ajsm btn-lg px-4 me-md-2" href="https://www.myhealthriskscore.com/" target="_blank">{t("learn-more")}</a>
              </div>

              </div>
          </div>
        </div>
      </div>
      <div className="ajsm_myhrs mobile my-md-5 pt-5 pb-5">
        <div className="row container">
          <div className="col-12">
            <p className="lead">My Health Risk Score</p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{t("myhrs1")}<br></br>{t("myhrs2")}</h1>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
              <Image
                src={myHRS}
                alt="AJSM"
                className="img-fluid"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="d-grid mt-4 px-5 d-md-flex justify-content-md-start">
              <a className="btn btn-ajsm btn-lg px-4 me-md-2" href="https://www.myhealthriskscore.com/" target="_blank">{t("learn-more")}</a>
            </div>
          </div>
        {/* <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <p className="lead">My Health Risk Score</p>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Predict Earlier,
                <br />
                Live Healthier
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Image
                src={myHRS}
                alt="AJSM"
                className="img-fluid"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="d-grid mt-4 px-5 d-md-flex justify-content-md-start">
              <a className="btn btn-ajsm btn-lg px-4 me-md-2">Learn More</a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
