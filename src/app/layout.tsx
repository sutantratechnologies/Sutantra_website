import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "SUTANTRA TECHNOLOGIES | Reliable Systems. Remarkable Innovation.",
  description: "Empowering global enterprises with cutting-edge software engineering, AI systems, and cloud architecture.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/favicon.ico",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sutantra Technologies",
    "legalName": "Sutantra Technologies",
    "url": "https://sutantratechnology.com",
    "logo": "https://sutantratechnology.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Butwal",
      "addressRegion": "Lumbini Province",
      "addressCountry": "NP"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://facebook.com",
      "https://instagram.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sutantra Technologies",
    "url": "https://sutantratechnology.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sutantratechnology.com{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Custom Software Development",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://sutantratechnology.com"
        },
        "description": "Custom enterprise software engineering, web application development, and system integrations tailored for modern digital transformation.",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "serviceType": "AI and Data Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://sutantratechnology.com"
        },
        "description": "Integration of intelligent workflows, generative AI frameworks, and advanced data analytics solutions.",
        "areaServed": "Global"
      }
    ]
  };

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        {/* WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
        {/* Service Schema */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="flex flex-col bg-slate-950 text-white font-telegraf" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NDPFWG4YPG" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NDPFWG4YPG');
          `}
        </Script>

        <Preloader />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
