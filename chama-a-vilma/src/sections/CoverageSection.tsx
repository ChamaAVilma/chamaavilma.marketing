
import { MapPin } from "lucide-react";

import { Reveal } from "../components/Reveal";

const cities = [
  "São Paulo",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Diadema",
  "Mauá",
  "Ribeirão Pires",
  "Rio Grande da Serra",
];

const revealDirections = ["left", "bottom", "right", "top"] as const;

export function CoverageSection() {
  return (
    <section className="coverage section" id="atendimento">
      <div className="container coverage-content">
        <Reveal direction="bottom">
          <div className="coverage-intro">
            <div className="coverage-icon">
              <MapPin size={34} aria-hidden="true" />
            </div>

            <span className="eyebrow">Onde estamos</span>

            <h2>
              São Paulo e Grande <span>ABC</span>
            </h2>

            <p>
              Consulte a disponibilidade de atendimento para seu endereço na
              cidade de São Paulo e nos municípios do Grande ABC.
            </p>
          </div>
        </Reveal>

        <div className="city-list">
          {cities.map((city, index) => (
            <Reveal
              key={city}
              direction={revealDirections[index % revealDirections.length]}
              delay={(index % 4) * 70}
              className="city-reveal"
            >
              <span className="city-chip">
                <MapPin size={14} aria-hidden="true" />
                {city}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
