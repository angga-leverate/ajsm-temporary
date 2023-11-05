

import Image from 'next/image';
import Link from 'next/link';
import headerBerita from "../../../../public/img/news_header.jpeg";
import { useTranslations,  } from "next-intl";
import placeholderNews from "../../../../public/img/news_placeholder.jpg";
import News1 from "../../../../public/img/news/pengumuman-public-expose-2023-pt-msig-life-insurance-indonesia-tbk-dh-pt-asuransi-jiwa-sinarmas-msig-tbk.webp";
import NavigasiBerita from '../../components/Navigasi/NavigasiBerita'

export default function Page() {
  const t = useTranslations();
  return (
    <div className='ajsm_page berita'>
      <section className="header">
      <Image src={headerBerita} alt="AJSM" className="img-fluid" />        
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">{t('Mainnav.home')}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('News.News')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('News.press-release')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('News.press-release')}</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">

              <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                          <a href="/berita/press-release/news7" className="">
                            <p className="card-title lead-title">{t('News.press7-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">23 Mei 2023 </small>
                          </p>   
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news7">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                        <a href="/berita/press-release/news6" className="">
                        <p className="card-title lead-title">{t('News.press6-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">23 Mei 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news6">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                        <a href="/berita/press-release/news5" className="">
                        <p className="card-title lead-title">{t('News.press5-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">17 Mei 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news5">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                        <a href="/berita/press-release/news4" className="">
                        <p className="card-title lead-title">{t('News.press4-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">12 Mei 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news4">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                        <a href="/berita/press-release/news3" className="">
                          <p className="card-title lead-title">{t('News.press3-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">11 Mei 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news3">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                          <a href="/berita/press-release/news2" className="">
                            <p className="card-title lead-title">{t('News.press2-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">13 April 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news2">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  

                <div className="col-12 col-md-4 mb-5 spr_liputanwrap">
                  <div className="card card-news border rounded">
                    <div className="row g-4 mb-2 mt-1">
                      <div className="col-md-12">
                        <div className="card-body pt-1 spr_liputantitle">
                          <a href="/berita/press-release/news1" className="">
                            <p className="card-title lead-title">{t('News.press1-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">27 Februari 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/press-release/news1">{t('News.read-article')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  

                

              </div>
            </div>
            <NavigasiBerita />
          </div>
        </div>
      </section>
    </div>
  )
}