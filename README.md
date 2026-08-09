# 🐷 Porquin Finance

> Controle suas finanças de forma simples, privada e organizada.

O **Porquin Finance** é uma aplicação web de controle financeiro pessoal desenvolvida para ajudar usuários a organizarem receitas, despesas, metas, cofrinhos e compromissos financeiros de maneira simples e intuitiva.

A aplicação funciona diretamente no dispositivo do usuário e não exige conta, login, servidor ou banco de dados externo.

Os dados financeiros são armazenados localmente no navegador, oferecendo uma experiência rápida, privada e com suporte a funcionamento offline.

---

## ✨ Funcionalidades

### 💰 Controle financeiro

- Cadastro de receitas e despesas
- Edição e exclusão de movimentações
- Controle de movimentações pagas e pendentes
- Parcelamento de despesas
- Movimentações recorrentes
- Categorias personalizadas
- Histórico de movimentações
- Pesquisa e filtros

### 📊 Dashboard

- Patrimônio líquido
- Receitas do mês
- Despesas do mês
- Saldo mensal
- Comparação com meses anteriores
- Gráfico de receitas e despesas
- Gastos por categoria
- Indicador de saúde financeira
- Insights financeiros automáticos

### 🎯 Metas e Cofrinhos

- Criação de metas financeiras
- Definição de valor objetivo
- Acompanhamento do progresso
- Adição e retirada de valores
- Cofrinhos para organização de reservas
- Indicadores visuais de progresso

### 📅 Calendário financeiro

- Cadastro de eventos financeiros
- Controle de vencimentos
- Valores pendentes
- Marcação de eventos como pagos

### 🏆 Conquistas

O aplicativo possui conquistas que acompanham a evolução financeira do usuário, como:

- Primeiro registro financeiro
- Primeira meta
- Primeiros R$ 1.000 reservados
- Mês com saldo positivo

### 🔐 Privacidade e segurança dos dados

- Dados armazenados localmente
- Nenhum banco de dados externo
- Nenhuma conta obrigatória
- Nenhum envio de informações financeiras para servidores
- Exportação de backup
- Importação de dados
- Backup de segurança
- Restauração de dados

### 🎨 Experiência

- Tema escuro
- Tema claro
- Interface responsiva
- Navegação adaptada para desktop e mobile
- Mascote oficial Porquin
- Aplicação instalável como PWA

---

## 📱 Progressive Web App

O Porquin Finance foi desenvolvido como **PWA (Progressive Web App)**.

Isso permite que a aplicação seja instalada em dispositivos compatíveis e utilizada de forma semelhante a um aplicativo tradicional.

O projeto inclui:

- 📲 Manifesto PWA
- 🐷 Ícones personalizados do Porquin
- 🖼️ Ícones 192×192 e 512×512
- 🎭 Ícone maskable
- 🍎 Apple Touch Icon
- 🌐 Favicon
- ⚡ Service Worker
- 📴 Funcionamento offline
- 📱 Modo `standalone`

---

## 🛠️ Tecnologias

O projeto utiliza:

- ⚛️ React 19
- 🔷 TypeScript
- ⚡ Vite 8
- 🎨 CSS
- 📱 Progressive Web App (PWA)
- 💾 LocalStorage
- ⚙️ Service Worker
- 🚀 GitHub Actions
- 🌐 GitHub Pages

A aplicação é totalmente **client-side** e não depende de backend para armazenar os dados financeiros.

---

## 📋 Pré-requisitos

Antes de executar o projeto, tenha instalado:

- Node.js 22.13 ou superior
- npm
- Git

O projeto pode ser executado em:

- Windows
- macOS
- Linux

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/VitorDutraMelo/porquin-finance.git
```

Entre na pasta:

```bash
cd porquin-finance
```

Instale as dependências:

```bash
npm install
```

---

## 💻 Executando localmente

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

Normalmente:

```text
http://localhost:5173/
```

---

## 📦 Build de produção

Gere o build:

```bash
npm run build
```

Os arquivos finais serão gerados em:

```text
dist/
```

A estrutura de produção inclui um `index.html` estático, permitindo a publicação da aplicação em serviços de hospedagem estática.

Para visualizar o build localmente:

```bash
npm run preview
```

---

## 🧪 Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Executa uma prévia do build |
| `npm run start` | Executa localmente a versão compilada |
| `npm run lint` | Analisa o código com ESLint |
| `npm test` | Executa os testes automatizados |

---

## 📁 Estrutura principal

```text
porquin-finance/
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
│
├── public/
│   ├── icons/
│   ├── manifest.webmanifest
│   ├── porquin-official.png
│   ├── service-worker.js
│   └── ...
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── globals.css
│
├── tests/
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── LICENSE
└── README.md
```

---

## 💾 Persistência dos dados

O Porquin Finance utiliza o **LocalStorage** do navegador.

Isso significa que informações como:

- movimentações;
- categorias;
- metas;
- cofrinhos;
- eventos;
- preferências;
- nome;
- tema;

permanecem armazenadas no dispositivo utilizado.

### ⚠️ Importante

Os dados estão vinculados ao navegador e ao dispositivo.

Antes de:

- limpar os dados do navegador;
- formatar o dispositivo;
- trocar de computador ou celular;
- remover dados do site;

é recomendado utilizar a função de **exportação de backup** disponível dentro do próprio Porquin Finance.

---

## 🔐 Privacidade

O Porquin Finance foi desenvolvido seguindo uma abordagem **local-first**.

A aplicação não necessita de:

- ❌ banco de dados externo;
- ❌ conta de usuário;
- ❌ login;
- ❌ servidor para armazenar dados financeiros;
- ❌ envio das movimentações financeiras para APIs externas.

Os registros financeiros permanecem localmente no navegador utilizado pelo usuário.

---

## 🌐 GitHub Pages

O projeto está preparado para publicação através do **GitHub Pages** utilizando GitHub Actions.

O Vite utiliza:

```ts
base: "/porquin-finance/"
```

permitindo que os assets sejam carregados corretamente no endereço do projeto.

O deploy é realizado automaticamente através do workflow:

```text
.github/workflows/deploy-pages.yml
```

Após um push para a branch `main`, o GitHub Actions executa o build e publica a pasta:

```text
dist/
```

---

## 🔄 Fluxo de deploy

```text
Push para main
       ↓
GitHub Actions
       ↓
npm ci
       ↓
npm run build
       ↓
dist/index.html
       ↓
GitHub Pages
       ↓
Porquin Finance 🐷
```

---

## 🧠 Arquitetura

O Porquin Finance utiliza uma arquitetura simples e adequada para uma aplicação financeira local:

```text
React
   ↓
TypeScript
   ↓
Vite
   ↓
LocalStorage
   ↓
PWA / Service Worker
   ↓
GitHub Pages
```

Não existe backend ou banco de dados necessário para o funcionamento das funcionalidades financeiras atuais.

---

## 🐷 Sobre o Porquin

O Porquin é o mascote oficial do projeto.

Ele representa a proposta principal da aplicação:

> **Organizar o dinheiro de maneira simples, leve e acessível.**

O mascote faz parte da identidade visual do aplicativo, incluindo a experiência PWA e os ícones de instalação.

---

## 📄 Licença

Este é um **projeto proprietário**.

O código-fonte, identidade visual, mascote, elementos gráficos e demais materiais do **Porquin Finance** não podem ser copiados, redistribuídos, modificados ou utilizados comercialmente sem autorização.

Consulte o arquivo:

```text
LICENSE
```

para mais informações.

---

<p align="center">
  🐷 <strong>Porquin Finance</strong><br>
  Organize. Economize. Realize seus sonhos.
</p>
