import fs from "node:fs";

const cssPath = "app/globals.css";
let css = fs.readFileSync(cssPath, "utf8");

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
    text-align: center !important;
    color: #494441 !important;
    background: none !important;
    animation: none !important;
  }
}
`;

fs.writeFileSync(cssPath, css, "utf8");
console.log("Alla UI overrides applied.");
