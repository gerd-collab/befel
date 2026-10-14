// M11 · Underhåll – att bevara värden
// Sources: Steg 2 Kap. 7 Skapa struktur omkring dig ("Det fungerar så länge du är här"); Steg 4 Kap. 7 Struktur,
// Kap. 8 Verifikation; Steg 5 Kap. 3 (timing), Kap. 21 Att lämna över; Steg 1 Kap. 21 Barnbarnsperspektivet.

import { l, type Module } from '../types';

export const m11: Module = {
  id: 'm11',
  num: 11,
  part: 3,
  title: l('Underhåll – att bevara värden', 'Instandhaltung – Werte bewahren', 'Maintenance – preserving values'),
  teaser: l(
    'Hur du vårdar din riktning, ditt mod och ditt omdöme över tid.',
    'Wie du deine Richtung, deinen Mut und dein Urteilsvermögen über die Zeit pflegst.',
    'How you look after your direction, your courage and your judgement over time.',
  ),
  goal: l(
    'Du förstår hur system glider över tid och planerar underhåll i stället för reparation: träning, verifikation i nutid och beslut i tid.',
    'Du verstehst, wie Systeme über die Zeit abgleiten, und planst Instandhaltung statt Reparatur: Training, Verifikation in der Gegenwart und rechtzeitige Entscheidungen.',
    'You understand how systems drift over time and plan maintenance instead of repair: training, verification in the present and timely decisions.',
  ),
  keyTerms: [
    l('Planerat underhåll', 'Geplante Instandhaltung', 'Planned maintenance'),
    l('Det som inte tränas finns inte', 'Was nicht trainiert wird, existiert nicht', 'What is not trained does not exist'),
    l('Verifikation i nutid', 'Verifikation in der Gegenwart', 'Verification in the present'),
    l('Den gradvisa förskjutningen', 'Die schleichende Verschiebung', 'The gradual shift'),
    l('Personberoende', 'Personenabhängigkeit', 'Dependence on a person'),
  ],
  sources: [
    { book: 'steg2', ch: 'Kap. 7 Skapa struktur omkring dig' },
    { book: 'steg4', ch: 'Kap. 7 Struktur; Kap. 8 Verifikation' },
    { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys (timing); Kap. 21 Att lämna över' },
    { book: 'steg1', ch: 'Kap. 21 Barnbarnsperspektivet' },
  ],
  image: 'hull-painting',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Det börjar smått', 'Es beginnt klein', 'It starts small'),
      slides: [
        {
          heading: l('Den gradvisa förskjutningen', 'Die schleichende Verschiebung', 'The gradual shift'),
          body: [
            l(
              'Det börjar smått. Ett undantag. En avvikelse som inte tas hela vägen. Sedan en till. Och en till. Till slut har något förändrats – inte i dokumenten, inte i strukturen, men i verkligheten. Gränsen finns inte längre.',
              'Es beginnt klein. Eine Ausnahme. Eine Abweichung, die nicht zu Ende verfolgt wird. Dann noch eine. Und noch eine. Am Ende hat sich etwas verändert – nicht in den Dokumenten, nicht in der Struktur, aber in der Wirklichkeit. Die Grenze gibt es nicht mehr.',
              'It starts small. One exception. One deviation not followed all the way. Then another. And another. In the end something has changed – not in the documents, not in the structure, but in reality. The boundary is gone.',
            ),
          ],
          quote: {
            sv: 'Det är inte en kulturfråga. Det är en verifikationsfråga.',
            de: 'Das ist keine Kulturfrage. Es ist eine Frage der Verifikation.',
            en: 'It is not a question of culture. It is a question of verification.',
            src: { book: 'steg4', ch: 'Kap. 8 Verifikation – Den gradvisa förskjutningen' },
          },
        },
        {
          heading: l('Det som inte tränas finns inte', 'Was nicht trainiert wird, existiert nicht', 'What is not trained does not exist'),
          body: [
            l(
              'Organisationer antar ofta att människor vet vad de ska göra om det bara finns dokument. Det stämmer inte. Till sjöss övas allt: brand, evakuering, maskinhaveri, säkerhet. Inte för att det är sannolikt – utan för att det är kritiskt.',
              'Organisationen nehmen oft an, dass Menschen wissen, was zu tun ist, wenn es nur Dokumente gibt. Das stimmt nicht. Auf See wird alles geübt: Brand, Evakuierung, Maschinenausfall, Sicherheit. Nicht, weil es wahrscheinlich ist – sondern weil es kritisch ist.',
              'Organisations often assume that people know what to do as long as there are documents. That is not true. At sea everything is drilled: fire, evacuation, engine failure, security. Not because it is likely – but because it is critical.',
            ),
          ],
          quote: {
            sv: 'Struktur utan träning är teori.',
            de: 'Struktur ohne Training ist Theorie.',
            en: 'Structure without training is theory.',
            src: { book: 'steg4', ch: 'Kap. 7 Struktur – Träning' },
          },
        },
        {
          heading: l('Planerat, löpande eller reparation', 'Geplant, laufend oder Reparatur', 'Planned, running or repair'),
          body: [
            l(
              'I tekniska system genomförs planerat underhåll trots att inget ännu har gått sönder. Organisationer väntar ofta tills felet är ett faktum. Skillnaden är inte teknisk utan beslutsmässig.',
              'In technischen Systemen wird geplante Instandhaltung durchgeführt, obwohl noch nichts kaputt ist. Organisationen warten oft, bis der Fehler eingetreten ist. Der Unterschied ist nicht technisch, sondern eine Frage der Entscheidung.',
              'In technical systems planned maintenance is carried out even though nothing has broken yet. Organisations often wait until the fault is a fact. The difference is not technical but a matter of decision.',
            ),
          ],
          list: [
            l('Ett beslut som fattas tidigt motsvarar planerat underhåll.', 'Eine früh getroffene Entscheidung entspricht geplanter Instandhaltung.', 'A decision made early corresponds to planned maintenance.'),
            l('Ett beslut som fattas sent motsvarar löpande underhåll.', 'Eine spät getroffene Entscheidung entspricht laufender Instandhaltung.', 'A decision made late corresponds to running maintenance.'),
            l('Ett beslut efter att konsekvensen har inträffat motsvarar reparation.', 'Eine Entscheidung nach Eintritt der Konsequenz entspricht Reparatur.', 'A decision after the consequence has happened corresponds to repair.'),
          ],
        },
        {
          heading: l('”Det fungerar så länge du är här”', '„Es funktioniert, solange du da bist“', '“It works as long as you are here”'),
          body: [
            l(
              'Ett projekt fungerade utmärkt – när Torbjörn var närvarande. En vecka var han borta. När han kom tillbaka hade inget havererat. Men inget hade heller följts upp.',
              'Ein Projekt lief hervorragend – solange Torbjörn da war. Eine Woche war er weg. Als er zurückkam, war nichts zusammengebrochen. Aber es war auch nichts nachverfolgt worden.',
              'A project worked excellently – while Torbjörn was there. He was away for a week. When he came back, nothing had broken down. But nothing had been followed up either.',
            ),
          ],
          quote: {
            sv: 'Om systemet är beroende av dig har du inte byggt struktur. Du har byggt personberoende.',
            de: 'Wenn das System von dir abhängt, hast du keine Struktur gebaut. Du hast Personenabhängigkeit gebaut.',
            en: 'If the system depends on you, you have not built structure. You have built dependence on a person.',
            src: { book: 'steg2', ch: 'Kap. 7 Skapa struktur omkring dig' },
          },
        },
        {
          heading: l('Förvaltare, inte ägare', 'Verwalter, nicht Eigentümer', 'Steward, not owner'),
          body: [
            l(
              'Ägande handlar om rättigheter. Förvaltarskap handlar om skyldigheter. Den som äger kan förbruka. Den som förvaltar måste bevara – mark, resurser, institutioner och värderingar.',
              'Eigentum hat mit Rechten zu tun. Verwalterschaft mit Pflichten. Wer besitzt, kann verbrauchen. Wer verwaltet, muss bewahren – Land, Ressourcen, Institutionen und Werte.',
              'Ownership is about rights. Stewardship is about duties. Whoever owns can consume. Whoever stewards must preserve – land, resources, institutions and values.',
            ),
            l(
              'Ett system bär sig självt när ansvar, beslut och konsekvens upprätthålls utan att någon behöver ingripa.',
              'Ein System trägt sich selbst, wenn Verantwortung, Entscheidung und Konsequenz aufrechterhalten werden, ohne dass jemand eingreifen muss.',
              'A system carries itself when responsibility, decision and consequence are maintained without anyone needing to intervene.',
            ),
          ],
          quote: {
            sv: 'Den högsta formen av kontroll är den som inte behöver användas.',
            de: 'Die höchste Form der Kontrolle ist die, die nicht eingesetzt werden muss.',
            en: 'The highest form of control is the one that does not need to be used.',
            src: { book: 'steg5', ch: 'Kap. 21 Att lämna över' },
          },
        },
      ],
      cards: [
        { term: l('Planerat underhåll', 'Geplante Instandhaltung', 'Planned maintenance'), text: l('Beslutet tas innan något har gått sönder.', 'Die Entscheidung fällt, bevor etwas kaputt ist.', 'The decision is made before anything has broken.') },
        { term: l('Den gradvisa förskjutningen', 'Schleichende Verschiebung', 'The gradual shift'), text: l('Ett undantag i taget – tills gränsen är borta.', 'Eine Ausnahme nach der anderen – bis die Grenze weg ist.', 'One exception at a time – until the boundary is gone.') },
        { term: l('Träning', 'Training', 'Training'), text: l('Det som inte tränas finns inte.', 'Was nicht trainiert wird, existiert nicht.', 'What is not trained does not exist.') },
        { term: l('Verifikation i nutid', 'Verifikation in der Gegenwart', 'Verification in the present'), text: l('I handling – inte bara i revision i efterhand.', 'Im Handeln – nicht nur in der Revision hinterher.', 'In action – not only in audits afterwards.') },
        { term: l('Förvaltarskap', 'Verwalterschaft', 'Stewardship'), text: l('Ta hand om det man själv inte har skapat.', 'Sich um das kümmern, was man nicht selbst geschaffen hat.', 'Looking after what you did not create yourself.') },
      ],
    },
    {
      slug: 'sa-lange-du-ar-har',
      type: 'scenario',
      min: 8,
      title: l('”Det fungerar så länge du är här”', '„Es funktioniert, solange du da bist“', '“It works as long as you are here”'),
      source: { book: 'steg2', ch: 'Kap. 7 Skapa struktur omkring dig' },
      intro: l(
        'Du leder ett projekt som fungerar utmärkt. Beslut tas, uppföljning sker, rutiner hålls. Nu ska du vara borta en vecka.',
        'Du leitest ein Projekt, das hervorragend läuft. Entscheidungen werden getroffen, nachverfolgt, Routinen eingehalten. Jetzt bist du eine Woche weg.',
        'You lead a project that works excellently. Decisions are made, follow-up happens, routines are kept. Now you are going to be away for a week.',
      ),
      nodes: [
        {
          situation: l('Det är dagen före du åker.', 'Es ist der Tag vor deiner Abreise.', 'It is the day before you leave.'),
          options: [
            {
              label: l('Åker – det har ju gått bra hittills.', 'Abreisen – es lief ja bisher gut.', 'Leave – it has gone well so far.'),
              book: true,
              c: {
                orsak: l('Strukturen bärs av en person.', 'Die Struktur wird von einer Person getragen.', 'The structure is carried by one person.'),
                verkan: l('När du är borta följer ingen upp.', 'Wenn du weg bist, verfolgt niemand nach.', 'When you are away, nobody follows up.'),
                konsekvens: l('Personberoende, inte struktur.', 'Personenabhängigkeit, keine Struktur.', 'Dependence on a person, not structure.'),
                bearer: l('Projektet.', 'Das Projekt.', 'The project.'),
              },
            },
            {
              label: l('Utser en ansvarig för varje uppföljning, med mandat, och skriver ner vad som ska följas upp och när.', 'Für jede Nachverfolgung eine verantwortliche Person mit Mandat benennen und aufschreiben, was wann nachverfolgt wird.', 'Appoint someone responsible for each follow-up, with a mandate, and write down what is to be followed up and when.'),
              c: {
                orsak: l('Uppgift, utsedd ansvarig, mandat, uppföljning, konsekvens.', 'Aufgabe, benannte verantwortliche Person, Mandat, Nachverfolgung, Konsequenz.', 'Task, designated person, mandate, follow-up, consequence.'),
                verkan: l('Ansvarskedjan finns även utan dig.', 'Die Verantwortungskette besteht auch ohne dich.', 'The chain of responsibility exists even without you.'),
                konsekvens: l('Systemet prövas – och du ser var det håller.', 'Das System wird auf die Probe gestellt – und du siehst, wo es hält.', 'The system is tested – and you see where it holds.'),
                bearer: l('De utsedda – var och en för sin del.', 'Die Benannten – jeder für seinen Teil.', 'The appointed people – each for their part.'),
              },
            },
            {
              label: l('Ber alla ringa dig om något händer.', 'Alle bitten, dich anzurufen, wenn etwas ist.', 'Ask everyone to call you if anything happens.'),
              c: {
                orsak: l('Du förblir systemet.', 'Du bleibst das System.', 'You remain the system.'),
                verkan: l('Alla väntar på dig.', 'Alle warten auf dich.', 'Everyone waits for you.'),
                konsekvens: l('Personberoendet förstärks.', 'Die Personenabhängigkeit wird verstärkt.', 'Dependence on you increases.'),
                bearer: l('Du – på semestern.', 'Du – im Urlaub.', 'You – on holiday.'),
              },
            },
          ],
        },
        {
          situation: l('Du kommer tillbaka. Inget har havererat. Men inget har följts upp heller.', 'Du kommst zurück. Nichts ist zusammengebrochen. Aber es wurde auch nichts nachverfolgt.', 'You come back. Nothing has broken down. But nothing has been followed up either.'),
          options: [
            {
              label: l('Tar tag i allt själv igen.', 'Alles wieder selbst in die Hand nehmen.', 'Take everything back into your own hands.'),
              c: {
                orsak: l('Det går snabbast så.', 'So geht es am schnellsten.', 'It is quickest that way.'),
                verkan: l('Allt fungerar – igen, så länge du är där.', 'Alles funktioniert – wieder, solange du da bist.', 'Everything works – again, as long as you are there.'),
                konsekvens: l('Nästa frånvaro ger samma resultat.', 'Die nächste Abwesenheit bringt dasselbe Ergebnis.', 'The next absence gives the same result.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Bygger struktur: vem är ansvarig för vad – i praktisk funktion, inte i allmän formulering.', 'Struktur aufbauen: Wer ist wofür verantwortlich – in praktischer Funktion, nicht in allgemeinen Formulierungen.', 'Build structure: who is responsible for what – in practical function, not in general wording.'),
              book: true,
              c: {
                orsak: l('Du förstår vad du har sett.', 'Du verstehst, was du gesehen hast.', 'You understand what you have seen.'),
                verkan: l('Uppföljningen får bärare.', 'Die Nachverfolgung bekommt Träger.', 'Follow-up gets bearers.'),
                konsekvens: l('Systemet fungerar även när du inte är där.', 'Das System funktioniert auch, wenn du nicht da bist.', 'The system works even when you are not there.'),
                bearer: l('De utsedda – och du för strukturen.', 'Die Benannten – und du für die Struktur.', 'The appointed people – and you for the structure.'),
              },
            },
            {
              label: l('Tar upp det med gruppen och uttrycker din besvikelse.', 'Es mit der Gruppe ansprechen und deine Enttäuschung zeigen.', 'Raise it with the group and express your disappointment.'),
              c: {
                orsak: l('Skuld i stället för struktur.', 'Schuld statt Struktur.', 'Blame instead of structure.'),
                verkan: l('Gruppen känner sig anklagad.', 'Die Gruppe fühlt sich angeklagt.', 'The group feels accused.'),
                konsekvens: l('Ingen vet fortfarande vem som ska följa upp vad.', 'Immer noch weiß niemand, wer was nachverfolgen soll.', 'Still nobody knows who is to follow up what.'),
                bearer: l('Relationerna.', 'Die Beziehungen.', 'The relationships.'),
              },
            },
          ],
        },
        {
          situation: l('Ett halvår senare ska du lämna över projektet.', 'Ein halbes Jahr später sollst du das Projekt übergeben.', 'Six months later you are to hand the project over.'),
          options: [
            {
              label: l('Fortsätter ringa och kontrollera efter överlämningen.', 'Nach der Übergabe weiter anrufen und kontrollieren.', 'Keep calling and checking after the handover.'),
              c: {
                orsak: l('Vana att kontrollera.', 'Gewohnheit zu kontrollieren.', 'The habit of controlling.'),
                verkan: l('Onödiga ingrepp sker.', 'Es kommt zu unnötigen Eingriffen.', 'Needless interventions happen.'),
                konsekvens: l('Systemets självständighet försvagas.', 'Die Selbstständigkeit des Systems wird geschwächt.', 'The system’s independence is weakened.'),
                bearer: l('Din efterträdare.', 'Dein Nachfolger.', 'Your successor.'),
              },
            },
            {
              label: l('Lämnar över – och finns kvar som stöd som bara aktiveras när kopplingen mellan beslut och konsekvens börjar släppa.', 'Übergeben – und als Stütze bleiben, die nur aktiv wird, wenn sich die Verbindung zwischen Entscheidung und Konsequenz zu lösen beginnt.', 'Hand over – and remain available as support that only steps in when the link between decision and consequence starts to slip.'),
              book: true,
              c: {
                orsak: l('Systemet måste tillåtas fungera självt.', 'Das System muss selbst funktionieren dürfen.', 'The system must be allowed to work by itself.'),
                verkan: l('Kontroll blir verifiering.', 'Kontrolle wird zur Verifikation.', 'Control becomes verification.'),
                konsekvens: l('Kontinuitet uppstår.', 'Kontinuität entsteht.', 'Continuity arises.'),
                bearer: l('Strukturen.', 'Die Struktur.', 'The structure.'),
              },
            },
            {
              label: l('Lämnar utan överlämning – det får lösa sig.', 'Ohne Übergabe gehen – es wird sich schon finden.', 'Leave without a handover – it will sort itself out.'),
              c: {
                orsak: l('Ingen ansvarspunkt efter dig.', 'Kein Verantwortungspunkt nach dir.', 'No responsibility point after you.'),
                verkan: l('Ansvaret löses upp.', 'Die Verantwortung löst sich auf.', 'The responsibility dissolves.'),
                konsekvens: l('Det som byggts glider, ett undantag i taget.', 'Was aufgebaut wurde, gleitet ab, eine Ausnahme nach der anderen.', 'What was built drifts, one exception at a time.'),
                bearer: l('Projektet och de som kommer efter.', 'Das Projekt und die, die danach kommen.', 'The project and those who come after.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        '”Det var då jag förstod: om systemet är beroende av dig har du inte byggt struktur. Du har byggt personberoende.” Struktur börjar med en enkel fråga: vem är ansvarig för vad? Inte i känsla, inte i allmän formulering – i praktisk funktion. Att lämna över betyder sedan inte att lämna systemet, utan att lämna behovet av att ingripa.',
        '„Da verstand ich: Wenn das System von dir abhängt, hast du keine Struktur gebaut. Du hast Personenabhängigkeit gebaut.“ Struktur beginnt mit einer einfachen Frage: Wer ist wofür verantwortlich? Nicht im Gefühl, nicht in allgemeinen Formulierungen – in praktischer Funktion. Übergeben heißt dann nicht, das System zu verlassen, sondern das Bedürfnis einzugreifen.',
        '“That was when I understood: if the system depends on you, you have not built structure. You have built dependence on a person.” Structure starts with a simple question: who is responsible for what? Not in feeling, not in general wording – in practical function. Handing over then does not mean leaving the system, but leaving the need to intervene.',
      ),
      quote: {
        sv: 'Personberoende är sårbart. Struktur är hållbart.',
        de: 'Personenabhängigkeit ist verletzlich. Struktur ist tragfähig.',
        en: 'Dependence on a person is fragile. Structure is sustainable.',
        src: { book: 'steg2', ch: 'Kap. 7, 7.5 Slutprincip' },
      },
    },
    {
      slug: 'underhallsplan',
      type: 'builder',
      tool: 'maintenance',
      min: 7,
      title: l('Underhållsplan', 'Instandhaltungsplan', 'Maintenance plan'),
      intro: l(
        'Välj något som ska bevaras – ett värde, en rutin eller en förmåga. Planera underhållet innan något går sönder.',
        'Wähle etwas, das bewahrt werden soll – einen Wert, eine Routine oder eine Fähigkeit. Plane die Instandhaltung, bevor etwas kaputtgeht.',
        'Choose something to be preserved – a value, a routine or an ability. Plan its maintenance before anything breaks.',
      ),
      fields: [
        { id: 'varde', label: l('Vad ska bevaras?', 'Was soll bewahrt werden?', 'What is to be preserved?'), help: l('Ett värde, en rutin eller en förmåga.', 'Ein Wert, eine Routine oder eine Fähigkeit.', 'A value, a routine or an ability.'), multiline: false },
        {
          id: 'lage',
          label: l('Var står det i dag?', 'Wo steht es heute?', 'Where does it stand today?'),
          help: l('Om du beslutar nu – är det planerat, löpande eller reparation?', 'Wenn du jetzt entscheidest – ist es geplant, laufend oder Reparatur?', 'If you decide now – is it planned, running or repair?'),
          choices: [
            { id: 'planerat', label: l('Planerat underhåll', 'Geplante Instandhaltung', 'Planned maintenance') },
            { id: 'lopande', label: l('Löpande underhåll', 'Laufende Instandhaltung', 'Running maintenance') },
            { id: 'reparation', label: l('Reparation', 'Reparatur', 'Repair') },
          ],
        },
        { id: 'rutin', label: l('Rutinen', 'Die Routine', 'The routine'), help: l('Vad görs, och hur ofta?', 'Was wird getan, und wie oft?', 'What is done, and how often?') },
        { id: 'traning', label: l('Träningen', 'Das Training', 'The training'), help: l('Hur övas det – även när inget har hänt?', 'Wie wird es geübt – auch wenn nichts passiert ist?', 'How is it practised – even when nothing has happened?') },
        { id: 'kontroll', label: l('Verifikationen', 'Die Verifikation', 'The verification'), help: l('Hur kontrolleras det i nutid, i handling – inte bara i efterhand?', 'Wie wird es in der Gegenwart geprüft, im Handeln – nicht nur hinterher?', 'How is it checked in the present, in action – not only afterwards?') },
        { id: 'ansvarig', label: l('Vem bär det?', 'Wer trägt es?', 'Who carries it?'), help: l('Funktion och namn.', 'Funktion und Name.', 'Function and name.'), multiline: false },
      ],
      checks: [
        { when: 'missing', field: 'traning', message: l('Det som inte tränas finns inte.', 'Was nicht trainiert wird, existiert nicht.', 'What is not trained does not exist.') },
        { when: 'missing', field: 'kontroll', message: l('Verifikation måste ske i nutid. I handling.', 'Verifikation muss in der Gegenwart geschehen. Im Handeln.', 'Verification must happen in the present. In action.') },
        { when: 'missing', field: 'ansvarig', message: l('Struktur börjar med en enkel fråga: vem är ansvarig för vad?', 'Struktur beginnt mit einer einfachen Frage: Wer ist wofür verantwortlich?', 'Structure starts with a simple question: who is responsible for what?') },
        { when: 'collective', field: 'ansvarig', message: l('Ansvar som delas är ansvar som försvinner.', 'Geteilte Verantwortung ist verschwindende Verantwortung.', 'Responsibility that is shared disappears.') },
        { when: 'missing', field: 'rutin', message: l('Ansvar utan struktur är kortvarigt.', 'Verantwortung ohne Struktur ist kurzlebig.', 'Responsibility without structure is short-lived.') },
      ],
      done: l(
        'Rutin, träning, verifikation och en ansvarig. Det är planerat underhåll – beslutet tas innan något har gått sönder.',
        'Routine, Training, Verifikation und eine verantwortliche Person. Das ist geplante Instandhaltung – die Entscheidung fällt, bevor etwas kaputt ist.',
        'Routine, training, verification and one responsible person. That is planned maintenance – the decision is made before anything has broken.',
      ),
      src: { book: 'steg4', ch: 'Kap. 7 Struktur; Kap. 8 Verifikation' },
    },
    {
      slug: 'timing',
      type: 'classify',
      min: 6,
      title: l('Planerat, löpande eller reparation?', 'Geplant, laufend oder Reparatur?', 'Planned, running or repair?'),
      intro: l(
        'Samma förståelse kan ge helt olika utfall – beroende på när beslutet fattas.',
        'Dasselbe Verständnis kann zu ganz unterschiedlichen Ergebnissen führen – je nachdem, wann entschieden wird.',
        'The same understanding can lead to completely different outcomes – depending on when the decision is made.',
      ),
      categories: [
        { id: 'planerat', label: l('Planerat underhåll', 'Geplante Instandhaltung', 'Planned maintenance'), hint: l('tidigt beslut', 'frühe Entscheidung', 'early decision') },
        { id: 'lopande', label: l('Löpande underhåll', 'Laufende Instandhaltung', 'Running maintenance'), hint: l('sent beslut', 'späte Entscheidung', 'late decision') },
        { id: 'reparation', label: l('Reparation', 'Reparatur', 'Repair'), hint: l('beslut efter konsekvensen', 'Entscheidung nach der Konsequenz', 'decision after the consequence') },
      ],
      items: [
        {
          text: l('Brandövning varje månad, fast det aldrig har brunnit ombord.', 'Jeden Monat eine Feuerübung, obwohl es an Bord nie gebrannt hat.', 'A fire drill every month, though there has never been a fire on board.'),
          cat: 'planerat',
          why: l('Inte för att det är sannolikt – utan för att det är kritiskt.', 'Nicht, weil es wahrscheinlich ist – sondern weil es kritisch ist.', 'Not because it is likely – but because it is critical.'),
        },
        {
          text: l('Bromsarna byts när föraren har klagat i två veckor.', 'Die Bremsen werden getauscht, nachdem der Fahrer sich zwei Wochen beschwert hat.', 'The brakes are replaced after the driver has complained for two weeks.'),
          cat: 'lopande',
          why: l('Beslutet kom – men sent, medan risken redan pågick.', 'Die Entscheidung kam – aber spät, während das Risiko schon bestand.', 'The decision came – but late, while the risk was already present.'),
        },
        {
          text: l('Nödutgången lagas efter att någon har skadats vid en utrymning.', 'Der Notausgang wird repariert, nachdem sich bei einer Räumung jemand verletzt hat.', 'The emergency exit is fixed after someone was injured during an evacuation.'),
          cat: 'reparation',
          why: l('Konsekvensen har redan inträffat. Kostnaden och risken är som störst.', 'Die Konsequenz ist schon eingetreten. Kosten und Risiko sind am größten.', 'The consequence has already happened. Cost and risk are at their highest.'),
        },
        {
          text: l('Förtöjningstrossarna byts enligt plan efter antal drifttimmar.', 'Die Festmacherleinen werden planmäßig nach Betriebsstunden getauscht.', 'The mooring lines are replaced on schedule after a set number of operating hours.'),
          cat: 'planerat',
          why: l('Det som är känt läggs till grund för beslut – innan något brister.', 'Was bekannt ist, wird zur Grundlage der Entscheidung – bevor etwas reißt.', 'What is known becomes the basis for decisions – before anything breaks.'),
        },
        {
          text: l('Rutinen påminns om igen när någon märker att den har glidit bort: ”Ja just det, den där.”', 'An die Routine wird wieder erinnert, als jemand merkt, dass sie weggeglitten ist: „Ach ja, die.“', 'The routine is brought up again when someone notices it has slipped away: “Oh yes, that one.”'),
          cat: 'lopande',
          why: l('Förskjutningen hade redan börjat.', 'Die Verschiebung hatte schon begonnen.', 'The shift had already begun.'),
        },
        {
          text: l('En ny rutin skrivs efter en olycka.', 'Nach einem Unfall wird eine neue Routine geschrieben.', 'A new routine is written after an accident.'),
          cat: 'reparation',
          why: l('Systemet reagerar först vid olycka – upprördhet ersätter styrning.', 'Das System reagiert erst beim Unfall – Empörung ersetzt Steuerung.', 'The system only reacts at an accident – outrage replaces steering.'),
        },
      ],
      src: { book: 'steg5', ch: 'Kap. 3 Konsekvensanalys – timing' },
    },
    {
      slug: 'utan-provning',
      type: 'selfassess',
      mode: 'module',
      min: 5,
      title: l('Vad håller jag uppe utan att pröva det?', 'Was halte ich aufrecht, ohne es zu prüfen?', 'What do I keep up without testing it?'),
      intro: l(
        'Fem påståenden om underhåll – i ditt arbete och i ditt eget omdöme.',
        'Fünf Aussagen über Instandhaltung – in deiner Arbeit und in deinem eigenen Urteil.',
        'Five statements about maintenance – in your work and in your own judgement.',
      ),
      items: [
        l('Jag övar det som är kritiskt, även när inget har hänt.', 'Ich übe, was kritisch ist, auch wenn nichts passiert ist.', 'I practise what is critical, even when nothing has happened.'),
        l('Jag kontrollerar att det jag har bestämt faktiskt görs.', 'Ich prüfe, ob das, was ich entschieden habe, tatsächlich getan wird.', 'I check that what I have decided is actually done.'),
        l('Det jag ansvarar för fungerar även när jag är borta.', 'Was ich verantworte, funktioniert auch, wenn ich weg bin.', 'What I am responsible for works even when I am away.'),
        l('Jag märker när ett undantag håller på att bli en vana.', 'Ich merke, wenn eine Ausnahme zur Gewohnheit zu werden droht.', 'I notice when an exception is turning into a habit.'),
        l('Jag fattar beslut medan det fortfarande är underhåll – inte reparation.', 'Ich entscheide, solange es noch Instandhaltung ist – nicht Reparatur.', 'I make decisions while it is still maintenance – not repair.'),
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Vad har jag slutat underhålla?', 'Was pflege ich nicht mehr?', 'What have I stopped maintaining?'),
      prompts: [
        l('Vilka värden har jag slutat underhålla?', 'Welche Werte pflege ich nicht mehr?', 'Which values have I stopped maintaining?'),
        l('Skulle jag vara beredd att stå för detta inför mina barnbarn?', 'Wäre ich bereit, vor meinen Enkeln dafür einzustehen?', 'Would I be prepared to stand by this in front of my grandchildren?'),
      ],
      src: { book: 'steg1', ch: 'Kap. 21 Barnbarnsperspektivet' },
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Om inget har hänt fungerar systemet.” Stämmer det?', '„Wenn nichts passiert ist, funktioniert das System.“ Stimmt das?', '“If nothing has happened, the system works.” Is that true?'),
          options: [
            { text: l('Ja – frånvaro av olyckor visar att det fungerar.', 'Ja – keine Unfälle zeigen, dass es funktioniert.', 'Yes – the absence of accidents shows it works.'), ok: false, fb: l('Förskjutningen syns inte i dokumenten – men i verkligheten. Ett system kan fungera på pappret och ändå ha tappat gränsen.', 'Die Verschiebung zeigt sich nicht in den Dokumenten – aber in der Wirklichkeit. Ein System kann auf dem Papier funktionieren und trotzdem die Grenze verloren haben.', 'The shift does not show in the documents – but in reality. A system can work on paper and still have lost its boundary.') },
            { text: l('Nej – det som inte tränas och verifieras finns inte, även om inget har hänt ännu.', 'Nein – was nicht trainiert und verifiziert wird, existiert nicht, auch wenn noch nichts passiert ist.', 'No – what is not trained and verified does not exist, even if nothing has happened yet.'), ok: true, fb: l('Ja. Därför övas allt till sjöss.', 'Ja. Darum wird auf See alles geübt.', 'Yes. That is why everything is drilled at sea.') },
          ],
          misconception: l('Att ”inget har hänt” betyder ”det fungerar”.', 'Dass „nichts ist passiert“ „es funktioniert“ bedeutet.', 'That “nothing has happened” means “it works”.'),
        },
        {
          q: l('Vad betyder att verifikation ska ske i nutid?', 'Was bedeutet es, dass Verifikation in der Gegenwart geschehen soll?', 'What does it mean that verification should happen in the present?'),
          options: [
            { text: l('I handling, medan det pågår – inte bara i revision i efterhand.', 'Im Handeln, während es läuft – nicht nur in der Revision hinterher.', 'In action, while it is happening – not only in audits afterwards.'), ok: true, fb: l('Ja. Revision i efterhand är viktig – men inte tillräcklig.', 'Ja. Revision hinterher ist wichtig – aber nicht genug.', 'Yes. Audits afterwards matter – but they are not enough.') },
            { text: l('Att rapporter skickas varje månad.', 'Dass jeden Monat Berichte verschickt werden.', 'That reports are sent every month.'), ok: false, fb: l('Rapporter tittar bakåt.', 'Berichte schauen zurück.', 'Reports look backwards.') },
          ],
          misconception: l('Att kontroll är detsamma som rapportering.', 'Dass Kontrolle dasselbe ist wie Berichterstattung.', 'That control is the same as reporting.'),
        },
        {
          q: l('När bär ett system sig självt?', 'Wann trägt sich ein System selbst?', 'When does a system carry itself?'),
          options: [
            { text: l('När den som byggde det fortfarande kontrollerar det.', 'Wenn der, der es gebaut hat, es immer noch kontrolliert.', 'When the person who built it still controls it.'), ok: false, fb: l('Då är det personberoende, inte struktur.', 'Dann ist es Personenabhängigkeit, keine Struktur.', 'Then it is dependence on a person, not structure.') },
            { text: l('När ansvar, beslut och konsekvens upprätthålls utan att någon behöver ingripa.', 'Wenn Verantwortung, Entscheidung und Konsequenz aufrechterhalten werden, ohne dass jemand eingreifen muss.', 'When responsibility, decision and consequence are maintained without anyone needing to intervene.'), ok: true, fb: l('Ja. Den högsta formen av kontroll är den som inte behöver användas.', 'Ja. Die höchste Form der Kontrolle ist die, die nicht eingesetzt werden muss.', 'Yes. The highest form of control is the one that does not need to be used.') },
          ],
          misconception: l('Att kontroll alltid kräver närvaro.', 'Dass Kontrolle immer Anwesenheit verlangt.', 'That control always requires presence.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Genomför en övning eller kontroll som ingen har bett om.',
        'Führe eine Übung oder Kontrolle durch, um die niemand gebeten hat.',
        'Carry out one drill or check that nobody has asked for.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 12 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 12 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 12, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Säg: ”Det börjar smått. Ett undantag.” Paus. Fråga: ”Vilket undantag hos er har blivit en vana?”',
      'Sag: „Es beginnt klein. Eine Ausnahme.“ Pause. Frage: „Welche Ausnahme ist bei euch zur Gewohnheit geworden?“',
      'Say: “It starts small. One exception.” Pause. Ask: “Which exception has become a habit in your organisation?”',
    ),
    questions: [
      l('Vad hos er fungerar bara så länge en viss person är där?', 'Was funktioniert bei euch nur, solange eine bestimmte Person da ist?', 'What in your organisation only works as long as a particular person is there?'),
      l('Vad övar ni – och vad borde ni öva?', 'Was übt ihr – und was solltet ihr üben?', 'What do you practise – and what should you practise?'),
      l('Hur mycket av ert underhåll är egentligen reparation?', 'Wie viel eurer Instandhaltung ist eigentlich Reparatur?', 'How much of your maintenance is really repair?'),
    ],
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
