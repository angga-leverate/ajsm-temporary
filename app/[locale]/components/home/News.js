import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import placeholderNews from "../../../../public/img/news_placeholder.jpg";
import id7 from "../../../../public/img/news/news7.jpeg";
import en7 from "../../../../public/img/news/news7en.jpeg";
import id6 from "../../../../public/img/news/news6.jpeg";
import en6 from "../../../../public/img/news/news6en.jpeg";
import id5 from "../../../../public/img/news/news5.png";
import en5 from "../../../../public/img/news/news5en.png";
import id4 from "../../../../public/img/news/news4.jpeg";
import en4 from "../../../../public/img/news/news4en.jpeg";

import { Ubuntu } from "next/font/google";
const ubuntuh2 = Ubuntu({ weight: "700", subsets: ["latin"] });
const ubuntuh5 = Ubuntu({ weight: "700", subsets: ["latin"] });

export default function News() {
  const t = useTranslations("Index");
  const n = useTranslations("News");
  const locale = useLocale();
  return (
    <>
      <div className="ajsm_news desktop container mt-5 py-3">
        <div className="row">
          <div className="col pb-3">
            <h2 className={ubuntuh2.className}>{t("fresh-MSIG")}</h2>
          </div>
        </div>
        <div id="bfm_news">
          <div className="row">
            <div className="col-md-3">
            <a href="/berita/corporate-update/news7" className="">
              <div className="card border-0">
                <Image src={locale==='id' ? id7:en7}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp7-title')}</h5>
                <p>05 SEP 2023</p>
              </div>
            </a>
            </div>

            <div className="col-md-3">
            <a href="/berita/corporate-update/news6" className="">
              <div className="card border-0">
              <Image src={locale==='id' ? id6:en6}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp6-title')}</h5>
                <p>25 JUL 2023</p>
              </div>
            </a>
            </div>
            <div className="col-md-3">
            <a href="/berita/corporate-update/news5" className="">
              <div className="card border-0">
              <Image src={locale==='id' ? id5:en5}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp5-title')}</h5>
                <p>04 JUL 2023</p>
              </div>
            </a>
            </div>
            <div className="col-md-3">
            <a href="/berita/corporate-update/news4" className="">
              <div className="card border-0">
              <Image src={locale==='id' ? id4:en4}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp4-title')}</h5>
                <p>30 JUN 2023</p>
              </div>
            </a>
            </div>

          </div>
          <div className="container">
            <div className="spr_ctabutton text-center gap-2 d-sm-flex justify-content-sm-center mb-5">
              <a href="/berita/press-release" className="btn btn-ajsm btn-lg px-4 me-sm-3">
              {t("read-more")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ajsm_news mobile container  py-3">
        <div className="row">
          <div className="col pb-3">
            <h2 className={ubuntuh2.className}>{t("fresh-MSIG")}</h2>
          </div>
        </div>
        <div id="bfm_news">
          <div className="d-flex flex-row flex-nowrap ajsm_scroll ms-0">
            <Link href="/berita/corporate-update/news7" className="">
            <div className="card border-0">
                <Image src={locale==='id' ? id7:en7}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp7-title')}</h5>
                <p>05 SEP 2023</p>
              </div>
            </Link>
            <Link href="/berita/corporate-update/news6" className="">
            <div className="card border-0">
                <Image src={locale==='id' ? id6:en6}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp6-title')}</h5>
                <p>25 JUL 2023</p>
              </div>
            </Link>
            <Link href="/berita/corporate-update/news5" className="">
              <div className="card border-0">
                <Image src={locale==='id' ? id5:en5}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp5-title')}</h5>
                <p>04 JUL 2023</p>
              </div>
            </Link>
            <Link href="/berita/corporate-update/news4" className="">
            <div className="card border-0">
                <Image src={locale==='id' ? id4:en4}
                  alt="AJSM"
                  className="card-img-top"
                  loading="lazy"
                  height={500}
                ></Image>
                <h5 className="card-title lead-title">{n('corp4-title')}</h5>
                <p>30 JUN 2023</p>
              </div>
            </Link>

          </div>
          <div className="container">
            <div className="spr_ctabutton text-center gap-2 d-sm-flex justify-content-sm-center mb-5">
              <Link href="/berita/press-release" className="btn btn-ajsm btn-lg px-4 me-sm-3">
              {t("read-more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
