// M04 · Ansvar och befogenhet
// Sources: Steg 1 Kap. 11; Steg 2 Kap. 3 (3.2, 3.5); Steg 3 Del I Kompetensformeln, Diplom i stället för ansvar;
// Steg 3 Del II Kap. 7 Befäl utan makt, Kap. 10 Delegation; Steg 4 Kap. 5 Ansvarspunkt, Kap. 10 Delegation.

import { l, type Module } from '../types';

export const m04: Module = {
  id: 'm04',
  num: 4,
  part: 2,
  title: l('Ansvar och befogenhet', 'Verantwortung und Befugnis', 'Responsibility and authority'),
  teaser: l(
    'Skillnaden mellan chefskap och befälhavarskap.',
    'Der Unterschied zwischen Chef sein und Befehlshaber sein.',
    'The difference between being a manager and being in command.',
  ),
  goal: l(
    'Du skiljer chef från befäl och makt från befäl, och känner igen ansvar utan mandat och mandat utan ansvar.',
    'Du unterscheidest Chef von Befehl und Macht von Befehl und erkennst Verantwortung ohne Mandat und Mandat ohne Verantwortung.',
    'You can tell a manager from command and power from command, and recognise responsibility without mandate and mandate without responsibility.',
  ),
  keyTerms: [
    l('Ansvarspunkt', 'Verantwortungspunkt', 'Responsibility point'),
    l('Mandat', 'Mandat', 'Mandate'),
    l('Befäl som funktion', 'Befehl als Funktion', 'Command as a function'),
    l('Kompetensformeln', 'Kompetenzformel', 'Competence formula'),
    l('Delegation i fem delar', 'Delegation in fünf Teilen', 'Delegation in five parts'),
  ],
  sources: [
    { book: 'steg1', ch: 'Kap. 11 Ledare, chef och befäl' },
    { book: 'steg2', ch: 'Kap. 3, 3.2 Titel och funktion; 3.5 Mandat och konsekvens' },
    { book: 'steg3-2', ch: 'Kap. 7 Befäl utan makt' },
    { book: 'steg3-1', ch: 'Kompetensformeln; Diplom i stället för ansvar' },
    { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt; Kap. 10 Delegation' },
  ],
  image: 'wheelhouse',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Ett fartyg kan inte drivas av diskussion', 'Ein Schiff lässt sich nicht durch Diskussion führen', 'A ship cannot be run by discussion'),
      slides: [
        {
          heading: l('Chef, ledare och befäl', 'Chef, Führungskraft und Befehl', 'Manager, leader and command'),
          body: [
            l(
              'Orden används ofta som synonymer. I praktiken beskriver de tre olika funktioner. En chef kan utses genom beslut. En ledare uppstår genom förtroende. Ett befäl definieras genom mandat och konsekvens.',
              'Die Wörter werden oft gleichbedeutend verwendet. In der Praxis beschreiben sie drei verschiedene Funktionen. Ein Chef kann per Beschluss ernannt werden. Eine Führungskraft entsteht durch Vertrauen. Ein Befehl wird durch Mandat und Konsequenz bestimmt.',
              'The words are often used as synonyms. In practice they describe three different functions. A manager can be appointed by decision. A leader emerges through trust. Command is defined by mandate and consequence.',
            ),
          ],
          list: [
            l('Chef är en position. Den är organisatorisk.', 'Chef ist eine Position. Sie ist organisatorisch.', 'Manager is a position. It is organisational.'),
            l('Ledare är en relation. Den är social.', 'Führungskraft ist eine Beziehung. Sie ist sozial.', 'Leader is a relationship. It is social.'),
            l('Befäl är ansvar. Det är strukturellt.', 'Befehl ist Verantwortung. Er ist strukturell.', 'Command is responsibility. It is structural.'),
          ],
          quote: {
            sv: 'Chef utan ansvar är administration. Ledare utan ansvar är inspiration. Befäl utan ansvar existerar inte.',
            de: 'Chef ohne Verantwortung ist Verwaltung. Führung ohne Verantwortung ist Inspiration. Befehl ohne Verantwortung gibt es nicht.',
            en: 'A manager without responsibility is administration. A leader without responsibility is inspiration. Command without responsibility does not exist.',
            src: { book: 'steg2', ch: 'Kap. 3, 3.2 Titel och funktion' },
          },
        },
        {
          heading: l('Ansvar är en punkt', 'Verantwortung ist ein Punkt', 'Responsibility is a point'),
          body: [
            l(
              '”Vi har ett gemensamt ansvar.” Det låter bra. Men ett beslut kan bara fattas en gång, och en konsekvens kan bara bäras av någon. Därför är ansvar inte en grupp. Det är en punkt: en funktion, en människa, ett namn.',
              '„Wir tragen gemeinsam Verantwortung.“ Das klingt gut. Aber eine Entscheidung kann nur einmal getroffen werden, und eine Konsequenz kann nur von jemandem getragen werden. Darum ist Verantwortung keine Gruppe. Sie ist ein Punkt: eine Funktion, ein Mensch, ein Name.',
              '“We share responsibility.” It sounds good. But a decision can only be made once, and a consequence can only be carried by someone. That is why responsibility is not a group. It is a point: a function, a person, a name.',
            ),
            l(
              'Till sjöss finns ingen tvekan. När något händer ombord finns alltid ett svar: befälhavaren. Det betyder inte att befälhavaren gör allt eller vet allt – utan att ansvaret inte är förhandlingsbart.',
              'Auf See gibt es kein Zögern. Wenn an Bord etwas passiert, gibt es immer eine Antwort: den Kapitän. Das heißt nicht, dass der Kapitän alles tut oder alles weiß – sondern dass die Verantwortung nicht verhandelbar ist.',
              'At sea there is no hesitation. When something happens on board, there is always an answer: the master. That does not mean the master does everything or knows everything – but that the responsibility is not negotiable.',
            ),
          ],
          quote: {
            sv: 'Ansvar som delas är ansvar som försvinner.',
            de: 'Geteilte Verantwortung ist verschwindende Verantwortung.',
            en: 'Responsibility that is shared is responsibility that disappears.',
            src: { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt' },
          },
        },
        {
          heading: l('Mandat och konsekvens', 'Mandat und Konsequenz', 'Mandate and consequence'),
          body: [
            l(
              'Mandat betyder: du har rätt att agera. Konsekvens betyder: du står för resultatet. Befäl uppstår när de två sammanfaller.',
              'Mandat bedeutet: Du hast das Recht zu handeln. Konsequenz bedeutet: Du stehst für das Ergebnis ein. Befehl entsteht, wo beides zusammenfällt.',
              'Mandate means: you have the right to act. Consequence means: you answer for the result. Command arises where the two coincide.',
            ),
          ],
          list: [
            l('Ansvar utan mandat är maktlöshet.', 'Verantwortung ohne Mandat ist Ohnmacht.', 'Responsibility without mandate is powerlessness.'),
            l('Mandat utan konsekvens är maktmissbruk.', 'Mandat ohne Konsequenz ist Machtmissbrauch.', 'Mandate without consequence is abuse of power.'),
          ],
          quote: {
            sv: 'Du kan delegera uppgift. Du kan inte delegera ansvar.',
            de: 'Du kannst Aufgaben delegieren. Verantwortung kannst du nicht delegieren.',
            en: 'You can delegate a task. You cannot delegate responsibility.',
            src: { book: 'steg2', ch: 'Kap. 3, 3.2 Titel och funktion' },
          },
        },
        {
          heading: l('Befäl utan makt', 'Befehl ohne Macht', 'Command without power'),
          image: 'scout-tents',
          body: [
            l(
              'Torbjörn är åtta år på sitt första scoutläger. Patrullerna ska hitta så många vimplar som möjligt i skogen. Han föreslår att de börjar längst ut på kartan, där ingen ännu har letat. De hittar fler vimplar än alla andra – men missar tidsgränsen och kommer tillbaka när prisutdelningen redan är över. De får ett tröstpris.',
              'Torbjörn ist acht Jahre alt, auf seinem ersten Pfadfinderlager. Die Gruppen sollen im Wald so viele Wimpel wie möglich finden. Er schlägt vor, ganz außen auf der Karte zu beginnen, wo noch niemand gesucht hat. Sie finden mehr Wimpel als alle anderen – verpassen aber die Zeitgrenze und kommen zurück, als die Preisverleihung schon vorbei ist. Sie bekommen einen Trostpreis.',
              'Torbjörn is eight years old, at his first scout camp. The patrols have to find as many pennants as possible in the forest. He suggests starting at the far edge of the map, where nobody has looked yet. They find more pennants than anyone else – but miss the time limit and come back after the prize-giving is over. They get a consolation prize.',
            ),
            l(
              '”Jag hade inte varit ledare. Jag hade inte haft någon titel. Jag hade inte haft någon makt över de andra. Ändå hade jag i praktiken tagit befäl.”',
              '„Ich war kein Anführer gewesen. Ich hatte keinen Titel gehabt. Ich hatte keine Macht über die anderen gehabt. Trotzdem hatte ich in der Praxis Befehl übernommen.“',
              '“I had not been a leader. I had not had a title. I had not had any power over the others. Yet in practice I had taken command.”',
            ),
          ],
          quote: {
            sv: 'Makt försöker styra människor. Befäl försöker stabilisera en situation.',
            de: 'Macht versucht, Menschen zu steuern. Befehl versucht, eine Situation zu stabilisieren.',
            en: 'Power tries to steer people. Command tries to stabilise a situation.',
            src: { book: 'steg3-2', ch: 'Kap. 7 Befäl utan makt' },
          },
        },
        {
          heading: l('Kompetensformeln', 'Die Kompetenzformel', 'The competence formula'),
          body: [
            l(
              'Utbildning är när någon berättar något för dig. Kunskap är när du förstår det som berättas. Kompetens är när du ansvarar för resultatet.',
              'Ausbildung ist, wenn dir jemand etwas erzählt. Wissen ist, wenn du verstehst, was erzählt wird. Kompetenz ist, wenn du für das Ergebnis verantwortlich bist.',
              'Training is when someone tells you something. Knowledge is when you understand what is being told. Competence is when you are responsible for the result.',
            ),
            l(
              'Certifikatet visar kunskap och träning. Behörigheten betyder att organisationen har gett mandat. Först när de förenas med ansvar uppstår kompetens.',
              'Das Zertifikat zeigt Wissen und Training. Die Befugnis bedeutet, dass die Organisation ein Mandat erteilt hat. Erst wenn beides mit Verantwortung zusammenkommt, entsteht Kompetenz.',
              'The certificate shows knowledge and training. Authorisation means the organisation has given a mandate. Only when they are joined with responsibility does competence arise.',
            ),
          ],
          quote: {
            sv: 'Kompetens är inte en kurs. Kompetens är ett ansvar.',
            de: 'Kompetenz ist kein Kurs. Kompetenz ist eine Verantwortung.',
            en: 'Competence is not a course. Competence is a responsibility.',
            src: { book: 'steg3-1', ch: 'Skillnaden mellan utbildning och kompetens' },
          },
        },
      ],
      cards: [
        { term: l('Chef', 'Chef', 'Manager'), text: l('En position – organisatorisk, tilldelad.', 'Eine Position – organisatorisch, verliehen.', 'A position – organisational, assigned.') },
        { term: l('Ledare', 'Führungskraft', 'Leader'), text: l('En relation – uppstår genom förtroende.', 'Eine Beziehung – entsteht durch Vertrauen.', 'A relationship – arises through trust.') },
        { term: l('Befäl', 'Befehl', 'Command'), text: l('Ansvar – definieras genom mandat och konsekvens.', 'Verantwortung – bestimmt durch Mandat und Konsequenz.', 'Responsibility – defined by mandate and consequence.') },
        { term: l('Ansvarspunkt', 'Verantwortungspunkt', 'Responsibility point'), text: l('En funktion. En människa. Ett namn.', 'Eine Funktion. Ein Mensch. Ein Name.', 'A function. A person. A name.') },
        { term: l('Mandat', 'Mandat', 'Mandate'), text: l('Rätten att agera – kopplad till skyldigheten att bära konsekvensen.', 'Das Recht zu handeln – verbunden mit der Pflicht, die Konsequenz zu tragen.', 'The right to act – tied to the duty to carry the consequence.') },
      ],
    },
    {
      slug: 'ansvarspunkt',
      type: 'finder',
      min: 6,
      title: l('Vem fattade beslutet?', 'Wer hat die Entscheidung getroffen?', 'Who made the decision?'),
      intro: l(
        'Fyra verkliga typer av fall. Bedöm svaret du får: ett namn, en funktion eller en process?',
        'Vier typische Fälle. Beurteile die Antwort, die du bekommst: ein Name, eine Funktion oder ein Prozess?',
        'Four typical cases. Judge the answer you get: a name, a function or a process?',
      ),
      cases: [
        {
          text: l('Ett utskick med fel säkerhetsdatablad har gått ut till en kund.', 'Ein Versand mit falschem Sicherheitsdatenblatt ist an einen Kunden gegangen.', 'A shipment with the wrong safety data sheet has gone out to a customer.'),
          answer: l('Det följde vår standardrutin för utskick.', 'Es folgte unserer Standardroutine für den Versand.', 'It followed our standard dispatch routine.'),
          kind: 'process',
          why: l('Rutinen fattade inget beslut. När svaret är en rutin har ingen burit beslutet.', 'Die Routine hat nichts entschieden. Wenn die Antwort eine Routine ist, hat niemand die Entscheidung getragen.', 'The routine decided nothing. When the answer is a routine, nobody carried the decision.'),
        },
        {
          text: l('En truck med kända bromsfel fick köras ett skift till.', 'Ein Stapler mit bekannten Bremsmängeln durfte noch eine Schicht fahren.', 'A forklift with known brake faults was allowed to run another shift.'),
          answer: l('Det var arbetsledningen som bedömde det.', 'Das hat die Arbeitsleitung so eingeschätzt.', 'The work supervisors assessed it that way.'),
          kind: 'function',
          why: l('Funktionen pekar åt rätt håll men inte på någon. Fråga en gång till: vem – med namn?', 'Die Funktion zeigt in die richtige Richtung, aber auf niemanden. Frag noch einmal: wer – mit Namen?', 'The function points in the right direction but at nobody. Ask once more: who – by name?'),
        },
        {
          text: l('Ett fartyg avgick trots att en ventil var under reparation.', 'Ein Schiff lief aus, obwohl ein Ventil in Reparatur war.', 'A ship sailed even though a valve was under repair.'),
          answer: l('Befälhavaren Karin Lund beslutade det efter samråd med maskinchefen.', 'Kapitänin Karin Lund hat es nach Rücksprache mit dem Leitenden Ingenieur entschieden.', 'The master, Karin Lund, decided it after consulting the chief engineer.'),
          kind: 'name',
          why: l('Ett namn och ett beslut. Samrådet ändrar inte vem som bar det.', 'Ein Name und eine Entscheidung. Die Rücksprache ändert nichts daran, wer sie getragen hat.', 'A name and a decision. The consultation does not change who carried it.'),
        },
        {
          text: l('Ett projekt fick dubbel budget mitt under året.', 'Ein Projekt bekam mitten im Jahr das doppelte Budget.', 'A project got double the budget halfway through the year.'),
          answer: l('Det växte fram i styrgruppen under hösten.', 'Das hat sich im Lenkungsausschuss im Herbst so ergeben.', 'It emerged in the steering group during the autumn.'),
          kind: 'process',
          why: l('”Det växte fram” är inte ett svar. Det är frånvaron av ett svar.', '„Es hat sich ergeben“ ist keine Antwort. Es ist die Abwesenheit einer Antwort.', '“It emerged” is not an answer. It is the absence of an answer.'),
        },
      ],
    },
    {
      slug: 'mandat',
      type: 'classify',
      min: 7,
      title: l('Ansvar och mandat – hänger de ihop?', 'Verantwortung und Mandat – passen sie zusammen?', 'Responsibility and mandate – do they match?'),
      intro: l(
        'Sortera situationerna. Befäl uppstår bara där mandat och konsekvens sammanfaller.',
        'Ordne die Situationen zu. Befehl entsteht nur dort, wo Mandat und Konsequenz zusammenfallen.',
        'Sort the situations. Command only arises where mandate and consequence coincide.',
      ),
      categories: [
        { id: 'ansvar', label: l('Ansvar utan mandat', 'Verantwortung ohne Mandat', 'Responsibility without mandate'), hint: l('maktlöshet', 'Ohnmacht', 'powerlessness') },
        { id: 'mandat', label: l('Mandat utan konsekvens', 'Mandat ohne Konsequenz', 'Mandate without consequence'), hint: l('makt utan ansvar', 'Macht ohne Verantwortung', 'power without responsibility') },
        { id: 'befal', label: l('De sammanfaller', 'Sie fallen zusammen', 'They coincide'), hint: l('befäl', 'Befehl', 'command') },
      ],
      items: [
        {
          text: l('Skyddsombudet ska ansvara för säkerheten men får inte stoppa ett arbete.', 'Der Sicherheitsbeauftragte soll für die Sicherheit verantwortlich sein, darf aber keine Arbeit stoppen.', 'The safety representative is responsible for safety but may not stop work.'),
          cat: 'ansvar',
          why: l('Ett ansvar som inte kan utövas är maktlöshet.', 'Eine Verantwortung, die nicht ausgeübt werden kann, ist Ohnmacht.', 'A responsibility that cannot be exercised is powerlessness.'),
        },
        {
          text: l('En chef beslutar om neddragningar men bär aldrig följderna när leveranserna faller.', 'Ein Chef beschließt Kürzungen, trägt aber nie die Folgen, wenn die Lieferungen einbrechen.', 'A manager decides on cutbacks but never carries the consequences when deliveries fail.'),
          cat: 'mandat',
          why: l('Mandat utan konsekvens är maktmissbruk.', 'Mandat ohne Konsequenz ist Machtmissbrauch.', 'Mandate without consequence is abuse of power.'),
        },
        {
          text: l('Överstyrmannen leder lastningen, fattar besluten på däck och vet att kaptenen bär ansvaret uppåt.', 'Der Erste Offizier leitet das Laden, trifft die Entscheidungen an Deck und weiß, dass der Kapitän die Verantwortung nach oben trägt.', 'The chief officer leads the loading, makes the decisions on deck and knows the master carries the responsibility upwards.'),
          cat: 'befal',
          why: l('Uppgift, mandat och en tydlig ansvarskedja uppåt – delegation som fungerar.', 'Aufgabe, Mandat und eine klare Verantwortungskette nach oben – Delegation, die funktioniert.', 'Task, mandate and a clear chain of responsibility upwards – delegation that works.'),
        },
        {
          text: l('Projektledaren ”äger” tidsplanen men får inte ändra bemanningen.', 'Die Projektleiterin „besitzt“ den Zeitplan, darf aber die Besetzung nicht ändern.', 'The project manager “owns” the schedule but may not change the staffing.'),
          cat: 'ansvar',
          why: l('Ett uppdrag utan mandat skapar frustration.', 'Ein Auftrag ohne Mandat erzeugt Frustration.', 'An assignment without mandate creates frustration.'),
        },
        {
          text: l('Konsulten ger råd som följs, men står aldrig för resultatet.', 'Der Berater gibt Ratschläge, die befolgt werden, steht aber nie für das Ergebnis ein.', 'The consultant gives advice that is followed, but never answers for the result.'),
          cat: 'mandat',
          why: l('”Råd ges utan ansvar.” Inflytandet bär ingen konsekvens.', '„Ratschläge werden ohne Verantwortung erteilt.“ Der Einfluss trägt keine Konsequenz.', '“Advice is given without responsibility.” The influence carries no consequence.'),
        },
        {
          text: l('Platschefen kan stoppa arbetet och står för beslutet inför ledningen.', 'Der Bauleiter kann die Arbeit stoppen und steht vor der Leitung für die Entscheidung ein.', 'The site manager can stop the work and answers for the decision to management.'),
          cat: 'befal',
          why: l('Rätten att agera och skyldigheten att stå för resultatet i samma punkt.', 'Das Recht zu handeln und die Pflicht, für das Ergebnis einzustehen, am selben Punkt.', 'The right to act and the duty to answer for the result in the same point.'),
        },
      ],
      src: { book: 'steg2', ch: 'Kap. 3, 3.5 Mandat och konsekvens' },
    },
    {
      slug: 'delegation',
      type: 'builder',
      tool: 'delegation',
      min: 8,
      title: l('Delegation i fem delar', 'Delegation in fünf Teilen', 'Delegation in five parts'),
      intro: l(
        'Ta en verklig uppgift som du delegerar – eller har fått delegerad. Fyll i de fem delarna. Där en del saknas svarar verktyget med bokens mening om vad som då händer.',
        'Nimm eine echte Aufgabe, die du delegierst – oder die dir delegiert wurde. Fülle die fünf Teile aus. Wo ein Teil fehlt, antwortet das Werkzeug mit dem Satz des Buchs darüber, was dann passiert.',
        'Take a real task that you delegate – or that has been delegated to you. Fill in the five parts. Where a part is missing, the tool answers with the book’s sentence on what happens then.',
      ),
      fields: [
        { id: 'mottagare', label: l('Vem tar emot uppdraget?', 'Wer übernimmt den Auftrag?', 'Who receives the assignment?'), help: l('Funktion och namn.', 'Funktion und Name.', 'Function and name.'), multiline: false },
        { id: 'uppdrag', label: l('1. Uppdraget', '1. Der Auftrag', '1. The assignment'), help: l('Vad ska uppnås?', 'Was soll erreicht werden?', 'What is to be achieved?') },
        { id: 'mandat', label: l('2. Mandatet', '2. Das Mandat', '2. The mandate'), help: l('Vilka beslut får personen fatta själv – och när ska hon kalla upp dig?', 'Welche Entscheidungen darf die Person selbst treffen – und wann soll sie dich rufen?', 'Which decisions may the person make alone – and when should they call you?') },
        { id: 'resurser', label: l('3. Resurserna', '3. Die Ressourcen', '3. The resources'), help: l('Tid, kompetens och verktyg.', 'Zeit, Kompetenz und Werkzeuge.', 'Time, competence and tools.') },
        { id: 'information', label: l('4. Informationen', '4. Die Information', '4. The information'), help: l('Vad behöver personen veta för att kunna agera?', 'Was muss die Person wissen, um handeln zu können?', 'What does the person need to know to be able to act?') },
        { id: 'ansvar', label: l('5. Ansvarsbäringen', '5. Die Verantwortungsträgerschaft', '5. Accountability'), help: l('Vem bär vad – och vem tar den första smällen om något går fel?', 'Wer trägt was – und wer steckt den ersten Schlag ein, wenn etwas schiefgeht?', 'Who carries what – and who takes the first hit if something goes wrong?') },
      ],
      checks: [
        { when: 'collective', field: 'mottagare', message: l('Ansvar som delas är ansvar som försvinner. Skriv en funktion och ett namn.', 'Geteilte Verantwortung ist verschwindende Verantwortung. Schreib eine Funktion und einen Namen.', 'Responsibility that is shared disappears. Write a function and a name.') },
        { when: 'missing', field: 'uppdrag', message: l('Ett mandat utan uppdrag skapar osäkerhet.', 'Ein Mandat ohne Auftrag erzeugt Unsicherheit.', 'A mandate without an assignment creates uncertainty.') },
        { when: 'missing', field: 'mandat', message: l('Ett uppdrag utan mandat skapar frustration.', 'Ein Auftrag ohne Mandat erzeugt Frustration.', 'An assignment without a mandate creates frustration.') },
        { when: 'missing', field: 'resurser', message: l('Ansvar utan resurser skapar uppgivenhet.', 'Verantwortung ohne Ressourcen erzeugt Resignation.', 'Responsibility without resources creates resignation.') },
        { when: 'missing', field: 'information', message: l('Utan tillgång till rätt information finns inget verkligt handlingsutrymme.', 'Ohne Zugang zur richtigen Information gibt es keinen echten Handlungsspielraum.', 'Without access to the right information there is no real room to act.') },
        { when: 'missing', field: 'ansvar', message: l('Ansvar kan flyttas i led, men det försvinner aldrig. Den som delegerar har kvar ansvaret för att delegationens struktur fungerar.', 'Verantwortung lässt sich über Stufen weitergeben, aber sie verschwindet nie. Wer delegiert, bleibt verantwortlich dafür, dass die Struktur der Delegation funktioniert.', 'Responsibility can be moved down the line, but it never disappears. Whoever delegates keeps responsibility for the structure of the delegation working.') },
      ],
      done: l(
        'Alla fem delar finns. Glöm inte den tysta överenskommelsen: ”Du fattar de beslut du måste fatta. Och om något går fel tar jag ansvar uppåt.”',
        'Alle fünf Teile sind da. Vergiss die stille Übereinkunft nicht: „Du triffst die Entscheidungen, die du treffen musst. Und wenn etwas schiefgeht, übernehme ich die Verantwortung nach oben.“',
        'All five parts are there. Remember the silent agreement: “You make the decisions you have to make. And if something goes wrong, I take responsibility upwards.”',
      ),
      src: { book: 'steg4', ch: 'Kap. 10 Delegation; Steg 3 del II, kap. 10' },
    },
    {
      slug: 'kompetensformeln',
      type: 'sequence',
      min: 6,
      title: l('Kompetensformeln', 'Die Kompetenzformel', 'The competence formula'),
      intro: l(
        'Från utbildning till resultat: sju steg. I vilken ordning kommer de?',
        'Von der Ausbildung zum Ergebnis: sieben Schritte. In welcher Reihenfolge kommen sie?',
        'From training to result: seven steps. In what order do they come?',
      ),
      steps: [
        { text: l('Utbildning', 'Ausbildung', 'Training'), why: l('Personen har blivit exponerad för innehållet – inte mer.', 'Die Person ist dem Inhalt ausgesetzt worden – mehr nicht.', 'The person has been exposed to the content – nothing more.') },
        { text: l('Certifikat', 'Zertifikat', 'Certificate'), why: l('Visad nivå av kunskap, träning, förståelse och prövad förmåga.', 'Gezeigtes Niveau an Wissen, Training, Verständnis und geprüfter Fähigkeit.', 'A demonstrated level of knowledge, training, understanding and tested ability.') },
        { text: l('Behörighet', 'Befugnis', 'Authorisation'), why: l('Organisationen säger: du får göra detta, du har mandat.', 'Die Organisation sagt: Du darfst das tun, du hast das Mandat.', 'The organisation says: you may do this, you have the mandate.') },
        { text: l('Ansvar', 'Verantwortung', 'Responsibility'), why: l('Det är du som svarar för utfallet. Inte gruppen, inte processen.', 'Du stehst für das Ergebnis ein. Nicht die Gruppe, nicht der Prozess.', 'You answer for the outcome. Not the group, not the process.') },
        { text: l('Kompetens', 'Kompetenz', 'Competence'), why: l('Certifikat + behörighet + ansvar, samman i en verklig funktion.', 'Zertifikat + Befugnis + Verantwortung, vereint in einer echten Funktion.', 'Certificate + authorisation + responsibility, held together in a real function.') },
        { text: l('Utförande', 'Ausführung', 'Execution'), why: l('Kompetens kopplad till en konkret uppgift.', 'Kompetenz, verbunden mit einer konkreten Aufgabe.', 'Competence linked to a concrete task.') },
        { text: l('Resultat', 'Ergebnis', 'Result'), why: l('Först nu får organisationen något verkligt.', 'Erst jetzt bekommt die Organisation etwas Wirkliches.', 'Only now does the organisation get something real.') },
      ],
      src: { book: 'steg3-1', ch: 'Kompetensformeln' },
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Ansvar och mandat i mitt liv', 'Verantwortung und Mandat in meinem Leben', 'Responsibility and mandate in my life'),
      prompts: [
        l('Var har jag ansvar men inget mandat – och vad gör jag åt det?', 'Wo habe ich Verantwortung, aber kein Mandat – und was tue ich dagegen?', 'Where do I have responsibility but no mandate – and what do I do about it?'),
        l('Var har jag mandat som jag inte bär konsekvensen för?', 'Wo habe ich ein Mandat, dessen Konsequenz ich nicht trage?', 'Where do I have a mandate whose consequence I do not carry?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Ett diplom visar kompetens.” Stämmer det?', '„Ein Diplom belegt Kompetenz.“ Stimmt das?', '“A diploma shows competence.” Is that true?'),
          options: [
            { text: l('Ja – det är ett bevis på genomgången utbildning.', 'Ja – es ist ein Nachweis über die absolvierte Ausbildung.', 'Yes – it proves completed training.'), ok: false, fb: l('Boken: diplomet är ett intyg på att du har deltagit – inte ett bevis på att du kan bära ansvar.', 'Das Buch: Das Diplom bescheinigt die Teilnahme – nicht, dass du Verantwortung tragen kannst.', 'The book: the diploma certifies that you took part – not that you can carry responsibility.') },
            { text: l('Nej – kompetens uppstår först när certifikat, behörighet och ansvar hålls samman.', 'Nein – Kompetenz entsteht erst, wenn Zertifikat, Befugnis und Verantwortung zusammenkommen.', 'No – competence only arises when certificate, authorisation and responsibility are held together.'), ok: true, fb: l('Ja. Kompetens är inte en kurs. Kompetens är ett ansvar.', 'Ja. Kompetenz ist kein Kurs. Kompetenz ist eine Verantwortung.', 'Yes. Competence is not a course. Competence is a responsibility.') },
          ],
          misconception: l('Att utbildning och kompetens är samma sak.', 'Dass Ausbildung und Kompetenz dasselbe sind.', 'That training and competence are the same thing.'),
        },
        {
          q: l('Vad finns kvar hos den som delegerar?', 'Was bleibt bei dem, der delegiert?', 'What remains with the person who delegates?'),
          options: [
            { text: l('Ingenting – ansvaret har lämnats över.', 'Nichts – die Verantwortung ist übergeben.', 'Nothing – the responsibility has been handed over.'), ok: false, fb: l('Ansvar kan flyttas i led, men det försvinner aldrig.', 'Verantwortung lässt sich über Stufen weitergeben, aber sie verschwindet nie.', 'Responsibility can be moved down the line, but it never disappears.') },
            { text: l('Ansvaret för att delegationens struktur fungerar: rätt person, rimligt mandat, resurser och uppföljning.', 'Die Verantwortung dafür, dass die Struktur der Delegation funktioniert: richtige Person, angemessenes Mandat, Ressourcen und Nachverfolgung.', 'Responsibility for the structure of the delegation working: the right person, a reasonable mandate, resources and follow-up.'), ok: true, fb: l('Ja. Att delegera är inte att bli fri från ansvar. Det är att organisera hur ansvar ska bäras.', 'Ja. Delegieren heißt nicht, frei von Verantwortung zu werden. Es heißt, zu organisieren, wie Verantwortung getragen wird.', 'Yes. Delegating is not becoming free of responsibility. It is organising how responsibility is carried.') },
            { text: l('Bara kontrollen av arbetet.', 'Nur die Kontrolle der Arbeit.', 'Only the control of the work.'), ok: false, fb: l('Delegation innebär inte mindre kontroll – utan tydligare ansvar.', 'Delegation bedeutet nicht weniger Kontrolle – sondern klarere Verantwortung.', 'Delegation does not mean less control – but clearer responsibility.') },
          ],
          misconception: l('Att delegation betyder att släppa taget.', 'Dass Delegation Loslassen bedeutet.', 'That delegation means letting go.'),
        },
        {
          q: l('Var sitter ett befäl – i titeln eller i konsekvensen?', 'Wo sitzt Befehl – im Titel oder in der Konsequenz?', 'Where does command sit – in the title or in the consequence?'),
          options: [
            { text: l('I titeln – den som är chef har befäl.', 'Im Titel – wer Chef ist, hat Befehl.', 'In the title – whoever is manager has command.'), ok: false, fb: l('En chef kan utses genom beslut. Befäl definieras genom mandat och konsekvens.', 'Ein Chef kann per Beschluss ernannt werden. Befehl wird durch Mandat und Konsequenz bestimmt.', 'A manager can be appointed by decision. Command is defined by mandate and consequence.') },
            { text: l('I mandat och konsekvens.', 'In Mandat und Konsequenz.', 'In mandate and consequence.'), ok: true, fb: l('Ja. Därför kan ett åttaårigt barn utan titel ta befäl – och en överstyrman med titel låta bli.', 'Ja. Darum kann ein achtjähriges Kind ohne Titel Befehl übernehmen – und ein Erster Offizier mit Titel es unterlassen.', 'Yes. That is why an eight-year-old without a title can take command – and a chief officer with a title can fail to.') },
          ],
          misconception: l('Att befäl följer av position.', 'Dass Befehl aus der Position folgt.', 'That command follows from position.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 4,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Gå igenom en delegering du har gett eller fått. Saknas någon av de fem delarna? Komplettera den.',
        'Geh eine Delegation durch, die du erteilt oder erhalten hast. Fehlt einer der fünf Teile? Ergänze ihn.',
        'Review a delegation you have given or received. Is any of the five parts missing? Complete it.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 5 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 5 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 5, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Fråga gruppen: ”Vem fattade beslutet?” om ett färskt exempel från deras egen verksamhet. Låt svaren komma. Paus. Säg: ”Ett namn, en funktion eller en process?”',
      'Frag die Gruppe zu einem aktuellen Beispiel aus ihrem eigenen Betrieb: „Wer hat die Entscheidung getroffen?“ Lass die Antworten kommen. Pause. Sag: „Ein Name, eine Funktion oder ein Prozess?“',
      'Ask the group about a recent example from their own work: “Who made the decision?” Let the answers come. Pause. Say: “A name, a function or a process?”',
    ),
    questions: [
      l('Var hos er finns ansvar utan mandat?', 'Wo gibt es bei euch Verantwortung ohne Mandat?', 'Where in your organisation is there responsibility without mandate?'),
      l('Vilken delegation hos er saknar en av de fem delarna?', 'Welcher Delegation bei euch fehlt einer der fünf Teile?', 'Which delegation in your organisation is missing one of the five parts?'),
      l('Finns den tysta överenskommelsen hos er – och vem tar den första smällen?', 'Gibt es bei euch die stille Übereinkunft – und wer steckt den ersten Schlag ein?', 'Does the silent agreement exist in your organisation – and who takes the first hit?'),
    ],
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
