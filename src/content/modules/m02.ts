// M02 · Självledarskap i vardagen
// Sources: Steg 2 Kap. 2 Sluta skylla (på riktigt), Kap. 4 Bygg din inre struktur; Steg 1 Kap. 2 Att utföra.

import { l, type Module } from '../types';

export const m02: Module = {
  id: 'm02',
  num: 2,
  part: 1,
  title: l('Självledarskap i vardagen', 'Selbstführung im Alltag', 'Self-leadership in everyday life'),
  teaser: l(
    'Hur du omsätter värderingar i handling och bygger personligt omdöme.',
    'Wie du Werte in Handeln umsetzt und persönliches Urteilsvermögen aufbaust.',
    'How you turn values into action and build personal judgement.',
  ),
  goal: l(
    'Du känner igen offerreflexen hos dig själv, skiljer förklaring från ursäkt och bygger en enkel inre struktur: rutin före motivation.',
    'Du erkennst den Opferreflex bei dir selbst, unterscheidest Erklärung von Ausrede und baust eine einfache innere Struktur auf: Routine vor Motivation.',
    'You recognise the victim reflex in yourself, tell an explanation from an excuse, and build a simple inner structure: routine before motivation.',
  ),
  keyTerms: [
    l('Sluta skylla', 'Aufhören, die Schuld zu schieben', 'Stop blaming'),
    l('Förklaring är inte ursäkt', 'Erklärung ist keine Ausrede', 'An explanation is not an excuse'),
    l('Den inre domstolen', 'Das innere Gericht', 'The inner court'),
    l('Rutin före motivation', 'Routine vor Motivation', 'Routine before motivation'),
    l('Den inre ansvarskedjan', 'Die innere Verantwortungskette', 'The inner chain of responsibility'),
  ],
  sources: [
    { book: 'steg2', ch: 'Kap. 2 Sluta skylla (på riktigt)' },
    { book: 'steg2', ch: 'Kap. 4 Bygg din inre struktur' },
    { book: 'steg1', ch: 'Kap. 2 Att utföra – värdet av arbete och mening' },
  ],
  image: 'rope-coil',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Offerreflexen och den inre domstolen', 'Der Opferreflex und das innere Gericht', 'The victim reflex and the inner court'),
      slides: [
        {
          heading: l('Offerreflexen', 'Der Opferreflex', 'The victim reflex'),
          body: [
            l(
              'Människan har en inbyggd reflex. När något går fel söker vi orsaken utanför oss själva. Det är logiskt och psykologiskt skyddande – det minskar skuld.',
              'Der Mensch hat einen eingebauten Reflex. Wenn etwas schiefgeht, suchen wir die Ursache außerhalb von uns. Das ist logisch und schützt psychologisch – es verringert Schuld.',
              'Humans have a built-in reflex. When something goes wrong, we look for the cause outside ourselves. It is logical and psychologically protective – it reduces guilt.',
            ),
            l(
              'Men det gör oss också passiva. Om felet ligger hos någon annan ligger lösningen också hos någon annan.',
              'Aber es macht uns auch passiv. Liegt der Fehler bei jemand anderem, liegt auch die Lösung bei jemand anderem.',
              'But it also makes us passive. If the fault lies with someone else, so does the solution.',
            ),
          ],
          quote: {
            sv: 'Skyldig är ointressant. Ansvarig är avgörande.',
            de: 'Schuldig ist uninteressant. Verantwortlich ist entscheidend.',
            en: 'Guilty is irrelevant. Responsible is decisive.',
            src: { book: 'steg2', ch: 'Kap. 2, 2.10 Slutprincip' },
          },
        },
        {
          heading: l('Förklaring är inte ursäkt', 'Erklärung ist keine Ausrede', 'An explanation is not an excuse'),
          body: [
            l(
              'Det finns en viktig skillnad mellan att förstå orsaken och att använda orsaken som ursäkt. Landorganisationen kan ha gjort fel. Systemet kan vara bristfälligt. Men frågan kvarstår: vad är ditt ansvar i situationen?',
              'Es gibt einen wichtigen Unterschied, ob man die Ursache versteht oder sie als Ausrede benutzt. Die Landorganisation kann Fehler gemacht haben. Das System kann mangelhaft sein. Doch die Frage bleibt: Was ist deine Verantwortung in der Situation?',
              'There is an important difference between understanding the cause and using the cause as an excuse. The shore organisation may have made mistakes. The system may be flawed. But the question remains: what is your responsibility in the situation?',
            ),
          ],
          quote: {
            sv: 'OVÄLD innebär inte att du tar på dig andras skuld. Det innebär att du tar ansvar för din del av verkligheten.',
            de: 'OVÄLD heißt nicht, dass du die Schuld anderer auf dich nimmst. Es heißt, dass du Verantwortung für deinen Teil der Wirklichkeit übernimmst.',
            en: 'OVÄLD does not mean taking on other people’s guilt. It means taking responsibility for your part of reality.',
            src: { book: 'steg2', ch: 'Kap. 2, 2.2 Förklaring är inte ursäkt' },
          },
        },
        {
          heading: l('Den inre domstolen', 'Das innere Gericht', 'The inner court'),
          body: [
            l(
              'I varje människa pågår ett samtal: ”Det var inte mitt fel.” ”Jag hade inte rätt förutsättningar.” ”De andra borde ha …” Språket där inne ska inte bytas till självanklagelse – utan till klarhet. Nästa gång något går fel, ställ tre frågor och skriv ned svaren:',
              'In jedem Menschen läuft ein Gespräch: „Es war nicht meine Schuld.“ „Ich hatte nicht die richtigen Voraussetzungen.“ „Die anderen hätten …“ Die Sprache dort drinnen soll nicht zur Selbstanklage werden – sondern zur Klarheit. Wenn das nächste Mal etwas schiefgeht, stell drei Fragen und schreib die Antworten auf:',
              'Inside every person a conversation goes on: “It wasn’t my fault.” “I didn’t have the right conditions.” “The others should have …” The language in there should not turn into self-accusation – but into clarity. Next time something goes wrong, ask three questions and write down the answers:',
            ),
          ],
          list: [
            l('Vad ligger faktiskt inom mitt ansvar?', 'Was liegt tatsächlich in meiner Verantwortung?', 'What actually lies within my responsibility?'),
            l('Vad kan jag påverka direkt?', 'Was kann ich direkt beeinflussen?', 'What can I influence directly?'),
            l('Vad behöver jag sluta prata om och börja agera på?', 'Worüber muss ich aufhören zu reden und anfangen zu handeln?', 'What do I need to stop talking about and start acting on?'),
          ],
          quote: {
            sv: 'Frågan är inte: Vem kan jag skylla på? Frågan är: Vad kan jag göra nu?',
            de: 'Die Frage ist nicht: Wem kann ich die Schuld geben? Die Frage ist: Was kann ich jetzt tun?',
            en: 'The question is not: whom can I blame? The question is: what can I do now?',
            src: { book: 'steg2', ch: 'Kap. 2, 2.3 och 2.8' },
          },
        },
        {
          heading: l('”Det höll första veckan”', '„In der ersten Woche hat es gehalten“', '“It held the first week”'),
          body: [
            l(
              'En ny rutin ombord: en enkel kontroll före varje avgång, tre minuter, ökad säkerhet. Alla höll med. Första veckan fungerade den perfekt. Andra veckan hoppade någon över den när tiden blev knapp. Tredje veckan var den ”underförstådd”. Ingen tog bort den. Den bara gled bort. Det var inte motstånd. Det var bekvämlighet.',
              'Eine neue Routine an Bord: eine einfache Kontrolle vor jedem Auslaufen, drei Minuten, mehr Sicherheit. Alle waren einverstanden. In der ersten Woche funktionierte sie perfekt. In der zweiten ließ jemand sie aus, als die Zeit knapp wurde. In der dritten war sie „selbstverständlich“. Niemand schaffte sie ab. Sie glitt einfach weg. Es war kein Widerstand. Es war Bequemlichkeit.',
              'A new routine on board: a simple check before every departure, three minutes, more safety. Everyone agreed. The first week it worked perfectly. The second week someone skipped it when time was short. By the third week it was “understood”. Nobody removed it. It simply slipped away. It was not resistance. It was convenience.',
            ),
            l('”Rutinen var god. Strukturen saknades. Och utan struktur dör även goda intentioner.”', '„Die Routine war gut. Die Struktur fehlte. Und ohne Struktur sterben auch gute Absichten.“', '“The routine was good. The structure was missing. And without structure even good intentions die.”'),
          ],
          quote: {
            sv: 'Motivation är flyktig. Struktur är stabil.',
            de: 'Motivation ist flüchtig. Struktur ist stabil.',
            en: 'Motivation is fleeting. Structure is stable.',
            src: { book: 'steg2', ch: 'Kap. 4, 4.1 Rutin före motivation' },
          },
        },
        {
          heading: l('Den inre ansvarskedjan', 'Die innere Verantwortungskette', 'The inner chain of responsibility'),
          body: [
            l(
              'Varje människa har en egen ansvarskedja: värdering, beslut, handling, uppföljning. Om kedjan bryts uppstår ursäkter. Om kedjan hålls uppstår tillit.',
              'Jeder Mensch hat eine eigene Verantwortungskette: Wertung, Entscheidung, Handlung, Nachverfolgung. Reißt die Kette, entstehen Ausreden. Hält sie, entsteht Vertrauen.',
              'Every person has their own chain of responsibility: value, decision, action, follow-up. If the chain breaks, excuses appear. If it holds, trust appears.',
            ),
            l(
              'Självdisciplin uppfattas ofta som begränsning. Det är fel. Den som inte styr sig själv kommer att styras av situationen.',
              'Selbstdisziplin wird oft als Einschränkung verstanden. Das ist falsch. Wer sich nicht selbst steuert, wird von der Situation gesteuert.',
              'Self-discipline is often seen as a restriction. That is wrong. Whoever does not steer themselves will be steered by the situation.',
            ),
          ],
          quote: {
            sv: 'Självdisciplin är frihet från impulser.',
            de: 'Selbstdisziplin ist Freiheit von Impulsen.',
            en: 'Self-discipline is freedom from impulses.',
            src: { book: 'steg2', ch: 'Kap. 4, 4.3 Självdisciplin som frihet' },
          },
        },
      ],
      cards: [
        { term: l('Offerreflexen', 'Opferreflex', 'Victim reflex'), text: l('Att söka orsaken utanför sig själv – och därmed lösningen.', 'Die Ursache außerhalb von sich suchen – und damit auch die Lösung.', 'Looking for the cause outside yourself – and with it the solution.') },
        { term: l('Förklaring', 'Erklärung', 'Explanation'), text: l('Förstå orsaken – och säga vad du gör nu.', 'Die Ursache verstehen – und sagen, was du jetzt tust.', 'Understand the cause – and say what you do now.') },
        { term: l('Ursäkt', 'Ausrede', 'Excuse'), text: l('Använda orsaken för att slippa ditt ansvar.', 'Die Ursache benutzen, um der eigenen Verantwortung zu entgehen.', 'Using the cause to escape your responsibility.') },
        { term: l('Rutin före motivation', 'Routine vor Motivation', 'Routine before motivation'), text: l('Professionella system bygger på procedur, inte på inspiration.', 'Professionelle Systeme beruhen auf Verfahren, nicht auf Inspiration.', 'Professional systems rest on procedure, not on inspiration.') },
        { term: l('Den inre ansvarskedjan', 'Innere Verantwortungskette', 'Inner chain of responsibility'), text: l('Värdering → beslut → handling → uppföljning.', 'Wertung → Entscheidung → Handlung → Nachverfolgung.', 'Value → decision → action → follow-up.') },
      ],
    },
    {
      slug: 'forklaring-ursakt',
      type: 'classify',
      min: 7,
      title: l('Förklaring eller ursäkt?', 'Erklärung oder Ausrede?', 'Explanation or excuse?'),
      intro: l(
        'En förklaring förstår orsaken och säger vad du gör nu. En ursäkt använder orsaken för att slippa.',
        'Eine Erklärung versteht die Ursache und sagt, was du jetzt tust. Eine Ausrede benutzt die Ursache, um davonzukommen.',
        'An explanation understands the cause and says what you do now. An excuse uses the cause to get off the hook.',
      ),
      categories: [
        { id: 'forklaring', label: l('Förklaring', 'Erklärung', 'Explanation'), hint: l('orsak + mitt nästa steg', 'Ursache + mein nächster Schritt', 'cause + my next step') },
        { id: 'ursakt', label: l('Ursäkt', 'Ausrede', 'Excuse'), hint: l('orsak i stället för ansvar', 'Ursache statt Verantwortung', 'cause instead of responsibility') },
      ],
      items: [
        {
          text: l('”Ordern kom sent från land, så jag surrar om lasten i kväll innan vi går.”', '„Die Order kam spät von Land, also zurre ich die Ladung heute Abend nach, bevor wir auslaufen.“', '“The order came late from shore, so I will re-lash the cargo tonight before we sail.”'),
          cat: 'forklaring',
          why: l('Orsaken är känd – och nästa steg är ditt.', 'Die Ursache ist bekannt – und der nächste Schritt ist deiner.', 'The cause is known – and the next step is yours.'),
        },
        {
          text: l('”Ordern kom sent från land. Det är inte vårt fel att lasten inte är surrad.”', '„Die Order kam spät von Land. Es ist nicht unsere Schuld, dass die Ladung nicht gezurrt ist.“', '“The order came late from shore. It’s not our fault the cargo isn’t lashed.”'),
          cat: 'ursakt',
          why: l('Att ha rätt är ointressant om ansvaret ändå är ditt.', 'Recht zu haben ist uninteressant, wenn die Verantwortung trotzdem deine ist.', 'Being right is irrelevant if the responsibility is yours anyway.'),
        },
        {
          text: l('”Jag hade inte rätt förutsättningar.”', '„Ich hatte nicht die richtigen Voraussetzungen.“', '“I didn’t have the right conditions.”'),
          cat: 'ursakt',
          why: l('Den inre domstolens klassiska försvar. Frågan är: vad kan jag göra nu?', 'Die klassische Verteidigung des inneren Gerichts. Die Frage ist: Was kann ich jetzt tun?', 'The inner court’s classic defence. The question is: what can I do now?'),
        },
        {
          text: l('”Leveransen blev sen eftersom jag inte följde upp med leverantören. I morgon ringer jag klockan åtta.”', '„Die Lieferung kam zu spät, weil ich beim Lieferanten nicht nachgehakt habe. Morgen rufe ich um acht an.“', '“The delivery was late because I didn’t follow up with the supplier. Tomorrow I’ll call at eight.”'),
          cat: 'forklaring',
          why: l('Din del av verkligheten, utan självanklagelse – och en handling med tidpunkt.', 'Dein Teil der Wirklichkeit, ohne Selbstanklage – und eine Handlung mit Zeitpunkt.', 'Your part of reality, without self-accusation – and an action with a time.'),
        },
        {
          text: l('”De andra borde ha sett det.”', '„Die anderen hätten das sehen müssen.“', '“The others should have seen it.”'),
          cat: 'ursakt',
          why: l('Den som väntar på att andra ska förändras kommer att vänta länge.', 'Wer darauf wartet, dass andere sich ändern, wird lange warten.', 'Whoever waits for others to change will wait a long time.'),
        },
        {
          text: l('”Rutinen föll bort när tiden blev knapp. Från i dag står kontrollen på checklistan före avgång.”', '„Die Routine fiel weg, als die Zeit knapp wurde. Ab heute steht die Kontrolle auf der Checkliste vor dem Auslaufen.“', '“The routine fell away when time got short. From today the check is on the pre-departure checklist.”'),
          cat: 'forklaring',
          why: l('Orsaken blir struktur i stället för skuld.', 'Aus der Ursache wird Struktur statt Schuld.', 'The cause becomes structure instead of blame.'),
        },
      ],
      src: { book: 'steg2', ch: 'Kap. 2 Sluta skylla (på riktigt)' },
    },
    {
      slug: 'stuveriet',
      type: 'scenario',
      min: 8,
      title: l('”Det var stuveriets fel”', '„Das war die Schuld der Stauerei“', '“It was the stevedores’ fault”'),
      source: { book: 'steg2', ch: 'Kap. 2 Sluta skylla (på riktigt)' },
      image: 'cargo-express',
      intro: l(
        'Ni ligger i Göteborg och lastar begagnade lastbilar till Sydamerika. Tidsplanen har spruckit. Order kom sent, dokumentation saknas, besättningen är irriterad. Någon i land har missat något – det är alla överens om. I mässen hörs: ”De där uppe har ingen aning om hur det fungerar i verkligheten.” ”Det är alltid vi som får ta smällen.”',
        'Ihr liegt in Göteborg und ladet gebrauchte Lastwagen für Südamerika. Der Zeitplan ist geplatzt. Die Order kam spät, Dokumente fehlen, die Besatzung ist gereizt. Jemand an Land hat etwas übersehen – darin sind sich alle einig. In der Messe heißt es: „Die da oben haben keine Ahnung, wie es in der Wirklichkeit läuft.“ „Immer sind wir es, die es ausbaden.“',
        'You are in Gothenburg loading used trucks for South America. The schedule has collapsed. Orders came late, documentation is missing, the crew is irritated. Someone ashore has missed something – everyone agrees on that. In the mess you hear: “Those people up there have no idea how things work in reality.” “It’s always us who take the hit.”',
      ),
      nodes: [
        {
          situation: l('Stämningen i mässen är tydlig. Vad gör du?', 'Die Stimmung in der Messe ist eindeutig. Was tust du?', 'The mood in the mess is clear. What do you do?'),
          options: [
            {
              label: l('Håller med – det känns rimligt, och det stämmer ju.', 'Zustimmen – es fühlt sich richtig an, und es stimmt ja.', 'Agree – it feels reasonable, and it is true.'),
              book: true,
              c: {
                orsak: l('En gemensam yttre fiende.', 'Ein gemeinsamer äußerer Feind.', 'A shared outside enemy.'),
                verkan: l('Gruppkänslan stärks. Ingen tittar på lasten.', 'Das Gruppengefühl wird gestärkt. Niemand schaut nach der Ladung.', 'The group feeling grows. Nobody looks at the cargo.'),
                konsekvens: l('Att skylla skapar gemenskap – men löser inget.', 'Schuldzuweisung schafft Gemeinschaft – löst aber nichts.', 'Blaming creates togetherness – but solves nothing.'),
                bearer: l('Alla ombord – senare.', 'Alle an Bord – später.', 'Everyone on board – later.'),
              },
            },
            {
              label: l('Säger: ”Oavsett hur det blev – vad är vårt ansvar nu?” och går en runda på lastdäck.', 'Sagen: „Egal, wie es gekommen ist – was ist jetzt unsere Verantwortung?“ und eine Runde übers Ladedeck gehen.', 'Say: “Whatever happened – what is our responsibility now?” and walk the cargo deck.'),
              c: {
                orsak: l('Du flyttar frågan från skuld till ansvar.', 'Du verschiebst die Frage von Schuld zu Verantwortung.', 'You move the question from blame to responsibility.'),
                verkan: l('Du ser vad som faktiskt saknas ombord.', 'Du siehst, was an Bord tatsächlich fehlt.', 'You see what is actually missing on board.'),
                konsekvens: l('Du blir den som bryter mönstret – och kanske inte den populäraste i mässen.', 'Du wirst derjenige, der das Muster bricht – und vielleicht nicht der Beliebteste in der Messe.', 'You become the one who breaks the pattern – and perhaps not the most popular person in the mess.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Skriver en avvikelserapport om landorganisationen.', 'Einen Abweichungsbericht über die Landorganisation schreiben.', 'Write a deviation report about the shore organisation.'),
              c: {
                orsak: l('Felet dokumenteras där det uppstod.', 'Der Fehler wird dort dokumentiert, wo er entstand.', 'The fault is documented where it arose.'),
                verkan: l('Förklaringen blir officiell.', 'Die Erklärung wird offiziell.', 'The explanation becomes official.'),
                konsekvens: l('Lasten är fortfarande inte surrad.', 'Die Ladung ist immer noch nicht gezurrt.', 'The cargo is still not lashed.'),
                bearer: l('Lasten och besättningen.', 'Die Ladung und die Besatzung.', 'The cargo and the crew.'),
              },
            },
          ],
        },
        {
          situation: l('Ni går ut. Lasten är inte ordentligt surrad. Planeringen i land var bristfällig.', 'Ihr lauft aus. Die Ladung ist nicht ordentlich gezurrt. Die Planung an Land war mangelhaft.', 'You put to sea. The cargo is not properly lashed. The planning ashore was poor.'),
          options: [
            {
              label: l('Det är stuveriets ansvar – de lastade.', 'Das ist Sache der Stauerei – sie hat geladen.', 'That is the stevedores’ responsibility – they loaded it.'),
              book: true,
              c: {
                orsak: l('Ansvaret placeras hos den som gjorde felet.', 'Die Verantwortung wird dem zugeschoben, der den Fehler gemacht hat.', 'Responsibility is placed with whoever made the mistake.'),
                verkan: l('Ingen ombord gör något.', 'An Bord tut niemand etwas.', 'Nobody on board does anything.'),
                konsekvens: l('Det spelar ingen roll om planeringen var bristfällig. Lasten följer med ut på havet.', 'Es spielt keine Rolle, ob die Planung mangelhaft war. Die Ladung fährt mit aufs Meer.', 'It does not matter whether the planning was poor. The cargo goes to sea with you.'),
                bearer: l('Fartyget.', 'Das Schiff.', 'The ship.'),
              },
            },
            {
              label: l('Kontrollerar surrningen själv och kräver omsurrning innan avgång.', 'Selbst die Zurrung prüfen und vor dem Auslaufen nachzurren lassen.', 'Check the lashing yourself and demand re-lashing before departure.'),
              c: {
                orsak: l('Ansvar ligger alltid närmast situationen.', 'Verantwortung liegt immer am nächsten an der Situation.', 'Responsibility always lies closest to the situation.'),
                verkan: l('Avgången försenas ytterligare.', 'Das Auslaufen verzögert sich weiter.', 'Departure is delayed further.'),
                konsekvens: l('Du tar en kostnad nu i stället för en olycka senare.', 'Du nimmst jetzt Kosten in Kauf statt später einen Unfall.', 'You take a cost now instead of an accident later.'),
                bearer: l('Du – och tidsplanen.', 'Du – und der Zeitplan.', 'You – and the schedule.'),
              },
            },
            {
              label: l('Rapporterar till befälhavaren och väntar på besked.', 'Dem Kapitän melden und auf Anweisung warten.', 'Report to the master and wait for instructions.'),
              c: {
                orsak: l('Frågan skickas uppåt.', 'Die Frage wird nach oben weitergereicht.', 'The question is passed upwards.'),
                verkan: l('Någon annan ska avgöra.', 'Jemand anderes soll entscheiden.', 'Someone else is to decide.'),
                konsekvens: l('Den byråkratiska reaktionen: rapportera och vänta.', 'Die bürokratische Reaktion: melden und warten.', 'The bureaucratic reaction: report and wait.'),
                bearer: l('Befälhavaren – och lasten under tiden.', 'Der Kapitän – und solange die Ladung.', 'The master – and meanwhile the cargo.'),
              },
            },
          ],
        },
        {
          situation: l('Mitt på Atlanten slår vädret om. Du tänder däcksbelysningen: en 40-tons dumper har slitit sig.', 'Mitten auf dem Atlantik schlägt das Wetter um. Du schaltest die Decksbeleuchtung ein: Ein 40-Tonnen-Dumper hat sich losgerissen.', 'In the middle of the Atlantic the weather turns. You switch on the deck lights: a 40-tonne dump truck has broken loose.'),
          options: [
            {
              label: l('Väcker befälhavaren och skriver ner vems felet var.', 'Den Kapitän wecken und aufschreiben, wessen Fehler es war.', 'Wake the master and write down whose fault it was.'),
              c: {
                orsak: l('Skuld före handling.', 'Schuld vor Handlung.', 'Blame before action.'),
                verkan: l('Dumpern rör sig fortfarande.', 'Der Dumper bewegt sich weiter.', 'The dump truck is still moving.'),
                konsekvens: l('Skuld förklarar det förflutna. Den surrar ingen last.', 'Schuld erklärt die Vergangenheit. Sie zurrt keine Ladung.', 'Blame explains the past. It lashes no cargo.'),
                bearer: l('Fartyget och besättningen.', 'Das Schiff und die Besatzung.', 'The ship and the crew.'),
              },
            },
            {
              label: l('Går själv ut på däck och surrar lasten ordentligt.', 'Selbst an Deck gehen und die Ladung ordentlich zurren.', 'Go out on deck yourself and lash the cargo properly.'),
              book: true,
              c: {
                orsak: l('Ansvaret är ditt nu – oavsett vem som gjorde fel.', 'Die Verantwortung ist jetzt deine – egal, wer den Fehler gemacht hat.', 'The responsibility is yours now – whoever made the mistake.'),
                verkan: l('Lasten säkras.', 'Die Ladung wird gesichert.', 'The cargo is secured.'),
                konsekvens: l('Fartyget klarar vädret.', 'Das Schiff übersteht das Wetter.', 'The ship comes through the weather.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Väntar till morgonen när vädret har lagt sig.', 'Bis zum Morgen warten, wenn sich das Wetter gelegt hat.', 'Wait until morning when the weather has calmed.'),
              c: {
                orsak: l('Beslutet skjuts upp.', 'Die Entscheidung wird verschoben.', 'The decision is postponed.'),
                verkan: l('Lasten arbetar i sjögången hela natten.', 'Die Ladung arbeitet die ganze Nacht im Seegang.', 'The cargo works loose in the swell all night.'),
                konsekvens: l('Frånvaro av beslut är också ett beslut.', 'Keine Entscheidung ist auch eine Entscheidung.', 'Absence of a decision is also a decision.'),
                bearer: l('Alla ombord.', 'Alle an Bord.', 'Everyone on board.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Torbjörn höll med i mässen. Det kändes rimligt. Problemet var bara att lasten fortfarande inte var ordentligt surrad. Mitt på Atlanten fick han själv gå ut på däck och surra lasten. ”Det var då jag förstod något obekvämt.”',
        'Torbjörn stimmte in der Messe zu. Es fühlte sich richtig an. Das Problem war nur, dass die Ladung immer noch nicht ordentlich gezurrt war. Mitten auf dem Atlantik musste er selbst an Deck und die Ladung zurren. „Da verstand ich etwas Unbequemes.“',
        'Torbjörn agreed in the mess. It felt reasonable. The only problem was that the cargo still was not properly lashed. In the middle of the Atlantic he had to go out on deck himself and lash it. “That was when I understood something uncomfortable.”',
      ),
      quote: {
        sv: 'Att ha rätt är ointressant om ansvaret ändå är ditt.',
        de: 'Recht zu haben ist uninteressant, wenn die Verantwortung trotzdem deine ist.',
        en: 'Being right is irrelevant if the responsibility is yours anyway.',
        src: { book: 'steg2', ch: 'Kap. 2 Sluta skylla (på riktigt)' },
      },
    },
    {
      slug: 'vem-betalar',
      type: 'inversion',
      min: 7,
      title: l('Vem betalar – egentligen?', 'Wer bezahlt – eigentlich?', 'Who pays – really?'),
      intro: l(
        'Allt som blir verkligt kostar något. Frågan är inte om – utan med vad. Vänd de vanliga meningarna och se vem som betalar.',
        'Alles, was wirklich wird, kostet etwas. Die Frage ist nicht ob – sondern womit. Dreh die gewohnten Sätze um und sieh, wer bezahlt.',
        'Everything that becomes real costs something. The question is not whether – but with what. Turn the usual sentences around and see who pays.',
      ),
      items: [
        {
          habit: l('Någon borde göra något åt det.', 'Jemand sollte etwas dagegen tun.', 'Somebody should do something about it.'),
          options: [
            l('Ledningen borde göra något åt det.', 'Die Leitung sollte etwas dagegen tun.', 'Management should do something about it.'),
            l('Detta ligger inom min räckvidd – vad gör jag nu?', 'Das liegt in meiner Reichweite – was tue ich jetzt?', 'This is within my reach – what do I do now?'),
            l('Det är ingens fel.', 'Es ist niemandes Schuld.', 'It is nobody’s fault.'),
          ],
          inverted: 1,
          pattern: l(
            'När du slutar säga ”Varför gör ingen något?” och börjar säga ”Detta ligger inom min räckvidd” – då har du tagit befäl.',
            'Wenn du aufhörst zu sagen „Warum tut niemand etwas?“ und anfängst zu sagen „Das liegt in meiner Reichweite“ – dann hast du Befehl übernommen.',
            'When you stop saying “Why does nobody do anything?” and start saying “This is within my reach” – then you have taken command.',
          ),
          src: { book: 'steg2', ch: 'Kap. 3, 3.7 Den inre utnämningen' },
        },
        {
          habit: l('Det var inte mitt fel.', 'Es war nicht meine Schuld.', 'It wasn’t my fault.'),
          options: [
            l('Det var allas fel.', 'Es war die Schuld aller.', 'It was everyone’s fault.'),
            l('Det var mitt fel, och jag skäms.', 'Es war meine Schuld, und ich schäme mich.', 'It was my fault, and I am ashamed.'),
            l('Skyldig är ointressant. Ansvarig är avgörande.', 'Schuldig ist uninteressant. Verantwortlich ist entscheidend.', 'Guilty is irrelevant. Responsible is decisive.'),
          ],
          inverted: 2,
          pattern: l(
            'Detta är inte självanklagelse. Det är skillnaden mellan offer och ansvarsbärare.',
            'Das ist keine Selbstanklage. Es ist der Unterschied zwischen Opfer und Verantwortungsträger.',
            'This is not self-accusation. It is the difference between victim and bearer of responsibility.',
          ),
          src: { book: 'steg2', ch: 'Kap. 2, 2.9–2.10' },
        },
        {
          habit: l('Jag gör det när jag känner mig motiverad.', 'Ich mache es, wenn ich motiviert bin.', 'I’ll do it when I feel motivated.'),
          options: [
            l('Jag gör det för att det är bestämt – motivationen får komma efter.', 'Ich mache es, weil es beschlossen ist – die Motivation darf danach kommen.', 'I do it because it is decided – motivation can come afterwards.'),
            l('Jag väntar på inspiration.', 'Ich warte auf Inspiration.', 'I wait for inspiration.'),
            l('Jag gör det när någon påminner mig.', 'Ich mache es, wenn mich jemand erinnert.', 'I’ll do it when someone reminds me.'),
          ],
          inverted: 0,
          pattern: l(
            'Rutin före motivation. ”Den som bygger sitt ansvar på känsla kommer att svaja när känslan förändras.”',
            'Routine vor Motivation. „Wer seine Verantwortung auf Gefühl baut, wird schwanken, wenn sich das Gefühl ändert.“',
            'Routine before motivation. “Whoever builds their responsibility on feeling will sway when the feeling changes.”',
          ),
          src: { book: 'steg2', ch: 'Kap. 4, 4.1 Rutin före motivation' },
        },
        {
          habit: l('Det kostar ingenting att skjuta upp det.', 'Es kostet nichts, es aufzuschieben.', 'It costs nothing to put it off.'),
          options: [
            l('Det kostar lite tid senare.', 'Es kostet später ein bisschen Zeit.', 'It costs a little time later.'),
            l('Någon betalar alltid – frågan är vem, och med vad.', 'Jemand bezahlt immer – die Frage ist, wer, und womit.', 'Someone always pays – the question is who, and with what.'),
            l('Det är bara jag som påverkas.', 'Es betrifft nur mich.', 'Only I am affected.'),
          ],
          inverted: 1,
          pattern: l(
            '”Allt som blir verkligt kostar något … Frågan är inte om – utan med vad.” Kostnaden kan skjutas upp och osynliggöras, men aldrig tas bort.',
            '„Alles, was wirklich wird, kostet etwas … Die Frage ist nicht ob – sondern womit.“ Die Kosten lassen sich verschieben und unsichtbar machen, aber nie abschaffen.',
            '“Everything that becomes real costs something … The question is not whether – but with what.” The cost can be postponed and hidden, but never removed.',
          ),
          src: { book: 'steg1', ch: 'Kap. 2 Att utföra' },
        },
      ],
      ownPrompt: l(
        'Ta en uppgift du har skjutit upp. Vem betalar för att den väntar – egentligen? Skriv det så som du brukar förklara det, och vänd det sedan.',
        'Nimm eine Aufgabe, die du aufgeschoben hast. Wer bezahlt dafür, dass sie wartet – eigentlich? Schreib sie so auf, wie du es meistens erklärst, und dreh es dann um.',
        'Take a task you have put off. Who pays for the fact that it is waiting – really? Write it the way you usually explain it, then turn it around.',
      ),
    },
    {
      slug: 'rutin',
      type: 'builder',
      tool: 'routine',
      min: 5,
      title: l('Bygg en rutin som håller', 'Eine Routine bauen, die hält', 'Build a routine that holds'),
      intro: l(
        'En handling, en tidpunkt och en kontroll. Bygg den inre ansvarskedjan för något du vill hålla i sju dagar – oavsett motivation.',
        'Eine Handlung, ein Zeitpunkt und eine Kontrolle. Bau die innere Verantwortungskette für etwas, das du sieben Tage lang durchhalten willst – unabhängig von Motivation.',
        'One action, one time and one check. Build the inner chain of responsibility for something you want to keep up for seven days – regardless of motivation.',
      ),
      fields: [
        { id: 'varde', label: l('Värdering – varför är det viktigt?', 'Wertung – warum ist es wichtig?', 'Value – why does it matter?'), help: l('En mening. Inte en vision.', 'Ein Satz. Keine Vision.', 'One sentence. Not a vision.') },
        { id: 'handling', label: l('Handlingen', 'Die Handlung', 'The action'), help: l('Vad gör du – så konkret att det syns om det är gjort?', 'Was tust du – so konkret, dass sichtbar ist, ob es erledigt ist?', 'What do you do – concretely enough that you can see whether it is done?') },
        { id: 'tid', label: l('När', 'Wann', 'When'), help: l('Klockslag eller tillfälle, varje dag.', 'Uhrzeit oder Anlass, jeden Tag.', 'A time or an occasion, every day.'), multiline: false },
        { id: 'kontroll', label: l('Uppföljning', 'Nachverfolgung', 'Follow-up'), help: l('Hur kontrollerar du att det är gjort?', 'Wie prüfst du, dass es erledigt ist?', 'How do you check that it is done?') },
        { id: 'press', label: l('När tiden blir knapp', 'Wenn die Zeit knapp wird', 'When time runs short'), help: l('Vad gör du den dag det kostar?', 'Was tust du an dem Tag, an dem es etwas kostet?', 'What do you do on the day it costs you?') },
      ],
      checks: [
        { when: 'missing', field: 'handling', message: l('”Rutinen var god. Strukturen saknades. Och utan struktur dör även goda intentioner.”', '„Die Routine war gut. Die Struktur fehlte. Und ohne Struktur sterben auch gute Absichten.“', '“The routine was good. The structure was missing. And without structure even good intentions die.”') },
        { when: 'missing', field: 'tid', message: l('”Struktur mäts över tid.” Utan tidpunkt finns ingen rutin.', '„Struktur misst sich über die Zeit.“ Ohne Zeitpunkt gibt es keine Routine.', '“Structure is measured over time.” Without a time there is no routine.') },
        { when: 'missing', field: 'kontroll', message: l('”Uppföljning är inte misstro. Det är systemets ryggrad.”', '„Nachverfolgung ist kein Misstrauen. Sie ist das Rückgrat des Systems.“', '“Follow-up is not distrust. It is the backbone of the system.”') },
        { when: 'missing', field: 'press', message: l('”Det är under press strukturen avslöjas.”', '„Unter Druck zeigt sich die Struktur.“', '“It is under pressure that structure is revealed.”') },
      ],
      done: l(
        'Värdering, beslut, handling, uppföljning: kedjan är hel. Nu återstår bara att göra det – sju dagar i rad.',
        'Wertung, Entscheidung, Handlung, Nachverfolgung: Die Kette ist geschlossen. Jetzt bleibt nur noch, es zu tun – sieben Tage am Stück.',
        'Value, decision, action, follow-up: the chain is complete. All that remains is to do it – seven days in a row.',
      ),
      src: { book: 'steg2', ch: 'Kap. 4 Bygg din inre struktur' },
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Var skyller jag ifrån mig?', 'Wo schiebe ich die Schuld ab?', 'Where do I shift the blame?'),
      prompts: [
        l('Var skyller jag ifrån mig – utan att märka det?', 'Wo schiebe ich die Schuld ab – ohne es zu merken?', 'Where do I shift the blame – without noticing?'),
        l('Vad säger min inre domstol oftast – och vad borde den fråga i stället?', 'Was sagt mein inneres Gericht am häufigsten – und was sollte es stattdessen fragen?', 'What does my inner court say most often – and what should it ask instead?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Den som har en god förklaring bär inget ansvar.” Stämmer det?', '„Wer eine gute Erklärung hat, trägt keine Verantwortung.“ Stimmt das?', '“Whoever has a good explanation carries no responsibility.” Is that true?'),
          options: [
            { text: l('Ja – om orsaken låg hos någon annan.', 'Ja – wenn die Ursache bei jemand anderem lag.', 'Yes – if the cause lay with someone else.'), ok: false, fb: l('Landorganisationen kan ha gjort fel. Frågan kvarstår: vad är ditt ansvar i situationen?', 'Die Landorganisation kann Fehler gemacht haben. Die Frage bleibt: Was ist deine Verantwortung in der Situation?', 'The shore organisation may have made mistakes. The question remains: what is your responsibility in the situation?') },
            { text: l('Nej – att förstå orsaken är inte detsamma som att använda den som ursäkt.', 'Nein – die Ursache zu verstehen ist nicht dasselbe, wie sie als Ausrede zu benutzen.', 'No – understanding the cause is not the same as using it as an excuse.'), ok: true, fb: l('Ja. Förklaring är inte ursäkt.', 'Ja. Erklärung ist keine Ausrede.', 'Yes. An explanation is not an excuse.') },
          ],
          misconception: l('Att förklaring och ursäkt är samma sak.', 'Dass Erklärung und Ausrede dasselbe sind.', 'That an explanation and an excuse are the same thing.'),
        },
        {
          q: l('Vad betyder ”självdisciplin som frihet”?', 'Was bedeutet „Selbstdisziplin als Freiheit“?', 'What does “self-discipline as freedom” mean?'),
          options: [
            { text: l('Att ha stränga regler för andra.', 'Strenge Regeln für andere zu haben.', 'Having strict rules for others.'), ok: false, fb: l('Det handlar om dig själv – inte om andra.', 'Es geht um dich selbst – nicht um andere.', 'It is about you – not about others.') },
            { text: l('Frihet från impulser: den som inte styr sig själv styrs av situationen.', 'Freiheit von Impulsen: Wer sich nicht selbst steuert, wird von der Situation gesteuert.', 'Freedom from impulses: whoever does not steer themselves is steered by the situation.'), ok: true, fb: l('Ja. Den som inte kontrollerar sina vanor kontrolleras av sina svagheter.', 'Ja. Wer seine Gewohnheiten nicht kontrolliert, wird von seinen Schwächen kontrolliert.', 'Yes. Whoever does not control their habits is controlled by their weaknesses.') },
            { text: l('Att alltid vara hård mot sig själv.', 'Immer hart zu sich selbst zu sein.', 'Always being hard on yourself.'), ok: false, fb: l('Boken: det är inte hårdhet, det är stabilitet.', 'Das Buch: Es ist keine Härte, es ist Stabilität.', 'The book: it is not hardness, it is stability.') },
          ],
          misconception: l('Att disciplin är detsamma som hårdhet.', 'Dass Disziplin dasselbe ist wie Härte.', 'That discipline is the same as hardness.'),
        },
        {
          q: l('Varför höll den nya rutinen ombord bara första veckan?', 'Warum hielt die neue Routine an Bord nur eine Woche?', 'Why did the new routine on board only last the first week?'),
          options: [
            { text: l('Besättningen var emot den.', 'Die Besatzung war dagegen.', 'The crew was against it.'), ok: false, fb: l('Alla höll med. Det var inte motstånd.', 'Alle waren einverstanden. Es war kein Widerstand.', 'Everyone agreed. It was not resistance.') },
            { text: l('Den var för krånglig.', 'Sie war zu kompliziert.', 'It was too complicated.'), ok: false, fb: l('Den tog tre minuter.', 'Sie dauerte drei Minuten.', 'It took three minutes.') },
            { text: l('Rutinen var god, men strukturen saknades – den gled bort av bekvämlighet.', 'Die Routine war gut, aber die Struktur fehlte – sie glitt aus Bequemlichkeit weg.', 'The routine was good, but the structure was missing – it slipped away out of convenience.'), ok: true, fb: l('Ja. Ingen tog bort den. Den bara gled bort.', 'Ja. Niemand schaffte sie ab. Sie glitt einfach weg.', 'Yes. Nobody removed it. It simply slipped away.') },
          ],
          misconception: l('Att goda rutiner håller av sig själva.', 'Dass gute Routinen von selbst halten.', 'That good routines hold by themselves.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l('Håll din rutin i sju dagar, oavsett motivation.', 'Halte deine Routine sieben Tage lang durch, unabhängig von Motivation.', 'Keep your routine for seven days, regardless of motivation.'),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 3 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 3 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 3, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Berätta kort skrönan om stuveriet. Paus. Fråga: ”Vem har ni skyllt på den här veckan?”',
      'Erzähle kurz die Geschichte von der Stauerei. Pause. Frage: „Wem habt ihr diese Woche die Schuld gegeben?“',
      'Briefly tell the story of the stevedores. Pause. Ask: “Whom have you blamed this week?”',
    ),
    questions: [
      l('När blir en förklaring en ursäkt i ert team?', 'Wann wird in eurem Team aus einer Erklärung eine Ausrede?', 'When does an explanation turn into an excuse in your team?'),
      l('Vilken rutin har glidit bort hos er utan att någon tog bort den?', 'Welche Routine ist bei euch weggeglitten, ohne dass jemand sie abgeschafft hat?', 'Which routine has slipped away in your team without anyone removing it?'),
      l('Vad ligger faktiskt inom ert ansvar – och vad har ni slutat prata om?', 'Was liegt tatsächlich in eurer Verantwortung – und worüber habt ihr aufgehört zu reden?', 'What actually lies within your responsibility – and what have you stopped talking about?'),
    ],
    note: l(
      'Risken i denna modul är bekännelser. Personliga bekännelser fördjupas inte. Bryt-mall: ”Då är frågan: vad är ditt mandat – på riktigt?”',
      'Die Gefahr dieses Moduls sind Beichten. Persönliche Bekenntnisse werden nicht vertieft. Abbruchsatz: „Dann ist die Frage: Was ist dein Mandat – wirklich?“',
      'The risk in this module is confession. Personal confessions are not explored further. Cut-off line: “Then the question is: what is your mandate – for real?”',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
