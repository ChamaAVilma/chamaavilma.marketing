# Chama a Vilma

Site institucional e catálogo de serviços para a marca **Chama a
Vilma**, desenvolvido com React, TypeScript e Vite. O projeto apresenta
os serviços oferecidos, organiza as informações em seções reutilizáveis
e direciona pessoas interessadas ao atendimento pelo WhatsApp.

> **Status da documentação:** esta documentação descreve a estrutura e
> os comandos identificados no projeto. Antes de publicar o README no
> repositório, confirme o endereço canônico de produção após concluir a
> validação do domínio e do certificado SSL.

## Sumário

-   [Visão geral](#visão-geral)
-   [Funcionalidades](#funcionalidades)
-   [Tecnologias](#tecnologias)
-   [Arquitetura e organização](#arquitetura-e-organização)
-   [Pré-requisitos](#pré-requisitos)
-   [Instalação e execução](#instalação-e-execução)
-   [Scripts disponíveis](#scripts-disponíveis)
-   [Como manter o catálogo](#como-manter-o-catálogo)
-   [Contato pelo WhatsApp](#contato-pelo-whatsapp)
-   [Estilos e responsividade](#estilos-e-responsividade)
-   [Build e publicação](#build-e-publicação)
-   [Verificações de qualidade](#verificações-de-qualidade)
-   [Limitações e melhorias futuras](#limitações-e-melhorias-futuras)

## Visão geral

O Chama a Vilma é um site de apresentação de serviços voltado a clientes
residenciais e empresariais. A interface reúne informações sobre os
serviços e permite iniciar uma conversa pelo WhatsApp com uma mensagem
contextualizada.

O projeto é uma aplicação de front-end. No estado documentado, o
`package.json` não define uma API ou um servidor de back-end próprio.

**Endereço de produção:** inserir aqui a URL canônica depois de
confirmar o domínio e o SSL.

**Hospedagem:** Vercel, conforme a configuração de publicação do
projeto.

## Funcionalidades

-   Apresentação institucional da marca.
-   Seções dedicadas à apresentação dos serviços, benefícios, cobertura
    e contato.
-   Catálogo de serviços organizado por dados tipados.
-   Exibição de preço fixo quando definido e indicação de consulta para
    serviços sem preço cadastrado.
-   Links para iniciar conversas pelo WhatsApp com mensagens
    pré-preenchidas.
-   Layout responsivo para diferentes tamanhos de tela.
-   Componentes reutilizáveis e animações de entrada com suporte à
    preferência de movimento reduzido do sistema.
-   Ícones por meio da biblioteca `lucide-react`.

> A disponibilidade efetiva dos serviços, os valores e as condições
> comerciais devem ser confirmados com a empresa. Os dados do site são
> informativos e não representam, por si só, confirmação de agendamento.

## Tecnologias

  Tecnologia     Uso
  -------------- ----------------------------------------------------------
  React 19       Construção da interface baseada em componentes
  TypeScript     Tipagem estática do código
  Vite 8         Servidor de desenvolvimento e build
  CSS            Estilos globais, estilos de componentes e responsividade
  Lucide React   Ícones
  Oxlint         Análise estática e lint
  Vercel         Hospedagem e publicação

As versões exatas instaladas podem variar de acordo com o arquivo de
lock e a instalação local. As faixas declaradas de dependências estão em
`package.json`.

## Arquitetura e organização

A aplicação separa componentes reutilizáveis, seções da página, dados e
estilos globais. A estrutura relevante é:

``` text
src/
├── assets/
│   └── hero.png
├── components/
│   ├── Button.tsx
│   ├── Button.css
│   ├── Header.tsx
│   ├── Header.css
│   ├── Reveal.tsx
│   ├── Reveal.css
│   ├── SiteFooter.tsx
│   └── SiteFooter.css
├── data/
│   ├── contact.ts
│   ├── locations.ts
│   └── services.ts
├── sections/
│   ├── BenefitsSection.tsx
│   ├── BenefitsSection.css
│   ├── ContactSection.tsx
│   ├── ContactSection.css
│   ├── CoverageSection.tsx
│   ├── CoverageSection.css
│   ├── FeaturedServicesSection.tsx
│   ├── FeaturedServicesSection.css
│   ├── HeroSection.tsx
│   ├── HeroSection.css
│   ├── ServiceCatalog.tsx
│   └── ServiceCatalog.css
├── styles/
│   ├── section-headings.css
│   └── variables.css
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

### Responsabilidades principais

-   **`main.tsx`**: inicializa a aplicação React e importa os estilos
    globais.
-   **`App.tsx`**: compõe as seções da página na ordem em que aparecem.
-   **`components/`**: reúne elementos reutilizáveis, como cabeçalho,
    botão, animação de entrada e rodapé.
-   **`sections/`**: contém as seções funcionais e visuais da página.
-   **`data/services.ts`**: define o tipo `Service` e os dados do
    catálogo.
-   **`data/contact.ts`**: centraliza o número de WhatsApp e a função
    que gera URLs com mensagens pré-preenchidas.
-   **`data/locations.ts`**: arquivo existente reservado a dados de
    localização; confirme sua utilização antes de tratá-lo como fonte
    oficial da lista de cidades.
-   **`styles/variables.css`**: reúne variáveis de design.
-   **`styles/section-headings.css`**: concentra estilos compartilhados
    de títulos de seção.
-   **`index.css`**: contém estilos globais, incluindo regras de foco.
-   **`App.css`**: mantém estilos compartilhados da página, como
    identidade visual, rótulos e alguns estados de interação.

Os estilos específicos dos componentes e das seções ficam, em geral, em
arquivos CSS próximos aos respectivos arquivos TSX. Essa convenção
facilita localizar e manter o código sem concentrar toda a apresentação
em um único arquivo.

## Pré-requisitos

Instale uma versão de **Node.js compatível com a versão do Vite
declarada no projeto**, junto com o npm. Para verificar as versões
disponíveis no terminal:

``` bash
node --version
npm --version
```

## Instalação e execução

1.  Abra o terminal na pasta raiz do projeto.

2.  Instale as dependências:

    ``` bash
    npm install
    ```

3.  Inicie o servidor de desenvolvimento:

    ``` bash
    npm run dev
    ```

4.  Abra no navegador o endereço local informado pelo Vite no terminal.

Para interromper o servidor, use `Ctrl + C` no terminal.

## Scripts disponíveis

Os comandos abaixo estão declarados em `package.json`:

  -----------------------------------------------------------------------
  Comando                             Finalidade
  ----------------------------------- -----------------------------------
  `npm run dev`                       Inicia o servidor de
                                      desenvolvimento do Vite

  `npm run build`                     Executa a verificação de TypeScript
                                      (`tsc -b`) e gera o build de
                                      produção com Vite

  `npm run lint`                      Executa o Oxlint

  `npm run preview`                   Inicia uma pré-visualização local
                                      do build de produção
  -----------------------------------------------------------------------

Fluxo recomendado antes de publicar alterações:

``` bash
npm run lint
npm run build
npm run preview
```

O lint e o build verificam aspectos diferentes. Um build bem-sucedido
não significa necessariamente que o lint não apresentará avisos.

## Como manter o catálogo

Os serviços são declarados em `src/data/services.ts`. Cada item segue o
tipo `Service`, que contém:

-   `id`: identificador do serviço;
-   `name`: nome apresentado na interface;
-   `category`: categoria usada para organização;
-   `price`: preço numérico ou `null` quando não há preço fixo
    cadastrado;
-   `priceDescription`: texto que acompanha o preço;
-   `details`: lista de informações do serviço;
-   `whatsappMessage`: mensagem inicial sugerida ao abrir o WhatsApp.

### Adicionar ou editar um serviço

1.  Abra `src/data/services.ts`.
2.  Adicione ou edite um objeto dentro do array `services`.
3.  Use um `id` único e estável.
4.  Preencha os campos de acordo com o tipo `Service`.
5.  Se o valor não for fixo, mantenha `price: null` e descreva a
    condição em `priceDescription`.
6.  Escreva uma mensagem clara em `whatsappMessage`.
7.  Execute `npm run build` e confira o catálogo no navegador.

Exemplo ilustrativo de um serviço sob consulta:

``` ts
{
  id: "exemplo-servico",
  name: "Nome do serviço",
  category: "Categoria",
  price: null,
  priceDescription: "sob consulta",
  details: ["Consulte condições e disponibilidade."],
  whatsappMessage:
    "Olá! Gostaria de informações sobre este serviço.",
}
```

O exemplo é apenas um modelo de estrutura, não um serviço comercial
confirmado.

## Contato pelo WhatsApp

O arquivo `src/data/contact.ts` exporta:

-   `WHATSAPP_NUMBER`: número utilizado para criar os links;
-   `getWhatsAppUrl(message)`: função que codifica a mensagem e gera uma
    URL no formato `https://wa.me/`.

As seções de contato e o catálogo reutilizam essa função. Para alterar o
número, edite a constante centralizada e teste os links em ambas as
áreas.

Use o número no formato internacional esperado pelo WhatsApp, composto
pelo código do país, código de área e número, sem espaços, sinais ou
pontuação. Confirme que o número pertence ao canal oficial da empresa
antes de publicar.

## Estilos e responsividade

A organização CSS segue estas convenções:

-   estilos globais em `index.css`;
-   variáveis de design em `styles/variables.css`;
-   títulos compartilhados em `styles/section-headings.css`;
-   estilos próximos aos componentes e às seções;
-   media queries nos arquivos responsáveis pelos elementos afetados;
-   estilos de animação em `components/Reveal.css`.

Ao alterar CSS:

1.  Prefira editar o arquivo responsável pelo componente ou pela seção.
2.  Antes de criar um seletor novo, procure por regras existentes para
    evitar duplicações.
3.  Preserve os estilos de foco por teclado.
4.  Respeite a preferência de movimento reduzido do sistema.
5.  Confira o layout em larguras de desktop e celular.
6.  Execute `npm run build` após a alteração.

## Build e publicação

### Gerar o build

``` bash
npm run build
```

O Vite gera os arquivos de produção no diretório `dist/`. Esse diretório
é um artefato gerado; não deve ser tratado como código-fonte principal.

### Pré-visualizar localmente

``` bash
npm run preview
```

Use o endereço informado pelo Vite para verificar a versão compilada.

### Publicação na Vercel

O projeto utiliza Vercel para hospedagem. Em uma publicação típica de
aplicação Vite, a configuração de build usa `npm run build` e a pasta de
saída é `dist`.

Antes de publicar:

1.  Confirme que o build termina sem erros.
2.  Verifique as configurações do projeto na Vercel.
3.  Confirme o domínio principal e o domínio `www`, se ambos forem
    utilizados.
4.  Verifique o certificado SSL/HTTPS e escolha uma única URL canônica
    para divulgar.
5.  Teste os links de WhatsApp, o catálogo e o layout em dispositivos
    móveis.
6.  Confirme que a versão publicada corresponde ao código esperado.

O status atual do domínio e do certificado deve ser validado no painel
da Vercel antes de considerar a configuração HTTPS concluída.

## Verificações de qualidade

No estado verificado durante a preparação desta documentação:

-   `npm run build` foi executado com sucesso.
-   `npm run lint` terminou com **0 erros e 2 avisos**.

Os avisos reportados pelo Oxlint estavam relacionados a:

1.  `new Date().getFullYear()` no render do rodapé
    (`src/components/SiteFooter.tsx`);
2.  chamada a `setIsVisible(true)` dentro de um efeito no componente de
    animação (`src/components/Reveal.tsx`).

Esses avisos não impediram a execução do lint nem o build observado, mas
devem ser reavaliados. O comportamento da aplicação também deve ser
verificado manualmente; não há um script de testes automatizados
declarado no `package.json` fornecido.

### Checklist manual antes de publicar

-   [ ] A página abre sem erros no console do navegador.
-   [ ] O cabeçalho e o menu móvel funcionam.
-   [ ] Os botões do WhatsApp abrem o número correto e incluem a
    mensagem esperada.
-   [ ] Os dados e preços dos serviços estão atualizados.
-   [ ] As cidades e a área de atendimento estão corretas.
-   [ ] O layout foi conferido em desktop e celular.
-   [ ] A navegação por teclado apresenta foco visível.
-   [ ] As animações respeitam a preferência de movimento reduzido.
-   [ ] O build de produção foi validado.
-   [ ] O domínio canônico e o HTTPS foram conferidos na Vercel.

## Limitações e melhorias futuras

Os itens abaixo são possibilidades de evolução, não funcionalidades que
esta documentação afirma já estarem implementadas:

-   centralizar e validar os dados de cobertura geográfica, caso ainda
    estejam definidos diretamente em um componente;
-   resolver os avisos atuais do Oxlint;
-   adicionar testes automatizados para funções de dados e componentes
    importantes;
-   criar uma documentação de contribuição e um fluxo de revisão por
    pull request, caso o projeto passe a ser mantido por uma equipe;
-   adicionar capturas de tela atualizadas ao README depois de validar a
    versão publicada.

## Manutenção

Ao concluir uma alteração, revise os arquivos modificados, execute o
lint e o build e teste manualmente o comportamento afetado. Mantenha
este README sincronizado com o código: sempre que comandos, estrutura,
funcionalidades ou processo de publicação mudarem, atualize as seções
correspondentes.
