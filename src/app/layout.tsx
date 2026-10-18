import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import FestivalWelcome from "@/components/FestivalWelcome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sutantratechnology.com"),
  alternates: {
    canonical: "/",
  },
  title: "SUTANTRA TECHNOLOGIES | Web, Mobile & Custom Software",
  description:
    "Software studio in Butwal, Nepal building websites, mobile apps, brand design and custom management software for schools, consultancies and growing businesses.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/favicon.ico",
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sutantratechnology.com",
    siteName: "SUTANTRA TECHNOLOGIES",
    title: "SUTANTRA TECHNOLOGIES | Web, Mobile & Custom Software",
    description:
      "Software studio in Butwal, Nepal building websites, mobile apps, brand design and custom management software for schools, consultancies and growing businesses.",
  },
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
    "url": "https://www.sutantratechnology.com",
    "logo": "https://www.sutantratechnology.com/logo_light.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Butwal",
      "addressRegion": "Lumbini Province",
      "addressCountry": "NP"
    },
    "sameAs": [
      "https://linkedin.com/company/sutantratechnology",
      "https://facebook.com/sutantradigital",
      "https://instagram.com/sutantratechnology"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sutantra Technologies",
    "url": "https://www.sutantratechnology.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.sutantratechnology.com{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://www.sutantratechnology.com"
        },
        "description": "Business websites, web applications and online stores built for speed, search visibility and everyday use.",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "serviceType": "Mobile App Development",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://www.sutantratechnology.com"
        },
        "description": "Android and iOS applications built from a single codebase for customer-facing and internal use.",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "serviceType": "Graphic and Brand Design",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://www.sutantratechnology.com"
        },
        "description": "Logo and brand identity, print collateral, social creatives and UI/UX design.",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "serviceType": "Custom Management Software",
        "provider": {
          "@type": "Organization",
          "name": "Sutantra Technologies",
          "url": "https://www.sutantratechnology.com"
        },
        "description": "School, college, consultancy and business management systems covering admissions, attendance, fees, billing, inventory and reporting.",
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

        <SmoothScrolling>
          {children}
        </SmoothScrolling>

        {/* Seasonal greeting — remove this one line to take it down */}
        <FestivalWelcome />
      </body>
    </html>
  );
}
