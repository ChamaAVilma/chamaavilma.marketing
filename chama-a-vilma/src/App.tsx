
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  House,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Reveal } from "./components/Reveal";
import { ServiceCatalog } from "./sections/ServiceCatalog";
import { getWhatsAppUrl } from "./data/contact";

import "./App.css";

const WHATSAPP_MESSAGE =
  "Olá! Conheci a Chama a Vilma pelo site e gostaria de solicitar informações sobre os serviços e um orçamento.";

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


function HeroSection() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <Reveal direction="left" className="hero-content-reveal">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Cuidado que faz a diferença
            </span>

            <h1>
              Seu espaço limpo.
              <br />
              Sua rotina mais <span>leve.</span>
            </h1>

            <p className="hero-description">
              Conheça a Chama a Vilma e encontre serviços de limpeza para sua
              casa ou empresa. Entre em contato para consultar as opções
              disponíveis para você.
            </p>

            <div className="hero-actions">
              <a
                href="#contato"
                className="button button--primary"
              >
                Solicitar orçamento
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                href="#servicos"
                className="button button--secondary"
              >
                Conhecer serviços
              </a>
            </div>

            <div className="hero-note">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Atendimento residencial e empresarial</span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="hero-visual-reveal">
          <div className="hero-visual">
            <figure className="hero-photo">
              <img
                src="/images/diarista-principal.jpeg"
                alt="Profissional realizando a limpeza de uma residência"
                fetchPriority="high"
                width={900}
                height={1100}
              />

              <figcaption className="hero-photo-caption">
                <span className="caption-mark" aria-hidden="true">
                  <Sparkles size={20} />
                </span>

                <span>
                  <strong>Cuidado em cada detalhe</strong>
                  <small>Um ambiente limpo faz diferença.</small>
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedServicesSection() {
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

function BenefitsSection() {
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

function CoverageSection() {
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

function ContactSection() {
  function handleWhatsAppClick() {
    window.open(
      getWhatsAppUrl(WHATSAPP_MESSAGE),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="contact section" id="contato">
      <div className="container">
        <Reveal direction="bottom">
          <div className="contact-panel">
            <span className="eyebrow">Vamos conversar?</span>

            <h2>
              Seu próximo passo começa
              <br />
              com uma <span>mensagem.</span>
            </h2>

            <p>
              Conte o que você precisa e consulte os serviços e a
              disponibilidade de atendimento.
            </p>

            <Button onClick={handleWhatsAppClick}>
              Falar pelo WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </Button>

            <small>
              A mensagem será aberta no WhatsApp para você revisar e enviar.
            </small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a href="#inicio" className="brand footer-brand">
          <span className="brand-icon">
            <Sparkles size={22} aria-hidden="true" />
          </span>

          <span className="brand-text">
            <strong>Chama a Vilma</strong>
            <small>Limpeza e conservação</small>
          </span>
        </a>

        <p>Limpeza e organização para diferentes ambientes.</p>

        <span>
          © {new Date().getFullYear()} Chama a Vilma.
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <Reveal direction="bottom">
          <ServiceCatalog />
        </Reveal>

        <FeaturedServicesSection />

        <BenefitsSection />

        <CoverageSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
