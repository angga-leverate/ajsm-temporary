import Image from "next/image";
import awardFrame from "../../../../public/img/award-frame.png";

import { Ubuntu } from "next/font/google";
import { useTranslations } from "next-intl";
import Slick from './Slick'
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function Penghargaan() {
    const t = useTranslations("Index")

  return (
    <>
      <div className="ajsm_closing container my-md-5">
        <div className="row">
          <div className="col-12 col-md-12 pb-3 text-center">
            <h2 className="mt-5 display-5 text-center">{t("msig_copy")}&nbsp;&nbsp;</h2>
            <a className="btn btn-ajsm px-5 mt-3" href="https://www.msig.co.id/" target="_blank">{t("msig_link")}</a>
          </div>
        </div>
      </div>
    </>
  );
}
