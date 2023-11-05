import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Navigation from "./product"
import { pick } from "lodash";

export default function NavigationWrapper() {
  const locale = useLocale();
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={pick(messages, 'Mainnav')}>
      <Navigation></Navigation>
    </NextIntlClientProvider>
  );
}
