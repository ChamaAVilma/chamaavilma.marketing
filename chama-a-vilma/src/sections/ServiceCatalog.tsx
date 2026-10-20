import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { services } from "../data/services";
import "./ServiceCatalog.css";
import { getWhatsAppUrl } from "../data/contact";

function requestService(message: string) {
  window.open(
    getWhatsAppUrl(message),
    "_blank",
    "noopener,noreferrer",
  );
}

export function ServiceCatalog() {
  const [filter, setFilter] = useState("Todos");

  const categories = [
    "Todos",
    ...new Set(services.map((service) => service.category)),
  ];

  const visibleServices =
    filter === "Todos"
      ? services
      : services.filter((service) => service.category === filter);

  return (
    <section className="catalog section" id="catalogo">
      <div className="container">
        <header className="catalog-heading">
          <span className="eyebrow">Nosso catálogo</span>

          <h2>
            Um profissional para cada <span>necessidade</span>
          </h2>

          <p>
            Da rotina da casa aos eventos e às empresas, conte o que você
            precisa. Vamos consultar as opções de profissionais para o seu
            serviço.
          </p>
        </header>

        <div className="catalog-filters" aria-label="Filtrar serviços">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                filter === category
                  ? "catalog-filter is-active"
                  : "catalog-filter"
              }
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th scope="col">Serviço</th>
                <th scope="col">O que você precisa saber</th>
                <th scope="col">Investimento</th>
                <th scope="col">
                  <span className="visually-hidden">Solicitar informações</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {visibleServices.map((service, index) => (
                <tr
                  key={service.id}
                  className="catalog-row"
                  style={{
                    animationDelay: `${Math.min(index, 8) * 45}ms`,
                  }}
                >
                  <th scope="row">
                    <span className="catalog-service-name">{service.name}</span>
                    <span className="catalog-category">{service.category}</span>
                  </th>

                  <td>
                    <ul className="catalog-details">
                      {service.details.map((detail) => (
                        <li key={detail}>
                          <Check size={15} aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    <span className="catalog-price">
                      {service.price === null
                        ? "Sob consulta"
                        : service.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                    </span>

                    <span className="catalog-price-description">
                      {service.priceDescription}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="catalog-cta"
                      onClick={() => requestService(service.whatsappMessage)}
                      aria-label={`Consultar ${service.name} pelo WhatsApp`}
                    >
                      <MessageCircle size={17} />
                      <span>Consultar</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="catalog-note">
          Os serviços dependem de consulta de disponibilidade e confirmação das
          condições de contratação.
        </p>
      </div>
    </section>
  );
}
