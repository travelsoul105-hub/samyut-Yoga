export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Samyut Yoga",
    alternateName: "Samyut Yoga Gurukulam",
    url: "https://samyutyoga.com",
    logo: "https://samyutyoga.com/storage/2024/07/SVAYAMLOGOPNG-1024x1024.png",
    description:
      "The Traditional Yoga School in Mysore. 200hr Ashtanga & Hatha Yoga Teacher Training. E-RYT 500 certified.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mysore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-81477-62621",
        contactType: "customer service",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://instagram.com/samyutyogamysore",
      "https://youtube.com/@samyutyoga",
      "https://www.facebook.com/profile.php?id=61561163703486",
    ],
    founder: {
      "@type": "Person",
      name: "Yogacharya Aravind Prasad",
      jobTitle: "Founder & Lead Teacher",
      description: "E-RYT 500, YACEP, 15+ years teaching experience",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "100",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseJsonLd({
  name,
  description,
  url,
  instances,
  startingPrice,
  currency = "EUR",
}: {
  name: string;
  description: string;
  url: string;
  instances?: { startDate: string; endDate: string }[];
  startingPrice?: number;
  currency?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "EducationalOrganization",
      name: "Samyut Yoga",
      url: "https://samyutyoga.com",
    },
    instructor: {
      "@type": "Person",
      name: "Yogacharya Aravind Prasad",
      jobTitle: "Founder & Lead Teacher",
      description: "E-RYT 500, YACEP, 15+ years teaching experience",
    },
    educationalCredentialAwarded: "Yoga Alliance RYT-200",
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "Mysore, Karnataka, India",
    },
  };

  if (instances?.length) {
    schema.hasCourseInstance = instances.map(({ startDate, endDate }) => ({
      "@type": "CourseInstance",
      courseMode: "onsite",
      startDate,
      endDate,
      location: {
        "@type": "Place",
        name: "Samyut Yoga Gurukulam, Mysore, Karnataka, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mysore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
      },
    }));
  }

  if (startingPrice) {
    schema.offers = {
      "@type": "Offer",
      price: startingPrice,
      priceCurrency: currency,
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2026-01-01",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
