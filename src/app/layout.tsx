import "./globals.css";
import { Poppins } from "next/font/google";
import "./Root.scss";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Layout } from "@/shared/types/types";
import GlobalStoreProvider from "@/providers/GlobalStoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default async function RootLayout({ children }: Layout) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="apple-mobile-web-app-title" content="MucleMate" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <GlobalStoreProvider>{children}</GlobalStoreProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
