import React from "react";
import Image from "next/image";

const stacks = [
  {
    category: "WEB DESIGN PLATFORM",
    title: "WEBFLOW & NEXT.JS",
    proficiency: "95%",
    description: "The internet is your canvas. Combining Webflow visual agility with Next.js full-stack power to publish stunning, performant digital properties.",
    icon: "/images/bronx/framer.png",
  },
  {
    category: "DESIGN TOOL",
    title: "FIGMA",
    proficiency: "98%",
    description: "Figma is a collaborative environment for interactive prototypes, fluid typographic scales, responsive tokens, and polished UI component libraries.",
    icon: "/images/bronx/figma.png",
  },
  {
    category: "FRONT END DEVELOPMENT",
    title: "JAVASCRIPT & TYPESCRIPT",
    proficiency: "92%",
    description: "Type-safe, modern TypeScript and ECMAScript architectures delivering reactive user interfaces, silky animations, and reliable state workflows.",
    icon: "/images/bronx/js.png",
  },
];

export function FavouriteStackSection() {
  return (
    <section className="sticky-split-sec" id="stack">
      <div className="sticky-split-row">
        <div className="sticky-split-left">
          <h3>
            FAVOURITE <br /> STACK
          </h3>
        </div>

        <div className="sticky-split-right">
          {stacks.map((item, idx) => (
            <div key={idx} className="favourite-stack-box">
              <div className="favourite-stack-icon">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <div className="favourite-stack-content">
                <h4>{item.category}</h4>
                <div className="favourite-stack-body">
                  <h4>
                    {item.title} <span>{item.proficiency}</span>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
