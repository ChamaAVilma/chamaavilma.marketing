
import {
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Reveal } from "../components/Reveal";

import "./BenefitsSection.css";

const benefits = [
  {
    title: "Atendimento próximo",
    description:
      "Contato direto para entender sua necessidade e orientar sua solicitação.",
    icon: ShieldCheck,
  },
  {
    title: "Para diferentes ambientes",
    description:
      "Opções de atendimento para residências, empresas e diferentes necessidades.",
    icon: Sparkles,
  },
  {
    title: "Solicitação simplificada",
    description:
      "Entre em contato pelo WhatsApp para consultar serviços e disponibilidade.",
    icon: Clock3,
  },
];

const revealDirections = ["left", "bottom", "right", "top"] as const;

export function BenefitsSection() {
  return (
    <section className="benefits section" id="empresas">
      <div className="container">
        <Reveal direction="top">
          <div className="section-heading">
            <span className="eyebrow">Por que conhecer a Vilma?</span>

            <h2>
              Simplicidade do primeiro
              <br />
              contato ao <span>atendimento</span>
            </h2>
          </div>
        </Reveal>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={benefit.title}
                direction={revealDirections[index % revealDirections.length]}
                delay={index * 100}
                className="benefit-reveal"
              >
                <article className="benefit-item">
                  <Icon
                    className="benefit-icon"
                    size={28}
                    aria-hidden="true"
                  />

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
