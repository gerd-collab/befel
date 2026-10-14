// M01 · Ta befäl över dig själv
// Sources: Steg 1 Del 0 (0.1, 0.2), Kap. 19; Steg 2 Kap. 3; Steg 3 Del I Förord.

import { l, type Module } from '../types';

export const m01: Module = {
  id: 'm01',
  num: 1,
  part: 1,
  title: l('Ta befäl över dig själv', 'Befehl über dich selbst übernehmen', 'Take command of yourself'),
  teaser: l(
    'Grunden för allt ledarskap. Självdisciplin, självinsikt och självrespekt.',
    'Die Grundlage jeder Führung. Selbstdisziplin, Selbsterkenntnis und Selbstachtung.',
    'The foundation of all leadership. Self-discipline, self-knowledge and self-respect.',
  ),
  goal: l(
    'Du skiljer mellan att tala och att debattera, känner igen ord som inte längre binder till handling och pekar ut ett område där du själv tar befäl.',
    'Du unterscheidest zwischen Sprechen und Debattieren, erkennst Worte, die nicht mehr an Handeln binden, und benennst einen Bereich, in dem du selbst Befehl übernimmst.',
    'You can tell speaking from debating, recognise words that no longer bind to action, and name one area where you take command yourself.',
  ),
  keyTerms: [
    l('Ta befäl', 'Befehl übernehmen', 'Take command'),
    l('Tala eller debattera', 'Sprechen oder debattieren', 'Speaking or debating'),
    l('Ord som binder', 'Worte, die binden', 'Words that bind'),
    l('Inversion', 'Inversion', 'Inversion'),
    l('Den inre utnämningen', 'Die innere Ernennung', 'The inner appointment'),
  ],
  sources: [
    { book: 'steg1', ch: 'Del 0, 0.1 När ord slutar betyda något' },
    { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
    { book: 'steg1', ch: 'Kap. 19 Det inre befälet' },
    { book: 'steg2', ch: 'Kap. 3 Utse dig själv' },
    { book: 'steg3-1', ch: 'Förord' },
  ],
  image: 'compass-deck',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('När ord slutar betyda något', 'Wenn Worte nichts mehr bedeuten', 'When words stop meaning anything'),
      slides: [
        {
          heading: l('Någon som vet: det är jag som bär detta', 'Jemand, der weiß: Ich trage das', 'Someone who knows: I carry this'),
          body: [
            l(
              'Organisationer skriver ansvar i policydokument. Ledningar talar om ansvar i möten. Men när något går fel har alla varit delaktiga i beslutet – och ingen tycks bära ansvaret för resultatet.',
              'Organisationen schreiben Verantwortung in Richtlinien. Leitungen sprechen in Sitzungen über Verantwortung. Doch wenn etwas schiefgeht, waren alle an der Entscheidung beteiligt – und niemand scheint die Verantwortung für das Ergebnis zu tragen.',
              'Organisations write responsibility into policy documents. Management talks about responsibility in meetings. But when something goes wrong, everyone took part in the decision – and nobody seems to carry the responsibility for the result.',
            ),
            l(
              'Inom sjöfarten är principen självklar. Ett fartyg kan ha många experter, tekniker och rådgivare. Men ytterst finns alltid en person som bär ansvaret: befälhavaren.',
              'In der Seefahrt ist das Prinzip selbstverständlich. Ein Schiff kann viele Experten, Techniker und Berater haben. Doch letztlich gibt es immer eine Person, die die Verantwortung trägt: den Kapitän.',
              'At sea the principle is obvious. A ship may have many experts, technicians and advisers. But in the end there is always one person who carries the responsibility: the master.',
            ),
          ],
          quote: {
            sv: 'Ansvar är inte något man säger. Det är något man bär.',
            de: 'Verantwortung ist nichts, was man sagt. Sie ist etwas, das man trägt.',
            en: 'Responsibility is not something you say. It is something you carry.',
            src: { book: 'steg1', ch: 'Inledning' },
          },
        },
        {
          heading: l('Att tala eller att debattera', 'Sprechen oder debattieren', 'Speaking or debating'),
          body: [
            l(
              'Vi lever i en tid där det mesta debatteras, men mycket lite talas om. Skillnaden är avgörande.',
              'Wir leben in einer Zeit, in der das meiste debattiert, aber wenig wirklich besprochen wird. Der Unterschied ist entscheidend.',
              'We live in a time when most things are debated, but very little is actually spoken about. The difference is decisive.',
            ),
            l(
              'Den som talar tar ansvar för sina ord, även när de är obekväma. Den som debatterar söker bifall, även när orden är tomma.',
              'Wer spricht, übernimmt Verantwortung für seine Worte, auch wenn sie unbequem sind. Wer debattiert, sucht Zustimmung, auch wenn die Worte leer sind.',
              'Whoever speaks takes responsibility for their words, even when they are uncomfortable. Whoever debates seeks applause, even when the words are empty.',
            ),
          ],
          quote: {
            sv: 'Att tala är att redovisa verklighet. Att debattera är att försvara position.',
            de: 'Sprechen heißt, Wirklichkeit offenzulegen. Debattieren heißt, eine Position zu verteidigen.',
            en: 'To speak is to account for reality. To debate is to defend a position.',
            src: { book: 'steg1', ch: 'Del 0, 0.1 När ord slutar betyda något' },
          },
        },
        {
          heading: l('Ord som inte längre binder', 'Worte, die nicht mehr binden', 'Words that no longer bind'),
          body: [
            l(
              'När ord som jämlikhet, solidaritet, trygghet och hållbarhet upprepas utan koppling till vad som faktiskt utförs, uppstår en spricka – inte i språket, utan mellan språket och verkligheten. Där börjar system glida isär.',
              'Wenn Worte wie Gleichheit, Solidarität, Sicherheit und Nachhaltigkeit wiederholt werden, ohne Bezug zu dem, was tatsächlich getan wird, entsteht ein Riss – nicht in der Sprache, sondern zwischen Sprache und Wirklichkeit. Dort beginnen Systeme auseinanderzudriften.',
              'When words like equality, solidarity, security and sustainability are repeated without any link to what is actually done, a crack appears – not in the language, but between language and reality. That is where systems begin to drift apart.',
            ),
          ],
          list: [
            l('Fakta blir åsikter.', 'Fakten werden zu Meinungen.', 'Facts become opinions.'),
            l('Ansvar blir kränkning.', 'Verantwortung wird zur Kränkung.', 'Responsibility becomes offence.'),
            l('Ledarskap ersätts av kommunikation.', 'Führung wird durch Kommunikation ersetzt.', 'Leadership is replaced by communication.'),
            l('Styrning ersätts av samtal om styrning.', 'Steuerung wird durch Gespräche über Steuerung ersetzt.', 'Steering is replaced by talk about steering.'),
          ],
          quote: {
            sv: 'Detta är inte en moralisk dom. Det är en funktionsbeskrivning.',
            de: 'Das ist kein moralisches Urteil. Es ist eine Funktionsbeschreibung.',
            en: 'This is not a moral judgement. It is a description of function.',
            src: { book: 'steg1', ch: 'Del 0, 0.1 När ord slutar betyda något' },
          },
        },
        {
          heading: l('Det inre befälet', 'Der innere Befehl', 'The inner command'),
          body: [
            l(
              'Att ta befäl börjar aldrig utåt. Det börjar inåt. Det handlar inte om att kontrollera allt, utan om att inte bli styrd av det som är kortsiktigt, bekvämt eller populärt.',
              'Befehl zu übernehmen beginnt nie außen. Es beginnt innen. Es geht nicht darum, alles zu kontrollieren, sondern sich nicht von dem steuern zu lassen, was kurzfristig, bequem oder populär ist.',
              'Taking command never starts outwards. It starts within. It is not about controlling everything, but about not being steered by what is short-term, convenient or popular.',
            ),
            l(
              'Frihet är inte frånvaro av begränsningar. Frihet är förmågan att välja sina begränsningar medvetet. Det inre befälet visar sig i vad man gör när ingen ser.',
              'Freiheit ist nicht die Abwesenheit von Grenzen. Freiheit ist die Fähigkeit, die eigenen Grenzen bewusst zu wählen. Der innere Befehl zeigt sich darin, was man tut, wenn niemand hinsieht.',
              'Freedom is not the absence of limits. Freedom is the ability to choose your limits deliberately. The inner command shows in what you do when nobody is watching.',
            ),
          ],
          quote: {
            sv: 'Ingen kan ge dig detta befäl. Ingen kan ta det ifrån dig. Det är alltid ditt.',
            de: 'Niemand kann dir diesen Befehl geben. Niemand kann ihn dir nehmen. Er ist immer deiner.',
            en: 'Nobody can give you this command. Nobody can take it from you. It is always yours.',
            src: { book: 'steg1', ch: 'Kap. 19 Det inre befälet' },
          },
        },
        {
          heading: l('När ingen är utsedd', 'Wenn niemand benannt ist', 'When nobody is appointed'),
          image: 'cargo-sevensky',
          body: [
            l(
              'Fartyget låg för ankar i väntan på klartecken. Det skulle bara göras sjöklart. ”Är det klart?” Det blev tyst. Maskin trodde att däck hade det. Däck trodde att maskin hade det. Land trodde att man hanterade det ombord. Lotsen kom – och Torbjörn fick själv gå ut med en matros och göra sjöklart.',
              'Das Schiff lag vor Anker und wartete auf Freigabe. Es musste nur seeklar gemacht werden. „Ist alles klar?“ Stille. Die Maschine dachte, das Deck habe es erledigt. Das Deck dachte, die Maschine habe es erledigt. Das Land dachte, an Bord kümmere man sich. Der Lotse kam – und Torbjörn musste selbst mit einem Matrosen hinaus und das Schiff seeklar machen.',
              'The ship lay at anchor waiting for clearance. It only had to be made ready for sea. “Is it done?” Silence. The engine room thought deck had it. Deck thought the engine room had it. The shore office thought it was handled on board. The pilot arrived – and Torbjörn had to go out himself with a deckhand and make the ship ready.',
            ),
            l(
              'Du väntar på att någon ska säga: ”Detta är ditt ansvar.” Det kommer inte att ske. Den inre utnämningen är frivillig – och just därför är den legitim.',
              'Du wartest darauf, dass jemand sagt: „Das ist deine Verantwortung.“ Das wird nicht geschehen. Die innere Ernennung ist freiwillig – und gerade deshalb legitim.',
              'You are waiting for someone to say: “This is your responsibility.” It will not happen. The inner appointment is voluntary – and that is exactly why it is legitimate.',
            ),
          ],
          quote: {
            sv: 'Ansvar kan vara kollektivt i känsla. Det kan aldrig vara kollektivt i funktion.',
            de: 'Verantwortung kann im Gefühl kollektiv sein. In der Funktion kann sie es nie sein.',
            en: 'Responsibility can be collective in feeling. It can never be collective in function.',
            src: { book: 'steg2', ch: 'Kap. 3 Utse dig själv, 3.1' },
          },
        },
      ],
      cards: [
        {
          term: l('Ta befäl', 'Befehl übernehmen', 'Take command'),
          text: l('Bära ansvaret där det annars faller mellan människor, roller eller system.', 'Die Verantwortung tragen, wo sie sonst zwischen Menschen, Rollen oder Systemen verloren geht.', 'Carry the responsibility where it would otherwise fall between people, roles or systems.'),
        },
        {
          term: l('Tala', 'Sprechen', 'Speaking'),
          text: l('Redovisa verklighet och stå för orden.', 'Wirklichkeit offenlegen und für die Worte einstehen.', 'Account for reality and stand by your words.'),
        },
        {
          term: l('Debattera', 'Debattieren', 'Debating'),
          text: l('Försvara position och söka bifall.', 'Eine Position verteidigen und Zustimmung suchen.', 'Defend a position and seek applause.'),
        },
        {
          term: l('Ord som binder', 'Worte, die binden', 'Words that bind'),
          text: l('Ord som säger vem som gör vad – och vem som bär följden.', 'Worte, die sagen, wer was tut – und wer die Folgen trägt.', 'Words that say who does what – and who carries the consequence.'),
        },
        {
          term: l('Den inre utnämningen', 'Die innere Ernennung', 'The inner appointment'),
          text: l('”Detta ligger inom min räckvidd.” Då har du tagit befäl.', '„Das liegt in meiner Reichweite.“ Dann hast du Befehl übernommen.', '“This is within my reach.” Then you have taken command.'),
        },
      ],
    },
    {
      slug: 'ord-som-binder',
      type: 'classify',
      min: 6,
      title: l('Binder ordet – eller förskönar det?', 'Bindet das Wort – oder beschönigt es?', 'Does the word bind – or embellish?'),
      intro: l(
        'Sortera meningarna. Ett ord binder när det går att se vem som gör vad, när – och vem som bär följden.',
        'Ordne die Sätze zu. Ein Wort bindet, wenn erkennbar ist, wer was wann tut – und wer die Folgen trägt.',
        'Sort the sentences. A word binds when you can see who does what, when – and who carries the consequence.',
      ),
      categories: [
        { id: 'binder', label: l('Binder till handling', 'Bindet an Handeln', 'Binds to action'), hint: l('vem, vad, när', 'wer, was, wann', 'who, what, when') },
        { id: 'forskonar', label: l('Förskönar', 'Beschönigt', 'Embellishes'), hint: l('värdeord utan bärare', 'Wertwort ohne Träger', 'value word without a bearer') },
      ],
      items: [
        {
          text: l('”Vi tar ett gemensamt ansvar för tryggheten på arbetsplatsen.”', '„Wir übernehmen gemeinsam Verantwortung für die Sicherheit am Arbeitsplatz.“', '“We take shared responsibility for safety at the workplace.”'),
          cat: 'forskonar',
          why: l('”Gemensamt” utan namn: ingen bär det när det gäller.', '„Gemeinsam“ ohne Namen: Wenn es darauf ankommt, trägt es niemand.', '“Shared” without a name: when it matters, nobody carries it.'),
        },
        {
          text: l('”Skyddsombudet Anna går ronden varje måndag och rapporterar avvikelser till platschefen samma dag.”', '„Sicherheitsbeauftragte Anna macht jeden Montag den Rundgang und meldet Abweichungen noch am selben Tag dem Bauleiter.“', '“Safety representative Anna does the round every Monday and reports deviations to the site manager the same day.”'),
          cat: 'binder',
          why: l('Namn, handling, tidpunkt och mottagare. Ordet trygghet behövs inte ens.', 'Name, Handlung, Zeitpunkt und Empfänger. Das Wort Sicherheit braucht es gar nicht.', 'Name, action, time and recipient. The word safety is not even needed.'),
        },
        {
          text: l('”Hållbarhet genomsyrar allt vi gör.”', '„Nachhaltigkeit durchdringt alles, was wir tun.“', '“Sustainability runs through everything we do.”'),
          cat: 'forskonar',
          why: l('Ett värdeord som inte pekar ut någon handling eller någon som utför den.', 'Ein Wertwort, das weder eine Handlung noch jemanden benennt, der sie ausführt.', 'A value word that names neither an action nor anyone who carries it out.'),
        },
        {
          text: l('”Vi byter till eldrivna truckar senast i juni. Inköpschefen ansvarar för upphandlingen.”', '„Wir stellen bis spätestens Juni auf elektrische Stapler um. Der Einkaufsleiter verantwortet die Beschaffung.“', '“We switch to electric forklifts by June at the latest. The purchasing manager is responsible for procurement.”'),
          cat: 'binder',
          why: l('Utförande, datum och ansvarspunkt.', 'Ausführung, Datum und Verantwortungspunkt.', 'Execution, date and responsibility point.'),
        },
        {
          text: l('”Solidaritet är en självklar del av vår kultur.”', '„Solidarität ist ein selbstverständlicher Teil unserer Kultur.“', '“Solidarity is a natural part of our culture.”'),
          cat: 'forskonar',
          why: l('Boken: solidaritet kan inte krävas, bara visas. Den handlar om att dela bördor – inte om att deklarera.', 'Das Buch: Solidarität lässt sich nicht fordern, nur zeigen. Sie heißt, Lasten zu teilen – nicht, sie zu erklären.', 'The book: solidarity cannot be demanded, only shown. It is about sharing burdens – not declaring them.'),
        },
        {
          text: l('”När någon är sjuk delar vi upp passen mellan oss tre. Jag tar torsdagen.”', '„Wenn jemand krank ist, teilen wir die Schichten unter uns dreien auf. Ich übernehme den Donnerstag.“', '“When someone is ill, the three of us split the shifts. I take Thursday.”'),
          cat: 'binder',
          why: l('Solidaritet i bokens mening: en delad börda, med ett namn på varje del.', 'Solidarität im Sinne des Buchs: eine geteilte Last, mit einem Namen für jeden Teil.', 'Solidarity in the book’s sense: a shared burden, with a name on every part.'),
        },
      ],
      src: { book: 'steg1', ch: 'Del 0, 0.1; Kap. 3 Jämlikhet och solidaritet' },
    },
    {
      slug: 'inversion',
      type: 'inversion',
      min: 8,
      title: l('Barnlogik och vuxenlogik', 'Kinderlogik und Erwachsenenlogik', 'Child logic and adult logic'),
      intro: l(
        'Inversion är inte en åsikt. Det är en felsökningsmetod: när ett begrepp inte överlever att vändas upp och ner, är det ofta byggt för retorik, inte för funktion.',
        'Inversion ist keine Meinung. Sie ist eine Methode der Fehlersuche: Wenn ein Begriff es nicht übersteht, umgedreht zu werden, ist er oft für Rhetorik gebaut, nicht für Funktion.',
        'Inversion is not an opinion. It is a fault-finding method: when a concept does not survive being turned upside down, it was often built for rhetoric, not for function.',
      ),
      items: [
        {
          habit: l('Först behov – sedan handling.', 'Erst Bedürfnis – dann Handlung.', 'First need – then action.'),
          options: [
            l('Först handling – sedan fler behov.', 'Erst Handlung – dann mehr Bedürfnisse.', 'First action – then more needs.'),
            l('Först ansvar – därefter tillfredsställs behov.', 'Erst Verantwortung – danach werden Bedürfnisse erfüllt.', 'First responsibility – then needs are met.'),
            l('Behov och handling är lika viktiga.', 'Bedürfnis und Handlung sind gleich wichtig.', 'Need and action are equally important.'),
          ],
          inverted: 1,
          pattern: l('Behov → ansvar. ”Den första är barnlogik. Den andra är vuxen.”', 'Bedürfnis → Verantwortung. „Das Erste ist Kinderlogik. Das Zweite ist erwachsen.“', 'Need → responsibility. “The first is child logic. The second is adult.”'),
          src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
        },
        {
          habit: l('Mina rättigheter först.', 'Zuerst meine Rechte.', 'My rights first.'),
          options: [
            l('Mina skyldigheter först – rättigheterna följer av att jag fullgör dem.', 'Zuerst meine Pflichten – die Rechte folgen daraus, dass ich sie erfülle.', 'My duties first – the rights follow from my fulfilling them.'),
            l('Andras rättigheter först.', 'Zuerst die Rechte der anderen.', 'Other people’s rights first.'),
            l('Rättigheter och skyldigheter förhandlas fram.', 'Rechte und Pflichten werden ausgehandelt.', 'Rights and duties are negotiated.'),
          ],
          inverted: 0,
          pattern: l('Rättigheter → skyldigheter. ”Rättsstaten bygger inte på krav, utan på tillämpning.”', 'Rechte → Pflichten. „Der Rechtsstaat beruht nicht auf Forderungen, sondern auf Anwendung.“', 'Rights → duties. “The rule of law rests not on demands, but on application.”'),
          src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
        },
        {
          habit: l('Kunskap är kompetens.', 'Wissen ist Kompetenz.', 'Knowledge is competence.'),
          options: [
            l('Kompetens är fler kurser.', 'Kompetenz sind mehr Kurse.', 'Competence is more courses.'),
            l('Kunskap är viktigare än kompetens.', 'Wissen ist wichtiger als Kompetenz.', 'Knowledge matters more than competence.'),
            l('Kompetens är visad förmåga under ansvar, över tid.', 'Kompetenz ist gezeigte Fähigkeit unter Verantwortung, über die Zeit.', 'Competence is demonstrated ability under responsibility, over time.'),
          ],
          inverted: 2,
          pattern: l('Kunskap → visad förmåga. ”Allt annat är teori.”', 'Wissen → gezeigte Fähigkeit. „Alles andere ist Theorie.“', 'Knowledge → demonstrated ability. “Everything else is theory.”'),
          src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
        },
        {
          habit: l('Jag behöver mer stöd för att kunna ta ansvar.', 'Ich brauche mehr Unterstützung, um Verantwortung übernehmen zu können.', 'I need more support before I can take responsibility.'),
          options: [
            l('Jag tar ansvar – och då blir det tydligt vilket stöd som behövs.', 'Ich übernehme Verantwortung – und dann wird klar, welche Unterstützung nötig ist.', 'I take responsibility – and then it becomes clear what support is needed.'),
            l('Jag väntar tills stödet finns.', 'Ich warte, bis die Unterstützung da ist.', 'I wait until the support is there.'),
            l('Jag tar inget ansvar utan stöd.', 'Ohne Unterstützung übernehme ich keine Verantwortung.', 'I take no responsibility without support.'),
          ],
          inverted: 0,
          pattern: l(
            'Samma vändning som behov → ansvar, tillämpad på en vardagsmening. Fråga: om jag väntar – vem bär då ansvaret under tiden?',
            'Dieselbe Umkehr wie Bedürfnis → Verantwortung, angewandt auf einen Alltagssatz. Frage: Wenn ich warte – wer trägt dann solange die Verantwortung?',
            'The same inversion as need → responsibility, applied to an everyday sentence. Ask: if I wait – who carries the responsibility in the meantime?',
          ),
          src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
        },
      ],
      ownPrompt: l(
        'Ta ett problem du själv bär på just nu. Skriv det så som du brukar säga det – och vänd det sedan: från behov till ansvar, från rättighet till skyldighet.',
        'Nimm ein Problem, das du gerade selbst mit dir trägst. Schreib es so auf, wie du es meistens sagst – und dreh es dann um: vom Bedürfnis zur Verantwortung, vom Recht zur Pflicht.',
        'Take a problem you are carrying right now. Write it the way you usually say it – then turn it around: from need to responsibility, from right to duty.',
      ),
    },
    {
      slug: 'hallen',
      type: 'scenario',
      min: 8,
      title: l('Hallen hemma', 'Im Flur zu Hause', 'In the hallway at home'),
      source: { book: 'steg3-1', ch: 'Förord' },
      intro: l(
        'Torbjörn har tjuvrökt några gånger i högstadiet. Hans mor är lärarinna i mellanstadiet, ”av den gamla stammen” – pedagog i betydelsen ansvar. En dag tar hon ut honom i hallen hemma, stoppar ner handen i fickan på hans jacka och drar fram ett paket cigaretter. Han tror att hon ska bli arg. Du står i hennes ställe.',
        'Torbjörn hat in der Mittelstufe ein paar Mal heimlich geraucht. Seine Mutter ist Grundschullehrerin, „vom alten Schlag“ – Pädagogin im Sinne von Verantwortung. Eines Tages nimmt sie ihn mit in den Flur, greift in die Tasche seiner Jacke und zieht eine Packung Zigaretten heraus. Er denkt, sie wird wütend. Du stehst an ihrer Stelle.',
        'Torbjörn has smoked in secret a few times at secondary school. His mother is a primary school teacher, “of the old school” – a teacher in the sense of responsibility. One day she takes him into the hallway at home, puts her hand into his jacket pocket and pulls out a packet of cigarettes. He expects her to be angry. You are in her place.',
      ),
      nodes: [
        {
          situation: l('Paketet ligger i din hand. Han väntar på utbrottet.', 'Die Packung liegt in deiner Hand. Er wartet auf den Ausbruch.', 'The packet is in your hand. He is waiting for the outburst.'),
          options: [
            {
              label: l('Bli arg och förbjuda honom att röka.', 'Wütend werden und ihm das Rauchen verbieten.', 'Get angry and forbid him to smoke.'),
              c: {
                orsak: l('Ett förbud mot ett beteende du inte kan övervaka.', 'Ein Verbot für ein Verhalten, das du nicht überwachen kannst.', 'A ban on behaviour you cannot supervise.'),
                verkan: l('Han lär sig att gömma sig bättre.', 'Er lernt, sich besser zu verstecken.', 'He learns to hide better.'),
                konsekvens: l('Gränsen gäller bara när du ser. Du har tagit befäl över hans liv – och måste nu kontrollera det.', 'Die Grenze gilt nur, solange du hinsiehst. Du hast Befehl über sein Leben übernommen – und musst es jetzt kontrollieren.', 'The boundary holds only while you watch. You have taken command of his life – and must now control it.'),
                bearer: l('Du – som vakt.', 'Du – als Aufpasserin.', 'You – as the guard.'),
              },
            },
            {
              label: l('Låtsas att du inte sett något och lägga undan paketet.', 'So tun, als hättest du nichts gesehen, und die Packung weglegen.', 'Pretend you saw nothing and put the packet away.'),
              c: {
                orsak: l('Ingen gräns sätts.', 'Es wird keine Grenze gesetzt.', 'No boundary is set.'),
                verkan: l('Han lär sig att ingen reagerar.', 'Er lernt, dass niemand reagiert.', 'He learns that nobody reacts.'),
                konsekvens: l('Ansvaret lämnas till någon annan – eller till slumpen.', 'Die Verantwortung bleibt bei jemand anderem – oder beim Zufall.', 'The responsibility is left to someone else – or to chance.'),
                bearer: l('Fadern, vars cigaretter tar slut – och senare sonen själv.', 'Der Vater, dessen Zigaretten verschwinden – und später der Sohn selbst.', 'The father, whose cigarettes go missing – and later the son himself.'),
              },
            },
            {
              label: l('Säga lugnt: ”Jag kan inte hindra dig från att röka. Men du stjäl inte av din fars cigaretter.”', 'Ruhig sagen: „Ich kann dich nicht vom Rauchen abhalten. Aber du stiehlst nicht die Zigaretten deines Vaters.“', 'Say calmly: “I cannot stop you from smoking. But you do not steal your father’s cigarettes.”'),
              book: true,
              c: {
                orsak: l('En gräns för ansvaret i handlingen – inte för hela hans liv.', 'Eine Grenze für die Verantwortung in der Handlung – nicht für sein ganzes Leben.', 'A boundary for the responsibility in the act – not for his whole life.'),
                verkan: l('Han får bära konsekvensen av sitt eget val.', 'Er muss die Folgen seiner eigenen Wahl tragen.', 'He has to carry the consequence of his own choice.'),
                konsekvens: l('Ansvaret hamnar där det hör hemma.', 'Die Verantwortung landet dort, wo sie hingehört.', 'The responsibility lands where it belongs.'),
                bearer: l('Sonen.', 'Der Sohn.', 'The son.'),
              },
            },
          ],
        },
        {
          situation: l('Vad är kärnan i gränsen du sätter?', 'Was ist der Kern der Grenze, die du setzt?', 'What is the core of the boundary you set?'),
          options: [
            {
              label: l('Rökningen – den är skadlig.', 'Das Rauchen – es ist schädlich.', 'The smoking – it is harmful.'),
              c: {
                orsak: l('Gränsen gäller ett beteende i största allmänhet.', 'Die Grenze betrifft ein Verhalten ganz allgemein.', 'The boundary concerns a behaviour in general.'),
                verkan: l('Den blir en kamp om hans liv.', 'Sie wird zum Kampf um sein Leben.', 'It becomes a fight about his life.'),
                konsekvens: l('Gränsen kan inte bäras av dig – han kan alltid röka någon annanstans.', 'Du kannst die Grenze nicht tragen – er kann immer woanders rauchen.', 'You cannot carry the boundary – he can always smoke somewhere else.'),
                bearer: l('Ni båda, i en konflikt utan slut.', 'Ihr beide, in einem Konflikt ohne Ende.', 'Both of you, in a conflict without end.'),
              },
            },
            {
              label: l('Stölden – att ta det som inte är hans.', 'Der Diebstahl – zu nehmen, was ihm nicht gehört.', 'The theft – taking what is not his.'),
              book: true,
              c: {
                orsak: l('Gränsen gäller ansvaret i handlingen.', 'Die Grenze betrifft die Verantwortung in der Handlung.', 'The boundary concerns the responsibility in the act.'),
                verkan: l('Den går att förstå och att hålla.', 'Sie ist verständlich und haltbar.', 'It can be understood and kept.'),
                konsekvens: l('Hon tar befäl över situationen – inte över hans liv.', 'Sie übernimmt Befehl über die Situation – nicht über sein Leben.', 'She takes command of the situation – not of his life.'),
                bearer: l('Han – för sitt val.', 'Er – für seine Wahl.', 'He – for his choice.'),
              },
            },
            {
              label: l('Att han har ljugit för dig.', 'Dass er dich angelogen hat.', 'That he lied to you.'),
              c: {
                orsak: l('Gränsen handlar om relationen mellan er.', 'Die Grenze betrifft eure Beziehung.', 'The boundary is about your relationship.'),
                verkan: l('Samtalet blir personligt.', 'Das Gespräch wird persönlich.', 'The conversation becomes personal.'),
                konsekvens: l('Handlingen – stölden – försvinner ur sikte.', 'Die Handlung – der Diebstahl – gerät aus dem Blick.', 'The act – the theft – drops out of sight.'),
                bearer: l('Relationen.', 'Die Beziehung.', 'The relationship.'),
              },
            },
          ],
        },
        {
          situation: l('Vad gör du med paketet – och med saken?', 'Was machst du mit der Packung – und mit der Sache?', 'What do you do with the packet – and with the matter?'),
          options: [
            {
              label: l('Behåller paketet och tar upp saken igen varje vecka.', 'Die Packung behalten und die Sache jede Woche wieder ansprechen.', 'Keep the packet and bring it up again every week.'),
              c: {
                orsak: l('Du följer upp genom kontroll.', 'Du verfolgst durch Kontrolle nach.', 'You follow up through control.'),
                verkan: l('Gränsen blir din börda, inte hans.', 'Die Grenze wird deine Last, nicht seine.', 'The boundary becomes your burden, not his.'),
                konsekvens: l('Undervisningen blir tjat.', 'Aus Unterricht wird Nörgeln.', 'Teaching turns into nagging.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Lägger tillbaka paketet i hans ficka och nämner det aldrig igen.', 'Die Packung zurück in seine Tasche stecken und es nie wieder erwähnen.', 'Put the packet back in his pocket and never mention it again.'),
              book: true,
              c: {
                orsak: l('Gränsen är satt en gång, tydligt.', 'Die Grenze ist einmal gesetzt, klar.', 'The boundary is set once, clearly.'),
                verkan: l('Han får bära sitt val – med full vetskap om gränsen.', 'Er trägt seine Wahl – im vollen Wissen um die Grenze.', 'He carries his choice – fully aware of the boundary.'),
                konsekvens: l('Det var ingen tillsägelse i vanlig mening. Det var undervisning.', 'Es war keine Zurechtweisung im üblichen Sinn. Es war Unterricht.', 'It was not a telling-off in the usual sense. It was teaching.'),
                bearer: l('Sonen.', 'Der Sohn.', 'The son.'),
              },
            },
            {
              label: l('Berättar om det för hela familjen vid middagen.', 'Es der ganzen Familie beim Abendessen erzählen.', 'Tell the whole family at dinner.'),
              c: {
                orsak: l('Gränsen sätts inför publik.', 'Die Grenze wird vor Publikum gesetzt.', 'The boundary is set in front of an audience.'),
                verkan: l('Han förlorar ansiktet och försvarar sig.', 'Er verliert das Gesicht und verteidigt sich.', 'He loses face and defends himself.'),
                konsekvens: l('Frågan blir skam i stället för ansvar.', 'Aus der Frage wird Scham statt Verantwortung.', 'The issue becomes shame instead of responsibility.'),
                bearer: l('Sonen – på fel sätt.', 'Der Sohn – auf die falsche Weise.', 'The son – in the wrong way.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Hon sa bara: ”Jag kan inte hindra dig från att röka. Men du stjäl inte av din fars cigaretter.” Sedan lade hon tillbaka paketet i hans ficka. De nämnde det aldrig igen. Torbjörn har aldrig rökt. Hon var inte rädd för att bli ogillad, inte rädd för att sätta en gräns och inte rädd för att låta honom bära konsekvensen av sitt eget val.',
        'Sie sagte nur: „Ich kann dich nicht vom Rauchen abhalten. Aber du stiehlst nicht die Zigaretten deines Vaters.“ Dann steckte sie die Packung zurück in seine Tasche. Sie sprachen nie wieder darüber. Torbjörn hat nie geraucht. Sie hatte keine Angst, unbeliebt zu sein, keine Angst, eine Grenze zu setzen, und keine Angst, ihn die Folgen seiner eigenen Wahl tragen zu lassen.',
        'She only said: “I cannot stop you from smoking. But you do not steal your father’s cigarettes.” Then she put the packet back in his pocket. They never mentioned it again. Torbjörn has never smoked. She was not afraid of being disliked, not afraid of setting a boundary, and not afraid of letting him carry the consequence of his own choice.',
      ),
      quote: {
        sv: 'Hon tog befälet över situationen – men inte över mitt liv.',
        de: 'Sie übernahm den Befehl über die Situation – aber nicht über mein Leben.',
        en: 'She took command of the situation – but not of my life.',
        src: { book: 'steg3-1', ch: 'Förord' },
      },
    },
    {
      slug: 'starttest',
      type: 'selfassess',
      mode: 'entry',
      min: 5,
      title: l('Starttest: Hägn – Habil – Hövisk', 'Einstiegstest: Hägn – Habil – Hövisk', 'Starting test: Hägn – Habil – Hövisk'),
      intro: l(
        'Tio påståenden om gränser, förmåga och hållning. Svara som det är – inte som du vill att det ska vara. Ingen annan ser svaren. I modul 12 gör du samma test igen.',
        'Zehn Aussagen über Grenzen, Fähigkeit und Haltung. Antworte, wie es ist – nicht, wie du es gern hättest. Niemand sonst sieht die Antworten. In Modul 12 machst du denselben Test noch einmal.',
        'Ten statements about boundaries, ability and bearing. Answer as things are – not as you would like them to be. Nobody else sees the answers. In module 12 you take the same test again.',
      ),
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Ord och mandat', 'Worte und Mandat', 'Words and mandate'),
      prompts: [
        l('Vilka ord använder jag som inte längre binder till handling?', 'Welche Worte benutze ich, die nicht mehr an Handeln binden?', 'Which words do I use that no longer bind to action?'),
        l('Var i mitt liv väntar jag på att någon ska utse mig?', 'Wo in meinem Leben warte ich darauf, dass mich jemand ernennt?', 'Where in my life am I waiting for someone to appoint me?'),
      ],
      src: { book: 'steg1', ch: 'Kursupplägg, tillfälle 1' },
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Att debattera är en svagare form av att tala.” Stämmer det?', '„Debattieren ist eine schwächere Form des Sprechens.“ Stimmt das?', '“Debating is a weaker form of speaking.” Is that true?'),
          options: [
            { text: l('Ja – det är samma sak, bara mindre genomtänkt.', 'Ja – es ist dasselbe, nur weniger durchdacht.', 'Yes – it is the same thing, only less thought through.'), ok: false, fb: l('Enligt boken är det inte en fråga om grad. Debatt försvarar en position; tal redovisar verklighet.', 'Laut Buch ist es keine Frage des Grades. Debatte verteidigt eine Position; Sprechen legt Wirklichkeit offen.', 'According to the book it is not a matter of degree. Debate defends a position; speaking accounts for reality.') },
            { text: l('Nej – de gör olika saker: den ena försvarar position, den andra redovisar verklighet.', 'Nein – sie tun Verschiedenes: Das eine verteidigt eine Position, das andere legt Wirklichkeit offen.', 'No – they do different things: one defends a position, the other accounts for reality.'), ok: true, fb: l('Ja. Den som talar tar ansvar för sina ord. Den som debatterar söker bifall.', 'Ja. Wer spricht, übernimmt Verantwortung für seine Worte. Wer debattiert, sucht Zustimmung.', 'Yes. Whoever speaks takes responsibility for their words. Whoever debates seeks applause.') },
          ],
          misconception: l('Att skillnaden handlar om ton eller nivå – inte om ansvar.', 'Dass es beim Unterschied um Ton oder Niveau geht – nicht um Verantwortung.', 'That the difference is about tone or level – not about responsibility.'),
        },
        {
          q: l('Vad är en inversion enligt Steg 1?', 'Was ist eine Inversion nach Stufe 1?', 'What is an inversion according to Step 1?'),
          options: [
            { text: l('Ett ordspel som provocerar fram en diskussion.', 'Ein Wortspiel, das eine Diskussion provoziert.', 'A play on words that provokes discussion.'), ok: false, fb: l('Boken säger tvärtom: inversion görs inte för att provocera, utan för att testa bärighet.', 'Das Buch sagt das Gegenteil: Inversion dient nicht der Provokation, sondern der Prüfung der Tragfähigkeit.', 'The book says the opposite: inversion is not for provoking, but for testing what holds.') },
            { text: l('En felsökningsmetod: vänd begreppet och fråga vem som bär ansvar, beslutar och tar konsekvensen.', 'Eine Methode der Fehlersuche: Dreh den Begriff um und frage, wer Verantwortung trägt, entscheidet und die Konsequenz übernimmt.', 'A fault-finding method: turn the concept around and ask who carries responsibility, decides and takes the consequence.'), ok: true, fb: l('Ja. Där svaret blir diffust, där finns systemfelet.', 'Ja. Wo die Antwort unscharf wird, liegt der Systemfehler.', 'Yes. Where the answer becomes vague, that is where the system fault is.') },
            { text: l('En åsikt om hur samhället borde vara.', 'Eine Meinung darüber, wie die Gesellschaft sein sollte.', 'An opinion about how society should be.'), ok: false, fb: l('”Inversion är inte en åsikt. Det är en felsökningsmetod.”', '„Inversion ist keine Meinung. Sie ist eine Methode der Fehlersuche.“', '“Inversion is not an opinion. It is a fault-finding method.”') },
          ],
          misconception: l('Att inversion är retorik.', 'Dass Inversion Rhetorik ist.', 'That inversion is rhetoric.'),
        },
        {
          q: l('”Att ta befäl betyder framför allt att bestämma över andra.” Stämmer det?', '„Befehl übernehmen heißt vor allem, über andere zu bestimmen.“ Stimmt das?', '“Taking command mainly means deciding over others.” Is that true?'),
          options: [
            { text: l('Ja – befäl är en position över andra.', 'Ja – Befehl ist eine Position über anderen.', 'Yes – command is a position over others.'), ok: false, fb: l('Boken: att ta befäl börjar aldrig utåt. Det börjar inåt – och ingen kan ge dig det befälet.', 'Das Buch: Befehl zu übernehmen beginnt nie außen. Es beginnt innen – und niemand kann dir diesen Befehl geben.', 'The book: taking command never starts outwards. It starts within – and nobody can give you that command.') },
            { text: l('Nej – det börjar med befäl över dig själv.', 'Nein – es beginnt mit dem Befehl über dich selbst.', 'No – it starts with command over yourself.'), ok: true, fb: l('Ja. Innan någon kan ta ansvar för andra måste hon kunna ta ansvar för sig själv.', 'Ja. Bevor jemand Verantwortung für andere übernehmen kann, muss er sie für sich selbst übernehmen können.', 'Yes. Before anyone can take responsibility for others, they must be able to take responsibility for themselves.') },
          ],
          misconception: l('Att befäl är detsamma som makt över människor.', 'Dass Befehl dasselbe ist wie Macht über Menschen.', 'That command is the same as power over people.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Välj ett område där du väntar på mandat. Ta befäl över det denna vecka.',
        'Wähle einen Bereich, in dem du auf ein Mandat wartest. Übernimm diese Woche den Befehl darüber.',
        'Choose an area where you are waiting for a mandate. Take command of it this week.',
      ),
      hint: l(
        'Skriv det så konkret att du vet när det är gjort. Du får ingen påminnelse. När du öppnar modul 2 frågar kursen bara: gjort eller inte gjort?',
        'Schreib es so konkret, dass du weißt, wann es erledigt ist. Du bekommst keine Erinnerung. Wenn du Modul 2 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'Write it so concretely that you will know when it is done. You will get no reminder. When you open module 2, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      '”Det här är inte en föreläsning om hur man tycker rätt. Det här handlar om varför saker inte längre fungerar – trots goda intentioner. Och vad ansvar faktiskt innebär när det inte finns någon att skylla på.” Sedan ett konkret exempel, en kort paus och den första inversionen.',
      '„Das hier ist kein Vortrag darüber, wie man die richtige Meinung hat. Es geht darum, warum Dinge nicht mehr funktionieren – trotz guter Absichten. Und was Verantwortung tatsächlich bedeutet, wenn es niemanden gibt, dem man die Schuld geben kann.“ Danach ein konkretes Beispiel, eine kurze Pause und die erste Inversion.',
      '“This is not a lecture about holding the right opinions. It is about why things no longer work – despite good intentions. And what responsibility actually means when there is nobody to blame.” Then a concrete example, a short pause and the first inversion.',
    ),
    questions: [
      l('Vilka ord i er organisation har slutat binda till handling?', 'Welche Worte in eurer Organisation binden nicht mehr an Handeln?', 'Which words in your organisation have stopped binding to action?'),
      l('Var väntar ni på ett mandat som ingen kommer att ge?', 'Wo wartet ihr auf ein Mandat, das niemand erteilen wird?', 'Where are you waiting for a mandate that nobody will give?'),
      l('Vad skulle förändras i nästa möte om ni talade i stället för att debattera?', 'Was würde sich in der nächsten Sitzung ändern, wenn ihr sprechen statt debattieren würdet?', 'What would change in your next meeting if you spoke instead of debating?'),
    ],
    close: l(
      '”Var i ditt liv saknas befäl – just nu?” Sedan: ”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.',
      '„Wo in deinem Leben fehlt gerade Befehl?“ Dann: „Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.',
      '“Where in your life is command missing – right now?” Then: “What will YOU take command of until next time?” Pause. Thank you. Full stop.',
    ),
  },
};
