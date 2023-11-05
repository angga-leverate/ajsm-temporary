'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  return (
    <div className='ajsm_page berita'>
        <section className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <header className="pt-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">{t('Mainnav.home')}</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">{t('News.News')}</a>
                                    </li> 
                                    <li aria-current="page" className="breadcrumb-item active">
                                        {t('News.press-release')}
                                    </li>
                                </ol>
                            </nav> 
                            <h1 className="page-header-ui-title mb-3">
                                {t('News.press-release')}
                            </h1>
                        </header>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}