// M06 · Kommunikation med integritet
// Sources: Steg 3 Del I (Tre sätt att tala; Fyra sorters människor i ett möte; Ledarskapskursernas värld);
// Steg 2 Kap. 6.2, Kap. 8 Tala klarspråk; Steg 1 Epilog; Steg 1 Befälssvar.

import { l, type Module } from '../types';

export const m06: Module = {
  id: 'm06',
  num: 6,
  part: 2,
  title: l('Kommunikation med integritet', 'Kommunikation mit Integrität', 'Communication with integrity'),
  teaser: l(
    'Hur du leder samtal och påverkan utan manipulation eller prestige.',
    'Wie du Gespräche und Einfluss führst – ohne Manipulation und ohne Prestige.',
    'How you lead conversations and influence without manipulation or prestige.',
  ),
  goal: l(
    'Du skiljer militärt, diplomatiskt och motiverande språk, känner igen retoriska knep och talar klarspråk – utan manipulation och utan prestige.',
    'Du unterscheidest militärische, diplomatische und motivierende Sprache, erkennst rhetorische Tricks und sprichst Klartext – ohne Manipulation und ohne Prestige.',
    'You can tell military, diplomatic and motivating language apart, recognise rhetorical tricks and speak plainly – without manipulation and without prestige.',
  ),
  keyTerms: [
    l('Klarspråk', 'Klartext', 'Plain speaking'),
    l('Definitioner före debatt', 'Definitionen vor Debatte', 'Definitions before debate'),
    l('ATT – SKALL – BÖR', 'ATT – SKALL – BÖR', 'ATT – SKALL – BÖR'),
    l('Fyra sorters människor i ett möte', 'Vier Arten von Menschen in einer Besprechung', 'Four kinds of people in a meeting'),
    l('Att säga nej', 'Nein sagen', 'Saying no'),
  ],
  sources: [
    { book: 'steg3-1', ch: 'Kommunikation och diplomati – Tre sätt att tala' },
    { book: 'steg3-1', ch: 'Fyra sorters människor i ett möte' },
    { book: 'steg3-1', ch: 'Ledarskapskursernas värld' },
    { book: 'steg2', ch: 'Kap. 8 Tala klarspråk' },
    { book: 'steg1', ch: 'Epilog – Befäl över språket' },
  ],
  image: 'signal-flags',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Tre sätt att tala', 'Drei Arten zu sprechen', 'Three ways of speaking'),
      slides: [
        {
          heading: l('”Vi är överens … tror jag”', '„Wir sind uns einig … glaube ich“', '“We agree … I think”'),
          body: [
            l(
              'Ett möte där alla nickade. Alla höll med. Efteråt visade det sig att tre personer hade tolkat beslutet olika. Ingen hade ljugit. Ingen hade protesterat. Men ingen hade definierat.',
              'Eine Besprechung, in der alle nickten. Alle waren einverstanden. Hinterher zeigte sich, dass drei Personen die Entscheidung verschieden verstanden hatten. Niemand hatte gelogen. Niemand hatte widersprochen. Aber niemand hatte definiert.',
              'A meeting where everyone nodded. Everyone agreed. Afterwards it turned out that three people had interpreted the decision differently. Nobody had lied. Nobody had objected. But nobody had defined.',
            ),
          ],
          quote: {
            sv: 'Tyst otydlighet är farligare än öppen konflikt.',
            de: 'Stille Unklarheit ist gefährlicher als offener Konflikt.',
            en: 'Silent vagueness is more dangerous than open conflict.',
            src: { book: 'steg2', ch: 'Kap. 8 Tala klarspråk' },
          },
        },
        {
          heading: l('ATT – SKALL – BÖR', 'ATT – SKALL – BÖR', 'ATT – SKALL – BÖR'),
          body: [
            l(
              'Militärt språk är byggt för situationer där tiden är knapp och uppgiften klar: korta, tydliga formuleringar. Den som ger order ansvarar för beslutet; den som lyder ansvarar för utförandet.',
              'Militärische Sprache ist für Lagen gebaut, in denen die Zeit knapp und die Aufgabe klar ist: kurze, eindeutige Formulierungen. Wer befiehlt, verantwortet die Entscheidung; wer gehorcht, verantwortet die Ausführung.',
              'Military language is built for situations where time is short and the task is clear: short, clear phrasing. Whoever gives the order is responsible for the decision; whoever obeys is responsible for the execution.',
            ),
            l(
              'Diplomatiskt språk används när människor har olika intressen men måste samarbeta. Det dämpar konflikt, öppnar för förhandling och lämnar utrymme – utan att bryta relationen.',
              'Diplomatische Sprache wird verwendet, wenn Menschen unterschiedliche Interessen haben, aber zusammenarbeiten müssen. Sie dämpft Konflikte, öffnet für Verhandlung und lässt Raum – ohne die Beziehung zu brechen.',
              'Diplomatic language is used when people have different interests but must cooperate. It dampens conflict, opens up negotiation and leaves room – without breaking the relationship.',
            ),
            l(
              'Motiverande språk behövs där ledarskapet sker utan militär disciplin: varför något görs, vad målet är, hur varje roll bidrar.',
              'Motivierende Sprache braucht es dort, wo ohne militärische Disziplin geführt wird: warum etwas getan wird, was das Ziel ist, wie jede Rolle beiträgt.',
              'Motivating language is needed where leadership happens without military discipline: why something is done, what the goal is, how each role contributes.',
            ),
          ],
          list: [
            l('ATT – uppgift', 'ATT – Aufgabe', 'ATT – task'),
            l('SKALL – order', 'SKALL – Befehl', 'SKALL – order'),
            l('BÖR – riktning', 'BÖR – Richtung', 'BÖR – direction'),
          ],
          quote: {
            sv: 'Order ges utan mandat. Råd ges utan ansvar. Resultatet blir otydlighet.',
            de: 'Befehle werden ohne Mandat erteilt. Ratschläge ohne Verantwortung. Das Ergebnis ist Unklarheit.',
            en: 'Orders are given without mandate. Advice is given without responsibility. The result is vagueness.',
            src: { book: 'steg3-1', ch: 'Kommunikation och diplomati – ATT – SKALL – BÖR' },
          },
        },
        {
          heading: l('Definitioner före debatt', 'Definitionen vor Debatte', 'Definitions before debate'),
          body: [
            l(
              'De flesta konflikter är definitionskonflikter. Frihet. Trygghet. Ansvar. Rättvisa. Om begreppen inte definieras debatterar vi känslor. Definition först. Åsikt därefter.',
              'Die meisten Konflikte sind Definitionskonflikte. Freiheit. Sicherheit. Verantwortung. Gerechtigkeit. Werden die Begriffe nicht definiert, debattieren wir Gefühle. Erst die Definition. Dann die Meinung.',
              'Most conflicts are conflicts of definition. Freedom. Security. Responsibility. Fairness. If the concepts are not defined, we debate feelings. Definition first. Opinion afterwards.',
            ),
          ],
          quote: {
            sv: 'Den som är OVÄLD överdriver inte. Han definierar.',
            de: 'Wer OVÄLD ist, übertreibt nicht. Er definiert.',
            en: 'Whoever is OVÄLD does not exaggerate. They define.',
            src: { book: 'steg2', ch: 'Kap. 8, 8.2 Språkets disciplin' },
          },
        },
        {
          heading: l('Att säga nej', 'Nein sagen', 'Saying no'),
          body: [
            l(
              'Utan nej finns inga gränser. Utan gränser finns inget ansvar. Att säga nej är inte aggression. Det är tydlighet – när mandat överskrids, när principer hotas, när undantag blir norm.',
              'Ohne Nein gibt es keine Grenzen. Ohne Grenzen gibt es keine Verantwortung. Nein zu sagen ist keine Aggression. Es ist Klarheit – wenn Mandate überschritten werden, wenn Prinzipien bedroht sind, wenn Ausnahmen zur Norm werden.',
              'Without no there are no boundaries. Without boundaries there is no responsibility. Saying no is not aggression. It is clarity – when mandates are exceeded, when principles are threatened, when exceptions become the norm.',
            ),
          ],
          quote: {
            sv: 'Nej är ett strukturellt ord.',
            de: 'Nein ist ein strukturelles Wort.',
            en: 'No is a structural word.',
            src: { book: 'steg2', ch: 'Kap. 8, 8.3 Att säga nej' },
          },
        },
        {
          heading: l('Befäl över språket', 'Befehl über die Sprache', 'Command over language'),
          body: [
            l(
              'När ord förlorar sin innebörd blir handlingar godtyckliga. När begrepp kan betyda vad som helst kan ansvar flyttas vart som helst. Att ta befäl över språket är därför inte en intellektuell övning. Det är ett praktiskt ansvar.',
              'Wenn Worte ihre Bedeutung verlieren, werden Handlungen beliebig. Wenn Begriffe alles bedeuten können, lässt sich Verantwortung überallhin verschieben. Befehl über die Sprache zu übernehmen ist deshalb keine intellektuelle Übung. Es ist eine praktische Verantwortung.',
              'When words lose their meaning, actions become arbitrary. When concepts can mean anything, responsibility can be moved anywhere. Taking command of language is therefore not an intellectual exercise. It is a practical responsibility.',
            ),
          ],
          quote: {
            sv: 'Att använda ord så att de binder, inte förskönar.',
            de: 'Worte so verwenden, dass sie binden, nicht beschönigen.',
            en: 'To use words so that they bind, not embellish.',
            src: { book: 'steg1', ch: 'Epilog – Befäl över språket' },
          },
        },
      ],
      cards: [
        { term: l('Klarspråk', 'Klartext', 'Plain speaking'), text: l('Säga vad något är – och vad det inte är.', 'Sagen, was etwas ist – und was es nicht ist.', 'Saying what something is – and what it is not.') },
        { term: l('ATT / SKALL / BÖR', 'ATT / SKALL / BÖR', 'ATT / SKALL / BÖR'), text: l('Uppgift, order, riktning.', 'Aufgabe, Befehl, Richtung.', 'Task, order, direction.') },
        { term: l('Definitioner före debatt', 'Definitionen vor Debatte', 'Definitions before debate'), text: l('Definition först. Åsikt därefter.', 'Erst die Definition. Dann die Meinung.', 'Definition first. Opinion afterwards.') },
        { term: l('Att säga nej', 'Nein sagen', 'Saying no'), text: l('Inte aggression – tydlighet.', 'Keine Aggression – Klarheit.', 'Not aggression – clarity.') },
        { term: l('Tyst otydlighet', 'Stille Unklarheit', 'Silent vagueness'), text: l('Alla nickar – och tolkar olika.', 'Alle nicken – und verstehen es verschieden.', 'Everyone nods – and interprets differently.') },
      ],
    },
    {
      slug: 'tre-sprak',
      type: 'classify',
      min: 7,
      title: l('Vilket språk talas här?', 'Welche Sprache wird hier gesprochen?', 'Which language is this?'),
      intro: l(
        'Sortera meningarna efter de tre sätten att tala. Inget av dem är fel – problemet är mellanläget.',
        'Ordne die Sätze den drei Arten zu sprechen zu. Keine ist falsch – das Problem ist die Zwischenlage.',
        'Sort the sentences by the three ways of speaking. None of them is wrong – the problem is the unclear middle.',
      ),
      categories: [
        { id: 'militart', label: l('Militärt', 'Militärisch', 'Military'), hint: l('ATT – SKALL', 'ATT – SKALL', 'ATT – SKALL') },
        { id: 'diplomatiskt', label: l('Diplomatiskt', 'Diplomatisch', 'Diplomatic'), hint: l('olika intressen, samarbete', 'verschiedene Interessen, Zusammenarbeit', 'different interests, cooperation') },
        { id: 'motiverande', label: l('Motiverande', 'Motivierend', 'Motivating'), hint: l('BÖR – riktning', 'BÖR – Richtung', 'BÖR – direction') },
      ],
      items: [
        {
          text: l('”Lotsen ombord 06.00. Däck klart för avgång 05.45.”', '„Lotse an Bord 06:00. Deck klar zum Auslaufen 05:45.“', '“Pilot on board 06:00. Deck ready for departure 05:45.”'),
          cat: 'militart',
          why: l('Kort, tydligt, uppgift och tid. Beslutet är redan fattat.', 'Kurz, eindeutig, Aufgabe und Zeit. Die Entscheidung ist gefallen.', 'Short, clear, task and time. The decision has already been made.'),
        },
        {
          text: l('”Vi förstår era behov och föreslår att vi ses igen för att hitta en lösning som fungerar för båda parter.”', '„Wir verstehen Ihre Anliegen und schlagen ein weiteres Treffen vor, um eine Lösung zu finden, die für beide Seiten funktioniert.“', '“We understand your needs and suggest we meet again to find a solution that works for both parties.”'),
          cat: 'diplomatiskt',
          why: l('Öppnar för förhandling och lämnar utrymme – utan att bryta relationen.', 'Öffnet für Verhandlung und lässt Raum – ohne die Beziehung zu brechen.', 'Opens up negotiation and leaves room – without breaking the relationship.'),
        },
        {
          text: l('”Om vi gör kontrollen före varje avgång slipper vi stå på kajen när det går fel – det är därför den finns.”', '„Wenn wir die Kontrolle vor jedem Auslaufen machen, stehen wir nicht am Kai, wenn es schiefgeht – genau dafür gibt es sie.“', '“If we do the check before every departure, we won’t be standing on the quay when it goes wrong – that is why it exists.”'),
          cat: 'motiverande',
          why: l('Förklarar varför – så att människor förstår och vill.', 'Erklärt das Warum – damit Menschen verstehen und wollen.', 'Explains why – so that people understand and want to.'),
        },
        {
          text: l('”Brandövning klockan 14. Alla till mönstringsstationerna.”', '„Feuerübung um 14 Uhr. Alle zu den Sammelstationen.“', '“Fire drill at 14:00. Everyone to the muster stations.”'),
          cat: 'militart',
          why: l('En order. Den som ger den ansvarar för beslutet.', 'Ein Befehl. Wer ihn gibt, verantwortet die Entscheidung.', 'An order. Whoever gives it is responsible for the decision.'),
        },
        {
          text: l('”Vi har olika intressen här, men vi behöver båda att leveransen går i tid.”', '„Wir haben hier unterschiedliche Interessen, aber wir brauchen beide, dass die Lieferung pünktlich ist.“', '“We have different interests here, but we both need the delivery to be on time.”'),
          cat: 'diplomatiskt',
          why: l('Hanterar konflikt utan att bryta samarbetet.', 'Geht mit dem Konflikt um, ohne die Zusammenarbeit zu brechen.', 'Handles conflict without breaking cooperation.'),
        },
        {
          text: l('”Målet är att ingen ska skadas i år. Din roll är att stoppa arbetet när du ser en risk.”', '„Das Ziel ist, dass sich dieses Jahr niemand verletzt. Deine Rolle ist es, die Arbeit zu stoppen, wenn du ein Risiko siehst.“', '“The goal is that nobody gets hurt this year. Your role is to stop the work when you see a risk.”'),
          cat: 'motiverande',
          why: l('Mål och roll – riktning, inte svaghet.', 'Ziel und Rolle – Richtung, nicht Schwäche.', 'Goal and role – direction, not weakness.'),
        },
      ],
      src: { book: 'steg3-1', ch: 'Tre sätt att tala' },
    },
    {
      slug: 'motet',
      type: 'scenario',
      min: 8,
      title: l('Fyra sorters människor i ett möte', 'Vier Arten von Menschen in einer Besprechung', 'Four kinds of people in a meeting'),
      source: { book: 'steg3-1', ch: 'Fyra sorters människor i ett möte' },
      invented: true,
      intro: l(
        'Måndagsmöte. Leveranserna till en kund har varit sena tre veckor i rad. Runt bordet: Eva beskriver avvikelserna. Jonas föreslår en ny rutin, en arbetsgrupp och ett uppföljningsmöte. Ali frågar vad ni egentligen försöker åstadkomma. Peter sitter tyst och tittar på klockan. Fallet är konstruerat – typerna kommer ur boken.',
        'Montagsbesprechung. Die Lieferungen an einen Kunden waren drei Wochen in Folge zu spät. Am Tisch: Eva beschreibt die Abweichungen. Jonas schlägt eine neue Routine, eine Arbeitsgruppe und ein Nachfolgetreffen vor. Ali fragt, was ihr eigentlich erreichen wollt. Peter sitzt still da und schaut auf die Uhr. Der Fall ist konstruiert – die Typen stammen aus dem Buch.',
        'Monday meeting. Deliveries to a customer have been late three weeks in a row. Around the table: Eva describes the deviations. Jonas proposes a new routine, a working group and a follow-up meeting. Ali asks what you are actually trying to achieve. Peter sits silently, looking at the clock. The case is constructed – the types come from the book.',
      ),
      nodes: [
        {
          situation: l('Jonas föreslår en ny rutin och en arbetsgrupp. Alla nickar.', 'Jonas schlägt eine neue Routine und eine Arbeitsgruppe vor. Alle nicken.', 'Jonas proposes a new routine and a working group. Everyone nods.'),
          options: [
            {
              label: l('Godkänner förslaget – det skapar ordning.', 'Den Vorschlag annehmen – das schafft Ordnung.', 'Approve the proposal – it creates order.'),
              c: {
                orsak: l('Aktivitet förväxlas med lösning.', 'Aktivität wird mit Lösung verwechselt.', 'Activity is mistaken for a solution.'),
                verkan: l('Mer ordning på papperet.', 'Mehr Ordnung auf dem Papier.', 'More order on paper.'),
                konsekvens: l('Inte nödvändigtvis bättre funktion i verkligheten.', 'Nicht unbedingt bessere Funktion in der Wirklichkeit.', 'Not necessarily better function in reality.'),
                bearer: l('Kunden, som fortfarande får sena leveranser.', 'Der Kunde, der weiterhin verspätet beliefert wird.', 'The customer, who still gets late deliveries.'),
              },
            },
            {
              label: l('Frågar: ”Vad är det vi försöker åstadkomma – och vad gör vi nu?”', 'Fragen: „Was wollen wir eigentlich erreichen – und was tun wir jetzt?“', 'Ask: “What are we actually trying to achieve – and what do we do now?”'),
              book: true,
              c: {
                orsak: l('Du söker nästa riktiga handling, inte fler processer.', 'Du suchst die nächste richtige Handlung, nicht mehr Prozesse.', 'You look for the next real action, not more processes.'),
                verkan: l('Mötet får riktning.', 'Die Besprechung bekommt Richtung.', 'The meeting gets direction.'),
                konsekvens: l('Här uppstår befäl – inte genom titel, utan genom riktning.', 'Hier entsteht Befehl – nicht durch Titel, sondern durch Richtung.', 'Here command arises – not through title, but through direction.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Låter mötet fortsätta och tar det efteråt.', 'Die Besprechung weiterlaufen lassen und es danach klären.', 'Let the meeting continue and deal with it afterwards.'),
              c: {
                orsak: l('Du undviker friktion.', 'Du vermeidest Reibung.', 'You avoid friction.'),
                verkan: l('Ännu en timme på vägen mot hemgång.', 'Noch eine Stunde auf dem Weg zum Feierabend.', 'One more hour on the way home.'),
                konsekvens: l('Beslutet flyttas till ett annat forum.', 'Die Entscheidung wandert in ein anderes Gremium.', 'The decision moves to another forum.'),
                bearer: l('Kunden.', 'Der Kunde.', 'The customer.'),
              },
            },
          ],
        },
        {
          situation: l('Ni enas om en åtgärd. ”Då är vi överens”, säger någon.', 'Ihr einigt euch auf eine Maßnahme. „Dann sind wir uns einig“, sagt jemand.', 'You agree on an action. “Then we’re agreed,” someone says.'),
          options: [
            {
              label: l('Avslutar mötet.', 'Die Besprechung beenden.', 'End the meeting.'),
              c: {
                orsak: l('Ingen har definierat beslutet.', 'Niemand hat die Entscheidung definiert.', 'Nobody has defined the decision.'),
                verkan: l('Tre personer går därifrån med tre tolkningar.', 'Drei Personen gehen mit drei Deutungen hinaus.', 'Three people leave with three interpretations.'),
                konsekvens: l('Tyst otydlighet.', 'Stille Unklarheit.', 'Silent vagueness.'),
                bearer: l('Alla – nästa vecka.', 'Alle – nächste Woche.', 'Everyone – next week.'),
              },
            },
            {
              label: l('Läser upp beslutet: vad, vem, när – och frågar om någon har förstått det annorlunda.', 'Die Entscheidung vorlesen: was, wer, wann – und fragen, ob jemand es anders verstanden hat.', 'Read out the decision: what, who, when – and ask whether anyone understood it differently.'),
              book: true,
              c: {
                orsak: l('Definition före debatt.', 'Definition vor Debatte.', 'Definition before debate.'),
                verkan: l('Skillnader i tolkning kommer fram nu, inte efteråt.', 'Unterschiede in der Deutung zeigen sich jetzt, nicht hinterher.', 'Differences in interpretation come out now, not afterwards.'),
                konsekvens: l('Beslutet binder till handling.', 'Die Entscheidung bindet an Handeln.', 'The decision binds to action.'),
                bearer: l('Den som har fått ett namn i beslutet.', 'Wer in der Entscheidung namentlich genannt ist.', 'Whoever has been named in the decision.'),
              },
            },
            {
              label: l('Skickar ett protokoll senare i veckan.', 'Später in der Woche ein Protokoll schicken.', 'Send minutes later in the week.'),
              c: {
                orsak: l('Definitionen kommer efter mötet.', 'Die Definition kommt nach der Besprechung.', 'The definition comes after the meeting.'),
                verkan: l('Var och en har redan börjat på sin tolkning.', 'Jeder hat schon mit seiner Deutung begonnen.', 'Everyone has already started on their own interpretation.'),
                konsekvens: l('Protokollet blir en debatt om vad som sades.', 'Das Protokoll wird zur Debatte darüber, was gesagt wurde.', 'The minutes become a debate about what was said.'),
                bearer: l('Den som skrev protokollet.', 'Wer das Protokoll geschrieben hat.', 'Whoever wrote the minutes.'),
              },
            },
          ],
        },
        {
          situation: l('Peter har inte sagt ett ord. Han protesterar inte. Han engagerar sig inte heller.', 'Peter hat kein Wort gesagt. Er widerspricht nicht. Er bringt sich aber auch nicht ein.', 'Peter has not said a word. He does not object. He does not engage either.'),
          options: [
            {
              label: l('Låter honom vara – han stör ju inte.', 'Ihn lassen – er stört ja nicht.', 'Leave him be – he isn’t disturbing anyone.'),
              c: {
                orsak: l('Passiviteten accepteras.', 'Die Passivität wird akzeptiert.', 'The passivity is accepted.'),
                verkan: l('Han bromsar mötet genom att inte delta.', 'Er bremst die Besprechung, indem er nicht mitmacht.', 'He slows the meeting by not taking part.'),
                konsekvens: l('Andra bär hans del.', 'Andere tragen seinen Teil.', 'Others carry his share.'),
                bearer: l('Kollegorna.', 'Die Kollegen.', 'The colleagues.'),
              },
            },
            {
              label: l('Ger honom en tydlig del av åtgärden – med namn och tid – och frågar om han tar den.', 'Ihm einen klaren Teil der Maßnahme geben – mit Namen und Zeit – und fragen, ob er ihn übernimmt.', 'Give him a clear part of the action – with name and time – and ask whether he will take it.'),
              book: true,
              c: {
                orsak: l('Tydlig riktning, verkligt ansvar och en uppgift som betyder något.', 'Klare Richtung, echte Verantwortung und eine Aufgabe, die etwas bedeutet.', 'Clear direction, real responsibility and a task that means something.'),
                verkan: l('Det är ibland det som väcker den tysta uppgivenheten.', 'Das ist es manchmal, was die stille Resignation weckt.', 'That is sometimes what wakes the silent resignation.'),
                konsekvens: l('Han deltar – eller det blir tydligt att han inte vill.', 'Er macht mit – oder es wird klar, dass er nicht will.', 'He takes part – or it becomes clear that he does not want to.'),
                bearer: l('Peter.', 'Peter.', 'Peter.'),
              },
            },
            {
              label: l('Tar upp hans bristande engagemang inför gruppen.', 'Sein fehlendes Engagement vor der Gruppe ansprechen.', 'Raise his lack of engagement in front of the group.'),
              c: {
                orsak: l('Gränsen sätts inför publik.', 'Die Grenze wird vor Publikum gesetzt.', 'The boundary is set in front of an audience.'),
                verkan: l('Han försvarar sig eller drar sig undan ännu mer.', 'Er verteidigt sich oder zieht sich noch mehr zurück.', 'He defends himself or withdraws even further.'),
                konsekvens: l('Det blir personligt i stället för funktionellt.', 'Es wird persönlich statt funktional.', 'It becomes personal instead of functional.'),
                bearer: l('Relationen.', 'Die Beziehung.', 'The relationship.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Boken beskriver fyra sorters människor i nästan varje möte: den som beskriver problemet, den som administrerar det, den som löser det – och den som inte vill förstå. Den fjärde går sällan att argumentera till liv, och inte heller att möta med fler möten eller värdeord. Det som ibland väcker honom är tydlig riktning, verkligt ansvar och en uppgift som betyder något. Ibland genom att väcka människan. Ibland genom att ge henne en tydlig uppgift. Ibland genom att flytta henne åt sidan.',
        'Das Buch beschreibt vier Arten von Menschen in fast jeder Besprechung: wer das Problem beschreibt, wer es verwaltet, wer es löst – und wer nicht verstehen will. Den Vierten kann man selten zum Leben argumentieren, und auch nicht mit mehr Besprechungen oder Wertworten erreichen. Was ihn manchmal weckt, sind klare Richtung, echte Verantwortung und eine Aufgabe, die etwas bedeutet. Manchmal, indem man den Menschen weckt. Manchmal, indem man ihm eine klare Aufgabe gibt. Manchmal, indem man ihn zur Seite stellt.',
        'The book describes four kinds of people in almost every meeting: the one who describes the problem, the one who administers it, the one who solves it – and the one who does not want to understand. The fourth can rarely be argued into life, nor reached with more meetings or value words. What sometimes wakes him is clear direction, real responsibility and a task that means something. Sometimes by waking the person. Sometimes by giving them a clear task. Sometimes by moving them aside.',
      ),
      quote: {
        sv: 'Det går sällan att argumentera denna människa till liv.',
        de: 'Diesen Menschen kann man selten zum Leben argumentieren.',
        en: 'This person can rarely be argued into life.',
        src: { book: 'steg3-1', ch: 'Fyra sorters människor i ett möte' },
      },
    },
    {
      slug: 'retorik',
      type: 'classify',
      min: 7,
      title: l('Känn igen mönstret', 'Erkenne das Muster', 'Recognise the pattern'),
      intro: l(
        'Klassiska retoriska knep. Boken påminner: att känna igen retorik är inte samma sak som att fatta beslut. I verkliga organisationer gäller beslut → ansvar → konsekvens, inte retorik → diskussion → diplom.',
        'Klassische rhetorische Tricks. Das Buch erinnert: Rhetorik zu erkennen ist nicht dasselbe, wie zu entscheiden. In echten Organisationen gilt Entscheidung → Verantwortung → Konsequenz, nicht Rhetorik → Diskussion → Diplom.',
        'Classic rhetorical tricks. The book reminds us: recognising rhetoric is not the same as making decisions. In real organisations it is decision → responsibility → consequence, not rhetoric → discussion → diploma.',
      ),
      categories: [
        { id: 'populum', label: l('Ad populum', 'Ad populum', 'Ad populum'), hint: l('majoritetsargument', 'Mehrheitsargument', 'appeal to the majority') },
        { id: 'paralipsis', label: l('Paralipsis', 'Paralipsis', 'Paralipsis'), hint: l('säga genom att låtsas inte säga', 'sagen, indem man vorgibt, es nicht zu sagen', 'saying it by pretending not to') },
        { id: 'hominem', label: l('Ad hominem', 'Ad hominem', 'Ad hominem'), hint: l('personangrepp', 'Angriff auf die Person', 'attack on the person') },
        { id: 'baculum', label: l('Ad baculum', 'Ad baculum', 'Ad baculum'), hint: l('hot, skrämsel', 'Drohung, Einschüchterung', 'threat, intimidation') },
        { id: 'reifikation', label: l('Reifikation', 'Reifikation', 'Reification'), hint: l('avhumanisering', 'Entmenschlichung', 'dehumanising') },
      ],
      items: [
        {
          text: l('”Alla andra rederier gör så här, så det kan inte vara fel.”', '„Alle anderen Reedereien machen es so, also kann es nicht falsch sein.“', '“All the other shipping companies do it this way, so it can’t be wrong.”'),
          cat: 'populum',
          why: l('Att många gör något säger inget om vem som bär konsekvensen.', 'Dass viele etwas tun, sagt nichts darüber, wer die Konsequenz trägt.', 'That many people do something says nothing about who carries the consequence.'),
        },
        {
          text: l('”Jag tänker inte ens nämna hur det gick förra gången han ledde ett projekt.”', '„Ich will gar nicht erst erwähnen, wie es das letzte Mal lief, als er ein Projekt geleitet hat.“', '“I won’t even mention how it went the last time he led a project.”'),
          cat: 'paralipsis',
          why: l('Påståendet görs – utan att den som gör det står för det.', 'Die Behauptung wird aufgestellt – ohne dass der Sprecher für sie einsteht.', 'The claim is made – without the speaker standing by it.'),
        },
        {
          text: l('”Vad vet hon om säkerhet – hon har ju aldrig jobbat ombord.”', '„Was weiß sie schon über Sicherheit – sie hat ja nie an Bord gearbeitet.“', '“What does she know about safety – she’s never worked on board.”'),
          cat: 'hominem',
          why: l('Personen angrips i stället för sakfrågan.', 'Die Person wird angegriffen statt der Sache.', 'The person is attacked instead of the issue.'),
        },
        {
          text: l('”Om du driver den här frågan vidare kan du glömma förlängningen.”', '„Wenn du diese Sache weitertreibst, kannst du die Verlängerung vergessen.“', '“If you keep pushing this issue, you can forget about your extension.”'),
          cat: 'baculum',
          why: l('Hot ersätter argument.', 'Drohung ersetzt Argument.', 'Threat replaces argument.'),
        },
        {
          text: l('”De där i land är bara bromsklossar.”', '„Die da an Land sind doch nur Bremsklötze.“', '“Those people ashore are just dead weight.”'),
          cat: 'reifikation',
          why: l('Människor görs till ting – och ansvaret försvinner med dem.', 'Menschen werden zu Dingen gemacht – und die Verantwortung verschwindet mit ihnen.', 'People are turned into things – and responsibility disappears with them.'),
        },
        {
          text: l('”De flesta i gruppen tycker att vi kan hoppa över kontrollen.”', '„Die meisten in der Gruppe finden, wir können die Kontrolle auslassen.“', '“Most people in the group think we can skip the check.”'),
          cat: 'populum',
          why: l('En majoritet kan inte upphäva ett Skall.', 'Eine Mehrheit kann kein Muss aufheben.', 'A majority cannot cancel a Must.'),
        },
      ],
      src: { book: 'steg3-1', ch: 'Ledarskapskursernas värld' },
    },
    {
      slug: 'befalssvar',
      type: 'objection',
      min: 6,
      title: l('Säga nej utan att försvara sig', 'Nein sagen, ohne sich zu verteidigen', 'Saying no without defending yourself'),
      intro: l(
        'Tre situationer där det är frestande att förklara för länge. Svara kort.',
        'Drei Situationen, in denen es verlockend ist, zu lange zu erklären. Antworte kurz.',
        'Three situations where it is tempting to explain too long. Answer briefly.',
      ),
      items: [
        {
          objection: l('Kan vi inte göra ett undantag den här gången?', 'Können wir nicht dieses eine Mal eine Ausnahme machen?', 'Can’t we make an exception this time?'),
          answer: l('Undantag är sällan problem i sig. Men varje undantag flyttar gränsen.', 'Ausnahmen sind selten an sich ein Problem. Aber jede Ausnahme verschiebt die Grenze.', 'Exceptions are rarely a problem in themselves. But every exception moves the boundary.'),
          src: { book: 'steg2', ch: 'Kap. 6, 6.2 När gruppen vill justera principen' },
        },
        {
          objection: l('Du förenklar.', 'Du vereinfachst.', 'You are simplifying.'),
          answer: l('Ja. För utan förenkling går inget att bära.', 'Ja. Denn ohne Vereinfachung lässt sich nichts tragen.', 'Yes. Because without simplification nothing can be carried.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 7' },
        },
        {
          objection: l('Vem avgör vad som är rätt då?', 'Wer entscheidet dann, was richtig ist?', 'Who decides what is right, then?'),
          answer: l('Verkligheten. Alltid.', 'Die Wirklichkeit. Immer.', 'Reality. Always.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 13' },
        },
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 4,
      title: l('Ord i stället för nej', 'Worte statt Nein', 'Words instead of no'),
      prompts: [l('Var använde jag ord för att slippa säga nej?', 'Wo habe ich Worte benutzt, um nicht Nein sagen zu müssen?', 'Where did I use words to avoid saying no?')],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Militärt språk är fel språk i civila organisationer.” Stämmer det?', '„Militärische Sprache ist in zivilen Organisationen die falsche Sprache.“ Stimmt das?', '“Military language is the wrong language in civilian organisations.” Is that true?'),
          options: [
            { text: l('Ja – civila organisationer ska bara använda motiverande språk.', 'Ja – zivile Organisationen sollten nur motivierende Sprache verwenden.', 'Yes – civilian organisations should only use motivating language.'), ok: false, fb: l('Varje språk fungerar när organisationen är byggd för det.', 'Jede Sprache funktioniert, wenn die Organisation dafür gebaut ist.', 'Each language works when the organisation is built for it.') },
            { text: l('Nej – problemet är mellanläget: order utan mandat, råd utan ansvar.', 'Nein – das Problem ist die Zwischenlage: Befehle ohne Mandat, Ratschläge ohne Verantwortung.', 'No – the problem is the unclear middle: orders without mandate, advice without responsibility.'), ok: true, fb: l('Ja. Resultatet av mellanläget är otydlighet.', 'Ja. Das Ergebnis der Zwischenlage ist Unklarheit.', 'Yes. The result of the middle ground is vagueness.') },
          ],
          misconception: l('Att ett av språken är rätt och de andra fel.', 'Dass eine der Sprachen richtig und die anderen falsch sind.', 'That one of the languages is right and the others wrong.'),
        },
        {
          q: l('De flesta konflikter är …', 'Die meisten Konflikte sind …', 'Most conflicts are …'),
          options: [
            { text: l('personkonflikter.', 'persönliche Konflikte.', 'personal conflicts.'), ok: false, fb: l('De blir ofta personliga – men börjar sällan där.', 'Sie werden oft persönlich – beginnen aber selten dort.', 'They often become personal – but rarely start there.') },
            { text: l('definitionskonflikter.', 'Definitionskonflikte.', 'conflicts of definition.'), ok: true, fb: l('Ja. Om begreppen inte definieras debatterar vi känslor.', 'Ja. Werden die Begriffe nicht definiert, debattieren wir Gefühle.', 'Yes. If the concepts are not defined, we debate feelings.') },
            { text: l('intressekonflikter.', 'Interessenkonflikte.', 'conflicts of interest.'), ok: false, fb: l('Intressen finns – men utan definitioner går de inte att hantera.', 'Interessen gibt es – aber ohne Definitionen lassen sie sich nicht handhaben.', 'Interests exist – but without definitions they cannot be handled.') },
          ],
          misconception: l('Att konflikter främst handlar om personer.', 'Dass es bei Konflikten vor allem um Personen geht.', 'That conflicts are mainly about people.'),
        },
        {
          q: l('Varför är tyst otydlighet farligare än öppen konflikt?', 'Warum ist stille Unklarheit gefährlicher als offener Konflikt?', 'Why is silent vagueness more dangerous than open conflict?'),
          options: [
            { text: l('För att ingen protesterar – och tre personer kan gå därifrån med tre olika beslut.', 'Weil niemand widerspricht – und drei Personen mit drei verschiedenen Entscheidungen hinausgehen können.', 'Because nobody objects – and three people can walk away with three different decisions.'), ok: true, fb: l('Ja. Ingen ljög, ingen protesterade – men ingen definierade.', 'Ja. Niemand log, niemand widersprach – aber niemand definierte.', 'Yes. Nobody lied, nobody objected – but nobody defined.') },
            { text: l('För att öppna konflikter alltid är bra.', 'Weil offene Konflikte immer gut sind.', 'Because open conflicts are always good.'), ok: false, fb: l('Boken säger inte att konflikt är bra – utan att den kan hanteras när den syns.', 'Das Buch sagt nicht, dass Konflikt gut ist – sondern dass er sich handhaben lässt, wenn er sichtbar ist.', 'The book does not say conflict is good – but that it can be handled when it is visible.') },
          ],
          misconception: l('Att samstämmighet i ett möte betyder att alla har förstått samma sak.', 'Dass Einigkeit in einer Besprechung bedeutet, dass alle dasselbe verstanden haben.', 'That agreement in a meeting means everyone understood the same thing.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Definiera ett ord som ditt team använder olika – och skriv ner definitionen så att alla kan se den.',
        'Definiere ein Wort, das dein Team unterschiedlich verwendet – und schreib die Definition so auf, dass alle sie sehen können.',
        'Define one word your team uses differently – and write the definition down where everyone can see it.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 7 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 7 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 7, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Fråga gruppen vad ett vanligt ord i deras verksamhet betyder – till exempel ”klart”, ”akut” eller ”ansvarig”. Låt tre personer svara. Paus. ”Vi är överens … tror jag.”',
      'Frag die Gruppe, was ein gängiges Wort in ihrem Betrieb bedeutet – zum Beispiel „fertig“, „dringend“ oder „verantwortlich“. Lass drei Personen antworten. Pause. „Wir sind uns einig … glaube ich.“',
      'Ask the group what a common word in their work means – for example “done”, “urgent” or “responsible”. Let three people answer. Pause. “We agree … I think.”',
    ),
    questions: [
      l('Vilket språk talar ni oftast – och passar det er organisation?', 'Welche Sprache sprecht ihr am häufigsten – und passt sie zu eurer Organisation?', 'Which language do you speak most often – and does it fit your organisation?'),
      l('Var ger ni order utan mandat, eller råd utan ansvar?', 'Wo erteilt ihr Befehle ohne Mandat oder Ratschläge ohne Verantwortung?', 'Where do you give orders without mandate, or advice without responsibility?'),
      l('Vem är den fjärde personen i era möten – och vad har gjort honom så?', 'Wer ist die vierte Person in euren Besprechungen – und was hat sie so werden lassen?', 'Who is the fourth person in your meetings – and what made him that way?'),
    ],
    note: l(
      'Exemplen med retoriska knep får inte bli en politisk diskussion. Bryt-mall: ”Det där är en annan diskussion. Här pratar vi ansvar.”',
      'Die Beispiele rhetorischer Tricks dürfen nicht zur politischen Diskussion werden. Abbruchsatz: „Das ist eine andere Diskussion. Hier sprechen wir über Verantwortung.“',
      'The examples of rhetorical tricks must not turn into a political discussion. Cut-off line: “That is a different discussion. Here we talk responsibility.”',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
