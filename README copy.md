# Porquin Finance

Aplicativo financeiro pessoal, instalável e focado em privacidade. O Porquin Finance permite organizar receitas, despesas, metas, cofrinhos, eventos e preferências diretamente no dispositivo, sem exigir conta ou banco de dados externo.

## Funcionalidades

- Cadastro, edição e exclusão de receitas e despesas
- Controle de movimentações pagas, pendentes, recorrentes e parceladas
- Categorias personalizadas
- Metas financeiras e cofrinhos
- Calendário de compromissos
- Resumo mensal, patrimônio, insights e conquistas
- Tema claro e escuro
- Backup, importação e restauração dos dados
- Instalação como PWA em dispositivos compatíveis
- Funcionamento offline por meio de Service Worker
- Persistência local e privada no navegador

## Tecnologias

- React 19
- TypeScript
- Vite 8
- CSS
- Progressive Web App (PWA)
- LocalStorage
- Service Worker

## Pré-requisitos

- Node.js 22.13 ou superior
- npm
- Windows, macOS ou Linux

## Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd Porquin-Finance
npm install
```

## Executando localmente

```bash
npm run dev
```

Abra o endereço exibido no terminal.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera e valida o build de produção |
| `npm run start` | Visualiza localmente a aplicação compilada |
| `npm run preview` | Alias para visualizar a aplicação compilada |
| `npm run lint` | Analisa o código com ESLint |
| `npm test` | Executa o build e os testes automatizados |

## Build de produção

```bash
npm run build
```

O resultado é gerado na pasta `dist/`.

Para iniciar a versão compilada:

```bash
npm run start
```

## Estrutura principal

```text
Porquin-Finance/
├── src/                  # Interface, entrada React e estilos principais
├── public/               # Mascote, ícones, manifesto e Service Worker
│   ├── icons/
│   ├── manifest.webmanifest
│   ├── porquin-official.png
│   └── service-worker.js
├── tests/                # Testes automatizados
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Persistência e privacidade

Os dados financeiros são armazenados no `LocalStorage` do navegador. O aplicativo não envia esses dados para um servidor e não depende de login, API ou banco de dados para as funcionalidades financeiras atuais.

Os dados permanecem vinculados ao navegador e ao dispositivo utilizados. Antes de limpar os dados do navegador, trocar de aparelho ou reinstalar o sistema, exporte um backup pela própria aplicação.

## PWA e instalação

O projeto inclui:

- `manifest.webmanifest`
- Service Worker e registro em produção
- Ícones 192×192 e 512×512
- Ícone maskable
- Apple Touch Icon
- Favicon
- Modo `standalone`
- Cache para funcionamento offline

Para que a instalação seja oferecida corretamente, publique a aplicação em HTTPS e preserve os caminhos públicos dos arquivos em `public/`.

## Publicação

Gere o build com:

```bash
npm run build
```

O repositório inclui o workflow `.github/workflows/deploy-pages.yml`. Cada envio para a branch `main` instala as dependências, gera `dist/index.html` e publica a pasta `dist/` no GitHub Pages.

O projeto está configurado para o endereço:

```text
https://vitordutramelo.github.io/porquin-finance/
```

No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** em **Build and deployment**. O Porquin Finance não utiliza servidor Node em produção, Cloudflare Workers, banco de dados ou backend.

Os comandos `npm install`, `npm run dev`, `npm run build` e `npm run start` são multiplataforma e funcionam diretamente no PowerShell, no Terminal do macOS e em shells Linux.

## Licença

Este é um projeto proprietário. Consulte o arquivo [LICENSE](LICENSE) antes de copiar, distribuir, modificar ou utilizar comercialmente o código e os materiais da marca.
