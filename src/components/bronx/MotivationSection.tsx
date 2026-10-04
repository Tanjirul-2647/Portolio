import React from "react";
import Image from "next/image";

export function MotivationSection() {
  return (
    <section className="motivation-sec" id="motivation">
      <div className="motivation-row">
        <div className="left">
          <h3>MOTIVATION</h3>
        </div>

        <div className="right">
          <div className="motivation-content">
            <p>
              More than a job, digital design and engineering is an outlet for vision. You have the power to take an idea from concept to reality. Your sites can tell a story, <i>&quot;show off a brand&quot;</i>, or change lives. As the digital realm expands, so do the possibilities. And nothing beats the rush of seeing your live sites in action.
            </p>

            <p>
              Blending art and technology enables creating <i>&quot;digital experiences&quot;</i> that inform, entertain, and inspire. Every day brings a new horizon — from sculpting typographic rhythm on canvas to programming fluid page architectures. Modern craft keeps you on your toes!
            </p>

            <div className="signature-wrap">
              <Image
                src="/signature.png"
                alt="Tanjirul Islam signature"
                width={240}
                height={127}
                className="signature"
                style={{ width: "auto", height: 75 }}
              />
              <div className="signature-line" />
              <span className="signature-label">Signature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
