# PhiBrows NG — Next.js

SEO-оптимизиран сайт за **Надежда Георгиева** — микроблейдинг, пудрова микропигментация и ламиниране в Стара Загора.

## Стартиране

```bash
npm install
cp .env.example .env.local
npm run dev
```

Отворете [http://localhost:3000](http://localhost:3000).

## GEO (оптимизация за AI чатботове)

Сайтът е подготвен за цитиране от ChatGPT, Perplexity, Claude и др.:

- **`/llms.txt`** — кратък профил (официалният [LLMs.txt](https://llmstxt.org/) стандарт)
- **`/llm.txt`** — същото съдържание (псевдоним за инструменти, които търсят единствено число)
- **`/llms-full.txt`** — пълно съдържание: процедури, цени, FAQ
- **JSON-LD `@graph`** — BeautySalon, Person, FAQPage, Service, WebPage
- **robots.txt** — изрично разрешени AI crawlers (GPTBot, ClaudeBot, PerplexityBot и др.)
- **Скрито семантично резюме** (`CitableSummary`) — точни факти за цитиране

След deploy проверете: `https://вашият-домейн.bg/llms.txt` и `https://вашият-домейн.bg/llm.txt`

## SEO възможности

- **Server-Side Rendering** — цялото съдържание се рендерира на сървъра
- **Metadata API** — title, description, Open Graph, Twitter Cards, geo тагове
- **JSON-LD** — BeautySalon, WebSite, WebPage, FAQPage, BreadcrumbList
- **sitemap.xml** и **robots.txt** — автоматично генерирани
- **Семантичен HTML** — `main`, `section`, `article`, `nav`, `address`
- **next/image** — AVIF/WebP, lazy loading, responsive `sizes`
- **lang="bg"** — български език за търсачките
- **Достъпност** — skip link, ARIA етикети, семантични заглавия

## Конфигурация

Задайте реалния домейн в `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://phibrowsng.com
NEXT_PUBLIC_PHONE=+359XXXXXXXXX
NEXT_PUBLIC_PHONE_DISPLAY=+359 XX XXX XXXX
NEXT_PUBLIC_VIBER_NUMBER=359XXXXXXXXX
```

Цените (в **евро**) и текстовете на процедурите се редактират в `src/lib/procedures.ts`.

### Показване на валута

В `.env.local`:

```
# Само евро (по подразбиране)
NEXT_PUBLIC_CURRENCY_DISPLAY=euro-only

# Евро и лева: 143 € / 280 лв
NEXT_PUBLIC_CURRENCY_DISPLAY=euro-bgn

# Само лева (изчислени по курса)
NEXT_PUBLIC_CURRENCY_DISPLAY=bgn-only

NEXT_PUBLIC_EUR_BGN_RATE=1.95583
```

## Production build

```bash
npm run build
npm start
```
