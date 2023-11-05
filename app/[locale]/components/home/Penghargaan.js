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
      <div className="ajsm_awards container my-md-5">
        <div className="row">
          <div className="col pb-3">
            <h2 className={ubuntuh2.className}>{t("our-awards")}</h2>
          </div>
        </div>

        <div id="bfm_award">
        <Slick></Slick>

        </div>
      </div>
    </>
  );
}
