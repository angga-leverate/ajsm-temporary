
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import CustomerService from "./customer-service";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'prospective-customer-service', 'Mainnav','Footer')}>
      <CustomerService ></CustomerService>
    </NextIntlClientProvider>
    
  );
}
