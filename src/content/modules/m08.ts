// M08 · Konflikt och konfrontation – worked out in full in LERNKONZEPT Annex A.
// Sources: Steg 3 Del II Kap. 8 Att sätta gränsen (Femstegsraketen, De två procenten, En skröna från bryggan);
// Steg 4 Kap. 5, Kap. 8 Verifikation, Kap. 11 Gränssättning; Steg 2 Kap. 6 Stå kvar när det blåser.

import { l, type Module } from '../types';

export const m08: Module = {
  id: 'm08',
  num: 8,
  part: 2,
  title: l('Konflikt och konfrontation', 'Konflikt und Konfrontation', 'Conflict and confrontation'),
  teaser: l('Att stå kvar när det blåser.', 'Stehen bleiben, wenn es stürmt.', 'Standing firm when the wind blows.'),
  goal: l(
    'Du placerar reaktioner på avvikelser i femstegsraketen, sätter gränser i tid, konsekvent och opersonligt – och prövar ärligt om du är beredd att ta steg fem.',
    'Du ordnest Reaktionen auf Abweichungen den fünf Stufen zu, setzt Grenzen rechtzeitig, konsequent und unpersönlich – und prüfst ehrlich, ob du bereit bist, Stufe fünf zu tragen.',
    'You place reactions to deviations on the five-step escalation, set boundaries in time, consistently and impersonally – and honestly test whether you are prepared to take step five.',
  ),
  keyTerms: [
    l('Femstegsraketen', 'Fünf-Stufen-Rakete', 'Five-step escalation'),
    l('Gränssättning', 'Grenzsetzung', 'Setting boundaries'),
    l('Konsekvens är återkoppling', 'Konsequenz ist Rückmeldung', 'Consequence is feedback'),
    l('Att stå kvar', 'Stehen bleiben', 'Standing firm'),
    l('Steg fem', 'Stufe fünf', 'Step five'),
  ],
  sources: [
    { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen' },
    { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt; Kap. 8 Verifikation; Kap. 11 Gränssättning' },
    { book: 'steg2', ch: 'Kap. 6 Stå kvar när det blåser' },
  ],
  image: 'drydock-barge',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Gränsen gör systemet verkligt', 'Die Grenze macht das System wirklich', 'The boundary makes the system real'),
      slides: [
        {
          heading: l('Regler och gränser', 'Regeln und Grenzen', 'Rules and boundaries'),
          body: [
            l(
              'Alla organisationer har regler. Få har gränser. När gränser inte sätts händer alltid samma sak: det acceptabla flyttas. Det som igår var otänkbart blir idag tolererat. Det som idag tolereras blir i morgon normalt.',
              'Alle Organisationen haben Regeln. Wenige haben Grenzen. Wenn keine Grenzen gesetzt werden, passiert immer dasselbe: Das Akzeptable verschiebt sich. Was gestern undenkbar war, wird heute geduldet. Was heute geduldet wird, ist morgen normal.',
              'Every organisation has rules. Few have boundaries. When boundaries are not set, the same thing always happens: what is acceptable shifts. What was unthinkable yesterday is tolerated today. What is tolerated today is normal tomorrow.',
            ),
          ],
          quote: {
            sv: 'Regler beskriver hur något ska vara. Gränser visar vad som händer när det inte är så.',
            de: 'Regeln beschreiben, wie etwas sein soll. Grenzen zeigen, was passiert, wenn es nicht so ist.',
            en: 'Rules describe how something should be. Boundaries show what happens when it is not.',
            src: { book: 'steg4', ch: 'Kap. 11 Gränssättning' },
          },
        },
        {
          heading: l('Femstegsraketen', 'Die Fünf-Stufen-Rakete', 'The five-step escalation'),
          body: [
            l(
              'Att sätta en gräns betyder inte att gå direkt till konflikt. Den som tar ansvar försöker först lösa situationen på det enklaste sättet. Fungerar det inte, blir stegen tydligare.',
              'Eine Grenze zu setzen heißt nicht, direkt in den Konflikt zu gehen. Wer Verantwortung übernimmt, versucht zuerst, die Lage auf die einfachste Weise zu lösen. Funktioniert das nicht, werden die Schritte deutlicher.',
              'Setting a boundary does not mean going straight to conflict. Whoever takes responsibility first tries to solve the situation in the simplest way. If that does not work, the steps become clearer.',
            ),
          ],
          list: [
            l('1. Skämta – en signal i förbifarten. Den som är klok rättar sig utan att tappa ansiktet.', '1. Scherzen – ein Signal im Vorbeigehen. Wer klug ist, korrigiert sich, ohne das Gesicht zu verlieren.', '1. Joke – a passing signal. A sensible person corrects themselves without losing face.'),
            l('2. Förklara – lugnt, inte inför publik: ”Så här fungerar det inte här.”', '2. Erklären – ruhig, nicht vor Publikum: „So funktioniert das hier nicht.“', '2. Explain – calmly, not in front of others: “That is not how it works here.”'),
            l('3. Säg till – ”Det här ska upphöra.” Ingen lång diskussion.', '3. Ansagen – „Das hört jetzt auf.“ Keine lange Diskussion.', '3. Tell – “This is to stop.” No long discussion.'),
            l('4. Varning – nu är det inte längre en dialog.', '4. Verwarnung – jetzt ist es kein Dialog mehr.', '4. Warning – now it is no longer a dialogue.'),
            l('5. Avsked – samarbetet avslutas. Inte av ilska, inte av prestige – utan för att organisationen måste fungera.', '5. Trennung – die Zusammenarbeit endet. Nicht aus Wut, nicht aus Prestige – sondern weil die Organisation funktionieren muss.', '5. Dismissal – the cooperation ends. Not out of anger, not out of prestige – but because the organisation must work.'),
          ],
        },
        {
          heading: l('Från relation till system', 'Von der Beziehung zum System', 'From relationship to system'),
          body: [
            l(
              'Så länge vi befinner oss i de tre första stegen är det fortfarande relationer – mellan kollegor, mellan befäl och besättning. Men om samma fel fortsätter trots tydlighet, tillsägelse och markering, då är det inte längre ett missförstånd. Då är det ett systemproblem.',
              'Solange wir in den ersten drei Stufen sind, geht es noch um Beziehungen – zwischen Kollegen, zwischen Vorgesetzten und Besatzung. Wenn derselbe Fehler aber trotz Klarheit, Ansage und Markierung weitergeht, ist es kein Missverständnis mehr. Dann ist es ein Systemproblem.',
              'As long as we are in the first three steps, it is still about relationships – between colleagues, between officers and crew. But if the same fault continues despite clarity, telling and marking, it is no longer a misunderstanding. Then it is a system problem.',
            ),
          ],
          quote: {
            sv: 'Konsekvens är inte straff. Det är återkoppling.',
            de: 'Konsequenz ist keine Strafe. Sie ist Rückmeldung.',
            en: 'Consequence is not punishment. It is feedback.',
            src: { book: 'steg4', ch: 'Kap. 8 Verifikation' },
          },
        },
        {
          heading: l('De två procenten', 'Die zwei Prozent', 'The two per cent'),
          body: [
            l(
              'Torbjörn är nöjd och glad ungefär 98 procent av tiden. Steg ett och två – skämta och förklara – fungerar just därför: de är inte konflikt, de är kommunikation. Problemet är att människor sällan uppmärksammar de första stegen. De reagerar först vid steg fyra – och plötsligt är det han som är problemet.',
              'Torbjörn ist etwa 98 Prozent der Zeit zufrieden und gut gelaunt. Stufe eins und zwei – scherzen und erklären – funktionieren genau deshalb: Sie sind kein Konflikt, sie sind Kommunikation. Das Problem ist, dass Menschen die ersten Stufen selten bemerken. Sie reagieren erst bei Stufe vier – und plötzlich ist er das Problem.',
              'Torbjörn is content and cheerful about 98 per cent of the time. Steps one and two – joking and explaining – work precisely because of that: they are not conflict, they are communication. The problem is that people rarely notice the first steps. They only react at step four – and suddenly he is the problem.',
            ),
            l(
              'I verkligheten har konflikten funnits länge. De har bara inte märkt den.',
              'In Wirklichkeit gab es den Konflikt schon lange. Sie haben ihn nur nicht bemerkt.',
              'In reality the conflict has been there for a long time. They just have not noticed it.',
            ),
          ],
        },
        {
          heading: l('Varför steg fem måste finnas', 'Warum es Stufe fünf geben muss', 'Why step five must exist'),
          body: [
            l(
              'De flesta konflikter löses i steg ett eller två. Men modellen fungerar bara om alla vet att steg fem finns. Den kräver tre saker som många försöker undvika: konflikt, känslor och kompetens – att veta när ett skämt räcker och när en konsekvens krävs.',
              'Die meisten Konflikte lösen sich in Stufe eins oder zwei. Aber das Modell funktioniert nur, wenn alle wissen, dass es Stufe fünf gibt. Es verlangt drei Dinge, die viele vermeiden: Konflikt, Gefühle und Kompetenz – zu wissen, wann ein Scherz reicht und wann eine Konsequenz nötig ist.',
              'Most conflicts are solved at step one or two. But the model only works if everyone knows step five exists. It requires three things many avoid: conflict, emotions and competence – knowing when a joke is enough and when a consequence is needed.',
            ),
          ],
          quote: {
            sv: 'I fungerande system används steg fem sällan. Inte för att det saknas. Utan för att det finns.',
            de: 'In funktionierenden Systemen wird Stufe fünf selten genutzt. Nicht, weil sie fehlt. Sondern weil es sie gibt.',
            en: 'In working systems step five is rarely used. Not because it is missing. But because it exists.',
            src: { book: 'steg4', ch: 'Kap. 8 Verifikation' },
          },
        },
      ],
      cards: [
        { term: l('Femstegsraketen', 'Fünf-Stufen-Rakete', 'Five-step escalation'), text: l('Skämta, förklara, säg till, varning, avsked.', 'Scherzen, erklären, ansagen, Verwarnung, Trennung.', 'Joke, explain, tell, warning, dismissal.') },
        { term: l('Gränssättning', 'Grenzsetzung', 'Setting boundaries'), text: l('Konsekvent, förutsägbar, opersonligt tillämpad.', 'Konsequent, vorhersehbar, unpersönlich angewendet.', 'Consistent, predictable, applied impersonally.') },
        { term: l('Konsekvens', 'Konsequenz', 'Consequence'), text: l('Återkoppling, inte straff.', 'Rückmeldung, keine Strafe.', 'Feedback, not punishment.') },
        { term: l('Att stå kvar', 'Stehen bleiben', 'Standing firm'), text: l('Principfast – lyssnar, men viker sig inte från grund.', 'Grundsatztreu – hört zu, weicht aber nicht vom Fundament.', 'Firm on principle – listens, but does not give way on the foundation.') },
        { term: l('Steg fem', 'Stufe fünf', 'Step five'), text: l('Används sällan – för att alla vet att den finns.', 'Wird selten genutzt – weil alle wissen, dass es sie gibt.', 'Rarely used – because everyone knows it exists.') },
      ],
    },
    {
      slug: 'stegen',
      type: 'ladder',
      min: 8,
      title: l('Var på stegen hör detta hemma?', 'Wo auf der Leiter gehört das hin?', 'Where on the ladder does this belong?'),
      intro: l(
        'Sex situationer. Välj steg och skriv gärna kort varför. Sedan ser du vad boken föreslår.',
        'Sechs Situationen. Wähle eine Stufe und schreib gern kurz, warum. Danach siehst du, was das Buch vorschlägt.',
        'Six situations. Choose a step and briefly note why if you like. Then you see what the book suggests.',
      ),
      situations: [
        {
          text: l('En ny kollega glömmer hjälmen en gång och skrattar generat.', 'Ein neuer Kollege vergisst einmal den Helm und lacht verlegen.', 'A new colleague forgets their helmet once and laughs awkwardly.'),
          step: 1,
          why: l('Den som är kompetent förstår direkt. De allra flesta fel stannar vid signalen.', 'Wer kompetent ist, versteht sofort. Die allermeisten Fehler enden beim Signal.', 'A competent person understands immediately. The vast majority of mistakes stop at the signal.'),
        },
        {
          text: l('Samma person glömmer hjälmen igen en vecka senare.', 'Dieselbe Person vergisst den Helm eine Woche später wieder.', 'The same person forgets the helmet again a week later.'),
          step: 2,
          why: l('Nu behövs tydlighet – lugnt och inte inför publik: ”Så här fungerar det inte här.”', 'Jetzt braucht es Klarheit – ruhig und nicht vor Publikum: „So funktioniert das hier nicht.“', 'Now clarity is needed – calmly and not in front of others: “That is not how it works here.”'),
        },
        {
          text: l('Tredje gången, trots förklaringen.', 'Zum dritten Mal, trotz der Erklärung.', 'The third time, despite the explanation.'),
          step: 3,
          why: l('”Det här ska upphöra.” Ingen lång diskussion. Nu gäller det gruppen, inte bara individen.', '„Das hört jetzt auf.“ Keine lange Diskussion. Jetzt geht es um die Gruppe, nicht nur um die Einzelperson.', '“This is to stop.” No long discussion. Now it concerns the group, not just the individual.'),
        },
        {
          text: l('En truck med trasiga bromsar körs vidare trots att den är anmäld.', 'Ein Stapler mit defekten Bremsen wird weitergefahren, obwohl er gemeldet ist.', 'A forklift with broken brakes keeps being driven even though it has been reported.'),
          step: 4,
          why: l('Fara för helheten. Det är inte längre en dialog: dokumentera, utse en ansvarig, beslut med datum.', 'Gefahr für das Ganze. Es ist kein Dialog mehr: dokumentieren, einen Verantwortlichen benennen, Entscheidung mit Datum.', 'Danger to the whole. It is no longer a dialogue: document, name someone responsible, a decision with a date.'),
        },
        {
          text: l('En leverantör levererar för fjärde gången utan de överenskomna säkerhetsdokumenten.', 'Ein Lieferant liefert zum vierten Mal ohne die vereinbarten Sicherheitsunterlagen.', 'A supplier delivers for the fourth time without the agreed safety documents.'),
          step: 5,
          why: l('Samarbetet avslutas – inte som straff, utan som skydd. I en organisation betyder steg fem att något kopplas bort från systemet.', 'Die Zusammenarbeit endet – nicht als Strafe, sondern als Schutz. In einer Organisation bedeutet Stufe fünf, dass etwas vom System abgekoppelt wird.', 'The cooperation ends – not as punishment, but as protection. In an organisation, step five means something is disconnected from the system.'),
        },
        {
          text: l('En chef ”glömmer” upprepade gånger en kontroll som är ett Skall.', 'Ein Vorgesetzter „vergisst“ wiederholt eine Kontrolle, die ein Muss ist.', 'A manager repeatedly “forgets” a check that is a Must.'),
          step: 4,
          why: l('Ett Skall-krav: frågan går från relation till system. Personalåtgärder följer arbetsrätten.', 'Eine Muss-Anforderung: Die Frage wechselt von der Beziehung zum System. Personalmaßnahmen folgen dem Arbeitsrecht.', 'A Must requirement: the question moves from relationship to system. Personnel measures follow employment law.'),
        },
      ],
      note: l(
        'I OVÄLD-plattformen gäller stegen avvikelser, processer, utrustning och leverantörer. Personalåtgärder hanteras enligt arbetsrätten.',
        'In der OVÄLD-Plattform gelten die Stufen für Abweichungen, Prozesse, Ausrüstung und Lieferanten. Personalmaßnahmen richten sich nach dem Arbeitsrecht.',
        'In the OVÄLD platform the steps apply to deviations, processes, equipment and suppliers. Personnel measures are handled according to employment law.',
      ),
    },
    {
      slug: 'bryggan',
      type: 'scenario',
      min: 10,
      title: l('En skröna från bryggan', 'Eine Erzählung von der Brücke', 'A story from the bridge'),
      source: { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen – En skröna från bryggan' },
      image: 'drydock-barge',
      intro: l(
        'Fartyget ska in på varv och läggas i torrdocka – ett precisionsarbete. All ballast i dubbelbotten ska vara ute, och djupgåendet måste stämma, annars går fartyget inte in i dockan. Du är befälhavare. Din överstyrman har du redan förstått inte riktigt har den kompetens som krävs för rollen.',
        'Das Schiff soll in die Werft und ins Trockendock – Präzisionsarbeit. Der gesamte Ballast im Doppelboden muss draußen sein, und der Tiefgang muss stimmen, sonst passt das Schiff nicht ins Dock. Du bist Kapitän. Bei deinem Ersten Offizier hast du schon gemerkt, dass er nicht wirklich die Kompetenz hat, die die Rolle verlangt.',
        'The ship is to go into the yard and into dry dock – precision work. All ballast in the double bottom must be out and the draught must be right, otherwise the ship will not enter the dock. You are the master. You have already realised that your chief officer does not really have the competence the role requires.',
      ),
      nodes: [
        {
          situation: l('Under resan märker du att överstyrmannen är osäker på ballastsystemet.', 'Während der Reise merkst du, dass der Erste Offizier beim Ballastsystem unsicher ist.', 'During the voyage you notice that the chief officer is unsure about the ballast system.'),
          options: [
            {
              label: l('Låter det vara – han är ju överstyrman.', 'Es dabei belassen – er ist ja Erster Offizier.', 'Leave it – he is the chief officer, after all.'),
              c: {
                orsak: l('Titeln får ersätta förmågan.', 'Der Titel ersetzt die Fähigkeit.', 'The title is allowed to replace ability.'),
                verkan: l('Osäkerheten finns kvar till dockningen.', 'Die Unsicherheit bleibt bis zum Docken.', 'The uncertainty remains until docking.'),
                konsekvens: l('Problemet möter er när det är som dyrast.', 'Das Problem trifft euch, wenn es am teuersten ist.', 'The problem meets you when it is most expensive.'),
                bearer: l('Fartyget och varvsplanen.', 'Das Schiff und der Werftplan.', 'The ship and the yard schedule.'),
              },
            },
            {
              label: l('Förklarar flera gånger, visar honom och går igenom systemet tillsammans.', 'Mehrmals erklären, es ihm zeigen und das System gemeinsam durchgehen.', 'Explain several times, show him and go through the system together.'),
              book: true,
              c: {
                orsak: l('Steg två: förklara.', 'Stufe zwei: erklären.', 'Step two: explain.'),
                verkan: l('Han får flera chanser att förstå.', 'Er bekommt mehrere Chancen zu verstehen.', 'He gets several chances to understand.'),
                konsekvens: l('Ansvaret för att lära sig ligger nu hos honom.', 'Die Verantwortung, es zu lernen, liegt jetzt bei ihm.', 'The responsibility for learning now lies with him.'),
                bearer: l('Överstyrmannen.', 'Der Erste Offizier.', 'The chief officer.'),
              },
            },
            {
              label: l('Tar över ballastkörningen själv.', 'Das Ballastmanöver selbst übernehmen.', 'Take over the ballast operation yourself.'),
              c: {
                orsak: l('Du gör hans arbete.', 'Du machst seine Arbeit.', 'You do his job.'),
                verkan: l('Han lär sig ingenting.', 'Er lernt nichts.', 'He learns nothing.'),
                konsekvens: l('Befäl glider över i kontroll och dominans.', 'Befehl gleitet in Kontrolle und Dominanz ab.', 'Command slides into control and dominance.'),
                bearer: l('Du – och nästa befälhavare han seglar med.', 'Du – und der nächste Kapitän, mit dem er fährt.', 'You – and the next master he sails with.'),
              },
            },
          ],
        },
        {
          situation: l(
            'Det är dags att gå in i dockan. Du ringer kontrollrummet: ”Är allt klart?” Svaret: ”Nej.” Du rusar ner. Ballasten är kvar; fartyget ligger cirka trettio centimeter för djupt. Överstyrmannen sitter framför panelen och konstaterar lugnt: ”Pumpen tar inte.”',
            'Es ist Zeit, ins Dock zu gehen. Du rufst im Kontrollraum an: „Ist alles klar?“ Die Antwort: „Nein.“ Du eilst hinunter. Der Ballast ist noch drin; das Schiff liegt etwa dreißig Zentimeter zu tief. Der Erste Offizier sitzt vor dem Pult und stellt ruhig fest: „Die Pumpe zieht nicht.“',
            'It is time to enter the dock. You call the control room: “Is everything ready?” The answer: “No.” You rush down. The ballast is still in; the ship is lying about thirty centimetres too deep. The chief officer sits in front of the panel and calmly states: “The pump isn’t taking.”',
          ),
          options: [
            {
              label: l('Den passiva: väntar på att han löser det – det är hans uppgift.', 'Die passive Reaktion: warten, bis er es löst – es ist seine Aufgabe.', 'The passive reaction: wait for him to solve it – it is his job.'),
              c: {
                orsak: l('Jag gör bara som jag blivit tillsagd.', 'Ich tue nur, was mir gesagt wurde.', 'I only do what I have been told.'),
                verkan: l('Ingen löser problemet.', 'Niemand löst das Problem.', 'Nobody solves the problem.'),
                konsekvens: l('Fartyget missar dockan.', 'Das Schiff verpasst das Dock.', 'The ship misses the dock.'),
                bearer: l('Varvet och rederiet.', 'Die Werft und die Reederei.', 'The yard and the shipping company.'),
              },
            },
            {
              label: l('Den byråkratiska: rapporterar förseningen till rederiet och väntar.', 'Die bürokratische Reaktion: die Verzögerung an die Reederei melden und warten.', 'The bureaucratic reaction: report the delay to the company and wait.'),
              c: {
                orsak: l('Jag rapporterar uppåt och väntar.', 'Ich melde nach oben und warte.', 'I report upwards and wait.'),
                verkan: l('Problemet blir någon annans.', 'Das Problem wird zu dem eines anderen.', 'The problem becomes someone else’s.'),
                konsekvens: l('Förseningen dokumenteras – och fortsätter.', 'Die Verzögerung wird dokumentiert – und geht weiter.', 'The delay is documented – and continues.'),
                bearer: l('Rederiet.', 'Die Reederei.', 'The company.'),
              },
            },
            {
              label: l('Den ansvarstagande: går ner till bottenventilen, stryper överbordsventilen, öppnar spädmatningen och får tillbaka suget.', 'Die verantwortungsvolle Reaktion: zum Bodenventil hinunter, das Außenbordventil drosseln, die Zuspeisung öffnen und den Sog zurückholen.', 'The responsible reaction: go down to the sea valve, throttle the overboard valve, open the feed and get the suction back.'),
              book: true,
              c: {
                orsak: l('Detta måste lösas.', 'Das muss gelöst werden.', 'This must be solved.'),
                verkan: l('Efter ungefär en timme är all ballast ute.', 'Nach etwa einer Stunde ist der gesamte Ballast draußen.', 'After about an hour all the ballast is out.'),
                konsekvens: l('Fartyget kan gå in i dockan.', 'Das Schiff kann ins Dock.', 'The ship can enter the dock.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
          ],
        },
        {
          situation: l('Fartyget är i dockan. Nu är du arg. Det här är inte längre steg ett, två eller tre.', 'Das Schiff ist im Dock. Jetzt bist du wütend. Das ist nicht mehr Stufe eins, zwei oder drei.', 'The ship is in the dock. Now you are angry. This is no longer step one, two or three.'),
          options: [
            {
              label: l('Skämtar bort det – det löste sig ju.', 'Es weglachen – es hat sich ja gelöst.', 'Laugh it off – it worked out after all.'),
              c: {
                orsak: l('Steg ett vid ett steg-fem-läge.', 'Stufe eins in einer Lage für Stufe fünf.', 'Step one in a step-five situation.'),
                verkan: l('Alla lär sig att konsekvensen aldrig kommer.', 'Alle lernen, dass die Konsequenz nie kommt.', 'Everyone learns that the consequence never comes.'),
                konsekvens: l('Regler blir bara ord.', 'Regeln werden bloße Worte.', 'Rules become mere words.'),
                bearer: l('Nästa dockning – och besättningen.', 'Das nächste Docken – und die Besatzung.', 'The next docking – and the crew.'),
              },
            },
            {
              label: l('Ger honom ännu en varning.', 'Ihm noch eine Verwarnung geben.', 'Give him one more warning.'),
              c: {
                orsak: l('Steg fyra – en gång till.', 'Stufe vier – noch einmal.', 'Step four – once more.'),
                verkan: l('Han sitter kvar i en position där det inte finns utrymme för misstag.', 'Er bleibt in einer Position, in der kein Raum für Fehler ist.', 'He stays in a position with no room for mistakes.'),
                konsekvens: l('Risken flyttas till nästa gång.', 'Das Risiko wandert zum nächsten Mal.', 'The risk moves on to next time.'),
                bearer: l('Fartyget.', 'Das Schiff.', 'The ship.'),
              },
            },
            {
              label: l('Steg fem: när ni kommer till varvet får överstyrmannen mönstra av.', 'Stufe fünf: Wenn ihr in der Werft seid, muss der Erste Offizier abmustern.', 'Step five: when you reach the yard, the chief officer signs off.'),
              book: true,
              c: {
                orsak: l('Han har fått flera chanser att förstå.', 'Er hat mehrere Chancen bekommen zu verstehen.', 'He has had several chances to understand.'),
                verkan: l('Samarbetet avslutas – utan ilska och utan prestige.', 'Die Zusammenarbeit endet – ohne Wut und ohne Prestige.', 'The cooperation ends – without anger and without prestige.'),
                konsekvens: l('Fartyget kan fungera. Alla vet att steg fem finns.', 'Das Schiff kann funktionieren. Alle wissen, dass es Stufe fünf gibt.', 'The ship can function. Everyone knows step five exists.'),
                bearer: l('Överstyrmannen – och du, som bär beslutet.', 'Der Erste Offizier – und du, der die Entscheidung trägt.', 'The chief officer – and you, who carry the decision.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Efter ungefär en timme var all ballast ute och fartyget kunde gå in i dockan. När de kom till varvet fick överstyrmannen mönstra av. Det märkliga var vad som hände när han lämnade fartyget: han tackade. Han sa att han hade lärt sig mycket ombord. Och det var kanske sant. Men i den position han hade fanns inget utrymme för att lära sig genom misstag. När ett fartyg ska in i en torrdocka måste saker fungera. Inte i morgon. Inte nästa gång. Just då.',
        'Nach etwa einer Stunde war der gesamte Ballast draußen, und das Schiff konnte ins Dock. Als sie in der Werft ankamen, musste der Erste Offizier abmustern. Seltsam war, was geschah, als er das Schiff verließ: Er bedankte sich. Er sagte, er habe an Bord viel gelernt. Und vielleicht stimmte das. Aber in seiner Position gab es keinen Raum, durch Fehler zu lernen. Wenn ein Schiff ins Trockendock soll, müssen die Dinge funktionieren. Nicht morgen. Nicht beim nächsten Mal. Genau dann.',
        'After about an hour all the ballast was out and the ship could enter the dock. When they reached the yard, the chief officer signed off. The strange thing was what happened when he left the ship: he thanked Torbjörn. He said he had learned a lot on board. And perhaps that was true. But in the position he held there was no room for learning through mistakes. When a ship is to enter a dry dock, things must work. Not tomorrow. Not next time. Right then.',
      ),
      quote: {
        sv: 'Min femstegsmodell handlar inte om att vara hård. Den handlar om att ge människor flera chanser att förstå.',
        de: 'Mein Fünf-Stufen-Modell hat nichts mit Härte zu tun. Es geht darum, Menschen mehrere Chancen zu geben zu verstehen.',
        en: 'My five-step model is not about being hard. It is about giving people several chances to understand.',
        src: { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen – En skröna från bryggan' },
      },
    },
    {
      slug: 'hardhet',
      type: 'classify',
      min: 5,
      title: l('Hårdhet eller gränssättning?', 'Härte oder Grenzsetzung?', 'Hardness or setting boundaries?'),
      intro: l(
        'Gränssättning är inte ljudnivå. Den är konsekvent, förutsägbar och opersonligt tillämpad.',
        'Grenzsetzung ist keine Frage der Lautstärke. Sie ist konsequent, vorhersehbar und unpersönlich angewendet.',
        'Setting boundaries is not about volume. It is consistent, predictable and applied impersonally.',
      ),
      categories: [
        { id: 'hardhet', label: l('Hårdhet', 'Härte', 'Hardness'), hint: l('inkonsekvent, känslostyrd', 'inkonsequent, gefühlsgesteuert', 'inconsistent, driven by emotion') },
        { id: 'grans', label: l('Gränssättning', 'Grenzsetzung', 'Setting boundaries'), hint: l('konsekvent, förutsägbar, opersonlig', 'konsequent, vorhersehbar, unpersönlich', 'consistent, predictable, impersonal') },
      ],
      items: [
        {
          text: l('Att höja rösten när det blir för mycket.', 'Laut werden, wenn es zu viel wird.', 'Raising your voice when it gets too much.'),
          cat: 'hardhet',
          why: l('Styrs av situationen, inte av systemet. Den med legitimitet behöver sällan höja rösten.', 'Gesteuert von der Situation, nicht vom System. Wer Legitimität hat, muss selten laut werden.', 'Driven by the situation, not the system. Someone with legitimacy rarely needs to raise their voice.'),
        },
        {
          text: l('Samma regel för alla – även för de omtyckta.', 'Dieselbe Regel für alle – auch für die Beliebten.', 'The same rule for everyone – including the popular ones.'),
          cat: 'grans',
          why: l('Opersonlig tillämpning. När principer varierar med person förloras tillit.', 'Unpersönliche Anwendung. Wenn Prinzipien je nach Person variieren, geht Vertrauen verloren.', 'Impersonal application. When principles vary with the person, trust is lost.'),
        },
        {
          text: l('Ibland låta det passera, ibland reagera hårt.', 'Manchmal durchgehen lassen, manchmal hart reagieren.', 'Sometimes letting it pass, sometimes reacting harshly.'),
          cat: 'hardhet',
          why: l('Skapar godtycke. Ingen vet var gränsen går.', 'Erzeugt Willkür. Niemand weiß, wo die Grenze ist.', 'Creates arbitrariness. Nobody knows where the boundary is.'),
        },
        {
          text: l('Att i förväg säga vad som händer vid upprepning.', 'Vorher sagen, was bei Wiederholung passiert.', 'Saying in advance what happens if it happens again.'),
          cat: 'grans',
          why: l('Förutsägbart. Den som bryter mot regeln förstår att nästa steg får följder.', 'Vorhersehbar. Wer gegen die Regel verstößt, weiß, dass der nächste Schritt Folgen hat.', 'Predictable. Whoever breaks the rule understands that the next step has consequences.'),
        },
        {
          text: l('Att sätta gränsen först när det har blivit offentligt.', 'Die Grenze erst setzen, wenn es öffentlich geworden ist.', 'Setting the boundary only once it has become public.'),
          cat: 'hardhet',
          why: l('Gränsen hänger på omständigheterna, inte på handlingen.', 'Die Grenze hängt an den Umständen, nicht an der Handlung.', 'The boundary depends on the circumstances, not on the act.'),
        },
        {
          text: l('Att gå till nästa steg först när signalen har ignorerats.', 'Erst dann zur nächsten Stufe gehen, wenn das Signal ignoriert wurde.', 'Moving to the next step only once the signal has been ignored.'),
          cat: 'grans',
          why: l('Den som går för fort skapar onödig konflikt. Den som går för långsamt tappar auktoritet.', 'Wer zu schnell geht, schafft unnötigen Konflikt. Wer zu langsam geht, verliert Autorität.', 'Whoever goes too fast creates needless conflict. Whoever goes too slowly loses authority.'),
        },
      ],
      src: { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen' },
    },
    {
      slug: 'befalssvar',
      type: 'objection',
      min: 5,
      title: l('”Det där låter hårt.”', '„Das klingt hart.“', '“That sounds harsh.”'),
      intro: l(
        'Tre invändningar som kommer när en gräns sätts. Svara utan att försvara dig.',
        'Drei Einwände, die kommen, wenn eine Grenze gesetzt wird. Antworte, ohne dich zu verteidigen.',
        'Three objections that come when a boundary is set. Answer without defending yourself.',
      ),
      items: [
        {
          objection: l('Det där låter hårt.', 'Das klingt hart.', 'That sounds harsh.'),
          answer: l('Ansvar upplevs ofta som hårt av den som slipper ta det.', 'Verantwortung wird oft von dem als hart empfunden, der sie nicht übernehmen muss.', 'Responsibility is often felt as harsh by those who get to avoid it.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 3' },
        },
        {
          objection: l('Men tänk om man har det svårt.', 'Aber was, wenn jemand es gerade schwer hat?', 'But what if someone is having a hard time?'),
          answer: l('Då är ansvar ännu viktigare – annars bär någon annan priset.', 'Dann ist Verantwortung noch wichtiger – sonst zahlt jemand anderes den Preis.', 'Then responsibility matters even more – otherwise someone else pays the price.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 15' },
        },
        {
          objection: l('Nu räcker det, Kapten.', 'Jetzt reicht es, Kapitän.', 'That’s enough, Captain.'),
          answer: l('Den som är principfast kan ändra beslut om fakta förändras. Men han ändrar inte beslut för att trycket ökar.', 'Wer grundsatztreu ist, kann eine Entscheidung ändern, wenn sich die Fakten ändern. Aber er ändert sie nicht, weil der Druck steigt.', 'Someone firm on principle can change a decision if the facts change. But they do not change it because the pressure rises.'),
          src: { book: 'steg2', ch: 'Kap. 6, 6.5 Skillnaden mellan envishet och principfasthet' },
        },
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 4,
      title: l('Är jag beredd att ta steg fem?', 'Bin ich bereit, Stufe fünf zu gehen?', 'Am I prepared to take step five?'),
      prompts: [
        l('Är jag beredd att ta steg fem – och om inte, vad betyder det för steg ett till fyra?', 'Bin ich bereit, Stufe fünf zu gehen – und wenn nicht, was bedeutet das für Stufe eins bis vier?', 'Am I prepared to take step five – and if not, what does that mean for steps one to four?'),
        l('Var har jag låtit en gräns glida, ett undantag i taget?', 'Wo habe ich eine Grenze schleifen lassen, eine Ausnahme nach der anderen?', 'Where have I let a boundary slide, one exception at a time?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Steg fem är ett tecken på att systemet har misslyckats.” Stämmer det?', '„Stufe fünf ist ein Zeichen, dass das System versagt hat.“ Stimmt das?', '“Step five is a sign that the system has failed.” Is that true?'),
          options: [
            { text: l('Ja – i ett bra system behövs den aldrig.', 'Ja – in einem guten System braucht man sie nie.', 'Yes – in a good system it is never needed.'), ok: false, fb: l('Boken: i fungerande system används steg fem sällan – just för att alla vet att det finns.', 'Das Buch: In funktionierenden Systemen wird Stufe fünf selten genutzt – gerade weil alle wissen, dass es sie gibt.', 'The book: in working systems step five is rarely used – precisely because everyone knows it exists.') },
            { text: l('Nej – att steg fem finns är det som får hela modellen att fungera.', 'Nein – dass es Stufe fünf gibt, ist genau das, was das ganze Modell funktionieren lässt.', 'No – the existence of step five is what makes the whole model work.'), ok: true, fb: l('Ja. Om konsekvensen aldrig kommer lär sig människor snabbt att regler bara är ord.', 'Ja. Wenn die Konsequenz nie kommt, lernen Menschen schnell, dass Regeln nur Worte sind.', 'Yes. If the consequence never comes, people quickly learn that rules are only words.') },
          ],
          misconception: l('Att konsekvens är detsamma som misslyckande.', 'Dass Konsequenz dasselbe ist wie Versagen.', 'That consequence is the same as failure.'),
        },
        {
          q: l('Från vilket steg blir frågan en fråga för systemet i stället för relationen?', 'Ab welcher Stufe wird die Frage zu einer Sache des Systems statt der Beziehung?', 'From which step does the question become a matter for the system instead of the relationship?'),
          options: [
            { text: l('Steg 2', 'Stufe 2', 'Step 2'), ok: false, fb: l('Steg 1–3 är fortfarande kommunikation mellan människor.', 'Stufe 1–3 sind noch Kommunikation zwischen Menschen.', 'Steps 1–3 are still communication between people.') },
            { text: l('Steg 3', 'Stufe 3', 'Step 3'), ok: false, fb: l('Tillsägelsen är tydlig – men fortfarande en möjlighet att förstå.', 'Die Ansage ist deutlich – aber noch eine Gelegenheit zu verstehen.', 'Telling is clear – but still a chance to understand.') },
            { text: l('Steg 4', 'Stufe 4', 'Step 4'), ok: true, fb: l('Ja. Där går gränsen mellan människa och system.', 'Ja. Dort verläuft die Grenze zwischen Mensch und System.', 'Yes. That is where the line runs between person and system.') },
          ],
          misconception: l('Att allt är en relationsfråga.', 'Dass alles eine Beziehungsfrage ist.', 'That everything is a question of relationships.'),
        },
        {
          q: l('Vad skiljer gränssättning från hårdhet?', 'Was unterscheidet Grenzsetzung von Härte?', 'What separates setting boundaries from hardness?'),
          options: [
            { text: l('Ljudnivån.', 'Die Lautstärke.', 'The volume.'), ok: false, fb: l('Den som har legitimitet behöver sällan höja rösten.', 'Wer Legitimität hat, muss selten laut werden.', 'Someone with legitimacy rarely needs to raise their voice.') },
            { text: l('Konsekvens och förutsägbarhet i tillämpningen.', 'Konsequenz und Vorhersehbarkeit in der Anwendung.', 'Consistency and predictability in how it is applied.'), ok: true, fb: l('Ja. Samma regel, samma steg, för alla.', 'Ja. Dieselbe Regel, dieselben Stufen, für alle.', 'Yes. The same rule, the same steps, for everyone.') },
            { text: l('Hur arg man är.', 'Wie wütend man ist.', 'How angry you are.'), ok: false, fb: l('Steg fem tas inte av ilska – utan för att organisationen måste fungera.', 'Stufe fünf wird nicht aus Wut gegangen – sondern weil die Organisation funktionieren muss.', 'Step five is not taken out of anger – but because the organisation must work.') },
          ],
          misconception: l('Att tydlighet kräver hårdhet.', 'Dass Klarheit Härte verlangt.', 'That clarity requires hardness.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Välj en gräns du har skjutit upp. Sätt den denna vecka – lugnt, tydligt och på samma sätt för alla.',
        'Wähle eine Grenze, die du aufgeschoben hast. Setze sie diese Woche – ruhig, klar und für alle gleich.',
        'Choose a boundary you have put off. Set it this week – calmly, clearly and in the same way for everyone.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 9 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 9 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 9, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Ett kort exempel – bryggan eller byggarbetsplatsen. Paus. Sedan: ”Hur långt har ni låtit något gå innan någon sa stopp?”',
      'Ein kurzes Beispiel – die Brücke oder die Baustelle. Pause. Dann: „Wie weit habt ihr etwas laufen lassen, bevor jemand Stopp sagte?“',
      'A short example – the bridge or the building site. Pause. Then: “How far have you let something go before someone said stop?”',
    ),
    questions: [
      l('Var på stegen fastnar ni oftast – och varför?', 'Wo auf der Leiter bleibt ihr am häufigsten hängen – und warum?', 'Where on the ladder do you most often get stuck – and why?'),
      l('Vet alla hos er att steg fem finns?', 'Wissen bei euch alle, dass es Stufe fünf gibt?', 'Does everyone in your organisation know that step five exists?'),
      l('Vilken gräns har flyttats hos er, ett undantag i taget?', 'Welche Grenze hat sich bei euch verschoben, eine Ausnahme nach der anderen?', 'Which boundary has shifted in your organisation, one exception at a time?'),
    ],
    note: l(
      'Bryt diskussioner om konkreta personalfall, politik och ”ja men cheferna …”. Bryt-mall: ”Nu har vi tappat ansvarsspåret.” Rätt motstånd – tystnad, spända miner, eftertänksamhet – är ett tecken att fortsätta.',
      'Brich Diskussionen über konkrete Personalfälle, Politik und „ja, aber die Chefs …“ ab. Abbruchsatz: „Jetzt haben wir die Spur der Verantwortung verloren.“ Richtiger Widerstand – Stille, angespannte Gesichter, Nachdenklichkeit – ist ein Zeichen weiterzumachen.',
      'Cut off discussions about specific personnel cases, politics and “yes, but the managers …”. Cut-off line: “Now we have lost the track of responsibility.” The right kind of resistance – silence, tense faces, thoughtfulness – is a sign to continue.',
    ),
    close: l(
      '”Det finns inget krav att hålla med …” – paus – ”Vad tar DU befäl över till nästa gång?” Tack. Punkt.',
      '„Es gibt keine Pflicht, zuzustimmen …“ – Pause – „Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Danke. Punkt.',
      '“There is no requirement to agree …” – pause – “What will YOU take command of until next time?” Thank you. Full stop.',
    ),
  },
};
