import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content"
import { pick } from "lodash";

export default function HeaderWrapper() {
  const locale = useLocale();
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav','Produk')}>
      <Content></Content>
    </NextIntlClientProvider>
  );
}
