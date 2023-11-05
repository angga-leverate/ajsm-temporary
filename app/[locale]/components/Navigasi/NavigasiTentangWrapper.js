
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import NavigasiTentang from "./NavigasiTentang";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <NavigasiTentang ></NavigasiTentang>
    </NextIntlClientProvider>
    
  );
}
