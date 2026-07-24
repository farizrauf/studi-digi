"use client";

import { organizationSchema, localBusinessSchema, serviceSchema, faqSchema } from "@/lib/schema";

interface JsonLdProps {
  schemas: ("organization" | "localBusiness" | "service" | "faq")[];
}

export function JsonLd({ schemas }: JsonLdProps) {
  const schemaMap = {
    organization: organizationSchema,
    localBusiness: localBusinessSchema,
    service: serviceSchema,
    faq: faqSchema
  };

  const selectedSchemas = schemas.map((s) => schemaMap[s]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          selectedSchemas.length === 1
            ? selectedSchemas[0]
            : { "@context": "https://schema.org", "@graph": selectedSchemas }
        )
      }}
    />
  );
}
