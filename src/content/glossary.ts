// B14 – term cards. Swedish term first (the books' language), then translation and meaning.

import { l, type L, type Src } from './types';

export interface Term {
  sv: string;
  name: L;
  text: L;
  src: Src;
}

export const GLOSSARY: Term[] = [
  {
    sv: 'Ta befäl',
    name: l('Ta befäl', 'Befehl übernehmen', 'Take command'),
    text: l(
      'Att bära ansvaret i en situation där det annars faller mellan människor, roller eller system. Börjar inåt: att vägra vara tyst när man vet bättre.',
      'Die Verantwortung in einer Situation tragen, in der sie sonst zwischen Menschen, Rollen oder Systemen verloren geht. Beginnt innen: sich weigern zu schweigen, wenn man es besser weiß.',
      'Carrying responsibility in a situation where it would otherwise fall between people, roles or systems. It starts within: refusing to stay silent when you know better.',
    ),
    src: { book: 'steg3-1', ch: 'Inledning' },
  },
  {
    sv: 'Befäl',
    name: l('Befäl', 'Befehl (Befehlsfunktion)', 'Command'),
    text: l(
      'En ansvarsbärande funktion som aktiveras när beslut måste fattas under osäkerhet och konsekvenserna inte kan delas eller skjutas vidare.',
      'Eine verantwortungstragende Funktion, die greift, wenn unter Unsicherheit entschieden werden muss und die Folgen nicht geteilt oder weitergeschoben werden können.',
      'A responsibility-bearing function that comes into play when decisions must be made under uncertainty and the consequences cannot be shared or passed on.',
    ),
    src: { book: 'steg1', ch: 'Kap. 11 Ledare, chef och befäl' },
  },
  {
    sv: 'OVÄLD',
    name: l('OVÄLD', 'OVÄLD (unbeeinflusst)', 'OVÄLD (free of undue influence)'),
    text: l(
      'Att stå fri från otillbörlig påverkan – att tänka, känna och handla utifrån eget omdöme. I böckerna: opartisk och prövbar.',
      'Frei sein von unzulässigem Einfluss – denken, fühlen und handeln aus eigenem Urteil. In den Büchern: unparteiisch und überprüfbar.',
      'Standing free of undue influence – thinking, feeling and acting from your own judgement. In the books: impartial and open to scrutiny.',
    ),
    src: { book: 'folder', ch: 'Webbkursens beskrivning' },
  },
  {
    sv: 'WASTA',
    name: l('WASTA', 'WASTA (Abhängigkeit)', 'WASTA (dependence)'),
    text: l(
      'Motsatsen till OVÄLD: beroende, bekvämlighet och feghet. I kursen ett beteendemönster – aldrig en egenskap hos en kultur eller ett ursprung.',
      'Das Gegenteil von OVÄLD: Abhängigkeit, Bequemlichkeit und Feigheit. Im Kurs ein Verhaltensmuster – nie ein Merkmal einer Kultur oder Herkunft.',
      'The opposite of OVÄLD: dependence, convenience and cowardice. In this course a pattern of behaviour – never a trait of a culture or origin.',
    ),
    src: { book: 'folder', ch: 'Webbkursens beskrivning' },
  },
  {
    sv: 'Ansvarspunkt',
    name: l('Ansvarspunkt', 'Verantwortungspunkt', 'Responsibility point'),
    text: l(
      'Den punkt där ansvaret samlas: en funktion, en människa, ett namn. Ska fatta beslut, bära konsekvens och stå kvar när det blåser.',
      'Der Punkt, an dem Verantwortung zusammenläuft: eine Funktion, ein Mensch, ein Name. Entscheidet, trägt die Konsequenz und bleibt stehen, wenn es stürmt.',
      'The point where responsibility gathers: a function, a person, a name. It decides, carries the consequence and stands firm when the wind blows.',
    ),
    src: { book: 'steg4', ch: 'Kap. 5 Ansvarspunkt' },
  },
  {
    sv: 'Mandat',
    name: l('Mandat', 'Mandat', 'Mandate'),
    text: l(
      'Rätten att agera och fatta beslut. Ansvar utan mandat är maktlöshet. Mandat utan konsekvens är maktmissbruk.',
      'Das Recht zu handeln und zu entscheiden. Verantwortung ohne Mandat ist Ohnmacht. Mandat ohne Konsequenz ist Machtmissbrauch.',
      'The right to act and decide. Responsibility without mandate is powerlessness. Mandate without consequence is abuse of power.',
    ),
    src: { book: 'steg2', ch: 'Kap. 3 Utse dig själv, 3.5' },
  },
  {
    sv: 'Ansvarskedjan',
    name: l('Ansvarskedjan', 'Verantwortungskette', 'Chain of responsibility'),
    text: l(
      'Uppgift, utsedd ansvarig, mandat, uppföljning, konsekvens. Saknas en länk uppstår friktion – och efteråt söker man skuld.',
      'Aufgabe, benannte verantwortliche Person, Mandat, Nachverfolgung, Konsequenz. Fehlt ein Glied, entsteht Reibung – und hinterher sucht man Schuld.',
      'Task, designated person, mandate, follow-up, consequence. If a link is missing, friction appears – and afterwards people look for blame.',
    ),
    src: { book: 'steg2', ch: 'Kap. 7 Skapa struktur omkring dig, 7.1' },
  },
  {
    sv: 'Femstegsraketen',
    name: l('Femstegsraketen', 'Fünf-Stufen-Rakete', 'Five-step escalation'),
    text: l(
      'Skämta, förklara, säg till, varning, avsked. De tre första är kommunikation mellan människor; från steg fyra blir frågan en fråga för systemet.',
      'Scherzen, erklären, ansagen, Verwarnung, Trennung. Die ersten drei sind Kommunikation zwischen Menschen; ab Stufe vier wird die Frage zur Sache des Systems.',
      'Joke, explain, tell, warning, dismissal. The first three are communication between people; from step four the question becomes a matter for the system.',
    ),
    src: { book: 'steg3-2', ch: 'Kap. 8 Att sätta gränsen' },
  },
  {
    sv: 'Gränssättning',
    name: l('Gränssättning', 'Grenzsetzung', 'Setting boundaries'),
    text: l(
      'Regler beskriver hur något ska vara. Gränser visar vad som händer när det inte är så. Gränssättning skapar inte konflikt – den synliggör den som redan finns.',
      'Regeln beschreiben, wie etwas sein soll. Grenzen zeigen, was passiert, wenn es nicht so ist. Grenzsetzung schafft keinen Konflikt – sie macht den vorhandenen sichtbar.',
      'Rules describe how something should be. Boundaries show what happens when it is not. Setting boundaries does not create conflict – it reveals the conflict that already exists.',
    ),
    src: { book: 'steg4', ch: 'Kap. 11 Gränssättning' },
  },
  {
    sv: 'Konsekvens',
    name: l('Konsekvens', 'Konsequenz', 'Consequence'),
    text: l(
      'Konsekvens är inte straff. Det är återkoppling – systemets sätt att säga: detta var inte acceptabelt.',
      'Konsequenz ist keine Strafe. Sie ist Rückmeldung – die Art des Systems zu sagen: Das war nicht akzeptabel.',
      'Consequence is not punishment. It is feedback – the system’s way of saying: this was not acceptable.',
    ),
    src: { book: 'steg4', ch: 'Kap. 8 Verifikation' },
  },
  {
    sv: 'Att stå kvar',
    name: l('Att stå kvar', 'Stehen bleiben', 'Standing firm'),
    text: l(
      'Att ta befäl är ett beslut. Att stå kvar är ett ansvar. Principfasthet lyssnar – men viker sig inte från grund.',
      'Befehl zu übernehmen ist eine Entscheidung. Stehen zu bleiben ist eine Verantwortung. Grundsatztreue hört zu – weicht aber nicht vom Fundament.',
      'Taking command is a decision. Standing firm is a responsibility. Firmness of principle listens – but does not give way on the foundation.',
    ),
    src: { book: 'steg2', ch: 'Kap. 6 Stå kvar när det blåser' },
  },
  {
    sv: 'Opartiskhet',
    name: l('Opartiskhet', 'Unparteilichkeit', 'Impartiality'),
    text: l(
      'Inte samma sak som neutralitet. Neutralitet är att inte ta ställning. Opartiskhet är att ta ställning utifrån princip – oavsett relation.',
      'Nicht dasselbe wie Neutralität. Neutralität heißt, keine Stellung zu beziehen. Unparteilichkeit heißt, aus Prinzip Stellung zu beziehen – unabhängig von Beziehungen.',
      'Not the same as neutrality. Neutrality is not taking a position. Impartiality is taking a position on principle – regardless of relationships.',
    ),
    src: { book: 'steg2', ch: 'Kap. 5, 5.1 Opartiskhet och neutralitet' },
  },
  {
    sv: 'Prövbar',
    name: l('Prövbar', 'Überprüfbar', 'Open to scrutiny'),
    text: l(
      'Att beslut kan granskas, argument testas och handlingar följas upp. Den som undviker insyn undviker ansvar.',
      'Entscheidungen können geprüft, Argumente getestet und Handlungen nachverfolgt werden. Wer Einblick vermeidet, vermeidet Verantwortung.',
      'Decisions can be examined, arguments tested and actions followed up. Whoever avoids scrutiny avoids responsibility.',
    ),
    src: { book: 'steg2', ch: 'Kap. 10 Bli prövbar' },
  },
  {
    sv: 'Inversion',
    name: l('Inversion', 'Inversion', 'Inversion'),
    text: l(
      'En felsökningsmetod, inte en åsikt: vänd begreppet och fråga vem som då bär ansvar, beslutar och tar konsekvensen.',
      'Eine Methode der Fehlersuche, keine Meinung: Dreh den Begriff um und frage, wer dann Verantwortung trägt, entscheidet und die Konsequenz übernimmt.',
      'A fault-finding method, not an opinion: turn the concept around and ask who then carries responsibility, decides and takes the consequence.',
    ),
    src: { book: 'steg1', ch: 'Del 0, 0.2 Inversion som metod' },
  },
  {
    sv: 'Kompetens',
    name: l('Kompetens', 'Kompetenz', 'Competence'),
    text: l(
      'Vad andra, över tid, kan lita på att du förmår utföra under ansvar. Aldrig självutnämnd – den tillskrivs av andra.',
      'Was andere über die Zeit darauf vertrauen können, dass du es unter Verantwortung ausführen kannst. Nie selbst ernannt – sie wird von anderen zugeschrieben.',
      'What others, over time, can rely on you to carry out under responsibility. Never self-appointed – it is attributed by others.',
    ),
    src: { book: 'steg1', ch: 'Kap. 9 Vad kompetens faktiskt är' },
  },
  {
    sv: 'Behörighet',
    name: l('Behörighet', 'Befugnis', 'Authorisation'),
    text: l(
      'Organisationens besked: du får göra detta, du har mandat, du får fatta beslut inom denna ram. Ges av organisationen – inte av en kurs.',
      'Die Ansage der Organisation: Du darfst das tun, du hast das Mandat, du darfst in diesem Rahmen entscheiden. Erteilt von der Organisation – nicht von einem Kurs.',
      'The organisation’s statement: you may do this, you have the mandate, you may decide within this frame. Granted by the organisation – not by a course.',
    ),
    src: { book: 'steg3-1', ch: 'Kompetensformeln' },
  },
  {
    sv: 'Hägn',
    name: l('Hägn', 'Hägn (Grenzen)', 'Hägn (boundaries)'),
    text: l(
      'Att kunna sätta och respektera gränser: avgränsa det som är ditt ansvar från det som inte är det. Utan gränser inget ansvar, utan ansvar ingen frihet.',
      'Grenzen setzen und achten können: abgrenzen, was deine Verantwortung ist und was nicht. Ohne Grenzen keine Verantwortung, ohne Verantwortung keine Freiheit.',
      'Being able to set and respect boundaries: separating what is your responsibility from what is not. No boundaries, no responsibility; no responsibility, no freedom.',
    ),
    src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
  },
  {
    sv: 'Habil',
    name: l('Habil', 'Habil (Fähigkeit)', 'Habil (ability)'),
    text: l(
      'Förmåga i praktiken. Inte potential, inte ambition. Måste underhållas och prövas mot verkligheten.',
      'Fähigkeit in der Praxis. Nicht Potenzial, nicht Ehrgeiz. Muss gepflegt und an der Wirklichkeit geprüft werden.',
      'Ability in practice. Not potential, not ambition. It must be maintained and tested against reality.',
    ),
    src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
  },
  {
    sv: 'Hövisk',
    name: l('Hövisk', 'Hövisk (Haltung)', 'Hövisk (bearing)'),
    text: l(
      'Att bära ansvar med värdighet: inte missbruka sin position, inte förnedra andra, fatta beslut utan att gömma sig bakom regler.',
      'Verantwortung mit Würde tragen: die eigene Position nicht missbrauchen, andere nicht erniedrigen, entscheiden, ohne sich hinter Regeln zu verstecken.',
      'Carrying responsibility with dignity: not abusing your position, not humiliating others, deciding without hiding behind rules.',
    ),
    src: { book: 'steg1', ch: 'Kap. 20 Hägn – Habil – Hövisk' },
  },
  {
    sv: 'Nollpunkten',
    name: l('Nollpunkten', 'Nullpunkt', 'Zero point'),
    text: l(
      '”Detta upphör nu.” Ett beslut där det som inte fungerar tas bort helt, så att ansvar kan sättas i tomrummet.',
      '„Das endet jetzt.“ Eine Entscheidung, mit der das Nichtfunktionierende ganz entfernt wird, damit im leeren Raum Verantwortung gesetzt werden kann.',
      '“This ends now.” A decision that removes what does not work completely, so that responsibility can be placed in the void.',
    ),
    src: { book: 'steg5', ch: 'Kap. 9 Nollpunkten' },
  },
  {
    sv: 'Konsekvensanalys',
    name: l('Konsekvensanalys', 'Konsequenzanalyse', 'Consequence analysis'),
    text: l(
      'Att formulera det som kommer att hända om inget förändras – och fatta beslutet innan det har hänt. Avslutad först när beslutet är fattat och ansvaret fördelat.',
      'Formulieren, was passiert, wenn sich nichts ändert – und entscheiden, bevor es passiert ist. Abgeschlossen erst, wenn entschieden und die Verantwortung verteilt ist.',
      'Stating what will happen if nothing changes – and deciding before it has happened. Finished only when the decision is made and responsibility assigned.',
    ),
    src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys' },
  },
  {
    sv: 'Funktionell dumhet',
    name: l('Funktionell dumhet', 'Funktionale Dummheit', 'Functional stupidity'),
    text: l(
      'Alla gör sitt, ingen tar helhetsansvar. Det ser ordnat ut, men ingen ställer den avgörande frågan: fungerar det?',
      'Alle machen ihren Teil, niemand übernimmt Gesamtverantwortung. Es sieht geordnet aus, aber niemand stellt die entscheidende Frage: Funktioniert es?',
      'Everyone does their part, nobody takes responsibility for the whole. It looks orderly, but nobody asks the decisive question: does it work?',
    ),
    src: { book: 'steg2', ch: 'Kap. 7, 7.3 Undvik funktionell dumhet' },
  },
  {
    sv: 'Sysselsättning',
    name: l('Sysselsättning', 'Beschäftigung', 'Busywork'),
    text: l(
      'Något man gör utan verkligt ansvar och utan verklig frihet. Man måste vara där, men resultatet spelar ingen avgörande roll.',
      'Etwas, das man ohne echte Verantwortung und ohne echte Freiheit tut. Man muss da sein, aber das Ergebnis spielt keine entscheidende Rolle.',
      'Something done without real responsibility and without real freedom. You have to be there, but the result does not really matter.',
    ),
    src: { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning' },
  },
  {
    sv: 'Verifikation',
    name: l('Verifikation', 'Verifikation', 'Verification'),
    text: l(
      'Ansvar måste kunna visas. Verifikation är inte misstro – det är respekt för konsekvens. Den måste ske i nutid, i handling.',
      'Verantwortung muss sich zeigen lassen. Verifikation ist kein Misstrauen – sie ist Respekt vor der Konsequenz. Sie muss in der Gegenwart geschehen, im Handeln.',
      'Responsibility must be demonstrable. Verification is not distrust – it is respect for consequence. It must happen in the present, in action.',
    ),
    src: { book: 'steg2', ch: 'Kap. 3, 3.4 Verifikation' },
  },
  {
    sv: 'Den gradvisa förskjutningen',
    name: l('Den gradvisa förskjutningen', 'Die schleichende Verschiebung', 'The gradual shift'),
    text: l(
      'Det börjar smått. Ett undantag. En avvikelse som inte tas hela vägen. Till slut finns gränsen inte längre – inte i dokumenten, men i verkligheten.',
      'Es beginnt klein. Eine Ausnahme. Eine Abweichung, die nicht zu Ende verfolgt wird. Am Ende gibt es die Grenze nicht mehr – nicht in den Dokumenten, aber in der Wirklichkeit.',
      'It starts small. One exception. One deviation not followed all the way. In the end the boundary is gone – not in the documents, but in reality.',
    ),
    src: { book: 'steg4', ch: 'Kap. 8 Verifikation' },
  },
  {
    sv: 'Skröna',
    name: l('Skröna', 'Erzählung (aus Erfahrung)', 'Story (from experience)'),
    text: l(
      'En självupplevd berättelse ur böckerna, från sjöfart och arbetsliv. Kursens scenarier bygger på dem.',
      'Eine selbst erlebte Geschichte aus den Büchern, aus Seefahrt und Arbeitsleben. Die Szenarien des Kurses beruhen darauf.',
      'A first-hand story from the books, from seafaring and working life. The course scenarios are built on them.',
    ),
    src: { book: 'steg3-2', ch: 'genomgående' },
  },
  {
    sv: 'Befälsuppdrag',
    name: l('Befälsuppdrag', 'Befehlsauftrag', 'Command assignment'),
    text: l(
      'Ett konkret uppdrag för din egen verklighet till nästa gång. Inga påminnelser – bara frågan: gjort eller inte gjort?',
      'Ein konkreter Auftrag für deine eigene Wirklichkeit bis zum nächsten Mal. Keine Erinnerungen – nur die Frage: erledigt oder nicht?',
      'A concrete assignment for your own reality until next time. No reminders – only the question: done or not done?',
    ),
    src: { book: 'steg1', ch: 'Instruktörshandbok, 7. Kursformat' },
  },
];
