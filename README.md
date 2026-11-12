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
- **Återkoppling:** fast knapp i plattformens sidhuvud, även i spelaren och inbäddat läge. Text, valfri skärmbild och teknisk kurskontext skickas först när användaren väljer att skicka.
- **Bilder:** Wikimedia Commons (CC0, public domain, CC BY, CC BY-SA), nedskalade till WebP; se sidan "Om kursen".

## Feedback-System einrichten

Der Ablauf entspricht CyberSchooling Web: Tab-Screenshot (Browserfreigabe, optional) → Fehler oder Idee → Beschreibung → Bestätigung mit Nummer und Referenz. Auf Mobilgeräten und bei abgelehnter Freigabe lässt sich ein Bild anhängen oder ohne Screenshot senden. Der Button sitzt ausschließlich in der gemeinsamen Kopfzeile, außerhalb des eingeklappten Menüs.

`POST /api/feedback` leitet Meldungen serverseitig an dieselbe Tracker-API weiter wie CyberSchooling. In `.env.local` (Vorlage: `.env.example`) bzw. in der Hosting-Konfiguration setzen:

- `FEEDBACK_BOT_EMAIL`, `FEEDBACK_BOT_PASSWORD`: Bot-Konto mit Tester-Zugriff auf das Befäl-Projekt. Dies sind die einzigen Pflichtvariablen.
- Standardmäßig wird unter den Projekten des Bot-Kontos **exakt „Ta Befäl“** gesucht, danach die aktive App mit der URL `https://befael.vercel.app`. Beide Treffer müssen eindeutig sein. Fehlt die Zuordnung, wird keine Meldung angelegt; es gibt keinen Rückfall auf CyberSchooling oder das erste Projekt des Kontos.
- `FEEDBACK_PROJECT_NAME`: optional ein anderer exakter Projektname.
- `FEEDBACK_PROJECT_ID`, `FEEDBACK_APP_ID`: optionale explizite IDs, die die jeweilige automatische Suche ersetzen.
- `FEEDBACK_API_URL`: optional; Standard `https://ws.cyberschooling.eu/feedback/api/v1`. Für Preview/Entwicklung getrennte Staging-Zugangsdaten verwenden.

Keine dieser Variablen darf ein `VITE_`-Präfix bekommen. Der Browser erhält keine Bot-Zugangsdaten. Ohne die beiden Pflichtvariablen antwortet der Endpunkt mit 503; der Dialog zeigt die übersetzte Fehlermeldung und behält den Text. Der Vite-Entwicklungsserver stellt die API ebenfalls bereit; `vite preview` liefert nur die statischen Build-Dateien. Beim Hosting müssen neben `dist/` auch `api/` und `server/` als Serverfunktionen ausgeliefert werden (Vercel erkennt `api/feedback.js` automatisch).

Die Meldung enthält den aktuellen Bildschirm/Schritt, Sprache, Theme und technische Browserdaten. Kursantworten und Logbuch werden nicht ausgelesen. Screenshots sind vor dem Senden sichtbar und entfernbar. Der öffentliche Kurs verwendet keine Konten; es gibt einen begrenzten, pro Serverinstanz geltenden IP-Zähler (20 Versuche pro Stunde), keine dauerhafte Kontozuordnung wie bei CyberSchooling. Der Statuslink führt zu `feedback.gerdwenning.eu`; die Anzeige setzt voraus, dass das Zielprojekt dort für die öffentliche Statusseite freigeschaltet wurde.

Prüfungen: `npm test`, `npm run check:content`, `npm run build`. Die API-Tests verwenden einen lokalen Tracker-Ersatz und erzeugen keine echten Meldungen.
