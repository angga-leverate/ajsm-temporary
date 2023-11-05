import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content"
import { pick } from "lodash";

export default function SearchWrapper() {
  const locale = useLocale();
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Index')}>
      <Content></Content>
    </NextIntlClientProvider>
  );
}
