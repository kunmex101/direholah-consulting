import Script from "next/script";

export const metadata = {
  title: "Direholah Consulting",
  description:
    "Technology consulting, automation, Power Platform, project management, and digital transformation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N492QPXB06"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N492QPXB06');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
