import { useTranslations } from "next-intl";
import HomeHero from '../[locale]/components/home/Hero'
import HomeProduk from '../[locale]/components/home/Produk'
import HomePenghargaan from '../[locale]/components/home/Penghargaan'
import HomeHrs from '../[locale]/components/home/Hrs'
import HomeShortcut from '../[locale]/components/home/Shortcut'
import HomeNews from '../[locale]/components/home/News'
import HomeTesti from '../[locale]/components/home/Testi'
import HomeFit from '../[locale]/components/home/Fit'
import HomeVega from '../[locale]/components/home/Vega'
import HomeClosing from '../[locale]/components/home/Closing'

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
    <HomeHero />
    <HomeProduk />    
    <HomePenghargaan /> 
    <HomeHrs />       
    <HomeShortcut />
    <HomeNews />
    <HomeTesti />
    <HomeFit />
    <HomeVega />    
    <HomeClosing />
    
    {/* <HomeProduk />
    <HomePenghargaan />
    <HomeHrs />
    <HomeShortcut />
    <HomeNews />
    <HomeTesti />
    <HomeFit />
    <HomeVega />                             */}
    </>
  );
}
