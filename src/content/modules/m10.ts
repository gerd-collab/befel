// M10 · Meritokrati och rättvisa
// The books contain no text of their own on meritocracy yet (LERNKONZEPT, open point 2). The module draws on
// Steg 1 Kap. 1, 3, 4, 9; Steg 3 Del I Diplom i stället för ansvar, Kompetensformeln (incl. the STCW course in Riga);
// Steg 3 Del II Kap. 11 (Skrönan om Göte, Arbetsglädjens formel).

import { l, type Module } from '../types';

export const m10: Module = {
  id: 'm10',
  num: 10,
  part: 3,
  title: l('Meritokrati och rättvisa', 'Meritokratie und Gerechtigkeit', 'Meritocracy and fairness'),
  teaser: l(
    'Hur vi kan bygga tillit genom kompetens och ansvar.',
    'Wie wir Vertrauen durch Kompetenz und Verantwortung aufbauen können.',
    'How we can build trust through competence and responsibility.',
  ),
  goal: l(
    'Du förklarar hur tillit uppstår genom kompetens och ansvar, och skiljer lika konsekvenser från lika utfall.',
    'Du erklärst, wie Vertrauen durch Kompetenz und Verantwortung entsteht, und unterscheidest gleiche Konsequenzen von gleichen Ergebnissen.',
    'You explain how trust arises through competence and responsibility, and distinguish equal consequences from equal outcomes.',
  ),
  keyTerms: [
    l('Kompetens', 'Kompetenz', 'Competence'),
    l('Jämlikhet = lika konsekvenser', 'Gleichheit = gleiche Konsequenzen', 'Equality = equal consequences'),
    l('Yrkesheder', 'Berufsehre', 'Professional honour'),
    l('Diplom och certifikat', 'Diplom und Zertifikat', 'Diploma and certificate'),
    l('Arbetsglädje', 'Arbeitsfreude', 'Joy in work'),
  ],
  sources: [
    { book: 'folder', ch: 'Webbkursens beskrivning (avsnitt 10)' },
    { book: 'steg1', ch: 'Kap. 1, 3, 4 och 9' },
    { book: 'steg3-1', ch: 'Diplom i stället för ansvar; Certifikat, behörighet och ansvar' },
    { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning – Skrönan om Göte' },
  ],
  image: 'workshop',
  needsAuthor: l(
    'Böckerna innehåller ännu ingen egen text om meritokrati. Modulen bygger tills vidare på kapitlen om kompetens, yrkesheder och arbetsglädje. Torbjörn kompletterar med egen text – med en tydlig gräns mot en politisk läsning.',
    'Die Bücher enthalten noch keinen eigenen Text zur Meritokratie. Das Modul stützt sich vorerst auf die Kapitel über Kompetenz, Berufsehre und Arbeitsfreude. Torbjörn ergänzt eigenen Text – mit klarer Abgrenzung gegen eine politische Lesart.',
    'The books do not yet contain their own text on meritocracy. For now the module draws on the chapters on competence, professional honour and joy in work. Torbjörn will add his own text – clearly separated from a political reading.',
  ),
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Tillit är förutsägbarhet över tid', 'Vertrauen ist Berechenbarkeit über die Zeit', 'Trust is predictability over time'),
      slides: [
        {
          heading: l('Vad kompetens faktiskt är', 'Was Kompetenz tatsächlich ist', 'What competence actually is'),
          body: [
            l(
              'Kompetens är inte vad du vet, och inte vad du tycker. Den är aldrig självutnämnd – den tillskrivs av andra. Du kan ha betyg, certifikat och titlar. Men först när människor lägger sitt förtroende, sina resurser eller sin säkerhet i dina händer prövas om kompetensen bär.',
              'Kompetenz ist nicht, was du weißt, und nicht, was du meinst. Sie ist nie selbst ernannt – sie wird von anderen zugeschrieben. Du kannst Noten, Zertifikate und Titel haben. Aber erst wenn Menschen ihr Vertrauen, ihre Mittel oder ihre Sicherheit in deine Hände legen, zeigt sich, ob die Kompetenz trägt.',
              'Competence is not what you know, and not what you think. It is never self-appointed – it is attributed by others. You can have grades, certificates and titles. But only when people place their trust, their resources or their safety in your hands is it tested whether the competence holds.',
            ),
          ],
          quote: {
            sv: 'Kompetens är vad andra, över tid, kan lita på att du förmår utföra under ansvar.',
            de: 'Kompetenz ist das, worauf andere sich über die Zeit verlassen können, dass du es unter Verantwortung ausführen kannst.',
            en: 'Competence is what others, over time, can rely on you to be able to carry out under responsibility.',
            src: { book: 'steg1', ch: 'Kap. 9 Vad kompetens faktiskt är' },
          },
        },
        {
          heading: l('Tillit föds ur förutsägbarhet', 'Vertrauen entsteht aus Berechenbarkeit', 'Trust is born of predictability'),
          body: [
            l(
              'Tillit föds inte ur välvilja. Den föds ur förutsägbarhet. Förtroende uppstår när ord och handling över tid visar sig hänga ihop – lika sant i ett maskinrum som i ett styrelserum.',
              'Vertrauen entsteht nicht aus Wohlwollen. Es entsteht aus Berechenbarkeit. Vertrauen wächst, wenn sich über die Zeit zeigt, dass Wort und Tat zusammenpassen – im Maschinenraum genauso wie im Vorstandszimmer.',
              'Trust is not born of goodwill. It is born of predictability. Trust arises when words and actions prove, over time, to hang together – as true in an engine room as in a boardroom.',
            ),
          ],
          quote: {
            sv: 'Jag litar på dig inte för att du tycker som jag, utan för att jag vet hur du kommer att agera när verkligheten förändras.',
            de: 'Ich vertraue dir nicht, weil du denkst wie ich, sondern weil ich weiß, wie du handeln wirst, wenn sich die Wirklichkeit ändert.',
            en: 'I trust you not because you think like me, but because I know how you will act when reality changes.',
            src: { book: 'steg1', ch: 'Kap. 1 Kunskap och förståelse' },
          },
        },
        {
          heading: l('Yrkeskunnandets heder', 'Die Ehre des Berufskönnens', 'The honour of professional skill'),
          body: [
            l(
              'Sanning i professionell mening handlar inte om att ha rätt i allt, utan om att redovisa det man vet, skilja mellan fakta och tolkning och öppet visa var osäkerheten börjar.',
              'Wahrheit im beruflichen Sinn heißt nicht, in allem recht zu haben, sondern offenzulegen, was man weiß, Fakten von Deutung zu trennen und offen zu zeigen, wo die Unsicherheit beginnt.',
              'Truth in the professional sense is not about being right about everything, but about reporting what you know, separating fact from interpretation and openly showing where uncertainty begins.',
            ),
            l(
              'Den som är hederlig i sitt yrke säger inte mer än hon vet. Den som är ohederlig säger det som för stunden fungerar.',
              'Wer in seinem Beruf ehrlich ist, sagt nicht mehr, als er weiß. Wer unehrlich ist, sagt, was im Moment funktioniert.',
              'Whoever is honest in their profession says no more than they know. Whoever is dishonest says what works for the moment.',
            ),
          ],
          quote: {
            sv: 'Yrkeskunnandets heder är därför inte en personlig dygd. Den är en samhällsfunktion.',
            de: 'Die Ehre des Berufskönnens ist daher keine persönliche Tugend. Sie ist eine gesellschaftliche Funktion.',
            en: 'The honour of professional skill is therefore not a personal virtue. It is a function of society.',
            src: { book: 'steg1', ch: 'Kap. 4 Sanning och tillit – yrkeskunnandets heder' },
          },
        },
        {
          heading: l('Jämlikhet = lika konsekvenser', 'Gleichheit = gleiche Konsequenzen', 'Equality = equal consequences'),
          body: [
            l(
              'Äkta jämlikhet har aldrig handlat om att alla ska få samma sak. Den har handlat om att ingen ska stå över konsekvenserna av sitt handlande – att samma måttstock gäller för alla när ansvar ska bäras, när fel ska rättas och när arbete ska utföras.',
              'Echte Gleichheit hat nie bedeutet, dass alle dasselbe bekommen. Sie hat bedeutet, dass niemand über den Folgen seines Handelns steht – dass derselbe Maßstab für alle gilt, wenn Verantwortung getragen, Fehler korrigiert und Arbeit getan werden muss.',
              'Genuine equality has never been about everyone getting the same thing. It has been about nobody standing above the consequences of their actions – the same yardstick applying to everyone when responsibility is to be carried, mistakes corrected and work done.',
            ),
            l(
              'Äkta solidaritet har aldrig handlat om att dela vinster. Den har handlat om att dela bördor.',
              'Echte Solidarität hat nie bedeutet, Gewinne zu teilen. Sie hat bedeutet, Lasten zu teilen.',
              'Genuine solidarity has never been about sharing gains. It has been about sharing burdens.',
            ),
          ],
          quote: {
            sv: 'Jämlikhet = lika konsekvenser, inte lika utfall.',
            de: 'Gleichheit = gleiche Konsequenzen, nicht gleiche Ergebnisse.',
            en: 'Equality = equal consequences, not equal outcomes.',
            src: { book: 'steg1', ch: 'Föreläsningsstruktur, 20–30 min' },
          },
        },
        {
          heading: l('Skrönan om Göte', 'Die Geschichte von Göte', 'The story of Göte'),
          body: [
            l(
              'Torbjörns svärfar Göte var grovarbetare. Han gick upp klockan fyra varje morgon för att vara på jobbet klockan sex – inte för att någon kontrollerade honom, utan för att arbetet började då. På kvällen var det alltid Göte som gick sist en runda genom huset, låste och såg till att allt var säkrat. Ingen hade bett honom. Det var hans ansvar.',
              'Torbjörns Schwiegervater Göte war Bauarbeiter. Er stand jeden Morgen um vier auf, um um sechs bei der Arbeit zu sein – nicht, weil ihn jemand kontrollierte, sondern weil die Arbeit dann begann. Abends war es immer Göte, der als Letzter eine Runde durchs Haus machte, abschloss und alles sicherte. Niemand hatte ihn darum gebeten. Es war seine Verantwortung.',
              'Torbjörn’s father-in-law Göte was a labourer. He got up at four every morning to be at work at six – not because anyone checked on him, but because that was when the work began. In the evening it was always Göte who went round the house last, locking up and making sure everything was secure. Nobody had asked him. It was his responsibility.',
            ),
            l(
              'Arbetsglädje uppstår när tre saker möts: en uppgift som behöver göras, kompetens att göra den och ansvar för resultatet.',
              'Arbeitsfreude entsteht, wenn drei Dinge zusammenkommen: eine Aufgabe, die getan werden muss, die Kompetenz, sie zu tun, und die Verantwortung für das Ergebnis.',
              'Joy in work arises when three things meet: a task that needs doing, the competence to do it and responsibility for the result.',
            ),
          ],
          quote: {
            sv: 'Göte var inte sysselsatt. Han hade arbete.',
            de: 'Göte war nicht beschäftigt. Er hatte Arbeit.',
            en: 'Göte was not kept busy. He had work.',
            src: { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning – Skrönan om Göte' },
          },
        },
      ],
      cards: [
        { term: l('Kompetens', 'Kompetenz', 'Competence'), text: l('Tillskrivs av andra, över tid. Aldrig självutnämnd.', 'Wird von anderen zugeschrieben, über die Zeit. Nie selbst ernannt.', 'Attributed by others, over time. Never self-appointed.') },
        { term: l('Tillit', 'Vertrauen', 'Trust'), text: l('Förutsägbarhet: ord och handling hänger ihop.', 'Berechenbarkeit: Wort und Tat passen zusammen.', 'Predictability: words and actions hang together.') },
        { term: l('Yrkesheder', 'Berufsehre', 'Professional honour'), text: l('Säga det man vet – inte det som för stunden fungerar.', 'Sagen, was man weiß – nicht, was im Moment funktioniert.', 'Saying what you know – not what works for the moment.') },
        { term: l('Lika konsekvenser', 'Gleiche Konsequenzen', 'Equal consequences'), text: l('Ingen står över konsekvenserna av sitt handlande.', 'Niemand steht über den Folgen seines Handelns.', 'Nobody stands above the consequences of their actions.') },
        { term: l('Arbetsglädje', 'Arbeitsfreude', 'Joy in work'), text: l('Uppgift + kompetens + ansvar.', 'Aufgabe + Kompetenz + Verantwortung.', 'Task + competence + responsibility.') },
      ],
    },
    {
      slug: 'riga',
      type: 'scenario',
      min: 8,
      title: l('En vecka i Riga', 'Eine Woche in Riga', 'A week in Riga'),
      source: { book: 'steg3-1', ch: 'Ledarskapskursernas värld – STCW-kursen i Riga' },
      intro: l(
        'Du ansvarar för befälets utbildning i ett rederi. En befälhavare har ett femtontal certifikat och behörigheter som ska förnyas, och arbetsgivaren betalar. En obligatorisk navigationskurs enligt STCW-konventionen kostar i Sverige cirka 20 000 kronor och ska göras vart femte år. Med hotell och uppehälle blir kostnaderna höga. I Riga finns samma kurs.',
        'Du verantwortest die Ausbildung der Schiffsoffiziere einer Reederei. Ein Kapitän hat rund fünfzehn Zertifikate und Befähigungen, die erneuert werden müssen, und der Arbeitgeber zahlt. Ein vorgeschriebener Navigationskurs nach dem STCW-Übereinkommen kostet in Schweden rund 20 000 Kronen und ist alle fünf Jahre zu absolvieren. Mit Hotel und Aufenthalt werden die Kosten hoch. In Riga gibt es denselben Kurs.',
        'You are responsible for training the officers of a shipping company. A master holds some fifteen certificates and authorisations that have to be renewed, and the employer pays. A mandatory navigation course under the STCW Convention costs about SEK 20,000 in Sweden and must be done every five years. With hotel and living costs, the expenses are high. The same course exists in Riga.',
      ),
      nodes: [
        {
          situation: l('Vad gör du?', 'Was tust du?', 'What do you do?'),
          options: [
            {
              label: l('Skickar alla befälhavare till Riga – certifikatet är ju detsamma.', 'Alle Kapitäne nach Riga schicken – das Zertifikat ist ja dasselbe.', 'Send all masters to Riga – the certificate is the same.'),
              c: {
                orsak: l('Papperet likställs med förmågan.', 'Das Papier wird mit der Fähigkeit gleichgesetzt.', 'The paper is equated with the ability.'),
                verkan: l('Kostnaden sjunker.', 'Die Kosten sinken.', 'The cost falls.'),
                konsekvens: l('Ingen vet vad certifikaten faktiskt bär.', 'Niemand weiß, was die Zertifikate tatsächlich tragen.', 'Nobody knows what the certificates actually carry.'),
                bearer: l('Fartygen – när navigationen prövas.', 'Die Schiffe – wenn die Navigation auf die Probe gestellt wird.', 'The ships – when navigation is put to the test.'),
              },
            },
            {
              label: l('Skickar en befälhavare till Riga för att pröva kostnadseffektiviteten.', 'Einen Kapitän nach Riga schicken, um die Kosteneffizienz zu prüfen.', 'Send one master to Riga to test the cost-effectiveness.'),
              book: true,
              c: {
                orsak: l('Du prövar innan du beslutar.', 'Du prüfst, bevor du entscheidest.', 'You test before you decide.'),
                verkan: l('En erfaren befälhavare bedömer kursen inifrån.', 'Ein erfahrener Kapitän beurteilt den Kurs von innen.', 'An experienced master judges the course from the inside.'),
                konsekvens: l('Beslutet grundas i verkligheten, inte i priset.', 'Die Entscheidung gründet auf der Wirklichkeit, nicht auf dem Preis.', 'The decision is grounded in reality, not in the price.'),
                bearer: l('Du – som beslutar efteråt.', 'Du – der danach entscheidet.', 'You – who decide afterwards.'),
              },
            },
            {
              label: l('Fortsätter som förut utan att pröva.', 'Weitermachen wie bisher, ohne zu prüfen.', 'Carry on as before without testing.'),
              c: {
                orsak: l('Vana före prövning.', 'Gewohnheit vor Prüfung.', 'Habit before testing.'),
                verkan: l('Kostnaden ligger kvar.', 'Die Kosten bleiben.', 'The cost stays.'),
                konsekvens: l('Du vet inte om du betalar för kompetens eller för vana.', 'Du weißt nicht, ob du für Kompetenz oder für Gewohnheit zahlst.', 'You do not know whether you are paying for competence or for habit.'),
                bearer: l('Rederiet.', 'Die Reederei.', 'The company.'),
              },
            },
          ],
        },
        {
          situation: l('Befälhavaren kommer hem. Hans kommentar: ”Det var en trevlig veckas betald semester.”', 'Der Kapitän kommt zurück. Sein Kommentar: „Das war eine nette Woche bezahlter Urlaub.“', 'The master comes home. His comment: “That was a nice week’s paid holiday.”'),
          options: [
            {
              label: l('Certifikatet är ändå giltigt – fortsätter med Riga.', 'Das Zertifikat ist trotzdem gültig – weiter mit Riga.', 'The certificate is valid anyway – carry on with Riga.'),
              c: {
                orsak: l('Diplom i stället för ansvar.', 'Diplom statt Verantwortung.', 'Diploma instead of responsibility.'),
                verkan: l('Pappret förnyas, förmågan inte.', 'Das Papier wird erneuert, die Fähigkeit nicht.', 'The paper is renewed, the ability is not.'),
                konsekvens: l('Utbildningskonsumtion.', 'Ausbildungskonsum.', 'Training consumption.'),
                bearer: l('Fartyget och besättningen.', 'Das Schiff und die Besatzung.', 'The ship and the crew.'),
              },
            },
            {
              label: l('Slutar skicka befäl dit.', 'Keine Offiziere mehr dorthin schicken.', 'Stop sending officers there.'),
              book: true,
              c: {
                orsak: l('Du väljer verklig förmåga framför billigt papper.', 'Du wählst echte Fähigkeit statt billigem Papier.', 'You choose real ability over cheap paper.'),
                verkan: l('Kostnaden ligger kvar – men den köper något.', 'Die Kosten bleiben – aber sie kaufen etwas.', 'The cost stays – but it buys something.'),
                konsekvens: l('Certifikaten betyder det de säger.', 'Die Zertifikate bedeuten, was sie sagen.', 'The certificates mean what they say.'),
                bearer: l('Rederiet – medvetet.', 'Die Reederei – bewusst.', 'The company – deliberately.'),
              },
            },
            {
              label: l('Begär ett bättre intyg från kursen.', 'Eine bessere Bescheinigung vom Kurs verlangen.', 'Ask the course for a better certificate.'),
              c: {
                orsak: l('Problemet behandlas som ett dokumentproblem.', 'Das Problem wird als Dokumentenproblem behandelt.', 'The problem is treated as a document problem.'),
                verkan: l('Pappret blir finare.', 'Das Papier wird schöner.', 'The paper gets nicer.'),
                konsekvens: l('Förmågan är densamma.', 'Die Fähigkeit bleibt dieselbe.', 'The ability is the same.'),
                bearer: l('Fartyget.', 'Das Schiff.', 'The ship.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        '”Vi gjorde detta aldrig igen.” Certifikatet visar att personen har kunskap och träning. Behörigheten innebär att organisationen har gett mandat. Först när de kombineras – och förenas med ansvar – uppstår kompetens. Ett intyg som inte bär någon förmåga är inget annat än ett kvitto på deltagande.',
        '„Das haben wir nie wieder gemacht.“ Das Zertifikat zeigt, dass die Person Wissen und Training hat. Die Befugnis bedeutet, dass die Organisation ein Mandat erteilt hat. Erst wenn beides zusammenkommt – und mit Verantwortung verbunden wird – entsteht Kompetenz. Eine Bescheinigung ohne Fähigkeit ist nichts als eine Quittung für die Teilnahme.',
        '“We never did that again.” The certificate shows that the person has knowledge and training. Authorisation means the organisation has given a mandate. Only when they are combined – and joined with responsibility – does competence arise. A certificate that carries no ability is nothing but a receipt for attendance.',
      ),
      quote: {
        sv: 'Det är inte kompetens. Det är utbildningskonsumtion.',
        de: 'Das ist keine Kompetenz. Das ist Ausbildungskonsum.',
        en: 'That is not competence. It is training consumption.',
        src: { book: 'steg3-1', ch: 'Ledarskapskursernas värld' },
      },
    },
    {
      slug: 'diplom-certifikat',
      type: 'classify',
      min: 6,
      title: l('Diplom, certifikat, behörighet eller ansvar?', 'Diplom, Zertifikat, Befugnis oder Verantwortung?', 'Diploma, certificate, authorisation or responsibility?'),
      intro: l(
        'Fyra begrepp som ofta blandas ihop. Sortera exemplen.',
        'Vier Begriffe, die oft verwechselt werden. Ordne die Beispiele zu.',
        'Four concepts that are often confused. Sort the examples.',
      ),
      categories: [
        { id: 'diplom', label: l('Diplom', 'Diplom', 'Diploma'), hint: l('intyg på deltagande', 'Teilnahmebescheinigung', 'proof of attendance') },
        { id: 'certifikat', label: l('Certifikat', 'Zertifikat', 'Certificate'), hint: l('visad, prövad nivå', 'gezeigtes, geprüftes Niveau', 'demonstrated, tested level') },
        { id: 'behorighet', label: l('Behörighet', 'Befugnis', 'Authorisation'), hint: l('organisationens mandat', 'Mandat der Organisation', 'the organisation’s mandate') },
        { id: 'ansvar', label: l('Ansvar', 'Verantwortung', 'Responsibility'), hint: l('du svarar för utfallet', 'du stehst für das Ergebnis ein', 'you answer for the outcome') },
      ],
      items: [
        {
          text: l('Ett intyg från en tvådagars ledarskapskurs: ”Certifierad ledare”.', 'Eine Bescheinigung über einen zweitägigen Führungskurs: „Zertifizierte Führungskraft“.', 'A certificate from a two-day leadership course: “Certified leader”.'),
          cat: 'diplom',
          why: l('Ingen juridisk funktion, ingen organisatorisk roll, ingen ansvarskedja – ett intyg på att du har deltagit.', 'Keine rechtliche Funktion, keine organisatorische Rolle, keine Verantwortungskette – eine Bescheinigung, dass du teilgenommen hast.', 'No legal function, no organisational role, no chain of responsibility – a certificate that you took part.'),
        },
        {
          text: l('Godkänt prov i brandskydd efter praktisk övning.', 'Bestandene Prüfung im Brandschutz nach praktischer Übung.', 'A passed fire-safety exam after a practical exercise.'),
          cat: 'certifikat',
          why: l('Kunskap, träning och prövad förmåga – mer än deltagande.', 'Wissen, Training und geprüfte Fähigkeit – mehr als Teilnahme.', 'Knowledge, training and tested ability – more than attendance.'),
        },
        {
          text: l('Rederiet utser dig till ansvarig för lastoperationen ombord.', 'Die Reederei bestimmt dich zum Verantwortlichen für den Ladebetrieb an Bord.', 'The company appoints you to be in charge of the cargo operation on board.'),
          cat: 'behorighet',
          why: l('Organisationen säger: du får göra detta, du har mandat.', 'Die Organisation sagt: Du darfst das tun, du hast das Mandat.', 'The organisation says: you may do this, you have the mandate.'),
        },
        {
          text: l('När lasten förskjuts är det du som svarar för utfallet.', 'Wenn die Ladung verrutscht, stehst du für das Ergebnis ein.', 'When the cargo shifts, you are the one who answers for the outcome.'),
          cat: 'ansvar',
          why: l('Inte gruppen, inte processen, inte styrgruppen. Du.', 'Nicht die Gruppe, nicht der Prozess, nicht der Lenkungsausschuss. Du.', 'Not the group, not the process, not the steering group. You.'),
        },
        {
          text: l('Ett yrkesbevis efter godkänd examen och dokumenterad praktik.', 'Ein Befähigungsnachweis nach bestandener Prüfung und dokumentierter Praxis.', 'A professional licence after a passed exam and documented practice.'),
          cat: 'certifikat',
          why: l('En erkänd nivå – men ännu inget mandat i en verklig funktion.', 'Ein anerkanntes Niveau – aber noch kein Mandat in einer echten Funktion.', 'A recognised level – but not yet a mandate in a real function.'),
        },
        {
          text: l('Platschefen får stoppa arbetet och beställa åtgärder upp till en viss summa.', 'Der Bauleiter darf die Arbeit stoppen und Maßnahmen bis zu einem bestimmten Betrag beauftragen.', 'The site manager may stop work and order measures up to a certain amount.'),
          cat: 'behorighet',
          why: l('Ett tydligt mandat inom en ram.', 'Ein klares Mandat innerhalb eines Rahmens.', 'A clear mandate within a frame.'),
        },
      ],
      src: { book: 'steg3-1', ch: 'Kompetensformeln; Diplom i stället för ansvar' },
    },
    {
      slug: 'inversion',
      type: 'inversion',
      min: 6,
      title: l('Pengar → värde → utförande', 'Geld → Wert → Ausführung', 'Money → value → execution'),
      intro: l(
        'Pengar är ett kvitto på att någon redan har betalat med något annat: arbete, kunskap, kompetens eller ansvar. Vänd de invanda meningarna.',
        'Geld ist eine Quittung dafür, dass jemand schon mit etwas anderem bezahlt hat: Arbeit, Wissen, Kompetenz oder Verantwortung. Dreh die gewohnten Sätze um.',
        'Money is a receipt showing that someone has already paid with something else: work, knowledge, competence or responsibility. Turn the habitual sentences around.',
      ),
      items: [
        {
          habit: l('Pengar skapar värde.', 'Geld schafft Wert.', 'Money creates value.'),
          options: [
            l('Mer pengar skapar mer värde.', 'Mehr Geld schafft mehr Wert.', 'More money creates more value.'),
            l('Värde skapar pengar.', 'Wert schafft Geld.', 'Value creates money.'),
            l('Pengar och värde är samma sak.', 'Geld und Wert sind dasselbe.', 'Money and value are the same thing.'),
          ],
          inverted: 1,
          pattern: l('Pengar → värde → utförande. Värde uppstår genom utförande; pengar är kvittot.', 'Geld → Wert → Ausführung. Wert entsteht durch Ausführung; Geld ist die Quittung.', 'Money → value → execution. Value arises through execution; money is the receipt.'),
          src: { book: 'steg1', ch: 'Del 0, 0.2; Kap. 2 Att utföra' },
        },
        {
          habit: l('Pengar är drivkraften i arbetet.', 'Geld ist die Triebkraft der Arbeit.', 'Money is what drives work.'),
          options: [
            l('Pengar är ett villkor – inte drivkraften.', 'Geld ist eine Bedingung – nicht die Triebkraft.', 'Money is a condition – not the driving force.'),
            l('Pengar spelar ingen roll.', 'Geld spielt keine Rolle.', 'Money does not matter.'),
            l('Mer lön ger mer arbetsglädje.', 'Mehr Lohn gibt mehr Arbeitsfreude.', 'More pay gives more joy in work.'),
          ],
          inverted: 0,
          pattern: l(
            'När lönen väl är rimlig spelar annat roll: om arbetet betyder något, om man kan sitt yrke, om andra litar på det man gör.',
            'Wenn der Lohn erst einmal angemessen ist, zählt anderes: ob die Arbeit etwas bedeutet, ob man sein Handwerk kann, ob andere sich auf das verlassen, was man tut.',
            'Once pay is reasonable, other things matter: whether the work means something, whether you know your trade, whether others rely on what you do.',
          ),
          src: { book: 'steg3-2', ch: 'Kap. 11 – Pengar är ett villkor, inte drivkraften' },
        },
        {
          habit: l('Jämlikhet betyder att alla får lika mycket.', 'Gleichheit heißt, dass alle gleich viel bekommen.', 'Equality means everyone gets the same amount.'),
          options: [
            l('Jämlikhet betyder att de som bidrar mest får mest.', 'Gleichheit heißt, dass die, die am meisten beitragen, am meisten bekommen.', 'Equality means those who contribute most get most.'),
            l('Jämlikhet betyder att ingen står över konsekvenserna av sitt handlande.', 'Gleichheit heißt, dass niemand über den Folgen seines Handelns steht.', 'Equality means nobody stands above the consequences of their actions.'),
            l('Jämlikhet är omöjlig.', 'Gleichheit ist unmöglich.', 'Equality is impossible.'),
          ],
          inverted: 1,
          pattern: l('Lika utfall → lika konsekvenser. Samma måttstock när ansvar ska bäras.', 'Gleiche Ergebnisse → gleiche Konsequenzen. Derselbe Maßstab, wenn Verantwortung getragen werden muss.', 'Equal outcomes → equal consequences. The same yardstick when responsibility is to be carried.'),
          src: { book: 'steg1', ch: 'Kap. 3 Jämlikhet och solidaritet' },
        },
        {
          habit: l('Solidaritet är att dela det vi har vunnit.', 'Solidarität heißt, zu teilen, was wir gewonnen haben.', 'Solidarity is sharing what we have gained.'),
          options: [
            l('Solidaritet är att hålla med varandra.', 'Solidarität heißt, einander zuzustimmen.', 'Solidarity is agreeing with each other.'),
            l('Solidaritet är något staten ordnar.', 'Solidarität ist etwas, das der Staat regelt.', 'Solidarity is something the state arranges.'),
            l('Solidaritet är att dela bördor – att ta sin del av det som är tungt.', 'Solidarität heißt, Lasten zu teilen – seinen Teil des Schweren zu tragen.', 'Solidarity is sharing burdens – taking your share of what is heavy.'),
          ],
          inverted: 2,
          pattern: l('Dela vinster → dela bördor. Solidaritet kan inte krävas, bara visas.', 'Gewinne teilen → Lasten teilen. Solidarität lässt sich nicht fordern, nur zeigen.', 'Sharing gains → sharing burdens. Solidarity cannot be demanded, only shown.'),
          src: { book: 'steg1', ch: 'Kap. 3 Jämlikhet och solidaritet' },
        },
      ],
      ownPrompt: l(
        'Var i ditt arbete mäts värde i titel, lön eller diplom? Skriv det så som det brukar sägas – och vänd det: vad skulle hända om det mättes i utförande?',
        'Wo wird in deiner Arbeit Wert an Titel, Lohn oder Diplom gemessen? Schreib es so, wie es meistens gesagt wird – und dreh es um: Was würde passieren, wenn es an der Ausführung gemessen würde?',
        'Where in your work is value measured in titles, pay or diplomas? Write it the way it is usually said – and turn it around: what would happen if it were measured in execution?',
      ),
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('När tystnade jag?', 'Wann habe ich geschwiegen?', 'When did I go quiet?'),
      prompts: [
        l('När tystnade jag senast – och varför?', 'Wann habe ich zuletzt geschwiegen – und warum?', 'When did I last go quiet – and why?'),
        l('Vad kan andra, över tid, lita på att jag förmår utföra?', 'Worauf können sich andere über die Zeit verlassen, dass ich es ausführen kann?', 'What can others, over time, rely on me to be able to carry out?'),
      ],
      src: { book: 'steg1', ch: 'Kursupplägg, tillfälle 4' },
    },
    {
      slug: 'habil',
      type: 'selfassess',
      mode: 'module',
      min: 5,
      title: l('Habil: förmåga i praktiken', 'Habil: Fähigkeit in der Praxis', 'Habil: ability in practice'),
      intro: l(
        'Habilitet är förmåga i praktiken – inte potential, inte ambition. Fem påståenden, bara för dig.',
        'Habilität ist Fähigkeit in der Praxis – nicht Potenzial, nicht Ehrgeiz. Fünf Aussagen, nur für dich.',
        'Habil means ability in practice – not potential, not ambition. Five statements, just for you.',
      ),
      items: [
        l('Jag kan visa min förmåga utan att hänvisa till titel eller diplom.', 'Ich kann meine Fähigkeit zeigen, ohne auf Titel oder Diplom zu verweisen.', 'I can show my ability without referring to a title or diploma.'),
        l('Jag säger inte mer än jag vet.', 'Ich sage nicht mehr, als ich weiß.', 'I say no more than I know.'),
        l('Jag skiljer mellan fakta och tolkning när jag rapporterar.', 'Ich trenne Fakten von Deutung, wenn ich berichte.', 'I separate fact from interpretation when I report.'),
        l('Jag lyfter problem i tid – innan de blir olyckor.', 'Ich spreche Probleme rechtzeitig an – bevor sie zu Unfällen werden.', 'I raise problems in time – before they become accidents.'),
        l('Jag underhåller det jag kan, så att andra kan lita på det i morgon.', 'Ich halte mein Können instand, damit andere sich auch morgen darauf verlassen können.', 'I maintain what I can do, so that others can rely on it tomorrow.'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 4,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Ett diplom från en ledarskapskurs visar att du kan bära ansvar.” Stämmer det?', '„Ein Diplom aus einem Führungskurs zeigt, dass du Verantwortung tragen kannst.“ Stimmt das?', '“A diploma from a leadership course shows that you can carry responsibility.” Is that true?'),
          options: [
            { text: l('Ja – det är ett bevis på utbildning.', 'Ja – es ist ein Ausbildungsnachweis.', 'Yes – it is proof of training.'), ok: false, fb: l('Det är ett intyg på deltagande – inte ett bevis på att du kan bära ansvar.', 'Es ist eine Teilnahmebescheinigung – kein Beweis, dass du Verantwortung tragen kannst.', 'It is proof of attendance – not proof that you can carry responsibility.') },
            { text: l('Nej – kompetens kräver certifikat, behörighet och ansvar i en verklig funktion.', 'Nein – Kompetenz verlangt Zertifikat, Befugnis und Verantwortung in einer echten Funktion.', 'No – competence requires certificate, authorisation and responsibility in a real function.'), ok: true, fb: l('Ja. Utbildning är inte kompetens.', 'Ja. Ausbildung ist keine Kompetenz.', 'Yes. Training is not competence.') },
          ],
          misconception: l('Att utbildning är detsamma som kompetens.', 'Dass Ausbildung dasselbe ist wie Kompetenz.', 'That training is the same as competence.'),
        },
        {
          q: l('Jämlikhet enligt Steg 1 betyder …', 'Gleichheit nach Stufe 1 bedeutet …', 'Equality according to Step 1 means …'),
          options: [
            { text: l('lika utfall för alla.', 'gleiche Ergebnisse für alle.', 'equal outcomes for everyone.'), ok: false, fb: l('Boken: jämlikhet reduceras ofta till likhet i utfall – och förlorar då sin skärpa.', 'Das Buch: Gleichheit wird oft auf gleiche Ergebnisse reduziert – und verliert dadurch ihre Schärfe.', 'The book: equality is often reduced to equal outcomes – and then loses its edge.') },
            { text: l('lika konsekvenser – samma måttstock när ansvar ska bäras.', 'gleiche Konsequenzen – derselbe Maßstab, wenn Verantwortung getragen werden muss.', 'equal consequences – the same yardstick when responsibility is to be carried.'), ok: true, fb: l('Ja. Ingen ska stå över konsekvenserna av sitt handlande.', 'Ja. Niemand soll über den Folgen seines Handelns stehen.', 'Yes. Nobody should stand above the consequences of their actions.') },
          ],
          misconception: l('Att jämlikhet handlar om att alla ska få samma sak.', 'Dass es bei Gleichheit darum geht, dass alle dasselbe bekommen.', 'That equality is about everyone getting the same thing.'),
        },
        {
          q: l('Var uppstår tillit?', 'Woraus entsteht Vertrauen?', 'Where does trust come from?'),
          options: [
            { text: l('Ur välvilja och gemensamma värderingar.', 'Aus Wohlwollen und gemeinsamen Werten.', 'From goodwill and shared values.'), ok: false, fb: l('”Tillit föds inte ur välvilja.”', '„Vertrauen entsteht nicht aus Wohlwollen.“', '“Trust is not born of goodwill.”') },
            { text: l('Ur förutsägbarhet: att ord och handling över tid hänger ihop.', 'Aus Berechenbarkeit: dass Wort und Tat über die Zeit zusammenpassen.', 'From predictability: words and actions hanging together over time.'), ok: true, fb: l('Ja. Därför byggs tillit långsamt – och raseras snabbt.', 'Ja. Darum wächst Vertrauen langsam – und zerbricht schnell.', 'Yes. That is why trust is built slowly – and destroyed quickly.') },
          ],
          misconception: l('Att tillit är en känsla man kan bestämma sig för.', 'Dass Vertrauen ein Gefühl ist, für das man sich entscheiden kann.', 'That trust is a feeling you can decide to have.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Visa din förmåga i en uppgift – utan att hänvisa till titel eller diplom.',
        'Zeige deine Fähigkeit in einer Aufgabe – ohne auf Titel oder Diplom zu verweisen.',
        'Show your ability in one task – without referring to a title or diploma.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 11 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 11 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 11, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Berätta om befälhavaren som kom hem från Riga: ”Det var en trevlig veckas betald semester.” Paus. Fråga: ”Vad betyder era certifikat – på riktigt?”',
      'Erzähle vom Kapitän, der aus Riga zurückkam: „Das war eine nette Woche bezahlter Urlaub.“ Pause. Frage: „Was bedeuten eure Zertifikate – wirklich?“',
      'Tell the story of the master who came back from Riga: “That was a nice week’s paid holiday.” Pause. Ask: “What do your certificates mean – for real?”',
    ),
    questions: [
      l('Var hos er ersätter diplom ansvar?', 'Wo ersetzen bei euch Diplome die Verantwortung?', 'Where in your organisation do diplomas replace responsibility?'),
      l('Gäller samma måttstock för alla hos er när fel ska rättas?', 'Gilt bei euch derselbe Maßstab für alle, wenn Fehler korrigiert werden müssen?', 'Does the same yardstick apply to everyone in your organisation when mistakes are corrected?'),
      l('Vem är er Göte – och vad skulle hända utan honom?', 'Wer ist euer Göte – und was würde ohne ihn passieren?', 'Who is your Göte – and what would happen without him?'),
    ],
    note: l(
      'Meritokrati får inte läsas politiskt. Håll samtalet vid kompetens, ansvar och yrkesheder i den egna verksamheten. Modulen väntar på Torbjörns eget innehåll.',
      'Meritokratie darf nicht politisch gelesen werden. Halte das Gespräch bei Kompetenz, Verantwortung und Berufsehre im eigenen Betrieb. Das Modul wartet auf Torbjörns eigene Inhalte.',
      'Meritocracy must not be read politically. Keep the conversation on competence, responsibility and professional honour in your own operation. The module is awaiting Torbjörn’s own content.',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
