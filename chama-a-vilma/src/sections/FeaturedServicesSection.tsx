
import { ArrowRight } from "lucide-react";

import { Reveal } from "../components/Reveal";

import "./FeaturedServicesSection.css";

const services = [
  {
    title: "Limpeza residencial",
    description:
      "Cuidado com casas e apartamentos, respeitando as necessidades de cada ambiente.",
    icon: House,
    image: "/images/limpeza-sala.jpg",
    imageAlt: "Sala residencial durante um serviço de limpeza",
    href: "#contato",
  },
  {
    title: "Limpeza empresarial",
    description:
      "Mais cuidado com escritórios, lojas e espaços de trabalho.",
    icon: Building2,
    image: "/images/limpeza-cozinha.jpg",
    imageAlt: "Ambiente sendo cuidado durante um serviço de limpeza",
    href: "#contato",
  },
];

const revealDirections = ["left", "bottom", "right", "top"] as const;

import { Building2, House } from "lucide-react";

export function FeaturedServicesSection() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <Reveal direction="bottom">
          <div className="section-heading">
            <span className="eyebrow">Nossas soluções</span>

            <h2>
              Cuidado para cada <span>ambiente</span>
            </h2>

            <p>
              Conheça algumas das nossas principais categorias de atendimento
              e consulte as condições para o seu espaço.
            </p>
          </div>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const direction =
              revealDirections[index % revealDirections.length];

            return (
              <Reveal
                key={service.title}
                direction={direction}
                delay={index * 100}
                className="service-reveal"
              >
                <article className="service-card">
                  <img
                    className="service-photo"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    width={720}
                    height={480}
                  />

                  <div className="service-icon">
                    <Icon size={30} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href={service.href} className="text-link">
                    Consultar atendimento
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
