import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from "next-intl";
import Content from './content'
import Image from "next/image";
import headerTentang from "../../../../public/img/tentang_kami_header.jpg";
import NavigasiTentang from '../../components/Navigasi/NavigasiTentangWrapper'
import Link from "next/link";
// import $ from 'jquery';
import Moment from 'moment';
import { pick } from "lodash";

export default function Page() {
  const laporanTahunanUnitLink = {
    '2022': 'Ular2022.pdf',
    '2021': 'UNIT LINK ANNUAL REPORT 2021.pdf',
    '2020': 'Laporan Tahunan Unit Link 2020.pdf',
    '2019': 'Laporan Tahunan Unit Link 2019.pdf',
    '2018': 'Laporan Tahunan Unit Link 2018.pdf',
    '2017': 'Laporan Tahunan Unit Link 2017.pdf',
    '2016': 'Laporan Tahunan Unit Link 2016.pdf'
  };
  const annualReport = [
    {
      'year': 2013,
      'type': 'annual-report',
      'file': '_2013 Annual Report_SMiLe.pdf'
    },
    {
      'year': 2014,
      'type': 'annual-report',
      'file': '_2014 Annual Report_SMiLe.pdf'
    },
    {
      'year': 2015,
      'type': 'annual-report',
      'file': '_Annual Report 2015.pdf'
    },
    {
      'year': 2016,
      'type': 'annual-report',
      'file': '_Annual Report 2016.pdf'
    },
    {
      'year': 2017,
      'type': 'annual-report',
      'file': '_Annual Report 2017.pdf'
    },
    {
      'year': 2018,
      'type': 'annual-report',
      'file': '_annual_report_2018_lowres.pdf'
    },
    {
      'year': 2019,
      'type': 'annual-report',
      'file': '_Laporan Tahunan 2019.pdf'
    },
    {
      'year': 2020,
      'type': 'annual-report',
      'file': '_Laporan Tahunan 2020.pdf'
    },
    {
      'year': 2020,
      'type': 'sustainability-report',
      'file': '_Laporan_Keberlanjutan_2020.pdf'
    },
    {
      'year': 2021,
      'type': 'annual-sustainability-report',
      'file': '_LIFE - Laporan Tahunan dan Keberlanjutan 2021.pdf'
    },
    {
      'year': 2022,
      'type': 'annual-sustainability-report',
      'file': '_Annual_Report_and_Sustainability_Report_2022.pdf'
    }
  ]
  const monthlyReport = {
    2023: [
      [3, '2023_04laporan bulanan konven_april.pdf','2023_04laporan bulanan syariah_april.pdf'],
      [4, '2023_05laporan bulanan konven_Mei.pdf','2023_052023_laporan bulanan syariah_Mei.pdf'],
      [5, '2023_06laporan bulanan konven_Juni.pdf','2023_06laporan bulanan syariah_Juni.pdf']
    ]
  };
  const annualFinancialReport = {
    2023: [['Laporan Keuangan Konsolidasian Interim Tengah Tahunan 2023','2023_tahunan_laporan koran Konsolidasi_Juni23.pdf']]
  }
  const quarterFinancialReport = {
    2023: {
      1:['2023_triwulan1_lap keuangan Konvensional TW1 23.pdf','2023_triwulan1_lap keuangan Syariah TW1 23.pdf']
    }
  }
  const t = useTranslations();  
  const messages = useMessages();
  const locale = useLocale();
  // const hashTab = window && window.location.hash ? window.location.hash : null;
  // if(hashTab){
  //   $('#'+hashTab).tab('show')
  // }
  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav','financial-report')}>
      <Content></Content>
    </NextIntlClientProvider>
    
  );
}
