import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Aditya Ingale | Full Stack Developer';
const description =
  "Hello I'm Aditya Ingale, a full-stack developer (React.js, Next.js & Spring Boot). I specialize in creating dynamic web applications.";
const url = 'https://adityaingale.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Java Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Aditya Ingale',
    'Web Development',
    'Software Engineer',
    'Pune',
  ],
  creator: 'Aditya Ingale',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    images: [
      {
        url: `${url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Aditya Ingale | Full Stack Developer',
      },
    ],
  },
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/* OneSignal Push Notifications */}
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          defer
        ></Script>
        <Script id="onesignal-init-script" strategy="lazyOnload">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "f82c1882-7b9c-4e01-9425-8af1f8fc54fa",
              });
            });
          `}
        </Script>

        {/* Google Analytics */}
        {googleAnalyticsId && (
          <>
            <meta
              name="google-site-verification"
              content="VBfO4YkQOVA60uTtUOo-GAftDEP_orGlMKUL_WPmkiI"
            />
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            ></Script>
            <Script id="google-analytics-script">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
