import { siteConfig } from "@/lib/data";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/favicon.svg`,
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Sudirman No. 123",
    "addressLocality": "Jakarta Selatan",
    "addressRegion": "DKI Jakarta",
    "postalCode": "12190",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
  "sameAs": [
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.facebook,
    siteConfig.socialLinks.linkedin
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "image": `${siteConfig.url}/og-image.jpg`,
  "url": siteConfig.url,
  "telephone": siteConfig.phone,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Sudirman No. 123",
    "addressLocality": "Jakarta Selatan",
    "addressRegion": "DKI Jakarta",
    "postalCode": "12190",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.2088",
    "longitude": "106.8456"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "serviceType": ["Website Development", "Digital Marketing", "Web Design"]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Development",
  "provider": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Company Profile",
          "description": "Website profesional untuk memperkenalkan bisnis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Restaurant Website",
          "description": "Website restoran dengan fitur reservasi dan menu digital"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Website",
          "description": "Toko online lengkap dengan sistem pembayaran"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa lama proses pembuatan website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Untuk website company profile standar, waktu pengerjaan adalah 7-14 hari kerja. Untuk website dengan fitur kompleks atau custom, bisa memakan waktu 3-6 minggu tergantung kebutuhan dan revisi."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah termasuk hosting dan domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, semua paket sudah termasuk domain .com untuk 1 tahun dan hosting managed. Setelah 1 tahun, biaya perpanjangan adalah Rp 500.000 - 1.500.000/tahun tergantung paket hosting."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa revisi desain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, setiap paket sudah termasuk jumlah revisi. Starter mendapat 2x revisi, Professional 3x, dan Enterprise unlimited revisi. Setiap tambahan revisi akan ada biaya tambahan."
      }
    }
  ]
};
