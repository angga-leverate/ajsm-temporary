
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import NavigasiGroup from "./NavigasiGroup";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <NavigasiGroup ></NavigasiGroup>
    </NextIntlClientProvider>
    
  );
}
