import { useTranslations } from "next-intl";

import Image from "next/image";

// import myFitplus from "../../../public/img/myfitplus_app.png";
// import myFitplusapp from "../../../../public/img/desktop/myfitplus_desktop.png";

// import logoMyfit from "../../../../public/img/logomyfit.png";
import logoMyfit from "../../../../public/img/myfit.png";
import logoVega from "../../../../public/img/logo_vega.png";
import logoMyhrs from "../../../../public/img/myhrs.png";
import Link from "next/link";
// import downloadPlaystore from "../../../public/img/playstore.png";
// import downloadAppstore from "../../../public/img/appstore.png";

// import { Ubuntu } from "next/font/google";
// // const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function Fit() {
  const t = useTranslations("application");

  return (
    <>
      <div className="ajsm_fit desktop container my-5">
        <div className="row mb-5">
          <div className=" col text-center">
          <Link href={"https://www.myhealthriskscore.com/"}>
            <Image
              width={200}
              src={logoMyhrs}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
            </Link>
          </div>
          <div className=" col">
            <h4>My Health Risk Score</h4>
            <p>{t(`myhrs`)}</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className=" col text-center">
          <Link href={"/my-fit"}>
            <Image
              width={200}
              src={logoMyfit}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
            </Link>
          </div>
          <div className=" col">
            <h4>MyFit+</h4>
            <p>{t(`myfit`)}</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className=" col text-center">
            <Link href={"/vega"}>
            <Image
              width={200}
              src={logoVega}
              alt="AJSM"
              className="img-fluid"
              loading="lazy"
            ></Image>
            </Link>

          </div>
          <div className=" col">
            <h4>Vega</h4>
            <p>{t(`vega`)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
