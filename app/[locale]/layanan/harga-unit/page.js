import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import UnitPrice from "./content";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'unit-price', 'Mainnav','Footer')}>
      <UnitPrice ></UnitPrice>
    </NextIntlClientProvider>

  );
}
