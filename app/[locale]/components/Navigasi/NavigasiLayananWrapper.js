
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import NavigasiLayanan from "./NavigasiLayanan";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <NavigasiLayanan ></NavigasiLayanan>
    </NextIntlClientProvider>
    
  );
}
