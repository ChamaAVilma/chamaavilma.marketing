
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Reveal } from "../components/Reveal";
import "./HeroSection.css";

export function HeroSection() {
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
              <a href="#contato" className="button button--primary">
                Solicitar orçamento
                <ArrowRight size={18} aria-hidden="true" />
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
