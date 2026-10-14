# Ta Befäl – interaktiv kurs (utkast)

Webbkurs i tolv moduler efter bokserien *Ta Befäl* av Torbjörn Holkner. Svenska (original), Deutsch, English; ljust och mörkt läge.

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # tsc && vite build → dist/
npm run check:content  # alla texter i SV/DE/EN, scenarier, quiz, bildreferenser
```

- **Innehåll:** `src/content/modules/m01–m12.ts` (bausteine B01–B12 enligt LERNKONZEPT-TA-BEFAEL.md), `models.ts`, `glossary.ts`, `selftest.ts`, `images.ts` (bildkällor och licenser).
- **UI-texter:** `src/i18n/{sv,de,en}.json`.
- **URL:** `?lang=sv|de|en&theme=light|dark&embed=1&pace=1`, skärm via `#screen=m08` / `#screen=m08-stegen`.
- **Integritet:** inga cookies, ingen analys; svar och reflektioner endast i webbläsarens localStorage (radera i "Min loggbok").
- **Bilder:** Wikimedia Commons (CC0, public domain, CC BY, CC BY-SA), nedskalade till WebP; se sidan "Om kursen".
