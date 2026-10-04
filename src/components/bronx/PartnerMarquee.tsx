import React from "react";
import Image from "next/image";

const partners = [
  { id: 1, name: "Partner 1", src: "/images/bronx/partner-1-1.svg" },
  { id: 2, name: "Partner 2", src: "/images/bronx/partner-2-1.svg" },
  { id: 3, name: "Partner 3", src: "/images/bronx/partner-3-1.svg" },
  { id: 4, name: "Partner 4", src: "/images/bronx/partner-4-1.svg" },
  { id: 5, name: "Partner 5", src: "/images/bronx/partner-5-1.svg" },
  { id: 6, name: "Partner 6", src: "/images/bronx/partner-6-1.svg" },
  { id: 7, name: "Partner 7", src: "/images/bronx/partner-7-1.svg" },
];

export function PartnerMarquee() {
  // Duplicate array for seamless infinite looping
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="partner-sec" aria-label="Client and Technology Partners">
      <div className="partner-marquee-track">
        {marqueeList.map((partner, idx) => (
          <div key={`${partner.id}-${idx}`} className="partner-box">
            <Image
              src={partner.src}
              alt={partner.name}
              width={120}
              height={40}
              style={{ height: 38, width: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
