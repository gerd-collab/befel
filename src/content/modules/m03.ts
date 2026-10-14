// M03 · Oväld som princip
// Sources: Webbkurs-folder (OVÄLD/WASTA); Steg 2 Kap. 5 Hantera konflikt utan att bli partisk,
// Kap. 6.5, Kap. 10 Bli prövbar; Steg 1 Befälssvar.

import { l, type Module } from '../types';

export const m03: Module = {
  id: 'm03',
  num: 3,
  part: 1,
  title: l('Oväld som princip', 'Oväld als Prinzip', 'Oväld as a principle'),
  teaser: l(
    'Att stå fri från påverkan – etiken bakom befälet.',
    'Frei von Einfluss stehen – die Ethik hinter dem Befehl.',
    'Standing free of influence – the ethics behind command.',
  ),
  goal: l(
    'Du beskriver vad OVÄLD betyder – fri från otillbörlig påverkan och prövbar – och känner igen när snällhet undergräver funktionen.',
    'Du beschreibst, was OVÄLD bedeutet – frei von unzulässigem Einfluss und überprüfbar – und erkennst, wann Freundlichkeit die Funktion untergräbt.',
    'You can describe what OVÄLD means – free of undue influence and open to scrutiny – and recognise when kindness undermines function.',
  ),
  keyTerms: [
    l('OVÄLD', 'OVÄLD', 'OVÄLD'),
    l('Opartiskhet', 'Unparteilichkeit', 'Impartiality'),
    l('Funktion före popularitet', 'Funktion vor Beliebtheit', 'Function before popularity'),
    l('Prövbar', 'Überprüfbar', 'Open to scrutiny'),
    l('WASTA', 'WASTA', 'WASTA'),
  ],
  sources: [
    { book: 'folder', ch: 'Webbkursens beskrivning (OVÄLD och WASTA)' },
    { book: 'steg2', ch: 'Kap. 5 Hantera konflikt utan att bli partisk' },
    { book: 'steg2', ch: 'Kap. 10 Bli prövbar' },
  ],
  image: 'nar-lighthouse',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 7,
      title: l('Fri från otillbörlig påverkan', 'Frei von unzulässigem Einfluss', 'Free of undue influence'),
      slides: [
        {
          heading: l('OVÄLD och WASTA', 'OVÄLD und WASTA', 'OVÄLD and WASTA'),
          body: [
            l(
              'OVÄLD handlar om att stå fri från otillbörlig påverkan – att tänka, känna och handla utifrån eget omdöme. Motsatsen kallas WASTA: beroende, bekvämlighet och feghet.',
              'OVÄLD heißt, frei von unzulässigem Einfluss zu stehen – aus eigenem Urteil zu denken, zu fühlen und zu handeln. Das Gegenteil heißt WASTA: Abhängigkeit, Bequemlichkeit und Feigheit.',
              'OVÄLD means standing free of undue influence – thinking, feeling and acting from your own judgement. The opposite is called WASTA: dependence, convenience and cowardice.',
            ),
            l(
              'I böckerna betyder OVÄLD två saker i praktiken: att vara opartisk och att vara prövbar.',
              'In den Büchern bedeutet OVÄLD praktisch zweierlei: unparteiisch zu sein und überprüfbar zu sein.',
              'In the books OVÄLD means two things in practice: being impartial and being open to scrutiny.',
            ),
          ],
          quote: {
            sv: 'OVÄLD är inte ett känslobegrepp. Det är ett kontrollbegrepp.',
            de: 'OVÄLD ist kein Gefühlsbegriff. Es ist ein Kontrollbegriff.',
            en: 'OVÄLD is not a concept of feeling. It is a concept of control.',
            src: { book: 'steg2', ch: 'Kap. 3, 3.4 Verifikation' },
          },
        },
        {
          heading: l('Opartiskhet är inte neutralitet', 'Unparteilichkeit ist nicht Neutralität', 'Impartiality is not neutrality'),
          body: [
            l(
              'Neutralitet kan vara bekvämt. Opartiskhet är ofta obekvämt. Den som är neutral undviker konflikt. Den som är opartisk hanterar den.',
              'Neutralität kann bequem sein. Unparteilichkeit ist oft unbequem. Wer neutral ist, weicht dem Konflikt aus. Wer unparteiisch ist, geht ihn an.',
              'Neutrality can be comfortable. Impartiality is often uncomfortable. Whoever is neutral avoids conflict. Whoever is impartial deals with it.',
            ),
            l(
              'OVÄLD bygger på opartiskhet. Inte känslokyla. Inte likgiltighet. Utan konsekvent tillämpning av princip.',
              'OVÄLD beruht auf Unparteilichkeit. Nicht auf Gefühlskälte. Nicht auf Gleichgültigkeit. Sondern auf der konsequenten Anwendung von Prinzipien.',
              'OVÄLD rests on impartiality. Not emotional coldness. Not indifference. But the consistent application of principle.',
            ),
          ],
          quote: {
            sv: 'Neutralitet är att inte ta ställning. Opartiskhet är att ta ställning utifrån princip – oavsett relation.',
            de: 'Neutralität heißt, keine Stellung zu beziehen. Unparteilichkeit heißt, aus Prinzip Stellung zu beziehen – unabhängig von Beziehungen.',
            en: 'Neutrality is not taking a position. Impartiality is taking a position on principle – regardless of relationships.',
            src: { book: 'steg2', ch: 'Kap. 5, 5.1 Opartiskhet och neutralitet' },
          },
        },
        {
          heading: l('Ibland är det taskigt att vara snäll', 'Manchmal ist es gemein, nett zu sein', 'Sometimes it is unkind to be kind'),
          body: [
            l(
              'Snällhet kan vara en form av konflikträdsla. När du låter en regel glida för att slippa obehag skapar du orättvisa. När du inte ingriper för att bevara stämningen försvagar du strukturen.',
              'Freundlichkeit kann eine Form von Konfliktscheu sein. Wenn du eine Regel schleifen lässt, um Unannehmlichkeiten zu vermeiden, schaffst du Ungerechtigkeit. Wenn du nicht eingreifst, um die Stimmung zu schonen, schwächst du die Struktur.',
              'Kindness can be a form of fear of conflict. When you let a rule slide to avoid discomfort, you create unfairness. When you do not intervene to preserve the mood, you weaken the structure.',
            ),
          ],
          quote: {
            sv: 'Det som upplevs som vänligt i stunden kan bli orättvist över tid.',
            de: 'Was im Moment als freundlich erlebt wird, kann über die Zeit ungerecht werden.',
            en: 'What feels kind in the moment can become unfair over time.',
            src: { book: 'steg2', ch: 'Kap. 5, 5.3 Ibland är det taskigt att vara snäll' },
          },
        },
        {
          heading: l('Funktion före popularitet', 'Funktion vor Beliebtheit', 'Function before popularity'),
          body: [
            l(
              'Chef kan söka uppskattning. Ledare kan söka följsamhet. Befäl måste söka funktion. När funktion sätts före popularitet blir du mer förutsägbar, mindre personlig i konflikter och mindre manipulativ.',
              'Ein Chef kann Anerkennung suchen. Eine Führungskraft kann Gefolgschaft suchen. Befehl muss Funktion suchen. Wer Funktion vor Beliebtheit stellt, wird berechenbarer, weniger persönlich in Konflikten und weniger manipulativ.',
              'A manager can seek appreciation. A leader can seek compliance. Command must seek function. When function comes before popularity, you become more predictable, less personal in conflicts and less manipulative.',
            ),
            l(
              'Att vara opartisk kostar: du kan uppfattas som hård och bli mindre omtyckt. Men när principer varierar med person förloras tillit.',
              'Unparteilichkeit kostet: Du kannst als hart gelten und weniger beliebt sein. Aber wenn Prinzipien je nach Person variieren, geht Vertrauen verloren.',
              'Impartiality costs: you may be seen as hard and become less liked. But when principles vary from person to person, trust is lost.',
            ),
          ],
          quote: {
            sv: 'OVÄLD är inte att vara omtyckt. Det är att vara rättvis – även när det kostar.',
            de: 'OVÄLD heißt nicht, beliebt zu sein. Es heißt, gerecht zu sein – auch wenn es etwas kostet.',
            en: 'OVÄLD is not being liked. It is being fair – even when it costs.',
            src: { book: 'steg2', ch: 'Kap. 5, 5.6 Slutprincip' },
          },
        },
        {
          heading: l('Bli prövbar', 'Überprüfbar werden', 'Become open to scrutiny'),
          body: [
            l(
              '”Är du beredd att visa hur du tänker?” Att ha åsikter är lätt. Att stå för dem under granskning är svårare.',
              '„Bist du bereit zu zeigen, wie du denkst?“ Meinungen zu haben ist leicht. Unter Prüfung zu ihnen zu stehen, ist schwerer.',
              '“Are you prepared to show how you think?” Having opinions is easy. Standing by them under scrutiny is harder.',
            ),
          ],
          list: [
            l('Beslut kan granskas.', 'Entscheidungen können geprüft werden.', 'Decisions can be examined.'),
            l('Argument kan testas.', 'Argumente können getestet werden.', 'Arguments can be tested.'),
            l('Handlingar kan följas upp.', 'Handlungen können nachverfolgt werden.', 'Actions can be followed up.'),
          ],
          quote: {
            sv: 'Osäkerhet ropar. Struktur talar lugnt.',
            de: 'Unsicherheit schreit. Struktur spricht ruhig.',
            en: 'Uncertainty shouts. Structure speaks calmly.',
            src: { book: 'steg2', ch: 'Kap. 10, 10.4 Den som är OVÄLD behöver inte ropa' },
          },
        },
      ],
      cards: [
        { term: l('OVÄLD', 'OVÄLD', 'OVÄLD'), text: l('Fri från otillbörlig påverkan; opartisk och prövbar.', 'Frei von unzulässigem Einfluss; unparteiisch und überprüfbar.', 'Free of undue influence; impartial and open to scrutiny.') },
        { term: l('WASTA', 'WASTA', 'WASTA'), text: l('Beroende, bekvämlighet och feghet – ett beteendemönster.', 'Abhängigkeit, Bequemlichkeit und Feigheit – ein Verhaltensmuster.', 'Dependence, convenience and cowardice – a pattern of behaviour.') },
        { term: l('Opartiskhet', 'Unparteilichkeit', 'Impartiality'), text: l('Ta ställning utifrån princip – oavsett relation.', 'Aus Prinzip Stellung beziehen – unabhängig von Beziehungen.', 'Take a position on principle – regardless of relationships.') },
        { term: l('Funktion före popularitet', 'Funktion vor Beliebtheit', 'Function before popularity'), text: l('Beslut grundas i princip, inte i relation.', 'Entscheidungen gründen auf Prinzip, nicht auf Beziehung.', 'Decisions are grounded in principle, not in relationships.') },
        { term: l('Prövbar', 'Überprüfbar', 'Open to scrutiny'), text: l('Den som undviker insyn undviker ansvar.', 'Wer Einblick vermeidet, vermeidet Verantwortung.', 'Whoever avoids scrutiny avoids responsibility.') },
      ],
    },
    {
      slug: 'smidigare',
      type: 'scenario',
      min: 8,
      title: l('”Du kunde varit lite smidigare”', '„Du hättest etwas geschmeidiger sein können“', '“You could have been a bit more flexible”'),
      source: { book: 'steg2', ch: 'Kap. 5 Hantera konflikt utan att bli partisk' },
      intro: l(
        'Ett personalärende. Inget dramatiskt. En medarbetare har upprepade gånger brutit mot en rutin – inte av illvilja, inte av inkompetens, utan av slarv. Du är den som bär beslutet.',
        'Eine Personalangelegenheit. Nichts Dramatisches. Ein Mitarbeiter hat wiederholt gegen eine Routine verstoßen – nicht aus böser Absicht, nicht aus Unfähigkeit, sondern aus Nachlässigkeit. Du bist derjenige, der die Entscheidung trägt.',
        'A personnel matter. Nothing dramatic. An employee has repeatedly broken a routine – not out of malice, not out of incompetence, but out of carelessness. You are the one who carries the decision.',
      ),
      nodes: [
        {
          situation: l('Rutinen bryts igen. Stämningen i gruppen är god.', 'Die Routine wird wieder gebrochen. Die Stimmung in der Gruppe ist gut.', 'The routine is broken again. The mood in the group is good.'),
          options: [
            {
              label: l('Låter det passera den här gången.', 'Es dieses Mal durchgehen lassen.', 'Let it pass this time.'),
              c: {
                orsak: l('Relation före funktion.', 'Beziehung vor Funktion.', 'Relationship before function.'),
                verkan: l('Regeln glider, ett undantag i taget.', 'Die Regel gleitet weg, eine Ausnahme nach der anderen.', 'The rule slides, one exception at a time.'),
                konsekvens: l('Orättvisa mot dem som följer rutinen.', 'Ungerechtigkeit gegenüber denen, die die Routine einhalten.', 'Unfairness towards those who follow the routine.'),
                bearer: l('Kollegorna som gör rätt.', 'Die Kollegen, die es richtig machen.', 'The colleagues who do it right.'),
              },
            },
            {
              label: l('Håller samtal, lyssnar på förklaringen och ger en tydlig påminnelse.', 'Gespräche führen, die Erklärung anhören und deutlich erinnern.', 'Hold a conversation, listen to the explanation and give a clear reminder.'),
              book: true,
              c: {
                orsak: l('Personen får chansen att förstå och rätta sig.', 'Die Person bekommt die Chance, zu verstehen und sich zu korrigieren.', 'The person gets the chance to understand and correct.'),
                verkan: l('Gränsen blir synlig utan att bli personlig.', 'Die Grenze wird sichtbar, ohne persönlich zu werden.', 'The boundary becomes visible without becoming personal.'),
                konsekvens: l('Nästa steg är förutsägbart.', 'Der nächste Schritt ist vorhersehbar.', 'The next step is predictable.'),
                bearer: l('Medarbetaren – med full information.', 'Der Mitarbeiter – mit voller Information.', 'The employee – fully informed.'),
              },
            },
            {
              label: l('Går direkt till formell åtgärd.', 'Direkt zu einer formellen Maßnahme greifen.', 'Go straight to formal action.'),
              c: {
                orsak: l('Steg hoppas över.', 'Schritte werden übersprungen.', 'Steps are skipped.'),
                verkan: l('Beslutet uppfattas som godtyckligt.', 'Die Entscheidung wirkt willkürlich.', 'The decision seems arbitrary.'),
                konsekvens: l('Förtroendet för principen skadas.', 'Das Vertrauen in das Prinzip wird beschädigt.', 'Trust in the principle is damaged.'),
                bearer: l('Förtroendet i gruppen.', 'Das Vertrauen in der Gruppe.', 'Trust within the group.'),
              },
            },
          ],
        },
        {
          situation: l('Samtalen har hållits. Påminnelser har getts. Förklaringar har lyssnats på. Det upprepas ändå.', 'Die Gespräche sind geführt. Erinnerungen wurden gegeben. Erklärungen wurden angehört. Es wiederholt sich trotzdem.', 'The conversations have been held. Reminders given. Explanations heard. It happens again anyway.'),
          options: [
            {
              label: l('Ytterligare ett samtal.', 'Noch ein Gespräch.', 'One more conversation.'),
              c: {
                orsak: l('Samma steg upprepas.', 'Derselbe Schritt wird wiederholt.', 'The same step is repeated.'),
                verkan: l('Alla ser att inget händer.', 'Alle sehen, dass nichts passiert.', 'Everyone sees that nothing happens.'),
                konsekvens: l('Regler blir rekommendationer.', 'Regeln werden zu Empfehlungen.', 'Rules become recommendations.'),
                bearer: l('Strukturen.', 'Die Struktur.', 'The structure.'),
              },
            },
            {
              label: l('Formell åtgärd – dokumenterad och proportionerlig.', 'Formelle Maßnahme – dokumentiert und verhältnismäßig.', 'Formal action – documented and proportionate.'),
              book: true,
              c: {
                orsak: l('Det finns bara ett alternativ kvar.', 'Es bleibt nur noch eine Möglichkeit.', 'Only one option remains.'),
                verkan: l('Principen gäller – även för den som är omtyckt.', 'Das Prinzip gilt – auch für den, der beliebt ist.', 'The principle applies – even to someone who is liked.'),
                konsekvens: l('Förutsägbarhet: alla vet vad som gäller.', 'Berechenbarkeit: Alle wissen, was gilt.', 'Predictability: everyone knows what applies.'),
                bearer: l('Du – och medarbetaren för sitt beteende.', 'Du – und der Mitarbeiter für sein Verhalten.', 'You – and the employee for their behaviour.'),
              },
            },
            {
              label: l('Flyttar personen till en annan uppgift utan att säga varför.', 'Die Person auf eine andere Aufgabe setzen, ohne zu sagen warum.', 'Move the person to another task without saying why.'),
              c: {
                orsak: l('Konflikten undviks.', 'Dem Konflikt wird ausgewichen.', 'The conflict is avoided.'),
                verkan: l('Ingen vet vad som gäller.', 'Niemand weiß, was gilt.', 'Nobody knows what applies.'),
                konsekvens: l('Konflikten blir indirekt och personlig.', 'Der Konflikt wird indirekt und persönlich.', 'The conflict becomes indirect and personal.'),
                bearer: l('Den nya gruppen – och medarbetaren.', 'Die neue Gruppe – und der Mitarbeiter.', 'The new group – and the employee.'),
              },
            },
          ],
        },
        {
          situation: l('Efteråt kommer kommentaren: ”Du kunde varit lite smidigare.”', 'Danach kommt der Kommentar: „Du hättest etwas geschmeidiger sein können.“', 'Afterwards comes the comment: “You could have been a bit more flexible.”'),
          options: [
            {
              label: l('Ber om ursäkt och lovar att vara mer flexibel nästa gång.', 'Sich entschuldigen und versprechen, nächstes Mal flexibler zu sein.', 'Apologise and promise to be more flexible next time.'),
              c: {
                orsak: l('Beslutet formas av rädsla för reaktion.', 'Die Entscheidung wird von der Angst vor der Reaktion geformt.', 'The decision is shaped by fear of the reaction.'),
                verkan: l('Principen har redan försvagats.', 'Das Prinzip ist bereits geschwächt.', 'The principle has already been weakened.'),
                konsekvens: l('Nästa gång gäller regeln lite mindre.', 'Nächstes Mal gilt die Regel ein bisschen weniger.', 'Next time the rule applies a little less.'),
                bearer: l('Nästa person som följer regeln.', 'Die nächste Person, die die Regel befolgt.', 'The next person who follows the rule.'),
              },
            },
            {
              label: l('Svarar lugnt: beslutet var korrekt, dokumenterat och proportionerligt – och står kvar.', 'Ruhig antworten: Die Entscheidung war korrekt, dokumentiert und verhältnismäßig – und dabei bleiben.', 'Answer calmly: the decision was correct, documented and proportionate – and stand by it.'),
              book: true,
              c: {
                orsak: l('Du är opartisk, inte neutral.', 'Du bist unparteiisch, nicht neutral.', 'You are impartial, not neutral.'),
                verkan: l('Du blir kanske mindre omtyckt i stunden.', 'Du bist im Moment vielleicht weniger beliebt.', 'You may be less liked in the moment.'),
                konsekvens: l('Förutsägbarhet – grunden för tillit.', 'Berechenbarkeit – die Grundlage von Vertrauen.', 'Predictability – the foundation of trust.'),
                bearer: l('Du – den mänskliga kostnaden.', 'Du – die menschlichen Kosten.', 'You – the human cost.'),
              },
            },
            {
              label: l('Förklarar länge och ingående varför du hade rätt.', 'Lang und breit erklären, warum du recht hattest.', 'Explain at length why you were right.'),
              c: {
                orsak: l('Du försvarar dig.', 'Du verteidigst dich.', 'You defend yourself.'),
                verkan: l('Beslutet blir en debatt.', 'Die Entscheidung wird zur Debatte.', 'The decision becomes a debate.'),
                konsekvens: l('Den som är OVÄLD behöver inte ropa.', 'Wer OVÄLD ist, muss nicht schreien.', 'Whoever is OVÄLD does not need to shout.'),
                bearer: l('Beslutets trovärdighet.', 'Die Glaubwürdigkeit der Entscheidung.', 'The credibility of the decision.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Beslutet var korrekt. Dokumenterat. Proportionerligt. Kommentaren betydde: du kunde låtit det passera, valt relation före funktion, varit snäll. ”Det var då jag förstod skillnaden mellan att vara omtyckt och att vara opartisk.”',
        'Die Entscheidung war korrekt. Dokumentiert. Verhältnismäßig. Der Kommentar bedeutete: Du hättest es durchgehen lassen können, Beziehung vor Funktion stellen, nett sein. „Da verstand ich den Unterschied zwischen beliebt sein und unparteiisch sein.“',
        'The decision was correct. Documented. Proportionate. The comment meant: you could have let it pass, put relationship before function, been kind. “That was when I understood the difference between being liked and being impartial.”',
      ),
      quote: {
        sv: 'Snällhet i stunden kan vara orättvisa över tid.',
        de: 'Freundlichkeit im Moment kann Ungerechtigkeit über die Zeit sein.',
        en: 'Kindness in the moment can be unfairness over time.',
        src: { book: 'steg2', ch: 'Kap. 5, 5.6 Slutprincip' },
      },
    },
    {
      slug: 'paverkan',
      type: 'classify',
      min: 6,
      title: l('Legitim eller otillbörlig påverkan?', 'Legitimer oder unzulässiger Einfluss?', 'Legitimate or undue influence?'),
      intro: l(
        'Att vara OVÄLD betyder inte att vara opåverkad. Fakta, erfarenhet och regelverk ska påverka. Beroende, gentjänster och rädsla ska inte.',
        'OVÄLD zu sein heißt nicht, unbeeinflusst zu sein. Fakten, Erfahrung und Regelwerke sollen beeinflussen. Abhängigkeit, Gefälligkeiten und Angst sollen es nicht.',
        'Being OVÄLD does not mean being uninfluenced. Facts, experience and rules should influence you. Dependence, favours and fear should not.',
      ),
      categories: [
        { id: 'legitim', label: l('Legitim påverkan', 'Legitimer Einfluss', 'Legitimate influence'), hint: l('kunskap, erfarenhet, fakta', 'Wissen, Erfahrung, Fakten', 'knowledge, experience, facts') },
        { id: 'otillborlig', label: l('Otillbörlig påverkan', 'Unzulässiger Einfluss', 'Undue influence'), hint: l('beroende, gentjänst, rädsla', 'Abhängigkeit, Gefälligkeit, Angst', 'dependence, favours, fear') },
      ],
      items: [
        {
          text: l('Maskinchefen visar mätdata som talar emot ditt beslut.', 'Der Leitende Ingenieur zeigt Messdaten, die gegen deine Entscheidung sprechen.', 'The chief engineer shows measurements that contradict your decision.'),
          cat: 'legitim',
          why: l('Den som är principfast kan ändra beslut om fakta förändras.', 'Wer grundsatztreu ist, kann eine Entscheidung ändern, wenn sich die Fakten ändern.', 'Whoever is firm on principle can change a decision when the facts change.'),
        },
        {
          text: l('En kund antyder att nästa order hänger på att du ”ser mellan fingrarna”.', 'Ein Kunde deutet an, dass der nächste Auftrag davon abhängt, dass du „ein Auge zudrückst“.', 'A customer hints that the next order depends on you “turning a blind eye”.'),
          cat: 'otillborlig',
          why: l('Ett beroende som köper ditt omdöme.', 'Eine Abhängigkeit, die dein Urteil kauft.', 'A dependence that buys your judgement.'),
        },
        {
          text: l('Du vill inte bli ”den som alltid är hård” i gruppen.', 'Du willst nicht „der, der immer hart ist“ in der Gruppe sein.', 'You don’t want to become “the one who is always hard” in the group.'),
          cat: 'otillborlig',
          why: l('Rädslan att bli ensam. När rädsla styr beslut upphör befälet.', 'Die Angst, allein zu sein. Wenn Angst Entscheidungen steuert, endet der Befehl.', 'The fear of being alone. When fear steers decisions, command ends.'),
        },
        {
          text: l('En erfaren kollega pekar på en risk du inte hade sett.', 'Eine erfahrene Kollegin weist auf ein Risiko hin, das du nicht gesehen hattest.', 'An experienced colleague points out a risk you had not seen.'),
          cat: 'legitim',
          why: l('Principfasthet lyssnar – men viker sig inte från grund.', 'Grundsatztreue hört zu – weicht aber nicht vom Fundament.', 'Firmness of principle listens – but does not give way on the foundation.'),
        },
        {
          text: l('Chefen är din gamla vän, och du vill inte förstöra relationen.', 'Der Chef ist ein alter Freund, und du willst die Beziehung nicht beschädigen.', 'The manager is an old friend, and you don’t want to damage the relationship.'),
          cat: 'otillborlig',
          why: l('Relation före princip. Opartiskhet tar ställning oavsett relation.', 'Beziehung vor Prinzip. Unparteilichkeit bezieht Stellung unabhängig von Beziehungen.', 'Relationship before principle. Impartiality takes a position regardless of relationships.'),
        },
        {
          text: l('Regelverket kräver en kontroll som tar tid.', 'Das Regelwerk verlangt eine Kontrolle, die Zeit kostet.', 'The rules require a check that takes time.'),
          cat: 'legitim',
          why: l('Ett Skall-krav är inte förhandlingsbart – och ska styra beslutet.', 'Eine Muss-Anforderung ist nicht verhandelbar – und soll die Entscheidung steuern.', 'A Must requirement is not negotiable – and should steer the decision.'),
        },
      ],
      src: { book: 'steg2', ch: 'Kap. 5–6; folder' },
    },
    {
      slug: 'befalssvar',
      type: 'objection',
      min: 6,
      title: l('Lugnt, kort, utan försvar', 'Ruhig, kurz, ohne Verteidigung', 'Calm, short, without defence'),
      intro: l(
        'Den som är opartisk blir ifrågasatt. Öva på att svara utan att försvara dig – du korrigerar riktning, du vinner inga poäng.',
        'Wer unparteiisch ist, wird infrage gestellt. Übe, zu antworten, ohne dich zu verteidigen – du korrigierst die Richtung, du sammelst keine Punkte.',
        'Whoever is impartial will be questioned. Practise answering without defending yourself – you correct the direction, you do not score points.',
      ),
      items: [
        {
          objection: l('Du är väldigt kategorisk.', 'Du bist sehr kategorisch.', 'You are very categorical.'),
          answer: l('Ja. För konsekvenser är kategoriska.', 'Ja. Denn Konsequenzen sind kategorisch.', 'Yes. Because consequences are categorical.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 12' },
        },
        {
          objection: l('Men alla gör ju sitt bästa.', 'Aber alle geben doch ihr Bestes.', 'But everyone is doing their best.'),
          answer: l('Bästa är en intention. Utförande är ett resultat.', 'Das Beste ist eine Absicht. Ausführung ist ein Ergebnis.', 'Best is an intention. Execution is a result.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 11' },
        },
        {
          objection: l('Det där är väl ändå en åsikt?', 'Das ist doch nur eine Meinung?', 'Surely that’s just an opinion?'),
          answer: l('Nej. Det är en funktionsbeskrivning. Om du ändrar beteendet ändras utfallet.', 'Nein. Es ist eine Funktionsbeschreibung. Wenn du das Verhalten änderst, ändert sich das Ergebnis.', 'No. It is a description of function. If you change the behaviour, the outcome changes.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 1' },
        },
      ],
    },
    {
      slug: 'provbar',
      type: 'selfassess',
      mode: 'module',
      min: 5,
      title: l('Var är jag inte prövbar?', 'Wo bin ich nicht überprüfbar?', 'Where am I not open to scrutiny?'),
      intro: l(
        'Fem påståenden. Svara för dig själv – ingen annan ser det.',
        'Fünf Aussagen. Antworte für dich – niemand sonst sieht es.',
        'Five statements. Answer for yourself – nobody else sees it.',
      ),
      items: [
        l('Mina beslut kan granskas av någon annan i efterhand.', 'Meine Entscheidungen können im Nachhinein von jemand anderem geprüft werden.', 'My decisions can be examined by someone else afterwards.'),
        l('Jag dokumenterar varför jag beslutar – inte bara vad.', 'Ich dokumentiere, warum ich entscheide – nicht nur was.', 'I document why I decide – not just what.'),
        l('Jag tillämpar samma regel oavsett vem det gäller.', 'Ich wende dieselbe Regel an, egal wen es betrifft.', 'I apply the same rule regardless of who it concerns.'),
        l('Jag står kvar när ett korrekt beslut blir impopulärt.', 'Ich bleibe dabei, wenn eine richtige Entscheidung unpopulär wird.', 'I stand firm when a correct decision becomes unpopular.'),
        l('Jag ändrar beslut när fakta ändras – inte när trycket ökar.', 'Ich ändere Entscheidungen, wenn sich die Fakten ändern – nicht, wenn der Druck steigt.', 'I change decisions when the facts change – not when the pressure rises.'),
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Snäll eller rättvis?', 'Nett oder gerecht?', 'Kind or fair?'),
      prompts: [
        l('Var har jag varit snäll i stället för rättvis?', 'Wo war ich nett statt gerecht?', 'Where have I been kind instead of fair?'),
        l('Vem har jag svårt att säga nej till – och varför?', 'Wem kann ich schwer Nein sagen – und warum?', 'Whom do I find it hard to say no to – and why?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”OVÄLD betyder att hålla sig neutral.” Stämmer det?', '„OVÄLD heißt, neutral zu bleiben.“ Stimmt das?', '“OVÄLD means staying neutral.” Is that true?'),
          options: [
            { text: l('Ja – den som är OVÄLD tar inte ställning.', 'Ja – wer OVÄLD ist, bezieht keine Stellung.', 'Yes – whoever is OVÄLD takes no position.'), ok: false, fb: l('Neutralitet undviker konflikt. OVÄLD bygger på opartiskhet: att ta ställning utifrån princip.', 'Neutralität weicht dem Konflikt aus. OVÄLD beruht auf Unparteilichkeit: Stellung beziehen aus Prinzip.', 'Neutrality avoids conflict. OVÄLD rests on impartiality: taking a position on principle.') },
            { text: l('Nej – OVÄLD är opartiskhet: att ta ställning utifrån princip, oavsett relation.', 'Nein – OVÄLD ist Unparteilichkeit: Stellung beziehen aus Prinzip, unabhängig von Beziehungen.', 'No – OVÄLD is impartiality: taking a position on principle, regardless of relationships.'), ok: true, fb: l('Ja. Opartiskhet är inte meningslöshet.', 'Ja. Unparteilichkeit ist nicht Meinungslosigkeit.', 'Yes. Impartiality is not having no view.') },
          ],
          misconception: l('Att opartisk betyder utan åsikt.', 'Dass unparteiisch ohne Meinung bedeutet.', 'That impartial means without a view.'),
        },
        {
          q: l('Vad gör en person prövbar?', 'Was macht eine Person überprüfbar?', 'What makes a person open to scrutiny?'),
          options: [
            { text: l('Att hon är populär och har gott rykte.', 'Dass sie beliebt ist und einen guten Ruf hat.', 'That she is popular and has a good reputation.'), ok: false, fb: l('Popularitet säger inget om prövbarhet.', 'Beliebtheit sagt nichts über Überprüfbarkeit.', 'Popularity says nothing about scrutiny.') },
            { text: l('Att beslut kan granskas, argument testas och handlingar följas upp.', 'Dass Entscheidungen geprüft, Argumente getestet und Handlungen nachverfolgt werden können.', 'That decisions can be examined, arguments tested and actions followed up.'), ok: true, fb: l('Ja. Den som undviker insyn undviker ansvar.', 'Ja. Wer Einblick vermeidet, vermeidet Verantwortung.', 'Yes. Whoever avoids scrutiny avoids responsibility.') },
            { text: l('Att hon har rätt i debatter.', 'Dass sie in Debatten recht behält.', 'That she wins debates.'), ok: false, fb: l('Prövbarhet handlar om insyn, inte om att vinna.', 'Überprüfbarkeit hat mit Einblick zu tun, nicht mit Gewinnen.', 'Scrutiny is about transparency, not winning.') },
          ],
          misconception: l('Att prövbarhet handlar om rykte eller retorik.', 'Dass Überprüfbarkeit mit Ruf oder Rhetorik zu tun hat.', 'That scrutiny is about reputation or rhetoric.'),
        },
        {
          q: l('Varför kan snällhet vara orättvis?', 'Warum kann Freundlichkeit ungerecht sein?', 'Why can kindness be unfair?'),
          options: [
            { text: l('För att snälla människor är svaga.', 'Weil nette Menschen schwach sind.', 'Because kind people are weak.'), ok: false, fb: l('Boken dömer inte människor. Den beskriver vad som händer med regeln.', 'Das Buch verurteilt keine Menschen. Es beschreibt, was mit der Regel passiert.', 'The book does not judge people. It describes what happens to the rule.') },
            { text: l('För att den som låter en regel glida drabbar dem som följer den – och helheten.', 'Weil, wer eine Regel schleifen lässt, die trifft, die sie befolgen – und das Ganze.', 'Because letting a rule slide hurts those who follow it – and the whole.'), ok: true, fb: l('Ja. Det som upplevs som vänligt i stunden kan bli orättvist över tid.', 'Ja. Was im Moment freundlich wirkt, kann über die Zeit ungerecht werden.', 'Yes. What feels kind in the moment can become unfair over time.') },
          ],
          misconception: l('Att vänlighet alltid är rättvis.', 'Dass Freundlichkeit immer gerecht ist.', 'That kindness is always fair.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Dokumentera ett beslut så att någon annan kan pröva det: vad du beslutade, varför, och vem som bär det.',
        'Dokumentiere eine Entscheidung so, dass jemand anderes sie prüfen kann: was du entschieden hast, warum, und wer sie trägt.',
        'Document one decision so that someone else can examine it: what you decided, why, and who carries it.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 4 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 4 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 4, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Säg kommentaren högt: ”Du kunde varit lite smidigare.” Paus. Fråga: ”När sa någon det till er senast – och vad menade de egentligen?”',
      'Sprich den Kommentar laut aus: „Du hättest etwas geschmeidiger sein können.“ Pause. Frage: „Wann hat jemand das zuletzt zu euch gesagt – und was war eigentlich gemeint?“',
      'Say the comment out loud: “You could have been a bit more flexible.” Pause. Ask: “When did someone last say that to you – and what did they actually mean?”',
    ),
    questions: [
      l('Var i er organisation varierar principer med person?', 'Wo in eurer Organisation variieren Prinzipien je nach Person?', 'Where in your organisation do principles vary with the person?'),
      l('Vilka beslut hos er skulle inte tåla insyn?', 'Welche Entscheidungen bei euch würden keinen Einblick vertragen?', 'Which decisions in your organisation could not stand scrutiny?'),
      l('Vad kostar opartiskhet hos er – och vem betalar när den saknas?', 'Was kostet Unparteilichkeit bei euch – und wer bezahlt, wenn sie fehlt?', 'What does impartiality cost in your organisation – and who pays when it is missing?'),
    ],
    note: l(
      'OVÄLD och WASTA beskriver beteenden – aldrig kulturer eller ursprung. Bryt diskussioner som glider dit.',
      'OVÄLD und WASTA beschreiben Verhalten – nie Kulturen oder Herkunft. Brich Diskussionen ab, die dorthin abgleiten.',
      'OVÄLD and WASTA describe behaviour – never cultures or origins. Cut off discussions that drift there.',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
