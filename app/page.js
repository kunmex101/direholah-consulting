import Script from "next/script";

export const metadata = {
  title: "Direholah Consulting",
  description:
    "Direholah Consulting provides technology consulting, Power Platform solutions, automation, project management, and digital transformation services.",
  keywords:
    "IT Consulting, Power Apps, Power Automate, SharePoint, Automation, Digital Transformation, Sudbury Consulting",
  authors: [{ name: "Direholah Consulting" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* SEO */}
        <meta
          name="description"
          content="Direholah Consulting provides technology consulting, automation, Power Platform solutions, project management, and digital transformation services."
        />

        <meta
          name="keywords"
          content="IT Consulting, Power Apps, Automation, SharePoint, Sudbury Consulting, Digital Transformation"
        />

        <meta name="author" content="Direholah Consulting" />

        {/* Open Graph */}
        <meta property="og:title" content="Direholah Consulting" />
        <meta
          property="og:description"
          content="Technology, automation, consulting, and digital transformation services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.direholahconsulting.com"
        />
        <meta
          property="og:image"
          content="https://www.direholahconsulting.com/logo.png"
        />

        {/* Google Analytics */}
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

      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          scrollBehavior: "smooth",
          background: "#f5f7fb",
        }}
      >
        {children}
      </body>
    </html>
  );
}
