
import { ArrowRight } from "lucide-react";

import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { getWhatsAppUrl } from "../data/contact";

const WHATSAPP_MESSAGE =
  "Olá! Conheci a Chama a Vilma pelo site e gostaria de solicitar informações sobre os serviços e um orçamento.";

export function ContactSection() {
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
