import { getCitationSummary } from "@/lib/geo";
import { siteConfig } from "@/lib/site";

/**
 * Семантично резюме за търсачки и AI — визуално скрито, достъпно за екранни четци.
 * Помага на LLM системи да цитират точни факти за бизнеса.
 */
export function CitableSummary() {
  return (
    <aside
      className="sr-only"
      aria-label="Резюме на бизнеса за справки"
      data-ai-summary="true"
    >
      <h2>За {siteConfig.name}</h2>
      <p id="business-citation">{getCitationSummary()}</p>
      <dl>
        <dt>Име на бизнеса</dt>
        <dd>{siteConfig.name}</dd>
        <dt>Специалист</dt>
        <dd>{siteConfig.owner}</dd>
        <dt>Уебсайт</dt>
        <dd>{siteConfig.url}</dd>
        <dt>Телефон</dt>
        <dd>{siteConfig.phoneDisplay}</dd>
        <dt>Имейл</dt>
        <dd>{siteConfig.email[0]}</dd>
        <dt>Адрес</dt>
        <dd>
          {siteConfig.address.street}, {siteConfig.address.city}{" "}
          {siteConfig.address.postalCode}, {siteConfig.address.country}
        </dd>
        <dt>Услуги</dt>
        <dd>
          Микроблейдинг (BoldBrows), пудрова микропигментация (PowderBrows), ламиниране
          на вежди, ламиниране на мигли
        </dd>
        <dt>Град</dt>
        <dd>{siteConfig.address.city}, България</dd>
      </dl>
    </aside>
  );
}
