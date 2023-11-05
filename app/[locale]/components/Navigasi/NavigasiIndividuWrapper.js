
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import NavigasiIndividu from "./NavigasiIndividu";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <NavigasiIndividu ></NavigasiIndividu>
    </NextIntlClientProvider>
    
  );
}
