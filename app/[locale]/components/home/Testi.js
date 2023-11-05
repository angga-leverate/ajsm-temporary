import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Image from "next/image";
import Link from "next-intl/link";

import placeholderAvatar from "../../../../public/img/avatar.png";
import placeholderAvatar2 from "../../../../public/img/avatar2.png";
import placeholderTesti1 from "../../../../public/img/testi1.jpg";
import placeholderTesti2 from "../../../../public/img/testi2.jpg";
import placeholderTesti3 from "../../../../public/img/testi3.jpg";
import placeholderTesti4 from "../../../../public/img/testi4.jpg";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });


export default function Testi() {
  const t = useTranslations("Index");
  return (
    <>
      <div className="ajsm_testi desktop container my-5">
        <div className="row">
          <div className="col-12 pb-1 mb-4">
            <h2 className={ubuntuh2.className}>{t("testimoni-title")}</h2>
          </div>
        </div>
        <div id="bfm_testi">
          <div className="row">
            <div className="col-12 col-md-3 col">
            <a href="#" className="">
              <div className="card">
                  {/* <Image
                      src={placeholderTesti1}
                      alt="AJSM"
                      className="img-fluid p-3"
                      loading="lazy"
                    ></Image> */}
                <div className="card-body">

                  <p className="card-text">
                    &quot;{t("testimoni-content1")}&quot;
                  </p>
                </div>
                <div className="row p-3 g-2">
                  <div className="col-3">
                    <Image
                      src={placeholderAvatar2}
                      alt="AJSM"
                      className="img-fluid d-flex m-auto align-middle w-75 mt-2"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="col d-flex flex-col name-wrapper">
                    <h5>
                    Mia Valensia Bisono
                    </h5>
                    <p>Nasabah Simas Magna Link</p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div className="col-12 col-md-3 col">
              <a href="#" className="">
                <div className="card">
                {/* <Image
                      src={placeholderTesti2}
                      alt="AJSM"
                      className="img-fluid p-3"
                      loading="lazy"
                    ></Image> */}
                  <div className="card-body">
                    <p className="card-text">
                    &quot;{t("testimoni-content2")}&quot;
                    </p>
                  </div>
                  <div className="row p-3 g-2">
                  <div className="col-3">
                    <Image
                      src={placeholderAvatar}
                      alt="AJSM"
                      className="img-fluid d-flex m-auto align-middle w-75 mt-2"
                      loading="lazy"
                    ></Image>
                  </div>
                    <div className="col name-wrapper">
                      <h5>
                      Giarto Sutanto
                      </h5>
                      <p>Nasabah Smile Medical Syariah</p>
                    </div>
                  </div>
                </div>
                </a>
            </div>
            <div className="col-12 col-md-3 col">
            <a href="#" className="">
              <div className="card">
              {/* <Image
                      src={placeholderTesti3}
                      alt="AJSM"
                      className="img-fluid p-3"
                      loading="lazy"
                    ></Image> */}
                <div className="card-body">
                  <p className="card-text">
                  &quot;{t("testimoni-content3")}&quot;
                  </p>
                </div>
                <div className="row p-3 g-2">
                  <div className="col-3">
                    <Image
                      src={placeholderAvatar2}
                      alt="AJSM"
                      className="img-fluid d-flex m-auto align-middle w-75 mt-2"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="col name-wrapper">
                    <h5>
                    Djohan Tjendra
                    </h5>
                    <p>Nasabah Smile Medika Ultima</p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div className="col-12 col-md-3 col">
            <a href="#" className="">
              <div className="card">
                {/* <Image
                      src={placeholderTesti4}
                      alt="AJSM"
                      className="img-fluid p-3"
                      loading="lazy"
                    ></Image> */}
                <div className="card-body">
                  <p className="card-text">
                  &quot;{t("testimoni-content4")}&quot;
                  </p>
                </div>
                <div className="row p-3 g-1">
                  <div className="col-3">
                    <Image
                      src={placeholderAvatar2}
                      alt="AJSM"
                      className="img-fluid d-flex m-auto align-middle w-75 mt-2"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="col  name-wrapper">
                    <h5>
                    Marcellina Lucia
                    </h5>
                    <p>Nasabah Simas Magna Link</p>
                  </div>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ajsm_testi mobile container pt-3 pb-5">
        <div className="row">
          <div className="col pb-1">
            <h2 className={ubuntuh2.className}>{t("testimoni-title")}</h2>
          </div>
        </div>
        <div id="bfm_testi">
          <div className="d-flex flex-row flex-nowrap bfm_scroll ms-0">
            <a href="#" className="">
              <div className="card">
                <div className="card-body py-0">
                  <p className="card-text">
                  &quot;{t("testimoni-content1")}&quot;
                  </p>
                </div>
                <div className="row px-3 pb-4">
                  {/* <div className="col-4">
                    <Image
                      src={placeholderAvatar}
                      alt="AJSM"
                      className="img-fluid"
                      loading="lazy"
                      height={70}
                      width={70}
                    ></Image>
                  </div> */}
                  <div className="col d-flex flex-col name-wrapper">
                    <h5>
                    Mia Valensia Bisono
                    </h5>
                    <p>Nasabah Simas Magna Link</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="">
              <div className="card">
                <div className="card-body py-0">
                  <p className="card-text">
                  &quot;{t("testimoni-content2")}&quot;
                  </p>
                </div>
                <div className="row px-3 pb-4">
                  {/* <div className="col-4">
                    <Image
                      src={placeholderAvatar}
                      alt="AJSM"
                      className="img-fluid"
                      loading="lazy"
                      height={70}
                      width={70}
                    ></Image>
                  </div> */}
                  <div className="col name-wrapper">
                    <h5>
                    Giarto Sutanto
                    </h5>
                    <p>Nasabah Smile Medical Syariah</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="">
              <div className="card">
                <div className="card-body py-0">
                  <p className="card-text">
                  &quot;{t("testimoni-content3")}&quot;
                  </p>
                </div>
                <div className="row px-3 pb-4">
                  {/* <div className="col-4">
                    <Image
                      src={placeholderAvatar}
                      alt="AJSM"
                      className="img-fluid"
                      loading="lazy"
                      height={70}
                      width={70}
                    ></Image>
                  </div> */}
                  <div className="col name-wrapper">
                    <h5>
                    Djohan Tjendra
                    </h5>
                    <p>Nasabah Smile Medika Ultima</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="">
              <div className="card">
                <div className="card-body py-0">
                  <p className="card-text">
                  &quot;{t("testimoni-content4")}&quot;
                  </p>
                </div>
                <div className="row px-3 pb-4">
                  {/* <div className="col-4">
                    <Image
                      src={placeholderAvatar}
                      alt="AJSM"
                      className="img-fluid"
                      loading="lazy"
                      height={70}
                      width={70}
                    ></Image>
                  </div> */}
                  <div className="col  name-wrapper">
                    <h5>
                    Marcellina Lucia
                    </h5>
                    <p>Nasabah Simas Magna Link</p>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}
