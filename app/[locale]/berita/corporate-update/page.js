

import Link from 'next/link'
import Image from "next/image";
import { useTranslations,  } from "next-intl";
import headerBerita from "../../../../public/img/news_header.jpeg";

import NavigasiBerita from '../../components/Navigasi/NavigasiBerita';

export default function Page(){
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
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('News.News')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('News.corp-update')}</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">{t('News.corp-update')}</h1>
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
                          <a href="/berita/corporate-update/news7" className="">
                            <p className="card-title lead-title">{t('News.corp7-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">5 Sept 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news7">{t('News.read-article')}</a>
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
                        <a href="/berita/corporate-update/news6" className="">
                            <p className="card-title lead-title">{t('News.corp6-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">25 Jul 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news6">{t('News.read-article')}</a>
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
                        <a href="/berita/corporate-update/news5" className="">
                            <p className="card-title lead-title">{t('News.corp5-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">04 Jul 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news5">{t('News.read-article')}</a>
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
                        <a href="/berita/corporate-update/news4" className="">
                            <p className="card-title lead-title">{t('News.corp4-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">30 Jun 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news4">{t('News.read-article')}</a>
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
                        <a href="/berita/corporate-update/news3" className="">
                            <p className="card-title lead-title">{t('News.corp3-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">30 Jun 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news3">{t('News.read-article')}</a>
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
                          <a href="/berita/corporate-update/news2" className="">
                            <p className="card-title lead-title">{t('News.corp2-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">05 Jun 2023</small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news2">{t('News.read-article')}</a>
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
                        <a href="/berita/corporate-update/news1" className="">
                            <p className="card-title lead-title">{t('News.corp1-title')}</p>
                          </a>
                          <p className="card-text">
                            <small className="text-muted">19 Mei 2023 </small>
                          </p>
                        </div>
                        <div className='card-footer bg-white border-top-0'>
                          <div className="spr_ctabutton gap-2 d-sm-flex mb-2">
                            <a className='btn btn-ajsm' href="/berita/corporate-update/news1">{t('News.read-article')}</a>
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