import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Header from "./header/Header"
import { pick } from "lodash";

export default function HeaderWrapper() {
  const locale = useLocale();
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <Header></Header>
    </NextIntlClientProvider>
  );
}
