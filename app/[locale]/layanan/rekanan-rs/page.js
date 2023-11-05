import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import RekananRS from "./content";
import pick from 'lodash/pick';


export default function Page() {
  const locale = useLocale();
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'hospital-partners', 'Mainnav','Footer')}>
      <RekananRS ></RekananRS>
    </NextIntlClientProvider>

  );
}
