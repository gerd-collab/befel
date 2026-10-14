// The models of the book series (LERNKONZEPT chapter 2.3), with the modules that use them.

import { l, type L, type Src } from './types';

export interface Model {
  id: string;
  name: L;
  essence: L;
  flow: L[];
  /** "chain" draws arrows between the steps, "set" shows separate parts. */
  shape: 'chain' | 'set';
  src: Src;
  modules: string[];
}

export const MODELS: Model[] = [
  {
    id: 'inversion',
    name: l('Inversion – barnlogik och vuxenlogik', 'Inversion – Kinderlogik und Erwachsenenlogik', 'Inversion – child logic and adult logic'),
    essence: l(
      'Vänd begreppet upp och ner. Där svaret på ”vem bär ansvar, vem beslutar, vem tar konsekvensen?” blir diffust, där finns systemfelet.',
      'Dreh den Begriff um. Wo die Antwort auf „Wer trägt Verantwortung, wer entscheidet, wer trägt die Konsequenz?“ unscharf wird, liegt der Systemfehler.',
      'Turn the concept upside down. Where the answer to “who carries responsibility, who decides, who takes the consequence?” becomes vague, that is where the system fault is.',
    ),
    flow: [
      l('Behov → ansvar', 'Bedürfnis → Verantwortung', 'Need → responsibility'),
      l('Rättigheter → skyldigheter', 'Rechte → Pflichten', 'Rights → duties'),
      l('Pengar → värde → utförande', 'Geld → Wert → Ausführung', 'Money → value → execution'),
      l('Kunskap → visad förmåga', 'Wissen → gezeigte Fähigkeit', 'Knowledge → demonstrated ability'),
    ],
    shape: 'set',
    src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
    modules: ['m01', 'm10'],
  },
  {
    id: 'tala',
    name: l('Tala eller debattera', 'Sprechen oder debattieren', 'Speaking or debating'),
    essence: l(
      'Att tala är att redovisa verklighet. Att debattera är att försvara position.',
      'Sprechen heißt, Wirklichkeit offenzulegen. Debattieren heißt, eine Position zu verteidigen.',
      'To speak is to account for reality. To debate is to defend a position.',
    ),
    flow: [
      l('Tala: ansvar för orden', 'Sprechen: Verantwortung für die Worte', 'Speaking: responsible for the words'),
      l('Debattera: söker bifall', 'Debattieren: sucht Zustimmung', 'Debating: seeks applause'),
    ],
    shape: 'set',
    src: { book: 'steg1', ch: 'Del 0, 0.1 När ord slutar betyda något' },
    modules: ['m01', 'm06'],
  },
  {
    id: 'hhh',
    name: l('Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk'),
    essence: l(
      'Gränser utan förmåga blir tomma. Förmåga utan hållning blir farlig. Hållning utan ansvar blir poser.',
      'Grenzen ohne Fähigkeit werden leer. Fähigkeit ohne Haltung wird gefährlich. Haltung ohne Verantwortung wird Pose.',
      'Boundaries without ability become empty. Ability without bearing becomes dangerous. Bearing without responsibility becomes posing.',
    ),
    flow: [
      l('Hägn: gränser → ansvar → frihet', 'Hägn: Grenzen → Verantwortung → Freiheit', 'Hägn: boundaries → responsibility → freedom'),
      l('Habil: faktisk förmåga, inte ambition', 'Habil: tatsächliche Fähigkeit, nicht Ambition', 'Habil: actual ability, not ambition'),
      l('Hövisk: makt med värdighet', 'Hövisk: Macht mit Würde', 'Hövisk: power with dignity'),
    ],
    shape: 'set',
    src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
    modules: ['m01', 'm12'],
  },
  {
    id: 'ovald',
    name: l('OVÄLD och WASTA', 'OVÄLD und WASTA', 'OVÄLD and WASTA'),
    essence: l(
      'OVÄLD: att stå fri från otillbörlig påverkan – att tänka, känna och handla utifrån eget omdöme. Motsatsen kallas WASTA – beroende, bekvämlighet och feghet.',
      'OVÄLD: frei von unzulässigem Einfluss – denken, fühlen und handeln aus eigenem Urteil. Das Gegenteil heißt WASTA – Abhängigkeit, Bequemlichkeit und Feigheit.',
      'OVÄLD: free of undue influence – thinking, feeling and acting from your own judgement. The opposite is called WASTA – dependence, convenience and cowardice.',
    ),
    flow: [
      l('OVÄLD: eget omdöme, prövbar', 'OVÄLD: eigenes Urteil, überprüfbar', 'OVÄLD: own judgement, open to scrutiny'),
      l('WASTA: beroende, bekvämlighet, feghet', 'WASTA: Abhängigkeit, Bequemlichkeit, Feigheit', 'WASTA: dependence, convenience, cowardice'),
    ],
    shape: 'set',
    src: { book: 'folder', ch: 'Webbkursens beskrivning' },
    modules: ['m03', 'm09'],
  },
  {
    id: 'chef',
    name: l('Chef – ledare – befäl', 'Chef – Führungskraft – Befehl', 'Manager – leader – command'),
    essence: l(
      'Chef är en position. Ledare är en relation. Befäl är ansvar. Ett befäl definieras genom mandat och konsekvens.',
      'Chef ist eine Position. Führungskraft ist eine Beziehung. Befehl ist Verantwortung. Ein Befehl wird durch Mandat und Konsequenz bestimmt.',
      'A manager is a position. A leader is a relationship. Command is responsibility. Command is defined by mandate and consequence.',
    ),
    flow: [
      l('Chef: organisatorisk', 'Chef: organisatorisch', 'Manager: organisational'),
      l('Ledare: relationell', 'Führungskraft: relational', 'Leader: relational'),
      l('Befäl: ansvarsbärande under osäkerhet', 'Befehl: verantwortungstragend unter Unsicherheit', 'Command: carrying responsibility under uncertainty'),
    ],
    shape: 'set',
    src: { book: 'steg1', ch: 'Kap. 11 Ledare, chef och befäl' },
    modules: ['m04'],
  },
  {
    id: 'inre-kedja',
    name: l('Den inre ansvarskedjan', 'Die innere Verantwortungskette', 'The inner chain of responsibility'),
    essence: l(
      'Om kedjan bryts uppstår ursäkter. Om kedjan hålls uppstår tillit.',
      'Reißt die Kette, entstehen Ausreden. Hält die Kette, entsteht Vertrauen.',
      'If the chain breaks, excuses appear. If the chain holds, trust appears.',
    ),
    flow: [l('Värdering', 'Wertung', 'Value'), l('Beslut', 'Entscheidung', 'Decision'), l('Handling', 'Handlung', 'Action'), l('Uppföljning', 'Nachverfolgung', 'Follow-up')],
    shape: 'chain',
    src: { book: 'steg2', ch: 'Kap. 4 Bygg din inre struktur, 4.6' },
    modules: ['m02'],
  },
  {
    id: 'kedja',
    name: l('Ansvarskedjan', 'Die Verantwortungskette', 'The chain of responsibility'),
    essence: l(
      'När något fallerar ska frågan vara: var brast ansvarskedjan? Inte: vem kan vi offra?',
      'Wenn etwas versagt, lautet die Frage: Wo ist die Verantwortungskette gerissen? Nicht: Wen können wir opfern?',
      'When something fails, the question is: where did the chain of responsibility break? Not: whom can we sacrifice?',
    ),
    flow: [
      l('Uppgift', 'Aufgabe', 'Task'),
      l('Utsedd ansvarig', 'Benannte verantwortliche Person', 'Designated person'),
      l('Mandat', 'Mandat', 'Mandate'),
      l('Uppföljning', 'Nachverfolgung', 'Follow-up'),
      l('Konsekvens', 'Konsequenz', 'Consequence'),
    ],
    shape: 'chain',
    src: { book: 'steg2', ch: 'Kap. 7 Skapa struktur omkring dig, 7.1; Kap. 9, 9.2' },
    modules: ['m07', 'm11'],
  },
  {
    id: 'att-skall-bor',
    name: l('ATT – SKALL – BÖR: tre sätt att tala', 'ATT – SKALL – BÖR: drei Arten zu sprechen', 'ATT – SKALL – BÖR: three ways of speaking'),
    essence: l(
      'Militärt, diplomatiskt och motiverande språk. De flesta civila organisationer hamnar i ett oklart mellanläge: order ges utan mandat, råd ges utan ansvar.',
      'Militärische, diplomatische und motivierende Sprache. Die meisten zivilen Organisationen landen in einer unklaren Zwischenlage: Befehle ohne Mandat, Ratschläge ohne Verantwortung.',
      'Military, diplomatic and motivating language. Most civilian organisations end up in an unclear middle: orders without mandate, advice without responsibility.',
    ),
    flow: [l('ATT – uppgift', 'ATT – Aufgabe', 'ATT – task'), l('SKALL – order', 'SKALL – Befehl', 'SKALL – order'), l('BÖR – riktning', 'BÖR – Richtung', 'BÖR – direction')],
    shape: 'set',
    src: { book: 'steg3-1', ch: 'Kommunikation och diplomati – Tre sätt att tala' },
    modules: ['m06'],
  },
  {
    id: 'skall-bor-kan',
    name: l('Skall – Bör – Kan – Skall inte – Låt bli', 'Muss – Soll – Kann – Darf nicht – Unterlassen', 'Must – Should – May – Must not – Failure to act'),
    essence: l(
      'Alla fungerande regelverk bygger på samma nivåer. I ”Kan” uppstår befäl. I ”Låt bli – Gör” avgörs allt: gör någon faktiskt det som krävs?',
      'Alle funktionierenden Regelwerke beruhen auf denselben Ebenen. Im „Kann“ entsteht Befehl. Im „Unterlassen – Tun“ entscheidet sich alles: Tut jemand tatsächlich, was nötig ist?',
      'Every working rulebook rests on the same levels. In “May”, command arises. In “Failure to act – Do”, everything is decided: does someone actually do what is required?',
    ),
    flow: [
      l('Skall – behöver', 'Muss – braucht', 'Must – needs'),
      l('Bör – vill', 'Soll – will', 'Should – wants'),
      l('Kan – kan', 'Kann – kann', 'May – can'),
      l('Skall inte – får', 'Darf nicht – darf', 'Must not – may'),
      l('Låt bli – gör', 'Unterlassen – tut', 'Failure to act – does'),
    ],
    shape: 'set',
    src: { book: 'steg3-1', ch: 'Skall – Bör – Kan – Låt bli' },
    modules: ['m04', 'm06'],
  },
  {
    id: 'kompetens',
    name: l('Kompetensformeln', 'Die Kompetenzformel', 'The competence formula'),
    essence: l(
      'Certifikat + behörighet + ansvar = kompetens. Utbildning är när någon berättar något för dig. Kompetens är när du ansvarar för resultatet.',
      'Zertifikat + Befugnis + Verantwortung = Kompetenz. Ausbildung ist, wenn dir jemand etwas erzählt. Kompetenz ist, wenn du für das Ergebnis verantwortlich bist.',
      'Certificate + authorisation + responsibility = competence. Training is when someone tells you something. Competence is when you are responsible for the result.',
    ),
    flow: [
      l('Utbildning', 'Ausbildung', 'Training'),
      l('Certifikat', 'Zertifikat', 'Certificate'),
      l('Behörighet', 'Befugnis', 'Authorisation'),
      l('Ansvar', 'Verantwortung', 'Responsibility'),
      l('Kompetens', 'Kompetenz', 'Competence'),
      l('Utförande', 'Ausführung', 'Execution'),
      l('Resultat', 'Ergebnis', 'Result'),
    ],
    shape: 'chain',
    src: { book: 'steg3-1', ch: 'Kompetensformeln' },
    modules: ['m04', 'm10'],
  },
  {
    id: 'raketen',
    name: l('Femstegsraketen', 'Die Fünf-Stufen-Rakete', 'The five-step escalation'),
    essence: l(
      'De flesta konflikter löses i steg ett eller två. Men modellen fungerar bara om alla vet att steg fem finns. Den kräver konflikt, känslor och kompetens.',
      'Die meisten Konflikte lösen sich in Stufe eins oder zwei. Aber das Modell funktioniert nur, wenn alle wissen, dass es Stufe fünf gibt. Es verlangt Konflikt, Gefühle und Kompetenz.',
      'Most conflicts are solved at step one or two. But the model only works if everyone knows that step five exists. It requires conflict, emotions and competence.',
    ),
    flow: [l('Skämta', 'Scherzen', 'Joke'), l('Förklara', 'Erklären', 'Explain'), l('Säg till', 'Ansagen', 'Tell'), l('Varning', 'Verwarnung', 'Warning'), l('Avsked', 'Trennung', 'Dismissal')],
    shape: 'chain',
    src: { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen' },
    modules: ['m08'],
  },
  {
    id: 'ansvarspunkt',
    name: l('Ansvarspunkten: namn, funktion eller process', 'Der Verantwortungspunkt: Name, Funktion oder Prozess', 'The responsibility point: name, function or process'),
    essence: l(
      'Ansvar är inte en grupp. Det är en punkt. En funktion. En människa. Ett namn. Testa med frågan: vem fattade beslutet?',
      'Verantwortung ist keine Gruppe. Sie ist ein Punkt. Eine Funktion. Ein Mensch. Ein Name. Teste mit der Frage: Wer hat die Entscheidung getroffen?',
      'Responsibility is not a group. It is a point. A function. A person. A name. Test it with the question: who made the decision?',
    ),
    flow: [
      l('Namn: ansvarspunkt finns', 'Name: Verantwortungspunkt vorhanden', 'Name: there is a responsibility point'),
      l('Funktion: tveksamt', 'Funktion: zweifelhaft', 'Function: doubtful'),
      l('Process: redan fallerat', 'Prozess: bereits versagt', 'Process: already failed'),
    ],
    shape: 'set',
    src: { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt' },
    modules: ['m04', 'm07'],
  },
  {
    id: 'delegation',
    name: l('Delegation i fem delar', 'Delegation in fünf Teilen', 'Delegation in five parts'),
    essence: l(
      'Ansvar kan flyttas i led, men det försvinner aldrig. Den som delegerar har kvar ansvaret för att delegationens struktur fungerar.',
      'Verantwortung lässt sich über Stufen weitergeben, aber sie verschwindet nie. Wer delegiert, bleibt verantwortlich dafür, dass die Struktur der Delegation funktioniert.',
      'Responsibility can be moved down the line, but it never disappears. Whoever delegates keeps the responsibility for the structure of the delegation working.',
    ),
    flow: [
      l('Uppdraget', 'Auftrag', 'Assignment'),
      l('Mandatet', 'Mandat', 'Mandate'),
      l('Resurserna', 'Ressourcen', 'Resources'),
      l('Informationen', 'Information', 'Information'),
      l('Ansvarsbäringen', 'Verantwortungsträgerschaft', 'Accountability'),
    ],
    shape: 'set',
    src: { book: 'steg4', ch: 'Kap. 10 Delegation' },
    modules: ['m04'],
  },
  {
    id: 'fortroende',
    name: l('Förtroende → delegation → arbete → resultat', 'Vertrauen → Delegation → Arbeit → Ergebnis', 'Trust → delegation → work → result'),
    essence: l(
      'Det är först när människor litar på varandra som ansvar kan flyttas nedåt i organisationen. Utan förtroende ersätts det av möten, rapporter och checklistor.',
      'Erst wenn Menschen einander vertrauen, kann Verantwortung in der Organisation nach unten wandern. Ohne Vertrauen wird sie durch Sitzungen, Berichte und Checklisten ersetzt.',
      'Only when people trust each other can responsibility move down the organisation. Without trust it is replaced by meetings, reports and checklists.',
    ),
    flow: [l('Förtroende', 'Vertrauen', 'Trust'), l('Delegation', 'Delegation', 'Delegation'), l('Arbete', 'Arbeit', 'Work'), l('Resultat', 'Ergebnis', 'Result')],
    shape: 'chain',
    src: { book: 'steg3-2', ch: 'Kap. 9 Förtroende – Kap. 10 Delegation' },
    modules: ['m07'],
  },
  {
    id: 'arbetsgladje',
    name: l('Arbetsglädjens formel', 'Die Formel der Arbeitsfreude', 'The formula of joy in work'),
    essence: l(
      'Arbetsglädje uppstår när tre saker möts: uppgift, kompetens och ansvar. Arbete kräver ansvar, hobby kräver frihet – när inget av detta finns kvar återstår sysselsättning.',
      'Arbeitsfreude entsteht, wenn drei Dinge zusammenkommen: Aufgabe, Kompetenz und Verantwortung. Arbeit verlangt Verantwortung, Hobby verlangt Freiheit – fehlt beides, bleibt Beschäftigung.',
      'Joy in work arises when three things meet: task, competence and responsibility. Work requires responsibility, a hobby requires freedom – when neither is left, what remains is busywork.',
    ),
    flow: [l('Uppgift', 'Aufgabe', 'Task'), l('Kompetens', 'Kompetenz', 'Competence'), l('Ansvar', 'Verantwortung', 'Responsibility')],
    shape: 'set',
    src: { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning' },
    modules: ['m09', 'm10'],
  },
  {
    id: 'konsekvensanalys',
    name: l('Konsekvensanalys i fem steg', 'Konsequenzanalyse in fünf Schritten', 'Consequence analysis in five steps'),
    essence: l(
      'Analysen är inte avslutad när den är skriven, utan först när beslutet är fattat och ansvaret fördelat. Tidigt beslut = planerat underhåll, sent = löpande underhåll, efteråt = reparation.',
      'Die Analyse ist nicht fertig, wenn sie geschrieben ist, sondern erst, wenn entschieden und die Verantwortung verteilt ist. Frühe Entscheidung = geplante Wartung, späte = laufende Wartung, danach = Reparatur.',
      'The analysis is not finished when it is written, only when the decision is made and responsibility assigned. Early decision = planned maintenance, late = running maintenance, afterwards = repair.',
    ),
    flow: [
      l('Nuläget utan försköning', 'Ist-Zustand ohne Beschönigung', 'Current state, unvarnished'),
      l('Om inget beslut fattas …', 'Wenn nichts entschieden wird …', 'If no decision is made …'),
      l('Beslutspunkten', 'Entscheidungspunkt', 'Decision point'),
      l('Åtgärden', 'Maßnahme', 'Action'),
      l('Ansvarspunkten', 'Verantwortungspunkt', 'Responsibility point'),
    ],
    shape: 'chain',
    src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys' },
    modules: ['m05', 'm11'],
  },
  {
    id: 'ovk',
    name: l('Orsak → Verkan → Konsekvens', 'Ursache → Wirkung → Konsequenz', 'Cause → effect → consequence'),
    essence: l(
      'Det genomgående analysformatet i Steg 5. Varje val i kursens scenarier visas i detta format – och med svaret på vem som bär konsekvensen.',
      'Das durchgehende Analyseformat in Stufe 5. Jede Wahl in den Szenarien dieses Kurses wird so dargestellt – mit der Antwort, wer die Konsequenz trägt.',
      'The analysis format used throughout Step 5. Every choice in this course’s scenarios is shown in this format – with the answer to who carries the consequence.',
    ),
    flow: [l('Orsak', 'Ursache', 'Cause'), l('Verkan', 'Wirkung', 'Effect'), l('Konsekvens', 'Konsequenz', 'Consequence')],
    shape: 'chain',
    src: { book: 'steg5', ch: 'genomgående' },
    modules: ['m05', 'm12'],
  },
  {
    id: 'nollpunkten',
    name: l('Nollpunkten', 'Der Nullpunkt', 'The zero point'),
    essence: l(
      'Du kan inte börja om utan att först sluta. Nollpunkten är ett beslut där något upphör – och det beslutet ska inte gå att missförstå, förhandla eller skjuta upp.',
      'Du kannst nicht neu beginnen, ohne vorher aufzuhören. Der Nullpunkt ist eine Entscheidung, mit der etwas endet – unmissverständlich, unverhandelbar, ohne Aufschub.',
      'You cannot begin again without first stopping. The zero point is a decision where something ends – and that decision must not be open to misunderstanding, negotiation or delay.',
    ),
    flow: [
      l('Fungerar det?', 'Funktioniert es?', 'Does it work?'),
      l('Detta upphör nu', 'Das endet jetzt', 'This ends now'),
      l('Tomrum', 'Leere', 'Void'),
      l('Vem bär detta nu?', 'Wer trägt das jetzt?', 'Who carries this now?'),
    ],
    shape: 'chain',
    src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
    modules: ['m12'],
  },
  {
    id: 'moten',
    name: l('Fyra sorters människor i ett möte', 'Vier Arten von Menschen in einer Besprechung', 'Four kinds of people in a meeting'),
    essence: l(
      'Vissa möten leder till handling, andra blir ännu en timme på vägen mot hemgång. Befäl uppstår ofta hos den tredje – inte genom titel, utan genom riktning.',
      'Manche Besprechungen führen zum Handeln, andere werden nur eine weitere Stunde auf dem Weg zum Feierabend. Befehl entsteht oft beim Dritten – nicht durch Titel, sondern durch Richtung.',
      'Some meetings lead to action, others become one more hour on the way home. Command often arises with the third person – not through title, but through direction.',
    ),
    flow: [
      l('Beskriver problemet', 'Beschreibt das Problem', 'Describes the problem'),
      l('Administrerar problemet', 'Verwaltet das Problem', 'Administers the problem'),
      l('Löser problemet', 'Löst das Problem', 'Solves the problem'),
      l('Vill inte förstå', 'Will nicht verstehen', 'Does not want to understand'),
    ],
    shape: 'set',
    src: { book: 'steg3-1', ch: 'Fyra sorters människor i ett möte' },
    modules: ['m06'],
  },
];
