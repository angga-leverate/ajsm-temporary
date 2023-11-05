import { useLocale } from 'next-intl';

import Image from "next/image";
import Link from "next-intl/link";

import MobileID1 from "../../../../public/img/hero/mobile_id_1_1.jpg";
import MobileID2 from "../../../../public/img/hero/mobile_id_2.jpg";
import MobileID3 from "../../../../public/img/hero/mobile_id_3.jpg";
import DesktopID1 from "../../../../public/img/hero/bannerHome_bhs.jpg";
import DesktopID2 from "../../../../public/img/hero/desktop_id_2.jpg";
import DesktopID3 from "../../../../public/img/hero/desktop_id_3_rev1.jpg";

import MobileEN1 from "../../../../public/img/hero/mobile_en_1_1.jpg";
import MobileEN2 from "../../../../public/img/hero/mobile_en_2.jpg";
import MobileEN3 from "../../../../public/img/hero/mobile_en_3.jpg";
import DesktopEN1 from "../../../../public/img/hero/bannerHome_eng.jpg";
import DesktopEN2 from "../../../../public/img/hero/desktop_en_2.jpg";
import DesktopEN3 from "../../../../public/img/hero/desktop_en_3.jpg";

export default function Hero() {
    const locale = useLocale();
  return (
    <>
      <div id="carouselAjsm" className="carousel slide ajsm_hero_desktop mb-5 carousel-fade container-xxl"  data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselAjsm"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselAjsm"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselAjsm"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
        <Link href="/tentang-kami/profil-perusahaan">
          <span className="carousel-item active" data-bs-interval="6000">
            <Image src={locale==='id' ? MobileID1:MobileEN1} className="img-fluid mobile" alt="AJSM" />
            <Image src={locale==='id' ? DesktopID1:DesktopEN1} className="img-fluid w-100 desktop" alt="AJSM" />
          </span>
          </Link>
          <Link href="/produk/produk-bancassurance/bank-sinarmas/sinarmas-optima-plus">
          <span className="carousel-item" data-bs-interval="6000">
            <Image src={locale==='id' ? MobileID2:MobileEN2}  className="img-fluid mobile" alt="AJSM" />
            <Image src={locale==='id' ? DesktopID2:DesktopEN2}  className="img-fluid w-100 desktop" alt="AJSM" />
          </span>
          </Link>
          <Link href="/produk/produk-individu/smile-medika-ultimax">
          <span className="carousel-item" data-bs-interval="6000">
            <Image src={locale==='id' ? MobileID3:MobileEN3}  className="img-fluid mobile" alt="AJSM" />
            <Image src={locale==='id' ? DesktopID3:DesktopEN3}  className="img-fluid w-100 desktop" alt="AJSM" />
          </span>
          </Link>
        </div>
        <button className="carousel-control-prev bg-black rounded-circle next-left" type="button" data-bs-target="#carouselAjsm" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-black rounded-circle next-right" type="button" data-bs-target="#carouselAjsm" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
