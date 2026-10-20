
export type Service = {
  id: string;
  name: string;
  category: string;
  price: number | null;
  priceDescription: string;
  details: string[];
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    id: "churrasqueiro",
    name: "Churrasqueiro",
    category: "Eventos",
    price: 480,
    priceDescription: "por diária",
    details: [
      "Uniforme incluso",
      "Tábua e facas inclusas",
      "Rechaud com reposição constante",
    ],
    whatsappMessage:
      "Olá! Gostaria de informações sobre o serviço de churrasqueiro, a diária de R$ 480,00 e a disponibilidade.",
  },
  {
    id: "personal-organizer",
    name: "Personal Organizer",
    category: "Organização",
    price: 480,
    priceDescription: "por diária, até 8 horas",
    details: [
      "Atendimento de até 8 horas",
      "Envio de fotos do local ou dos itens para avaliação inicial",
    ],
    whatsappMessage:
      "Olá! Tenho interesse no serviço de Personal Organizer, com diária de R$ 480,00. Gostaria de saber como prosseguir. Posso enviar fotos do local ou dos itens que desejo organizar.",
  },
  {
    id: "faxineiras-diaristas",
    name: "Faxineiras e diaristas",
    category: "Limpeza",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte valores e disponibilidade."],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações e orçamento para faxineira ou diarista.",
  },
  {
    id: "lavadeiras",
    name: "Lavadeiras",
    category: "Cuidados com roupas",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte condições de atendimento."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para o serviço de lavadeira.",
  },
  {
    id: "passadeiras",
    name: "Passadeiras",
    category: "Cuidados com roupas",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte condições de atendimento."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para o serviço de passadeira.",
  },
  {
    id: "cozinheiras",
    name: "Cozinheiras",
    category: "Culinária",
    price: null,
    priceDescription: "sob consulta",
    details: ["Informe sua necessidade para consultar o atendimento."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para contratar uma cozinheira.",
  },
  {
    id: "garcons",
    name: "Garçons e garçonetes",
    category: "Eventos",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte disponibilidade para seu evento."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para garçons ou garçonetes.",
  },
  {
    id: "recepcionistas",
    name: "Recepcionistas",
    category: "Empresas e eventos",
    price: null,
    priceDescription: "sob consulta",
    details: ["Atendimento conforme a necessidade do serviço."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para recepcionista.",
  },
  {
    id: "porteiros",
    name: "Porteiros",
    category: "Empresas",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte condições e disponibilidade."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para serviço de portaria.",
  },
  {
    id: "servicos-gerais",
    name: "Auxiliares de serviços gerais",
    category: "Empresas",
    price: null,
    priceDescription: "sob consulta",
    details: ["Consulte as opções de atendimento."],
    whatsappMessage:
      "Olá! Gostaria de informações e orçamento para auxiliar de serviços gerais.",
  },
  {
    id: "apoio",
    name: "Apoio residencial e empresarial",
    category: "Outros serviços",
    price: null,
    priceDescription: "sob consulta",
    details: ["Conte o que precisa para avaliarmos a solicitação."],
    whatsappMessage:
      "Olá! Preciso de um profissional para apoio residencial ou empresarial. Gostaria de consultar as opções disponíveis.",
  },
];
