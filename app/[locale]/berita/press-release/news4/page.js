import Link from 'next/link'

import Image from "next/image";
import { useTranslations,  } from "next-intl";
import produkIndividu from "../../../../../public/img/produk_individu.png";
import NavigasiBerita from '../../../components/Navigasi/NavigasiBerita';
import placeholderNews from "../../../../../public/img/news/news4.jpeg";

export default function Page() {
  const t = useTranslations();
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">{t('News.News')}</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">{t('News.press-release')}</li>
                  </ol>
                </nav>
                
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 spr_liputanwrap">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                    <h1 className="page-header-ui-title mb-3">{t('News.press4-title')}</h1>
                   
                  </div>
                  <div className="col-md-12">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div dangerouslySetInnerHTML={{__html: t.raw(`News.press4-news`)}} />

                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="col-12 col-md-4">
              <h4>Berita Lainnya</h4>
              <ul class="list-group">
                <li class="list-group-item p-3">
                  <a href="/berita/press-release/news7" className="">
                    <h6 className="card-title">{t('News.press7-title')}</h6>
                  </a>
                </li>
                <li class="list-group-item p-3">
                    <a href="/berita/press-release/news6" className="">
                      <h6 className="card-title">{t('News.press6-title')}</h6>
                    </a>
                </li>
                <li class="list-group-item p-3">
                  <a href="/berita/press-release/news5" className="">
                      <h6 className="card-title">{t('News.press5-title')}</h6>
                    </a>
                </li>
              </ul>
            </div>                                                                            
          </div>
        </div>
      </section>
    </div>
  )
}