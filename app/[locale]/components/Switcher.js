"use client"

import { useLocale } from "next-intl";
import Link from "next-intl/link";
// import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Switcher() {
  const pathname = usePathname();
  let replaced;
  
  const replacePath = (lang) => {
    if(pathname.split('/').length > 2){
      replaced = pathname.replace('/en','')
      if(lang=='id'){
        return `${replaced}`
      }else{
        
        return `${replaced}`
      }
    }else {
      return '/'
    }
    
  }
  
  return (
    <>
      <Link className={(pathname == "/" ? "active" : "")} href={`${replacePath('id')}`} locale="id">
        ID
      </Link>&nbsp;
      | &nbsp;
      <Link className={(pathname == "/en" ? "active" : "")} href={`${replacePath('en')}`} locale="en">
        EN
      </Link>
    </>
  );
}
