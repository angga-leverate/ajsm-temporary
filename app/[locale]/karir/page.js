
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Career from "./career";



export default function Page() {
  const locale = useLocale();
  const messages = useMessages()


  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Career ></Career>
    </NextIntlClientProvider>

  );
}
