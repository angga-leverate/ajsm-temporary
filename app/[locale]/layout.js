import "./fonts.css";
import "./style.css";
import Image from "next/image";
import { NextIntlClientProvider, useMessages, useTranslations,  } from "next-intl";
import "bootstrap/dist/css/bootstrap.min.css";

import Script from "next/script";
import Header from "./components/global/HeaderWrapper";
import Footer from "./components/global/Footer";
import Head from "next/head";
import Link from "next/link";
import floatingButton from "../../public/img/sticky-new.png";
import Form from '../[locale]/layanan/layanan-calon-nasabah/form'

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import { Ubuntu } from "next/font/google";
const ubuntu400 = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Asuransi Jiwa Sinarmas MSIG | Situs Resmi",
  description:
    "Situs Resmi Asuransi Jiwa Sinarmas MSIG sebelumnya terkenal sebagai Sinarmas MSIG Life",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  const messages = useMessages()
  const t = useTranslations();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <body className={`${ubuntu400.className}`} >
        <Header />
        {children}
        <div className="ajsm_ribbon mb-3 container-xxl"></div>
        <Footer />
        <a
          href="#"
          className="float"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Image src={floatingButton} alt="AJSM" className="img-fluid mb-5" />
        </a>
      <div className="ajsm_modal modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 bg-blue">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Live It Your Way</h1> */}
              <p>{t("STICKY.DESC")}</p>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <NextIntlClientProvider locale={locale} messages={messages}>
                <Form />
              </NextIntlClientProvider>
            </div>
          </div>
        </div>
      </div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://kit.fontawesome.com/361e4094b9.js"></Script>
    </html>
  );
}
