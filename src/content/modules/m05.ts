// M05 · Mod och beslut
// Sources: Steg 1 Kap. 7 Mod och feghet; Steg 4 Kap. 9 Beslut; Steg 5 Kap. 3 Konsekvensanalys,
// Kap. 17 Från standard till lag (skröna Förbifart Stockholm); Steg 1 Befälssvar.

import { l, type Module } from '../types';

export const m05: Module = {
  id: 'm05',
  num: 5,
  part: 2,
  title: l('Mod och beslut', 'Mut und Entscheidung', 'Courage and decision'),
  teaser: l(
    'Att våga agera även när du inte har alla svar.',
    'Handeln wagen, auch wenn du nicht alle Antworten hast.',
    'Daring to act even when you do not have all the answers.',
  ),
  goal: l(
    'Du fattar beslut under osäkerhet, känner igen undanglidningen inför kända konsekvenser och använder konsekvensanalysen i fem steg.',
    'Du entscheidest unter Unsicherheit, erkennst das Ausweichen vor bekannten Konsequenzen und wendest die Konsequenzanalyse in fünf Schritten an.',
    'You make decisions under uncertainty, recognise the evasion of known consequences, and apply the five-step consequence analysis.',
  ),
  keyTerms: [
    l('Mod = små handlingar i rätt ögonblick', 'Mut = kleine Handlungen im richtigen Moment', 'Courage = small actions at the right moment'),
    l('Den tysta majoriteten', 'Die schweigende Mehrheit', 'The silent majority'),
    l('Frånvaro av beslut', 'Abwesenheit von Entscheidungen', 'Absence of decision'),
    l('Konsekvensanalys', 'Konsequenzanalyse', 'Consequence analysis'),
    l('Motståndet', 'Der Widerstand', 'The resistance'),
  ],
  sources: [
    { book: 'steg1', ch: 'Kap. 7 Mod och feghet – den tysta majoritetens pris' },
    { book: 'steg4', ch: 'Kap. 9 Beslut' },
    { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys' },
    { book: 'steg5', ch: 'Kap. 17 Från standard till lag' },
  ],
  image: 'wheel-loader',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 7,
      title: l('Den tysta majoritetens pris', 'Der Preis der schweigenden Mehrheit', 'The price of the silent majority'),
      slides: [
        {
          heading: l('Tystnad förändrar mer än sammanbrott', 'Schweigen verändert mehr als Zusammenbrüche', 'Silence changes more than collapse'),
          body: [
            l(
              'De flesta system förändras inte genom dramatiska sammanbrott. De förändras genom tystnad – genom att tillräckligt många ser problemen men väljer att inte agera på dem.',
              'Die meisten Systeme verändern sich nicht durch dramatische Zusammenbrüche. Sie verändern sich durch Schweigen – dadurch, dass genug Menschen die Probleme sehen, aber nicht handeln.',
              'Most systems do not change through dramatic collapse. They change through silence – because enough people see the problems but choose not to act on them.',
            ),
            l('Feghet är sällan aktiv. Den visar sig i det ständiga uppskjutandet av ansvar:', 'Feigheit ist selten aktiv. Sie zeigt sich im ständigen Aufschieben von Verantwortung:', 'Cowardice is rarely active. It shows in the constant postponing of responsibility:'),
          ],
          list: [
            l('”Nu är inte rätt tillfälle.”', '„Jetzt ist nicht der richtige Zeitpunkt.“', '“Now is not the right time.”'),
            l('”Någon annan borde ta detta.”', '„Jemand anderes sollte das übernehmen.“', '“Someone else should take this.”'),
            l('”Det är ändå för sent.”', '„Es ist sowieso zu spät.“', '“It’s too late anyway.”'),
          ],
          quote: {
            sv: 'Att ta befäl börjar inte med att leda andra. Det börjar med att vägra vara tyst när man vet bättre.',
            de: 'Befehl zu übernehmen beginnt nicht damit, andere zu führen. Es beginnt damit, sich zu weigern zu schweigen, wenn man es besser weiß.',
            en: 'Taking command does not begin with leading others. It begins with refusing to stay silent when you know better.',
            src: { book: 'steg1', ch: 'Kap. 7 Mod och feghet' },
          },
        },
        {
          heading: l('Mod i vardagen', 'Mut im Alltag', 'Everyday courage'),
          body: [
            l(
              'Mod i vardagen handlar sällan om stora gester. Det handlar om små handlingar som bryter mönster: att ställa en obekväm fråga, att säga ifrån när något är fel, att vägra bekräfta en osanning.',
              'Mut im Alltag hat selten mit großen Gesten zu tun. Es geht um kleine Handlungen, die Muster durchbrechen: eine unbequeme Frage stellen, widersprechen, wenn etwas falsch ist, sich weigern, eine Unwahrheit zu bestätigen.',
              'Everyday courage is rarely about grand gestures. It is about small actions that break patterns: asking an uncomfortable question, speaking up when something is wrong, refusing to confirm an untruth.',
            ),
            l(
              'Modet kan inte delegeras. Det är alltid personligt. Men det är smittsamt: när någon bryter tystnaden minskar kostnaden för nästa person.',
              'Mut lässt sich nicht delegieren. Er ist immer persönlich. Aber er ist ansteckend: Wenn jemand das Schweigen bricht, sinkt der Preis für die nächste Person.',
              'Courage cannot be delegated. It is always personal. But it is contagious: when someone breaks the silence, the cost falls for the next person.',
            ),
          ],
        },
        {
          heading: l('Frånvaro av beslut', 'Abwesenheit von Entscheidungen', 'Absence of decision'),
          body: [
            l(
              'Beslut är inte främst en intellektuell handling. Det är en ansvarshandling: att sätta en riktning när alla alternativ fortfarande kostar något.',
              'Entscheiden ist nicht in erster Linie eine intellektuelle Handlung. Es ist eine Verantwortungshandlung: eine Richtung festlegen, während alle Alternativen noch etwas kosten.',
              'A decision is not primarily an intellectual act. It is an act of responsibility: setting a direction while every alternative still costs something.',
            ),
            l(
              'Beslut som fattas utan möjlighet till uppföljning blir maktutövning. Men beslut som aldrig fattas blir ansvarslöshet.',
              'Entscheidungen ohne Möglichkeit der Nachverfolgung werden zur Machtausübung. Aber Entscheidungen, die nie getroffen werden, werden zur Verantwortungslosigkeit.',
              'Decisions made without any possibility of follow-up become an exercise of power. But decisions never made become irresponsibility.',
            ),
          ],
          quote: {
            sv: 'Frånvaro av beslut är också ett beslut – men ett beslut utan uttalad bärare.',
            de: 'Keine Entscheidung ist auch eine Entscheidung – aber eine Entscheidung ohne benannten Träger.',
            en: 'Absence of decision is also a decision – but a decision without a named bearer.',
            src: { book: 'steg4', ch: 'Kap. 9 Beslut' },
          },
        },
        {
          heading: l('Motståndet', 'Der Widerstand', 'The resistance'),
          body: [
            l(
              'I de flesta organisationer är konsekvensen känd långt innan den inträffar. Ändå omsätts kunskapen inte i beslut. Problemet är inte brist på insikt – utan brist på användning.',
              'In den meisten Organisationen ist die Konsequenz lange bekannt, bevor sie eintritt. Trotzdem wird das Wissen nicht in Entscheidungen umgesetzt. Das Problem ist nicht fehlende Einsicht – sondern fehlende Anwendung.',
              'In most organisations the consequence is known long before it happens. Yet the knowledge is not turned into decisions. The problem is not a lack of insight – but a lack of use.',
            ),
            l(
              'Organisationer avvaktar inte för att de saknar information, utan för att de har tillräcklig information för att förstå vad beslutet innebär.',
              'Organisationen warten nicht, weil ihnen Informationen fehlen, sondern weil sie genug Informationen haben, um zu verstehen, was die Entscheidung bedeutet.',
              'Organisations do not wait because they lack information, but because they have enough information to understand what the decision means.',
            ),
          ],
          quote: {
            sv: 'Detta motstånd uppstår inte på grund av osäkerhet utan på grund av klarhet.',
            de: 'Dieser Widerstand entsteht nicht aus Unsicherheit, sondern aus Klarheit.',
            en: 'This resistance arises not from uncertainty but from clarity.',
            src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys – Motståndet' },
          },
        },
        {
          heading: l('Konsekvensanalys i fem steg', 'Konsequenzanalyse in fünf Schritten', 'Consequence analysis in five steps'),
          body: [
            l(
              'Fokus flyttas från det som har hänt till det som kommer att hända om inget förändras.',
              'Der Blick wechselt von dem, was passiert ist, zu dem, was passieren wird, wenn sich nichts ändert.',
              'The focus moves from what has happened to what will happen if nothing changes.',
            ),
          ],
          list: [
            l('1. Formulera nuläget utan tolkning eller försköning.', '1. Den Ist-Zustand ohne Deutung oder Beschönigung beschreiben.', '1. State the current situation without interpretation or embellishment.'),
            l('2. Följ utvecklingen framåt: vad händer om inget beslut fattas?', '2. Die Entwicklung weiterdenken: Was passiert, wenn nichts entschieden wird?', '2. Follow the development forward: what happens if no decision is made?'),
            l('3. Hitta beslutspunkten där utvecklingen fortfarande kan påverkas.', '3. Den Entscheidungspunkt finden, an dem die Entwicklung noch beeinflussbar ist.', '3. Find the decision point where the development can still be influenced.'),
            l('4. Formulera åtgärden som bryter förloppet.', '4. Die Maßnahme formulieren, die den Verlauf unterbricht.', '4. Formulate the action that breaks the course of events.'),
            l('5. Koppla beslutet till en ansvarspunkt.', '5. Die Entscheidung mit einem Verantwortungspunkt verbinden.', '5. Tie the decision to a responsibility point.'),
          ],
          quote: {
            sv: 'Analys utan ansvar saknar funktion och beslut utan ansvar saknar verkan.',
            de: 'Analyse ohne Verantwortung hat keine Funktion, und Entscheidung ohne Verantwortung hat keine Wirkung.',
            en: 'Analysis without responsibility has no function, and a decision without responsibility has no effect.',
            src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys' },
          },
        },
      ],
      cards: [
        { term: l('Mod', 'Mut', 'Courage'), text: l('Små handlingar i rätt ögonblick.', 'Kleine Handlungen im richtigen Moment.', 'Small actions at the right moment.') },
        { term: l('Den tysta majoriteten', 'Die schweigende Mehrheit', 'The silent majority'), text: l('Inte maktlös – vilande. Och därför avgörande.', 'Nicht machtlos – ruhend. Und darum entscheidend.', 'Not powerless – dormant. And therefore decisive.') },
        { term: l('Frånvaro av beslut', 'Abwesenheit von Entscheidung', 'Absence of decision'), text: l('Ett beslut utan uttalad bärare.', 'Eine Entscheidung ohne benannten Träger.', 'A decision without a named bearer.') },
        { term: l('Konsekvensanalys', 'Konsequenzanalyse', 'Consequence analysis'), text: l('Avslutad först när beslutet är fattat och ansvaret fördelat.', 'Abgeschlossen erst, wenn entschieden und die Verantwortung verteilt ist.', 'Finished only when the decision is made and responsibility assigned.') },
        { term: l('Motståndet', 'Der Widerstand', 'The resistance'), text: l('Uppstår av klarhet, inte av osäkerhet.', 'Entsteht aus Klarheit, nicht aus Unsicherheit.', 'Arises from clarity, not uncertainty.') },
      ],
    },
    {
      slug: 'sakerhetsronden',
      type: 'scenario',
      min: 10,
      title: l('Säkerhetsronden', 'Der Sicherheitsrundgang', 'The safety round'),
      source: { book: 'steg5', ch: 'Kap. 17 Från standard till lag – skröna' },
      image: 'wheel-loader',
      intro: l(
        'Förbifart Stockholm. En tunnel sprängs under Drottningholm, och massorna ska ut med båt. Du är en av cirka femton personer på en säkerhetsrond: direktören för Trafikverket Stockholmsregionen, VD för huvudentreprenören, lokala skyddsombud, en representant från Arbetsmiljöverket, BAS-P, BAS-U och miljöledningen. Hela systemets formella kontrollfunktion är samlad på samma plats.',
        'Förbifart Stockholm. Unter Drottningholm wird ein Tunnel gesprengt, der Aushub soll per Schiff abtransportiert werden. Du bist eine von etwa fünfzehn Personen auf einem Sicherheitsrundgang: der Direktor der Verkehrsbehörde für die Region Stockholm, der Geschäftsführer des Generalunternehmers, örtliche Sicherheitsbeauftragte, eine Vertreterin der Arbeitsschutzbehörde, die Koordinatoren für Planung und Ausführung (BAS-P, BAS-U) und das Umweltmanagement. Die gesamte formelle Kontrollfunktion des Systems ist an einem Ort versammelt.',
        'Förbifart Stockholm. A tunnel is being blasted under Drottningholm, and the rock is to be shipped out by boat. You are one of about fifteen people on a safety round: the director of the Transport Administration for the Stockholm region, the CEO of the main contractor, local safety representatives, a representative of the Work Environment Authority, the planning and construction safety coordinators (BAS-P, BAS-U) and environmental management. The system’s entire formal control function is gathered in one place.',
      ),
      nodes: [
        {
          situation: l(
            'Vid depån står en frontlastare. Föraren är tydligt irriterad och redovisar själv allvarliga brister: ingen brandsläckare, dåliga bromsar, begränsad sikt.',
            'Am Depot steht ein Radlader. Der Fahrer ist sichtlich gereizt und zählt selbst schwere Mängel auf: kein Feuerlöscher, schlechte Bremsen, eingeschränkte Sicht.',
            'At the depot stands a wheel loader. The driver is clearly irritated and lists serious faults himself: no fire extinguisher, poor brakes, limited visibility.',
          ),
          options: [
            {
              label: l('Antecknar bristerna i ditt block.', 'Die Mängel in deinem Block notieren.', 'Note the faults in your notebook.'),
              book: true,
              c: {
                orsak: l('Ansvaret är närvarande men inte placerat.', 'Die Verantwortung ist anwesend, aber nicht verortet.', 'Responsibility is present but not placed.'),
                verkan: l('Information samlas men omsätts inte i handling.', 'Informationen werden gesammelt, aber nicht in Handeln umgesetzt.', 'Information is gathered but not turned into action.'),
                konsekvens: l('Beslut ersätts av dokumentation.', 'Entscheidung wird durch Dokumentation ersetzt.', 'Decision is replaced by documentation.'),
                bearer: l('Föraren och alla som rör sig runt maskinen.', 'Der Fahrer und alle, die sich um die Maschine herum bewegen.', 'The driver and everyone moving around the machine.'),
              },
            },
            {
              label: l('Frågar högt vem i gruppen som har mandat att stoppa maskinen.', 'Laut fragen, wer in der Gruppe das Mandat hat, die Maschine zu stoppen.', 'Ask out loud who in the group has the mandate to stop the machine.'),
              c: {
                orsak: l('Du kräver en ansvarspunkt.', 'Du verlangst einen Verantwortungspunkt.', 'You demand a responsibility point.'),
                verkan: l('Frågan tvingar fram ett namn – eller visar att det saknas.', 'Die Frage erzwingt einen Namen – oder zeigt, dass er fehlt.', 'The question forces a name – or shows that it is missing.'),
                konsekvens: l('Gruppen kan inte längre låtsas att ansvaret finns.', 'Die Gruppe kann nicht länger so tun, als gäbe es die Verantwortung.', 'The group can no longer pretend the responsibility exists.'),
                bearer: l('Du – du blir obekväm.', 'Du – du wirst unbequem.', 'You – you become uncomfortable.'),
              },
            },
            {
              label: l('Ber föraren ställa maskinen tills bromsarna är lagade – och står för det.', 'Den Fahrer bitten, die Maschine abzustellen, bis die Bremsen repariert sind – und dafür einstehen.', 'Ask the driver to park the machine until the brakes are fixed – and stand by it.'),
              c: {
                orsak: l('Du agerar på en känd risk.', 'Du handelst auf ein bekanntes Risiko hin.', 'You act on a known risk.'),
                verkan: l('Risken stoppas i stunden.', 'Das Risiko wird im Moment gestoppt.', 'The risk is stopped in the moment.'),
                konsekvens: l('Du har tagit befäl utan att vara utsedd – och måste stå kvar.', 'Du hast Befehl übernommen, ohne benannt zu sein – und musst dabei bleiben.', 'You have taken command without being appointed – and must stand firm.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
          ],
        },
        {
          situation: l('Gruppen går vidare utan åtgärd. Flera har gjort egna anteckningar.', 'Die Gruppe geht ohne Maßnahme weiter. Mehrere haben sich Notizen gemacht.', 'The group moves on without action. Several people have made their own notes.'),
          options: [
            {
              label: l('Följer med gruppen.', 'Mit der Gruppe weitergehen.', 'Go along with the group.'),
              book: true,
              c: {
                orsak: l('Ingen funktion har mandat och skyldighet att agera i stunden.', 'Keine Funktion hat Mandat und Pflicht, im Moment zu handeln.', 'No function has the mandate and duty to act in the moment.'),
                verkan: l('Risken accepteras i praktiken.', 'Das Risiko wird in der Praxis akzeptiert.', 'The risk is accepted in practice.'),
                konsekvens: l('Systemet saknar operativ styrning.', 'Dem System fehlt operative Steuerung.', 'The system lacks operational steering.'),
                bearer: l('Föraren.', 'Der Fahrer.', 'The driver.'),
              },
            },
            {
              label: l('Stannar kvar och ringer BAS-P.', 'Zurückbleiben und den Koordinator (BAS-P) anrufen.', 'Stay behind and call the planning coordinator (BAS-P).'),
              c: {
                orsak: l('Du söker den formella ansvarspunkten.', 'Du suchst den formellen Verantwortungspunkt.', 'You look for the formal responsibility point.'),
                verkan: l('Beslutet lyfts till den som enligt lag bär ansvaret.', 'Die Entscheidung geht an den, der laut Gesetz die Verantwortung trägt.', 'The decision is raised to the one who carries responsibility by law.'),
                konsekvens: l('Det fungerar bara om funktionen kan utöva ansvaret operativt.', 'Das funktioniert nur, wenn die Funktion ihre Verantwortung operativ ausüben kann.', 'It only works if the function can exercise its responsibility operationally.'),
                bearer: l('BAS-P – och du som ringde.', 'BAS-P – und du, der angerufen hat.', 'BAS-P – and you who called.'),
              },
            },
            {
              label: l('Tar upp det med rondledaren på vägen.', 'Es unterwegs beim Leiter des Rundgangs ansprechen.', 'Raise it with the round leader on the way.'),
              c: {
                orsak: l('Frågan lämnas till en roll.', 'Die Frage wird an eine Rolle abgegeben.', 'The question is handed to a role.'),
                verkan: l('Det blir ett samtal, inte ett beslut.', 'Es wird ein Gespräch, keine Entscheidung.', 'It becomes a conversation, not a decision.'),
                konsekvens: l('Maskinen kör vidare.', 'Die Maschine fährt weiter.', 'The machine keeps running.'),
                bearer: l('Föraren.', 'Der Fahrer.', 'The driver.'),
              },
            },
          ],
        },
        {
          situation: l('Kort därefter passerar samma maskin, med samma brister, gruppen flera gånger på nära håll.', 'Kurz darauf fährt dieselbe Maschine mit denselben Mängeln mehrmals dicht an der Gruppe vorbei.', 'Shortly afterwards the same machine, with the same faults, passes the group several times at close range.'),
          options: [
            {
              label: l('Ingen reagerar – du inte heller.', 'Niemand reagiert – du auch nicht.', 'Nobody reacts – nor do you.'),
              book: true,
              c: {
                orsak: l('Alla ansvarsfunktioner är närvarande – ingen tar befäl.', 'Alle Verantwortungsfunktionen sind anwesend – niemand übernimmt Befehl.', 'All responsibility functions are present – nobody takes command.'),
                verkan: l('Den kända risken realiseras i allas närvaro.', 'Das bekannte Risiko verwirklicht sich in Anwesenheit aller.', 'The known risk materialises in everyone’s presence.'),
                konsekvens: l('När ansvar finns överallt finns det i praktiken ingenstans.', 'Wenn Verantwortung überall ist, ist sie praktisch nirgends.', 'When responsibility is everywhere, it is in practice nowhere.'),
                bearer: l('Föraren – och alla runt honom.', 'Der Fahrer – und alle um ihn herum.', 'The driver – and everyone around him.'),
              },
            },
            {
              label: l('Stoppar maskinen med handsignal och kallar fram BAS-U.', 'Die Maschine per Handzeichen stoppen und den Koordinator (BAS-U) dazurufen.', 'Stop the machine with a hand signal and call over the construction coordinator (BAS-U).'),
              c: {
                orsak: l('Du agerar i realtid.', 'Du handelst in Echtzeit.', 'You act in real time.'),
                verkan: l('Risken stoppas och ansvaret får en punkt.', 'Das Risiko wird gestoppt, und die Verantwortung bekommt einen Punkt.', 'The risk is stopped and the responsibility gets a point.'),
                konsekvens: l('Rondens stämning störs – maskinen står.', 'Die Stimmung des Rundgangs ist gestört – die Maschine steht.', 'The mood of the round is disturbed – the machine is parked.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Fotograferar för rapporten.', 'Für den Bericht fotografieren.', 'Take photos for the report.'),
              c: {
                orsak: l('Kontroll utan konsekvens.', 'Kontrolle ohne Konsequenz.', 'Control without consequence.'),
                verkan: l('Bevisen blir bättre. Risken är densamma.', 'Die Belege werden besser. Das Risiko bleibt dasselbe.', 'The evidence improves. The risk stays the same.'),
                konsekvens: l('Dokumentation ersätter beslut.', 'Dokumentation ersetzt Entscheidung.', 'Documentation replaces decision.'),
                bearer: l('Föraren.', 'Der Fahrer.', 'The driver.'),
              },
            },
          ],
        },
        {
          situation: l('Efter ronden beskriver flera av de ansvariga inspektionen som framgångsrik.', 'Nach dem Rundgang bezeichnen mehrere der Verantwortlichen die Inspektion als erfolgreich.', 'After the round several of those responsible describe the inspection as a success.'),
          options: [
            {
              label: l('Håller med – ronden genomfördes enligt plan.', 'Zustimmen – der Rundgang lief nach Plan.', 'Agree – the round went according to plan.'),
              c: {
                orsak: l('Resultatet bedöms efter aktivitet, inte efter effekt.', 'Das Ergebnis wird nach Aktivität bewertet, nicht nach Wirkung.', 'The result is judged by activity, not by effect.'),
                verkan: l('Avsaknaden av åtgärd uppfattas som normal.', 'Das Fehlen einer Maßnahme gilt als normal.', 'The lack of action is seen as normal.'),
                konsekvens: l('Systemfelet blir osynligt för systemet självt.', 'Der Systemfehler wird für das System selbst unsichtbar.', 'The system fault becomes invisible to the system itself.'),
                bearer: l('Nästa person vid depån.', 'Die nächste Person am Depot.', 'The next person at the depot.'),
              },
            },
            {
              label: l('Säger: ”Ronden genomfördes – men inget av det vi såg har åtgärdats. Vem beslutar nu?”', 'Sagen: „Der Rundgang wurde durchgeführt – aber nichts von dem, was wir gesehen haben, ist behoben. Wer entscheidet jetzt?“', 'Say: “The round was carried out – but nothing we saw has been fixed. Who decides now?”'),
              c: {
                orsak: l('Du skiljer aktivitet från effekt.', 'Du unterscheidest Aktivität von Wirkung.', 'You separate activity from effect.'),
                verkan: l('Frågan om ansvarspunkt hamnar på bordet.', 'Die Frage nach dem Verantwortungspunkt liegt auf dem Tisch.', 'The question of the responsibility point is on the table.'),
                konsekvens: l('Obekvämt – men kopplingen till konsekvens återställs.', 'Unbequem – aber der Bezug zur Konsequenz ist wiederhergestellt.', 'Uncomfortable – but the link to consequence is restored.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Skriver i din rapport att uppdraget inte kan lösas inom befintlig struktur – verksamheten måste börja om från grunden.', 'In deinem Bericht schreiben, dass der Auftrag in der bestehenden Struktur nicht lösbar ist – der Betrieb muss von Grund auf neu beginnen.', 'Write in your report that the task cannot be solved within the existing structure – the operation must start again from the ground up.'),
              book: true,
              c: {
                orsak: l('Ingen ansvarspunkt kunde identifieras.', 'Es ließ sich kein Verantwortungspunkt finden.', 'No responsibility point could be identified.'),
                verkan: l('Beslut kunde inte fattas där helheten fanns.', 'Dort, wo das Ganze lag, konnte nicht entschieden werden.', 'Decisions could not be made where the whole was.'),
                konsekvens: l('Systemet var operativt omöjligt.', 'Das System war operativ unmöglich.', 'The system was operationally impossible.'),
                bearer: l('Huvudentreprenören.', 'Der Generalunternehmer.', 'The main contractor.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Ingen funktion tog ansvar för att stoppa maskinen. Flera gjorde anteckningar. Maskinen passerade gruppen flera gånger. Efter ronden beskrevs inspektionen som framgångsrik. Torbjörns slutrapport till huvudentreprenören: uppdraget kunde inte lösas inom befintlig struktur, verksamheten måste börja om från grunden. Sex månader senare lämnade huvudentreprenören uppdraget.',
        'Keine Funktion übernahm die Verantwortung, die Maschine zu stoppen. Mehrere machten Notizen. Die Maschine fuhr mehrmals an der Gruppe vorbei. Nach dem Rundgang wurde die Inspektion als erfolgreich bezeichnet. Torbjörns Abschlussbericht an den Generalunternehmer: Der Auftrag war in der bestehenden Struktur nicht lösbar, der Betrieb musste von Grund auf neu beginnen. Sechs Monate später gab der Generalunternehmer den Auftrag ab.',
        'No function took responsibility for stopping the machine. Several people took notes. The machine passed the group several times. After the round the inspection was described as a success. Torbjörn’s final report to the main contractor: the task could not be solved within the existing structure; the operation had to start again from the ground up. Six months later the main contractor left the contract.',
      ),
      quote: {
        sv: 'När ansvar finns överallt finns det i praktiken ingenstans.',
        de: 'Wenn Verantwortung überall ist, ist sie in der Praxis nirgends.',
        en: 'When responsibility is everywhere, it is in practice nowhere.',
        src: { book: 'steg5', ch: 'Kap. 17 Från standard till lag' },
      },
    },
    {
      slug: 'konsekvensanalys',
      type: 'builder',
      tool: 'consequence',
      min: 10,
      title: l('Konsekvensanalys för ett beslut du skjuter upp', 'Konsequenzanalyse für eine aufgeschobene Entscheidung', 'Consequence analysis for a decision you are putting off'),
      intro: l(
        'Välj ett beslut du skjuter upp – inte för att det är oklart, utan för att det är tydligt. Gå igenom de fem stegen.',
        'Wähle eine Entscheidung, die du aufschiebst – nicht, weil sie unklar ist, sondern weil sie klar ist. Geh die fünf Schritte durch.',
        'Choose a decision you are putting off – not because it is unclear, but because it is clear. Work through the five steps.',
      ),
      fields: [
        { id: 'beslut', label: l('Beslutet', 'Die Entscheidung', 'The decision'), help: l('En konkret situation, i en mening.', 'Eine konkrete Situation, in einem Satz.', 'A concrete situation, in one sentence.'), multiline: false },
        { id: 'nulage', label: l('1. Nuläget', '1. Der Ist-Zustand', '1. The current situation'), help: l('Vad sker faktiskt? Vilka signaler och avvikelser syns redan?', 'Was geschieht tatsächlich? Welche Signale und Abweichungen sind schon sichtbar?', 'What is actually happening? Which signals and deviations are already visible?') },
        { id: 'utveckling', label: l('2. Om inget beslut fattas', '2. Wenn nichts entschieden wird', '2. If no decision is made'), help: l('Följ utvecklingen tills konsekvensen är konkret: vad bryter, vad slutar fungera, vem påverkas?', 'Denk die Entwicklung weiter, bis die Konsequenz konkret ist: Was bricht, was hört auf zu funktionieren, wen trifft es?', 'Follow the development until the consequence is concrete: what breaks, what stops working, who is affected?') },
        { id: 'beslutspunkt', label: l('3. Beslutspunkten', '3. Der Entscheidungspunkt', '3. The decision point'), help: l('Var och när kan utvecklingen fortfarande påverkas?', 'Wo und wann lässt sich die Entwicklung noch beeinflussen?', 'Where and when can the development still be influenced?') },
        { id: 'atgard', label: l('4. Åtgärden', '4. Die Maßnahme', '4. The action'), help: l('Vilket konkret beslut bryter förloppet – och hur följs det upp?', 'Welche konkrete Entscheidung unterbricht den Verlauf – und wie wird sie nachverfolgt?', 'Which concrete decision breaks the course of events – and how is it followed up?') },
        { id: 'ansvarspunkt', label: l('5. Ansvarspunkten', '5. Der Verantwortungspunkt', '5. The responsibility point'), help: l('Vilken funktion – och vilken människa – fattar beslutet och bär konsekvensen?', 'Welche Funktion – und welcher Mensch – entscheidet und trägt die Konsequenz?', 'Which function – and which person – makes the decision and carries the consequence?'), multiline: false },
        {
          id: 'timing',
          label: l('Om du beslutar nu – vad är det?', 'Wenn du jetzt entscheidest – was ist es dann?', 'If you decide now – what is it?'),
          help: l('Tidigt beslut = planerat underhåll. Sent = löpande underhåll. Efteråt = reparation.', 'Frühe Entscheidung = geplante Wartung. Späte = laufende Wartung. Danach = Reparatur.', 'Early decision = planned maintenance. Late = running maintenance. Afterwards = repair.'),
          choices: [
            { id: 'planerat', label: l('Planerat underhåll', 'Geplante Wartung', 'Planned maintenance') },
            { id: 'lopande', label: l('Löpande underhåll', 'Laufende Wartung', 'Running maintenance') },
            { id: 'reparation', label: l('Reparation', 'Reparatur', 'Repair') },
          ],
        },
      ],
      checks: [
        { when: 'missing', field: 'utveckling', message: l('Det är här många analyser avbryts – inte av brist på förståelse, utan för att konsekvensen blir tydlig nog att skapa motstånd.', 'Hier brechen viele Analysen ab – nicht aus fehlendem Verständnis, sondern weil die Konsequenz klar genug wird, um Widerstand zu erzeugen.', 'This is where many analyses stop – not for lack of understanding, but because the consequence becomes clear enough to create resistance.') },
        { when: 'missing', field: 'beslutspunkt', message: l('Arbeta bakåt från konsekvensen till den punkt där styrning fortfarande är möjlig.', 'Arbeite von der Konsequenz rückwärts bis zu dem Punkt, an dem Steuerung noch möglich ist.', 'Work backwards from the consequence to the point where steering is still possible.') },
        { when: 'missing', field: 'atgard', message: l('Här övergår analysen från förståelse till handling – den beskriver vad som måste göras.', 'Hier geht die Analyse vom Verstehen ins Handeln über – sie beschreibt, was getan werden muss.', 'Here the analysis moves from understanding to action – it describes what must be done.') },
        { when: 'missing', field: 'ansvarspunkt', message: l('Analys utan ansvar saknar funktion och beslut utan ansvar saknar verkan.', 'Analyse ohne Verantwortung hat keine Funktion, und Entscheidung ohne Verantwortung hat keine Wirkung.', 'Analysis without responsibility has no function, and a decision without responsibility has no effect.') },
        { when: 'collective', field: 'ansvarspunkt', message: l('Ansvar som delas är ansvar som försvinner. En funktion – och en människa.', 'Geteilte Verantwortung ist verschwindende Verantwortung. Eine Funktion – und ein Mensch.', 'Responsibility that is shared disappears. One function – and one person.') },
      ],
      done: l(
        'Konsekvensanalysen är inte avslutad när den är skriven – utan först när beslutet är fattat och ansvaret fördelat.',
        'Die Konsequenzanalyse ist nicht fertig, wenn sie geschrieben ist – sondern erst, wenn entschieden und die Verantwortung verteilt ist.',
        'The consequence analysis is not finished when it is written – only when the decision is made and responsibility assigned.',
      ),
      src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys' },
    },
    {
      slug: 'befalssvar',
      type: 'objection',
      min: 5,
      title: l('När beslutet skjuts upp', 'Wenn die Entscheidung aufgeschoben wird', 'When the decision is put off'),
      intro: l(
        'Tre invändningar som stoppar beslut. Svara kort och lugnt.',
        'Drei Einwände, die Entscheidungen stoppen. Antworte kurz und ruhig.',
        'Three objections that stop decisions. Answer briefly and calmly.',
      ),
      items: [
        {
          objection: l('Vi behöver mer underlag först.', 'Wir brauchen erst mehr Grundlagen.', 'We need more information first.'),
          answer: l('Detta motstånd uppstår inte på grund av osäkerhet utan på grund av klarhet.', 'Dieser Widerstand entsteht nicht aus Unsicherheit, sondern aus Klarheit.', 'This resistance arises not from uncertainty but from clarity.'),
          src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys – Motståndet' },
        },
        {
          objection: l('Men verkligheten är mer komplex än så.', 'Aber die Wirklichkeit ist komplexer.', 'But reality is more complex than that.'),
          answer: l('Ja. Därför krävs tydligare ansvar – inte fler ord.', 'Ja. Deshalb braucht es klarere Verantwortung – nicht mehr Worte.', 'Yes. That is why clearer responsibility is needed – not more words.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 2' },
        },
        {
          objection: l('Vad är då lösningen?', 'Was ist denn dann die Lösung?', 'So what is the solution?'),
          answer: l('Att någon tar befäl där det saknas.', 'Dass jemand Befehl übernimmt, wo er fehlt.', 'That someone takes command where it is missing.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 19' },
        },
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 6,
      title: l('Ett modigt samtal du undviker', 'Ein mutiges Gespräch, dem du ausweichst', 'A courageous conversation you are avoiding'),
      prompts: [
        l('Ett modigt samtal du undviker: med vem, om vad – och vad kostar det att vänta?', 'Ein mutiges Gespräch, dem du ausweichst: mit wem, worüber – und was kostet das Warten?', 'A courageous conversation you are avoiding: with whom, about what – and what does waiting cost?'),
        l('Vilket beslut skjuter jag upp – inte för att det är oklart, utan för att det är tydligt?', 'Welche Entscheidung schiebe ich auf – nicht, weil sie unklar ist, sondern weil sie klar ist?', 'Which decision am I putting off – not because it is unclear, but because it is clear?'),
      ],
      src: { book: 'steg1', ch: 'Kursupplägg, tillfälle 6' },
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Mer information leder alltid till bättre beslut.” Stämmer det?', '„Mehr Information führt immer zu besseren Entscheidungen.“ Stimmt das?', '“More information always leads to better decisions.” Is that true?'),
          options: [
            { text: l('Ja – ju mer underlag, desto säkrare beslut.', 'Ja – je mehr Grundlagen, desto sicherer die Entscheidung.', 'Yes – the more information, the safer the decision.'), ok: false, fb: l('Boken: beslut skjuts upp trots att konsekvensen är känd. Det som saknas är någon som bär beslutet.', 'Das Buch: Entscheidungen werden aufgeschoben, obwohl die Konsequenz bekannt ist. Es fehlt jemand, der die Entscheidung trägt.', 'The book: decisions are put off even though the consequence is known. What is missing is someone who carries the decision.') },
            { text: l('Nej – ofta finns tillräckligt underlag. Motståndet kommer av klarhet, inte osäkerhet.', 'Nein – oft gibt es genug Grundlagen. Der Widerstand kommt aus Klarheit, nicht aus Unsicherheit.', 'No – there is often enough information. The resistance comes from clarity, not uncertainty.'), ok: true, fb: l('Ja. Verkligheten väntar inte på fullständig klarhet.', 'Ja. Die Wirklichkeit wartet nicht auf vollständige Klarheit.', 'Yes. Reality does not wait for complete clarity.') },
          ],
          misconception: l('Att beslut skjuts upp av brist på information.', 'Dass Entscheidungen aus Informationsmangel aufgeschoben werden.', 'That decisions are put off for lack of information.'),
        },
        {
          q: l('När är en konsekvensanalys avslutad?', 'Wann ist eine Konsequenzanalyse abgeschlossen?', 'When is a consequence analysis finished?'),
          options: [
            { text: l('När rapporten är skriven och godkänd.', 'Wenn der Bericht geschrieben und freigegeben ist.', 'When the report is written and approved.'), ok: false, fb: l('Då är den ett dokument – inte en process som avslutas i handling.', 'Dann ist sie ein Dokument – kein Prozess, der im Handeln endet.', 'Then it is a document – not a process that ends in action.') },
            { text: l('När beslutet är fattat och ansvaret fördelat.', 'Wenn entschieden und die Verantwortung verteilt ist.', 'When the decision is made and responsibility assigned.'), ok: true, fb: l('Ja. Analysen avslutas i handling.', 'Ja. Die Analyse endet im Handeln.', 'Yes. The analysis ends in action.') },
            { text: l('När konsekvensen har inträffat.', 'Wenn die Konsequenz eingetreten ist.', 'When the consequence has happened.'), ok: false, fb: l('Då är det inte analys längre – det är reparation.', 'Dann ist es keine Analyse mehr – es ist Reparatur.', 'Then it is no longer analysis – it is repair.') },
          ],
          misconception: l('Att analys och beslut är samma sak.', 'Dass Analyse und Entscheidung dasselbe sind.', 'That analysis and decision are the same.'),
        },
        {
          q: l('Vad skiljer planerat underhåll från reparation?', 'Was unterscheidet geplante Wartung von Reparatur?', 'What separates planned maintenance from repair?'),
          options: [
            { text: l('Kostnaden för reservdelarna.', 'Die Kosten der Ersatzteile.', 'The cost of the spare parts.'), ok: false, fb: l('Skillnaden är inte teknisk utan beslutsmässig.', 'Der Unterschied ist nicht technisch, sondern eine Frage der Entscheidung.', 'The difference is not technical but a matter of decision.') },
            { text: l('Tidpunkten för beslutet: före, under eller efter att konsekvensen inträffar.', 'Der Zeitpunkt der Entscheidung: vor, während oder nach dem Eintreten der Konsequenz.', 'The timing of the decision: before, during or after the consequence happens.'), ok: true, fb: l('Ja. Samma förståelse kan ge helt olika utfall beroende på när den används.', 'Ja. Dasselbe Verständnis kann je nach Zeitpunkt der Anwendung zu ganz anderen Ergebnissen führen.', 'Yes. The same understanding can lead to completely different outcomes depending on when it is used.') },
          ],
          misconception: l('Att timing är en teknisk fråga.', 'Dass das Timing eine technische Frage ist.', 'That timing is a technical question.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Fatta det beslut du har skjutit upp – eller sätt ett datum och ett namn på det.',
        'Triff die Entscheidung, die du aufgeschoben hast – oder gib ihr ein Datum und einen Namen.',
        'Make the decision you have been putting off – or give it a date and a name.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 6 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 6 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 6, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Berätta om säkerhetsronden: femton ansvariga, en maskin med kända brister – och ingen som stoppar den. Paus. Fråga: ”Vem hade stoppat den hos er?”',
      'Erzähle vom Sicherheitsrundgang: fünfzehn Verantwortliche, eine Maschine mit bekannten Mängeln – und niemand, der sie stoppt. Pause. Frage: „Wer hätte sie bei euch gestoppt?“',
      'Tell the story of the safety round: fifteen responsible people, a machine with known faults – and nobody who stops it. Pause. Ask: “Who would have stopped it in your organisation?”',
    ),
    questions: [
      l('Vilket beslut hos er väntar – inte på information, utan på någon som bär det?', 'Welche Entscheidung wartet bei euch – nicht auf Informationen, sondern auf jemanden, der sie trägt?', 'Which decision in your organisation is waiting – not for information, but for someone to carry it?'),
      l('Var ersätter dokumentation beslut hos er?', 'Wo ersetzt bei euch Dokumentation die Entscheidung?', 'Where does documentation replace decisions in your organisation?'),
      l('Vad skulle det kosta att agera nu – och vad kostar det att vänta?', 'Was würde es kosten, jetzt zu handeln – und was kostet das Warten?', 'What would it cost to act now – and what does waiting cost?'),
    ],
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
