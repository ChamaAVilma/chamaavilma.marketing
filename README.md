# Chama a Vilma 🧹 ✨

O **Chama a Vilma** é um sistema web institucional de alta performance para a solicitação de serviços de limpeza e conservação residencial e empresarial. A plataforma apresenta o catálogo de serviços oferecidos, os diferenciais da marca, áreas de cobertura geográfica e redireciona os clientes diretamente para um atendimento personalizado via WhatsApp.

---

## 🚀 Tecnologias e Dependências

A aplicação foi desenvolvida utilizando a seguinte stack tecnológica:

* **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces de usuário reativas e componentizadas.
* **[TypeScript 6](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e previsibilidade no código.
* **[Vite 8](https://vitejs.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento otimizado.
* **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones vetoriais modernos e acessíveis.
* **[Oxlint](https://github.com/oxc-project/oxc)**: Linter de altíssima velocidade para análise estática do código.

---

## 💻 Funcionalidades Principais

* **Hero Section:** Apresentação da marca, proposta de valor e chamadas de ação (CTAs) principais.
* **Catálogo de Serviços (`ServiceCatalog`):** Listagem detalhada dos tipos de atendimento (residencial, pós-obra, empresarial, etc.).
* **Diferenciais e Benefícios:** Destaque para o atendimento próximo e facilidade de agendamento.
* **Mapeamento de Cobertura Geográfica:** Exibição interativa das cidades atendidas na região de **São Paulo** e no **Grande ABC** (*Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra*).
* **Integração com WhatsApp:** Redirecionamento dinâmico com mensagem pré-formatada para solicitação direta de orçamentos.
* **Animações de Scroll (`Reveal`):** Transições e efeitos visuais ao rolar a página (*scroll-reveal*).

---

## 📁 Estrutura de Pastas do Projeto

```text
chama-a-vilma/
├── public/
│   └── images/              # Imagens dos serviços e da marca
├── src/
│   ├── components/          # Componentes reutilizáveis (Header, Button, Reveal, etc.)
│   ├── data/                # Utilitários de contato e links (ex: getWhatsAppUrl)
│   ├── sections/            # Seções complexas da landing page (ex: ServiceCatalog)
│   ├── App.css              # Estilização global da aplicação
│   ├── App.tsx              # Componente principal contendo a estrutura da landing page
│   └── main.tsx             # Ponto de entrada da aplicação React
├── package.json             # Scripts e dependências do projeto
├── tsconfig.json            # Configurações do compilador TypeScript
└── vite.config.ts           # Configurações do bundler Vite

---

## 🛠️ Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   npm run dev

   Desenvolvido por Pedro Henrique A. Medeiros