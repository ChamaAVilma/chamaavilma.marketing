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
import "./App.css";

const services = [
  {
    title: "Limpeza residencial",
    description:
      "Cuidado com casas e apartamentos, respeitando as necessidades de cada ambiente.",
    icon: House,
    image: "/images/limpeza-sala.jpg",
    imageAlt: "Sala residencial sendo cuidada durante a limpeza",
    href: "#contato",
  },
  {
    title: "Limpeza empresarial",
    description: "Mais cuidado com escritórios, lojas e espaços de trabalho.",
    icon: Building2,
    image: "/images/limpeza-cozinha.jpg",
    imageAlt: "Superfície de trabalho sendo limpa por uma profissional",
    href: "#contato",
  },
];

const benefits = [
  {
    title: "Atendimento próximo",
    description:
      "Contato direto para entender sua necessidade e orientar a solicitação.",
    icon: ShieldCheck,
  },
  {
    title: "Para diferentes ambientes",
    description:
      "Uma apresentação clara das opções para residências e empresas.",
    icon: Sparkles,
  },
  {
    title: "Solicitação simplificada",
    description: "Fale pelo WhatsApp e consulte as condições de atendimento.",
    icon: Clock3,
  },
];

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero section" id="inicio">
          <div className="container hero-grid">
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
                <a href="#contato" className="button button--primary">
                  Solicitar orçamento
                  <ArrowRight size={18} />
                </a>

                <a href="#servicos" className="button button--secondary">
                  Conhecer serviços
                </a>
              </div>

              <div className="hero-note">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Atendimento residencial e empresarial</span>
              </div>
            </div>

            <div className="hero-visual">
              <figure className="hero-photo">
                <img
                  src="/images/diarista-principal.jpg"
                  alt="Profissional realizando a limpeza de uma residência"
                  fetchPriority="high"
                  width="900"
                  height="1100"
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
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nossas soluções</span>

              <h2>
                Cuidado para cada <span>ambiente</span>
              </h2>

              <p>
                Conheça as principais categorias de atendimento e consulte as
                condições para o seu espaço.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.title}>
                    <img
                      className="service-photo"
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      width="720"
                      height="480"
                    />
                    <div className="service-icon">
                      <Icon size={30} />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <a href={service.href} className="text-link">
                      Consultar atendimento
                      <ArrowRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="benefits section" id="empresas">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Por que conhecer a Vilma?</span>

              <h2>
                Simplicidade do primeiro
                <br />
                contato ao <span>atendimento</span>
              </h2>
            </div>

            <div className="benefit-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article className="benefit-item" key={benefit.title}>
                    <Icon className="benefit-icon" size={28} />

                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="coverage section" id="atendimento">
          <div className="container coverage-content">
            <div className="coverage-icon">
              <MapPin size={34} />
            </div>

            <span className="eyebrow">Onde estamos</span>

            <h2>
              São Paulo e Grande <span>ABC</span>
            </h2>

            <p>
              Consulte o atendimento para seu endereço na cidade de São Paulo e
              nos municípios do Grande ABC.
            </p>

            <div className="city-list">
              {[
                "São Paulo",
                "Santo André",
                "São Bernardo do Campo",
                "São Caetano do Sul",
                "Diadema",
                "Mauá",
                "Ribeirão Pires",
                "Rio Grande da Serra",
              ].map((city) => (
                <span className="city-chip" key={city}>
                  <MapPin size={14} />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="container">
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

              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/5511924836690?text=" +
                      encodeURIComponent(
                        "Olá! Conheci a Chama a Vilma pelo site e gostaria de solicitar informações sobre os serviços e um orçamento.",
                      ),
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                Falar pelo WhatsApp
                <ArrowRight size={18} />
              </Button>

              <small>O envio da mensagem é feito por você no WhatsApp.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-icon">
              <Sparkles size={22} />
            </span>

            <span className="brand-text">
              <strong>Chama a Vilma</strong>
              <small>Limpeza e conservação</small>
            </span>
          </a>

          <p>Limpeza e organização para diferentes ambientes.</p>

          <span>© {new Date().getFullYear()} Chama a Vilma.</span>
        </div>
      </footer>
    </>
  );
}
