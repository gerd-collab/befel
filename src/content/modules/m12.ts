// M12 · Börja om – i praktiken
// Sources: Steg 5 Kap. 9 Nollpunkten (AFS 2023:1–15), Kap. 10–14 (order of rebuilding), Kap. 22, Efterord;
// Steg 1 Kap. 20 Hägn – Habil – Hövisk, Kap. 22 Att börja om – på riktigt, Epilog; Kursupplägg tillfälle 7–8.

import { l, type Module } from '../types';

export const m12: Module = {
  id: 'm12',
  num: 12,
  part: 3,
  title: l('Börja om – i praktiken', 'Neu beginnen – in der Praxis', 'Begin again – in practice'),
  teaser: l(
    'Att leva med Oväld – i arbete, relationer och vardag.',
    'Mit Oväld leben – in Arbeit, Beziehungen und Alltag.',
    'Living with Oväld – at work, in relationships and in everyday life.',
  ),
  goal: l(
    'Du sätter en nollpunkt, bygger upp ett område från ansvarspositionen och formulerar ditt personliga hägn som avslutning.',
    'Du setzt einen Nullpunkt, baust einen Bereich von der Verantwortungsposition her neu auf und formulierst zum Abschluss dein persönliches Hägn.',
    'You set a zero point, rebuild an area from the position of responsibility, and formulate your personal hägn to close the course.',
  ),
  keyTerms: [
    l('Nollpunkten', 'Der Nullpunkt', 'The zero point'),
    l('Att sätta ansvarspunkt', 'Einen Verantwortungspunkt setzen', 'Setting a responsibility point'),
    l('Att stå kvar', 'Stehen bleiben', 'Standing firm'),
    l('Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk'),
    l('Börja om – igen', 'Neu beginnen – wieder', 'Begin again – once more'),
  ],
  sources: [
    { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
    { book: 'steg5', ch: 'Kap. 10–14 och Efterord' },
    { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
    { book: 'steg1', ch: 'Kap. 22 Att börja om – på riktigt; Epilog' },
  ],
  image: 'sunrise-blacksea',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Du kan inte börja om utan att först sluta', 'Du kannst nicht neu beginnen, ohne vorher aufzuhören', 'You cannot begin again without first stopping'),
      slides: [
        {
          heading: l('Nollpunkten', 'Der Nullpunkt', 'The zero point'),
          body: [
            l(
              'Alla vet vad som inte fungerar, men det finns kvar därför att ingen vill bära beslutet att ta bort det. I stället analyserar man, omorganiserar och lägger till – men man tar inte bort. Därför förändras ingenting.',
              'Alle wissen, was nicht funktioniert, aber es bleibt bestehen, weil niemand die Entscheidung tragen will, es abzuschaffen. Stattdessen wird analysiert, umorganisiert und ergänzt – aber nichts entfernt. Darum ändert sich nichts.',
              'Everyone knows what does not work, but it stays because nobody wants to carry the decision to remove it. Instead people analyse, reorganise and add – but nothing is removed. That is why nothing changes.',
            ),
            l(
              'Nollpunkten är ett beslut där något upphör, och det beslutet ska inte gå att missförstå, förhandla eller skjuta upp: Detta upphör nu.',
              'Der Nullpunkt ist eine Entscheidung, mit der etwas endet, und diese Entscheidung darf sich nicht missverstehen, verhandeln oder aufschieben lassen: Das endet jetzt.',
              'The zero point is a decision where something ends, and that decision must not be open to misunderstanding, negotiation or delay: This ends now.',
            ),
          ],
          quote: {
            sv: 'Det som inte fungerar ska inte förbättras, justeras eller döljas, utan det ska upphöra.',
            de: 'Was nicht funktioniert, soll nicht verbessert, angepasst oder versteckt werden, sondern aufhören.',
            en: 'What does not work should not be improved, adjusted or hidden – it should cease.',
            src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
          },
        },
        {
          heading: l('Ett exempel: AFS 2023:1–15', 'Ein Beispiel: AFS 2023:1–15', 'An example: AFS 2023:1–15'),
          body: [
            l(
              'Arbetsmiljöverkets regelverk bestod tidigare av ett stort antal författningssamlingar som vuxit fram över tid, med tillägg, ändringar och undantag ovanpå varandra. Det fungerade formellt, men inte operativt.',
              'Das Regelwerk der schwedischen Arbeitsschutzbehörde bestand früher aus einer großen Zahl von Vorschriftensammlungen, die über die Zeit gewachsen waren – mit Ergänzungen, Änderungen und Ausnahmen übereinander. Es funktionierte formal, aber nicht operativ.',
              'The Swedish Work Environment Authority’s rules used to consist of a large number of regulation collections that had grown over time, with additions, amendments and exceptions layered on top of each other. It worked formally, but not operationally.',
            ),
            l(
              'I stället för att fortsätta justera togs beslutet att börja om: de cirka 65 författningssamlingarna avvecklades och ersattes av en ny struktur – AFS 2023:1–15, i kraft 2025. Enklare att läsa, enklare att förstå, tydligare att tillämpa.',
              'Statt weiter nachzubessern, wurde entschieden, neu zu beginnen: Die rund 65 Vorschriftensammlungen wurden abgeschafft und durch eine neue Struktur ersetzt – AFS 2023:1–15, in Kraft seit 2025. Leichter zu lesen, leichter zu verstehen, klarer anzuwenden.',
              'Instead of continuing to adjust, the decision was taken to begin again: the roughly 65 regulation collections were abolished and replaced by a new structure – AFS 2023:1–15, in force from 2025. Easier to read, easier to understand, clearer to apply.',
            ),
          ],
          quote: {
            sv: 'Detta var inte en vidareutveckling, utan en nollpunkt.',
            de: 'Das war keine Weiterentwicklung, sondern ein Nullpunkt.',
            en: 'This was not a further development, but a zero point.',
            src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten – AFS 2023:1–15' },
          },
        },
        {
          heading: l('Tomrummet', 'Die Leere', 'The void'),
          body: [
            l(
              'Organisationer gör ofta motsatsen: de fyller på innan de har tömt. Därför växer systemen samtidigt som de förlorar sin funktion. Så länge det gamla finns kvar anpassar sig det nya efter det gamla.',
              'Organisationen tun oft das Gegenteil: Sie füllen auf, bevor sie geleert haben. Darum wachsen die Systeme, während sie ihre Funktion verlieren. Solange das Alte bleibt, passt sich das Neue dem Alten an.',
              'Organisations often do the opposite: they fill up before they have emptied. That is why systems grow while losing their function. As long as the old remains, the new adapts to the old.',
            ),
            l(
              'Först i tomrummet kan ansvar sättas. Ansvaret byggs sedan upp i en bestämd ordning: ansvarspunkt, mandat och konsekvens, gränsen – och verifikation.',
              'Erst in der Leere kann Verantwortung gesetzt werden. Danach wird sie in einer festen Reihenfolge aufgebaut: Verantwortungspunkt, Mandat und Konsequenz, die Grenze – und Verifikation.',
              'Only in the void can responsibility be placed. It is then built up in a set order: responsibility point, mandate and consequence, the boundary – and verification.',
            ),
          ],
          quote: {
            sv: 'När det gamla är borta återstår en fråga som inte kan undvikas: vem bär detta nu.',
            de: 'Wenn das Alte weg ist, bleibt eine Frage, der man nicht ausweichen kann: Wer trägt das jetzt?',
            en: 'When the old is gone, one question remains that cannot be avoided: who carries this now.',
            src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
          },
        },
        {
          heading: l('Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk'),
          body: [
            l(
              'Tre enkla ord. Hägn handlar om gränser: att avgränsa det som är ditt ansvar från det som inte är det. Habil handlar om förmåga i praktiken – inte potential, inte ambition. Hövisk handlar om hållning: att bära ansvar med värdighet.',
              'Drei einfache Wörter. Hägn handelt von Grenzen: abzugrenzen, was deine Verantwortung ist und was nicht. Habil handelt von Fähigkeit in der Praxis – nicht Potenzial, nicht Ehrgeiz. Hövisk handelt von Haltung: Verantwortung mit Würde zu tragen.',
              'Three simple words. Hägn is about boundaries: separating what is your responsibility from what is not. Habil is about ability in practice – not potential, not ambition. Hövisk is about bearing: carrying responsibility with dignity.',
            ),
            l(
              'Gränser utan förmåga blir tomma. Förmåga utan hållning blir farlig. Hållning utan ansvar blir poser.',
              'Grenzen ohne Fähigkeit werden leer. Fähigkeit ohne Haltung wird gefährlich. Haltung ohne Verantwortung wird Pose.',
              'Boundaries without ability become empty. Ability without bearing becomes dangerous. Bearing without responsibility becomes posing.',
            ),
          ],
          quote: {
            sv: 'De är inte till för att döma andra. De är till för att pröva sig själv.',
            de: 'Sie sind nicht dazu da, andere zu verurteilen. Sie sind dazu da, sich selbst zu prüfen.',
            en: 'They are not there to judge others. They are there to test yourself.',
            src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
          },
        },
        {
          heading: l('Börja om – igen', 'Neu beginnen – wieder', 'Begin again – once more'),
          body: [
            l(
              'Att börja om på riktigt innebär inte att riva ner allt. Det innebär att återställa det som bär: språket åter bundet till handling, systemen åter bundna till ansvar, och människor som åter tillåts vara ansvarsbärare.',
              'Wirklich neu zu beginnen heißt nicht, alles niederzureißen. Es heißt, wiederherzustellen, was trägt: Sprache wieder an Handeln gebunden, Systeme wieder an Verantwortung gebunden, und Menschen, die wieder Verantwortungsträger sein dürfen.',
              'Beginning again for real does not mean tearing everything down. It means restoring what carries: language bound to action again, systems bound to responsibility again, and people allowed to be bearers of responsibility again.',
            ),
            l(
              'De fem stegen i bokserien är egentligen ett och samma steg – upprepat på olika nivåer. Du börjar med dig själv, bygger stabilitet, leder andra, bygger system och bär konsekvensen. Och när allt fungerar: börjar du om.',
              'Die fünf Stufen der Buchreihe sind eigentlich ein und derselbe Schritt – wiederholt auf verschiedenen Ebenen. Du beginnst bei dir selbst, baust Stabilität auf, führst andere, baust Systeme und trägst die Konsequenz. Und wenn alles funktioniert: beginnst du neu.',
              'The five steps of the book series are really one and the same step – repeated at different levels. You start with yourself, build stability, lead others, build systems and carry the consequence. And when everything works: you begin again.',
            ),
          ],
          quote: {
            sv: 'Här slutar inte arbetet. Här börjar det.',
            de: 'Hier endet die Arbeit nicht. Hier beginnt sie.',
            en: 'This is not where the work ends. This is where it begins.',
            src: { book: 'steg1', ch: 'Kap. 22 Att börja om – på riktigt' },
          },
        },
      ],
      cards: [
        { term: l('Nollpunkten', 'Nullpunkt', 'Zero point'), text: l('”Detta upphör nu.” Utan undantag.', '„Das endet jetzt.“ Ohne Ausnahme.', '“This ends now.” Without exception.') },
        { term: l('Tomrummet', 'Die Leere', 'The void'), text: l('Där ansvar kan sättas – innan något nytt fyller det.', 'Wo Verantwortung gesetzt werden kann – bevor Neues sie füllt.', 'Where responsibility can be placed – before something new fills it.') },
        { term: l('Ansvarspunkt', 'Verantwortungspunkt', 'Responsibility point'), text: l('Första frågan efter nollpunkten: vem bär detta nu?', 'Die erste Frage nach dem Nullpunkt: Wer trägt das jetzt?', 'The first question after the zero point: who carries this now?') },
        { term: l('Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk', 'Hägn – Habil – Hövisk'), text: l('Gränser, förmåga, hållning.', 'Grenzen, Fähigkeit, Haltung.', 'Boundaries, ability, bearing.') },
        { term: l('Börja om – igen', 'Neu beginnen – wieder', 'Begin again – once more'), text: l('Från steg fem tillbaka till steg ett.', 'Von Stufe fünf zurück zu Stufe eins.', 'From step five back to step one.') },
      ],
    },
    {
      slug: 'nollpunkt',
      type: 'builder',
      tool: 'zeropoint',
      min: 8,
      title: l('Sätt en nollpunkt', 'Setze einen Nullpunkt', 'Set a zero point'),
      intro: l(
        'Välj något i ditt område som inte fungerar. Formulera beslutet så att det inte går att missförstå, förhandla eller skjuta upp.',
        'Wähle etwas in deinem Bereich, das nicht funktioniert. Formuliere die Entscheidung so, dass sie sich nicht missverstehen, verhandeln oder aufschieben lässt.',
        'Choose something in your area that does not work. Phrase the decision so that it cannot be misunderstood, negotiated or delayed.',
      ),
      fields: [
        { id: 'vad', label: l('Vad upphör?', 'Was endet?', 'What ends?'), help: l('Det som inte fungerar – utan undantag.', 'Was nicht funktioniert – ohne Ausnahme.', 'What does not work – without exception.') },
        { id: 'fungerar', label: l('Fungerar det?', 'Funktioniert es?', 'Does it work?'), help: l('Nollpunkten bryr sig inte om intentioner, historik eller förklaringar. Svara nej – och säg varför.', 'Der Nullpunkt kümmert sich nicht um Absichten, Geschichte oder Erklärungen. Antworte Nein – und sag warum.', 'The zero point does not care about intentions, history or explanations. Answer no – and say why.') },
        { id: 'vem', label: l('Vem fattar beslutet?', 'Wer trifft die Entscheidung?', 'Who makes the decision?'), help: l('En funktion och en människa.', 'Eine Funktion und ein Mensch.', 'A function and a person.'), multiline: false },
        { id: 'nar', label: l('Från när?', 'Ab wann?', 'From when?'), help: l('Ett datum.', 'Ein Datum.', 'A date.'), multiline: false },
        { id: 'ersatt', label: l('Vad måste finnas kvar – eller ersätta det?', 'Was muss bleiben – oder es ersetzen?', 'What must remain – or replace it?'), help: l('Bara det som är nödvändigt för att systemet ska fungera. Allt annat är överflöd.', 'Nur das, was nötig ist, damit das System funktioniert. Alles andere ist Überfluss.', 'Only what is necessary for the system to work. Everything else is surplus.') },
        { id: 'barare', label: l('Vem bär detta nu?', 'Wer trägt das jetzt?', 'Who carries this now?'), help: l('Den nya ansvarspunkten.', 'Der neue Verantwortungspunkt.', 'The new responsibility point.'), multiline: false },
      ],
      checks: [
        { when: 'missing', field: 'vad', message: l('Du kan inte börja om utan att först sluta.', 'Du kannst nicht neu beginnen, ohne vorher aufzuhören.', 'You cannot begin again without first stopping.') },
        { when: 'missing', field: 'vem', message: l('Detta kräver en ansvarspunkt: en funktion, en människa och ett beslut som bärs hela vägen.', 'Das verlangt einen Verantwortungspunkt: eine Funktion, einen Menschen und eine Entscheidung, die bis zum Ende getragen wird.', 'This requires a responsibility point: a function, a person and a decision carried all the way.') },
        { when: 'collective', field: 'vem', message: l('Ansvar som delas är ansvar som försvinner.', 'Geteilte Verantwortung ist verschwindende Verantwortung.', 'Responsibility that is shared disappears.') },
        { when: 'missing', field: 'nar', message: l('Beslutet ska inte gå att skjuta upp.', 'Die Entscheidung darf sich nicht aufschieben lassen.', 'The decision must not be possible to delay.') },
        { when: 'missing', field: 'barare', message: l('När det gamla är borta återstår en fråga som inte kan undvikas: vem bär detta nu.', 'Wenn das Alte weg ist, bleibt eine Frage, der man nicht ausweichen kann: Wer trägt das jetzt?', 'When the old is gone, one question remains that cannot be avoided: who carries this now.') },
        { when: 'collective', field: 'barare', message: l('Ansvar som delas är ansvar som försvinner.', 'Geteilte Verantwortung ist verschwindende Verantwortung.', 'Responsibility that is shared disappears.') },
      ],
      done: l(
        'Detta upphör nu. Nollpunkten är satt – och någon står kvar när konsekvensen kommer.',
        'Das endet jetzt. Der Nullpunkt ist gesetzt – und jemand bleibt stehen, wenn die Konsequenz kommt.',
        'This ends now. The zero point is set – and someone stands firm when the consequence comes.',
      ),
      src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
    },
    {
      slug: 'bygga-om',
      type: 'sequence',
      min: 7,
      title: l('Att bygga om – i vilken ordning?', 'Neu aufbauen – in welcher Reihenfolge?', 'Rebuilding – in what order?'),
      intro: l(
        'Efter nollpunkten byggs det som håller. Steg 5 ger en bestämd ordning. Vilken?',
        'Nach dem Nullpunkt wird aufgebaut, was hält. Stufe 5 gibt eine feste Reihenfolge vor. Welche?',
        'After the zero point, what holds is built. Step 5 gives a set order. Which one?',
      ),
      steps: [
        { text: l('Nollpunkten', 'Der Nullpunkt', 'The zero point'), why: l('Det som inte fungerar tas bort. Ett tomrum uppstår.', 'Was nicht funktioniert, wird entfernt. Es entsteht eine Leere.', 'What does not work is removed. A void appears.') },
        { text: l('Att sätta ansvarspunkt', 'Den Verantwortungspunkt setzen', 'Setting the responsibility point'), why: l('Först frågan: vem bär detta nu? En funktion, en människa, ett namn.', 'Zuerst die Frage: Wer trägt das jetzt? Eine Funktion, ein Mensch, ein Name.', 'First the question: who carries this now? A function, a person, a name.') },
        { text: l('Mandat och konsekvens', 'Mandat und Konsequenz', 'Mandate and consequence'), why: l('Den som bär ansvaret måste också kunna fatta beslut – och stå för dem.', 'Wer die Verantwortung trägt, muss auch entscheiden können – und dafür einstehen.', 'Whoever carries the responsibility must also be able to decide – and answer for it.') },
        { text: l('Att sätta gränsen', 'Die Grenze setzen', 'Setting the boundary'), why: l('Regler beskriver hur något ska vara. Gränsen visar vad som händer när det inte är så.', 'Regeln beschreiben, wie etwas sein soll. Die Grenze zeigt, was passiert, wenn es nicht so ist.', 'Rules describe how things should be. The boundary shows what happens when they are not.') },
        { text: l('Verifikation', 'Verifikation', 'Verification'), why: l('Kontrollera i nutid att ansvaret faktiskt bärs.', 'In der Gegenwart prüfen, dass die Verantwortung tatsächlich getragen wird.', 'Check in the present that the responsibility is actually carried.') },
        { text: l('System i funktion', 'System in Funktion', 'System in function'), why: l('Ansvar, beslut och konsekvens upprätthålls – och systemet bär sig självt.', 'Verantwortung, Entscheidung und Konsequenz werden aufrechterhalten – und das System trägt sich selbst.', 'Responsibility, decision and consequence are maintained – and the system carries itself.') },
      ],
      src: { book: 'steg5', ch: 'Del III–IV, Kap. 9–15' },
    },
    {
      slug: 'mitt-hagn',
      type: 'builder',
      tool: 'hagn',
      min: 6,
      title: l('Skriv ditt personliga hägn', 'Schreib dein persönliches Hägn', 'Write your personal hägn'),
      intro: l(
        'Övningen från kursens sjunde tillfälle. Inte som ideal att tala om – som kriterier att leva upp till.',
        'Die Übung aus dem siebten Kurstermin. Nicht als Ideal, über das man spricht – als Kriterien, an denen man sich messen lässt.',
        'The exercise from the seventh course session. Not as ideals to talk about – as criteria to live up to.',
      ),
      fields: [
        { id: 'hagn', label: l('Hägn – mina gränser', 'Hägn – meine Grenzen', 'Hägn – my boundaries'), help: l('Vad är mitt ansvar, och vad är det inte? Vad skyddar jag, vad prioriterar jag, vad säger jag nej till?', 'Was ist meine Verantwortung, und was nicht? Was schütze ich, was hat Vorrang, wozu sage ich Nein?', 'What is my responsibility, and what is not? What do I protect, what do I prioritise, what do I say no to?') },
        { id: 'habil', label: l('Habil – min förmåga', 'Habil – meine Fähigkeit', 'Habil – my ability'), help: l('Vad kan jag faktiskt, på en nivå andra kan lita på? Var räcker jag inte till?', 'Was kann ich tatsächlich, auf einem Niveau, auf das andere sich verlassen können? Wo reiche ich nicht aus?', 'What can I actually do, at a level others can rely on? Where am I not enough?') },
        { id: 'hovisk', label: l('Hövisk – min hållning', 'Hövisk – meine Haltung', 'Hövisk – my bearing'), help: l('Hur vill jag bära makt och beslut när det blir svårt – när beslutet drabbar någon?', 'Wie will ich Macht und Entscheidungen tragen, wenn es schwer wird – wenn die Entscheidung jemanden trifft?', 'How do I want to carry power and decisions when it gets hard – when the decision hurts someone?') },
        { id: 'underhall', label: l('Hur underhåller jag detta?', 'Wie halte ich das instand?', 'How do I maintain this?'), help: l('Habilitet är inget tillstånd. Den måste underhållas.', 'Habilität ist kein Zustand. Sie muss gepflegt werden.', 'Ability is not a state. It must be maintained.') },
      ],
      checks: [
        { when: 'missing', field: 'hagn', message: l('Utan gränser finns inget ansvar. Utan ansvar finns ingen frihet.', 'Ohne Grenzen gibt es keine Verantwortung. Ohne Verantwortung keine Freiheit.', 'Without boundaries there is no responsibility. Without responsibility there is no freedom.') },
        { when: 'missing', field: 'habil', message: l('Habilitet är förmåga i praktiken. Inte potential. Inte ambition.', 'Habilität ist Fähigkeit in der Praxis. Nicht Potenzial. Nicht Ehrgeiz.', 'Ability is ability in practice. Not potential. Not ambition.') },
        { when: 'missing', field: 'hovisk', message: l('Höviskhet visar sig särskilt i svåra situationer.', 'Höviskhet zeigt sich besonders in schwierigen Situationen.', 'Bearing shows itself especially in difficult situations.') },
        { when: 'missing', field: 'underhall', message: l('Verkligheten förändras. Det som fungerade i går kanske inte fungerar i morgon.', 'Die Wirklichkeit ändert sich. Was gestern funktionierte, funktioniert morgen vielleicht nicht.', 'Reality changes. What worked yesterday may not work tomorrow.') },
      ],
      done: l(
        'Gränser, förmåga och hållning. Tillsammans beskriver de en människa som går att lita på.',
        'Grenzen, Fähigkeit und Haltung. Zusammen beschreiben sie einen Menschen, auf den man sich verlassen kann.',
        'Boundaries, ability and bearing. Together they describe a person who can be trusted.',
      ),
      src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk; Kursupplägg, tillfälle 7' },
    },
    {
      slug: 'sluttest',
      type: 'selfassess',
      mode: 'exit',
      min: 5,
      title: l('Sluttest: Hägn – Habil – Hövisk', 'Abschlusstest: Hägn – Habil – Hövisk', 'Final test: Hägn – Habil – Hövisk'),
      intro: l(
        'Samma tio påståenden som i modul 1. Svara som det är i dag. Jämförelsen är bara din.',
        'Dieselben zehn Aussagen wie in Modul 1. Antworte, wie es heute ist. Der Vergleich gehört nur dir.',
        'The same ten statements as in module 1. Answer as things are today. The comparison is yours alone.',
      ),
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Vad tar du befäl över – nu?', 'Worüber übernimmst du jetzt Befehl?', 'What do you take command of – now?'),
      prompts: [
        l('Vad tar du befäl över – nu?', 'Worüber übernimmst du Befehl – jetzt?', 'What do you take command of – now?'),
        l('Vad har förändrats sedan modul 1 – och vad har inte det?', 'Was hat sich seit Modul 1 verändert – und was nicht?', 'What has changed since module 1 – and what has not?'),
      ],
      src: { book: 'steg1', ch: 'Kursupplägg, tillfälle 8 – avslutande uppgift' },
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Att börja om betyder att förbättra det befintliga i små steg.” Stämmer det?', '„Neu beginnen heißt, das Bestehende in kleinen Schritten zu verbessern.“ Stimmt das?', '“Beginning again means improving what exists in small steps.” Is that true?'),
          options: [
            { text: l('Ja – förändring sker bäst gradvis.', 'Ja – Veränderung geschieht am besten schrittweise.', 'Yes – change works best gradually.'), ok: false, fb: l('Så länge det gamla finns kvar anpassar sig det nya efter det gamla – och då blir inget nytt.', 'Solange das Alte bleibt, passt sich das Neue dem Alten an – und dann entsteht nichts Neues.', 'As long as the old remains, the new adapts to the old – and then nothing new comes about.') },
            { text: l('Nej – det som inte fungerar ska inte förbättras eller justeras. Det ska upphöra.', 'Nein – was nicht funktioniert, soll nicht verbessert oder angepasst werden. Es soll aufhören.', 'No – what does not work should not be improved or adjusted. It should cease.'), ok: true, fb: l('Ja. Du kan inte börja om utan att först sluta.', 'Ja. Du kannst nicht neu beginnen, ohne vorher aufzuhören.', 'Yes. You cannot begin again without first stopping.') },
          ],
          misconception: l('Att börja om är att lägga till.', 'Dass Neubeginnen Hinzufügen bedeutet.', 'That beginning again means adding.'),
        },
        {
          q: l('Varför sätts nollpunkten så sällan?', 'Warum wird der Nullpunkt so selten gesetzt?', 'Why is the zero point so rarely set?'),
          options: [
            { text: l('För att ingen vet vad som inte fungerar.', 'Weil niemand weiß, was nicht funktioniert.', 'Because nobody knows what does not work.'), ok: false, fb: l('Boken: alla vet vad som inte fungerar.', 'Das Buch: Alle wissen, was nicht funktioniert.', 'The book: everyone knows what does not work.') },
            { text: l('För att någon måste säga det – och sedan stå kvar när konsekvensen kommer.', 'Weil jemand es aussprechen muss – und dann stehen bleiben, wenn die Konsequenz kommt.', 'Because someone has to say it – and then stand firm when the consequence comes.'), ok: true, fb: l('Ja. Varje borttagning kostar tid, pengar, positioner och relationer.', 'Ja. Jede Abschaffung kostet Zeit, Geld, Positionen und Beziehungen.', 'Yes. Every removal costs time, money, positions and relationships.') },
          ],
          misconception: l('Att problemet är brist på kunskap.', 'Dass das Problem fehlendes Wissen ist.', 'That the problem is a lack of knowledge.'),
        },
        {
          q: l('Vad hände med Arbetsmiljöverkets föreskrifter?', 'Was geschah mit den Vorschriften der schwedischen Arbeitsschutzbehörde?', 'What happened to the Swedish Work Environment Authority’s regulations?'),
          options: [
            { text: l('De kompletterades med nya tillägg.', 'Sie wurden um neue Ergänzungen erweitert.', 'They were supplemented with new additions.'), ok: false, fb: l('Det var just så regelverket hade vuxit sig ohanterligt.', 'Genau so war das Regelwerk unhandhabbar geworden.', 'That was exactly how the rules had grown unmanageable.') },
            { text: l('Cirka 65 författningssamlingar avvecklades och ersattes av AFS 2023:1–15.', 'Rund 65 Vorschriftensammlungen wurden abgeschafft und durch AFS 2023:1–15 ersetzt.', 'About 65 regulation collections were abolished and replaced by AFS 2023:1–15.'), ok: true, fb: l('Ja. Inte en vidareutveckling – en nollpunkt.', 'Ja. Keine Weiterentwicklung – ein Nullpunkt.', 'Yes. Not a further development – a zero point.') },
          ],
          misconception: l('Att nollpunkter bara finns i teorin.', 'Dass es Nullpunkte nur in der Theorie gibt.', 'That zero points exist only in theory.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt sista befälsuppdrag', 'Dein letzter Befehlsauftrag', 'Your last command assignment'),
      text: l(
        'Inom 30 dagar: sätt en nollpunkt och en ny ansvarspunkt i ditt eget område.',
        'Innerhalb von 30 Tagen: Setze in deinem eigenen Bereich einen Nullpunkt und einen neuen Verantwortungspunkt.',
        'Within 30 days: set a zero point and a new responsibility point in your own area.',
      ),
      hint: l(
        'Detta är kursens sista befälsuppdrag. Ingen kommer att fråga dig om det. Det finns inget krav att hålla med – men verkligheten kräver alltid samma sak: att någon tar ansvar när det behövs.',
        'Das ist der letzte Befehlsauftrag des Kurses. Niemand wird dich danach fragen. Es gibt keine Pflicht, zuzustimmen – aber die Wirklichkeit verlangt immer dasselbe: dass jemand Verantwortung übernimmt, wenn es nötig ist.',
        'This is the course’s last command assignment. Nobody will ask you about it. There is no requirement to agree – but reality always demands the same thing: that someone takes responsibility when it is needed.',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Säg: ”Du kan inte börja om utan att först sluta.” Paus. Fråga: ”Vad hos er borde ha upphört för länge sedan?”',
      'Sag: „Du kannst nicht neu beginnen, ohne vorher aufzuhören.“ Pause. Frage: „Was hätte bei euch längst aufhören müssen?“',
      'Say: “You cannot begin again without first stopping.” Pause. Ask: “What in your organisation should have ended long ago?”',
    ),
    questions: [
      l('Vad lägger ni till – i stället för att ta bort?', 'Was fügt ihr hinzu – statt etwas zu entfernen?', 'What do you add – instead of removing?'),
      l('Vem skulle bära beslutet om nollpunkten hos er?', 'Wer würde bei euch die Entscheidung über den Nullpunkt tragen?', 'Who would carry the decision on the zero point in your organisation?'),
      l('Vad har förändrats hos er under de tolv veckorna – i handling, inte i ord?', 'Was hat sich bei euch in den zwölf Wochen verändert – im Handeln, nicht in Worten?', 'What has changed in your organisation over the twelve weeks – in action, not in words?'),
    ],
    close: l(
      '”Det finns inget krav att hålla med. Men verkligheten kräver alltid samma sak: att någon tar ansvar när det behövs. Den frågan lämnar jag hos er.” Paus. Tack. Punkt. Inga sista skämt. Inga uppmaningar till applåder.',
      '„Es gibt keine Pflicht, zuzustimmen. Aber die Wirklichkeit verlangt immer dasselbe: dass jemand Verantwortung übernimmt, wenn es nötig ist. Diese Frage lasse ich bei euch.“ Pause. Danke. Punkt. Keine letzten Witze. Keine Aufforderung zum Applaus.',
      '“There is no requirement to agree. But reality always demands the same thing: that someone takes responsibility when it is needed. I leave that question with you.” Pause. Thank you. Full stop. No last jokes. No calls for applause.',
    ),
  },
};
