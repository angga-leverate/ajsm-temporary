
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import ProductPage from "./productPage";
import pick from 'lodash/pick';


export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          produk: 'sinarmas-maxi-life',
        },
      }, // See the "paths" section below
    ],
    fallback: "blocking", // false or "blocking"
  }
}

export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Produk', 'Mainnav')}>
      <ProductPage ></ProductPage>
    </NextIntlClientProvider>
    
  );
}
