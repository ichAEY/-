import fs from "node:fs";

const cssPath = "app/globals.css";
const componentPath = "app/mobile-claytone.tsx";
let css = fs.readFileSync(cssPath, "utf8");
let source = fs.readFileSync(componentPath, "utf8");

// Remove the last hidden client-specific label inherited from the canonical base.
source = source.replaceAll("Бесконечная галерея работ Нонны", "Бесконечная галерея работ Аллы");

css += `

/* Alla-only refinements requested after review. */
.mct-tabs-scroll .mct-tab {
  font-weight: 600 !important;
  letter-spacing: .002em !important;
}

@media (max-width: 767px) {
  .mct-tabs-scroll .mct-tab {
    font-size: 13px !important;
  }
}

@media (min-width: 768px) {
  .mct-tabs-scroll .mct-tab {
    font-size: clamp(11px, .86vw, 13px) !important;
  }

  .tanem-skill-highlight {
    grid-column: auto !important;
    width: auto !important;
    white-space: normal !important;
    text-align: left !important;
    color: #494441 !important;
    background: none !important;
    animation: none !important;
  }
}
`;

fs.writeFileSync(componentPath, source, "utf8");
fs.writeFileSync(cssPath, css, "utf8");
console.log("Alla UI overrides applied.");
