import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vapourbit.com"),
  title: {
    default: "Vapourbit | Premium Web Development & Software Solutions | Next.js Experts",
    template: "%s | Vapourbit"
  },
  description: "Transform your digital presence with Vapourbit. Premium web development, custom software solutions, and stunning UI/UX design. Trusted by 50+ startups.",
  keywords: ["web development", "software development", "Next.js development", "React development", "UI/UX design", "custom software", "full-stack development", "web applications", "mobile apps", "API integration", "Vapourbit"],
  authors: [{ name: "Vapourbit", url: "https://www.vapourbit.com" }],
  creator: "Vapourbit",
  publisher: "Vapourbit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vapourbit.com",
    title: "Vapourbit | Premium Web Development & Software Solutions",
    description: "Transform your digital presence with cutting-edge web development and custom software solutions",
    siteName: "Vapourbit",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or use a valid path
        width: 1200,
        height: 630,
        alt: "Vapourbit Premium Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vapourbit | Premium Web Development Solutions",
    description: "Expert Next.js, React, and full-stack development services",
    images: ["/og-image.png"],
    creator: "@vapourbit",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Vapourbit",
        "url": "https://www.vapourbit.com",
        "logo": "https://www.vapourbit.com/logo.png",
        "description": "Premium software development company specializing in web development and custom solutions",
        "email": "vapourbit@gmail.com",
        "sameAs": [
          "https://github.com/vapourbit",
          "https://twitter.com/vapourbit",
          "https://linkedin.com/company/vapourbit"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Vapourbit",
        "url": "https://www.vapourbit.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.vapourbit.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Web Development, Software Development, UI/UX Design",
        "provider": {
          "@type": "Organization",
          "name": "Vapourbit"
        },
        "areaServed": "Worldwide"
      }
    ]
  };

  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} bg-vapor-dark overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
