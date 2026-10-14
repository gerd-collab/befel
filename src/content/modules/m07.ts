// M07 · Grupper och lojalitet
// Sources: Steg 4 Kap. 3 Lojalitet före ansvar; Steg 1 Kap. 1, Kap. 5 Gemenskap, Kap. 12 Personlighet och grupp;
// Steg 2 Kap. 3, Kap. 9 Tänk i struktur, inte i skuld; Steg 3 Del II Kap. 10; Steg 1 Befälssvar.

import { l, type Module } from '../types';

export const m07: Module = {
  id: 'm07',
  num: 7,
  part: 2,
  title: l('Grupper och lojalitet', 'Gruppen und Loyalität', 'Groups and loyalty'),
  teaser: l(
    'När samarbete blir styrka – och när det blir svaghet.',
    'Wann Zusammenarbeit Stärke wird – und wann Schwäche.',
    'When cooperation becomes strength – and when it becomes weakness.',
  ),
  goal: l(
    'Du känner igen när lojalitet ställs före ansvar och när samarbete blir svaghet: alla deltar – ingen avgör.',
    'Du erkennst, wann Loyalität vor Verantwortung gestellt wird und wann Zusammenarbeit zur Schwäche wird: Alle machen mit – niemand entscheidet.',
    'You recognise when loyalty is put before responsibility and when cooperation becomes weakness: everyone takes part – nobody decides.',
  ),
  keyTerms: [
    l('Lojalitet före ansvar', 'Loyalität vor Verantwortung', 'Loyalty before responsibility'),
    l('Gemenskap är ett resultat', 'Gemeinschaft ist ein Ergebnis', 'Community is a result'),
    l('Ansvarsglapp', 'Verantwortungslücke', 'Responsibility gap'),
    l('Struktur före skuld', 'Struktur vor Schuld', 'Structure before blame'),
    l('Tillit som erfarenhet', 'Vertrauen als Erfahrung', 'Trust as experience'),
  ],
  sources: [
    { book: 'steg4', ch: 'Kap. 3 Lojalitet före ansvar' },
    { book: 'steg1', ch: 'Kap. 5 Gemenskap; Kap. 12 Personlighet och grupp' },
    { book: 'steg2', ch: 'Kap. 9 Tänk i struktur, inte i skuld' },
    { book: 'steg3-2', ch: 'Kap. 9 Förtroende; Kap. 10 Delegation' },
  ],
  image: 'anchor-chain',
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 6,
      title: l('Gemenskap är ett resultat', 'Gemeinschaft ist ein Ergebnis', 'Community is a result'),
      slides: [
        {
          heading: l('Gemenskap är ett resultat', 'Gemeinschaft ist ein Ergebnis', 'Community is a result'),
          body: [
            l(
              'Gemenskap används ofta som om det vore ett tillstånd – något man har eller saknar. Den kan inte beslutas fram och inte kommuniceras fram. Den kan bara byggas genom gemensamt utförande mot ett gemensamt mål.',
              'Gemeinschaft wird oft behandelt, als wäre sie ein Zustand – etwas, das man hat oder nicht hat. Sie lässt sich nicht beschließen und nicht herbeikommunizieren. Sie entsteht nur durch gemeinsames Tun auf ein gemeinsames Ziel hin.',
              'Community is often treated as a state – something you have or lack. It cannot be decided into being or communicated into being. It can only be built through shared execution towards a shared goal.',
            ),
            l(
              'Broderskap och systerskap uppstår inte ur identitet, utan ur ansvar – ur vetskapen att andra står kvar när det kostar.',
              'Brüderlichkeit und Schwesterlichkeit entstehen nicht aus Identität, sondern aus Verantwortung – aus dem Wissen, dass andere stehen bleiben, wenn es etwas kostet.',
              'Brotherhood and sisterhood do not arise from identity but from responsibility – from knowing that others will stand firm when it costs.',
            ),
          ],
          quote: {
            sv: 'I praktiken är gemenskap alltid ett resultat – aldrig en utgångspunkt.',
            de: 'In der Praxis ist Gemeinschaft immer ein Ergebnis – nie ein Ausgangspunkt.',
            en: 'In practice, community is always a result – never a starting point.',
            src: { book: 'steg1', ch: 'Kap. 5 Gemenskap – broderskap, systerskap och mål' },
          },
        },
        {
          heading: l('Lojalitet före ansvar', 'Loyalität vor Verantwortung', 'Loyalty before responsibility'),
          body: [
            l(
              'Lojalitet är en styrka. Utan den fungerar inga grupper. Men när problem uppstår förändras den. Fokus flyttas:',
              'Loyalität ist eine Stärke. Ohne sie funktioniert keine Gruppe. Doch wenn Probleme entstehen, verändert sie sich. Der Fokus verschiebt sich:',
              'Loyalty is a strength. Without it no group works. But when problems arise, it changes. The focus shifts:',
            ),
          ],
          list: [
            l('från uppgiften till gruppen,', 'von der Aufgabe zur Gruppe,', 'from the task to the group,'),
            l('från resultatet till relationen,', 'vom Ergebnis zur Beziehung,', 'from the result to the relationship,'),
            l('från verkligheten till det som håller samman.', 'von der Wirklichkeit zu dem, was zusammenhält.', 'from reality to what holds things together.'),
          ],
          quote: {
            sv: 'Alla vet. Men ingen säger det tydligt.',
            de: 'Alle wissen es. Aber niemand sagt es deutlich.',
            en: 'Everyone knows. But nobody says it clearly.',
            src: { book: 'steg4', ch: 'Kap. 3 Lojalitet före ansvar' },
          },
        },
        {
          heading: l('Lojalitet med riktning', 'Loyalität mit Richtung', 'Loyalty with direction'),
          body: [
            l(
              'När det inte är tydligt vad lojaliteten ska riktas mot, riktas den mot det närmaste: gruppen, relationerna, stämningen, den egna positionen. Det är inte ett moraliskt problem. Det är en konsekvens av strukturen.',
              'Wenn nicht klar ist, worauf sich Loyalität richten soll, richtet sie sich auf das Nächstliegende: die Gruppe, die Beziehungen, die Stimmung, die eigene Position. Das ist kein moralisches Problem. Es ist eine Folge der Struktur.',
              'When it is not clear what loyalty should be directed at, it is directed at what is nearest: the group, the relationships, the mood, one’s own position. That is not a moral problem. It is a consequence of the structure.',
            ),
            l(
              'I organisationer med en tydlig ansvarspunkt betyder lojalitet inte att skydda varandra från verkligheten. Den betyder att bidra till att uppgiften löses – även när det innebär att säga det obekväma.',
              'In Organisationen mit einem klaren Verantwortungspunkt heißt Loyalität nicht, einander vor der Wirklichkeit zu schützen. Sie heißt, zur Lösung der Aufgabe beizutragen – auch wenn das bedeutet, das Unbequeme auszusprechen.',
              'In organisations with a clear responsibility point, loyalty does not mean protecting each other from reality. It means contributing to solving the task – even when that means saying the uncomfortable thing.',
            ),
          ],
          quote: {
            sv: 'Skillnaden ligger inte i graden av lojalitet. Den ligger i vad lojaliteten är riktad mot.',
            de: 'Der Unterschied liegt nicht im Grad der Loyalität. Er liegt darin, worauf die Loyalität gerichtet ist.',
            en: 'The difference does not lie in the degree of loyalty. It lies in what the loyalty is directed at.',
            src: { book: 'steg4', ch: 'Kap. 3 Lojalitet före ansvar' },
          },
        },
        {
          heading: l('Olikhet är en förutsättning', 'Verschiedenheit ist eine Voraussetzung', 'Difference is a precondition'),
          body: [
            l(
              'När alla ser världen på samma sätt försvinner korrektiven. Blinda fläckar förstärks i stället för att avslöjas. Organisationens uppgift är inte att skapa likhet, utan att hålla samman olikhet kring ett gemensamt mål.',
              'Wenn alle die Welt gleich sehen, verschwinden die Korrektive. Blinde Flecken werden verstärkt statt aufgedeckt. Die Aufgabe der Organisation ist nicht, Gleichheit zu schaffen, sondern Verschiedenheit um ein gemeinsames Ziel zusammenzuhalten.',
              'When everyone sees the world the same way, the correctives disappear. Blind spots are reinforced instead of revealed. The organisation’s task is not to create sameness, but to hold difference together around a shared goal.',
            ),
          ],
          quote: {
            sv: 'En grupp där alla är överens är sällan stark. Den är ofta sårbar.',
            de: 'Eine Gruppe, in der alle einer Meinung sind, ist selten stark. Sie ist oft verletzlich.',
            en: 'A group where everyone agrees is rarely strong. It is often vulnerable.',
            src: { book: 'steg1', ch: 'Kap. 12 Personlighet och grupp' },
          },
        },
        {
          heading: l('”Vem gjorde fel?”', '„Wer hat den Fehler gemacht?“', '“Who made the mistake?”'),
          body: [
            l(
              'När något går fel är första reaktionen: vem gjorde det? Det är mänskligt – och begränsat. Den viktigare frågan är: hur kunde systemet tillåta det? Var brast ansvarskedjan?',
              'Wenn etwas schiefgeht, ist die erste Reaktion: Wer war das? Das ist menschlich – und begrenzt. Die wichtigere Frage ist: Wie konnte das System das zulassen? Wo ist die Verantwortungskette gerissen?',
              'When something goes wrong, the first reaction is: who did it? It is human – and limited. The more important question is: how could the system allow it? Where did the chain of responsibility break?',
            ),
          ],
          list: [
            l('Definition', 'Definition', 'Definition'),
            l('Mandat', 'Mandat', 'Mandate'),
            l('Uppföljning', 'Nachverfolgung', 'Follow-up'),
            l('Konsekvens', 'Konsequenz', 'Consequence'),
          ],
          quote: {
            sv: 'Skuld förklarar det förflutna. Struktur formar framtiden.',
            de: 'Schuld erklärt die Vergangenheit. Struktur formt die Zukunft.',
            en: 'Blame explains the past. Structure shapes the future.',
            src: { book: 'steg2', ch: 'Kap. 9 Tänk i struktur, inte i skuld' },
          },
        },
      ],
      cards: [
        { term: l('Lojalitet före ansvar', 'Loyalität vor Verantwortung', 'Loyalty before responsibility'), text: l('Gruppen skyddar sig själv från verkligheten.', 'Die Gruppe schützt sich selbst vor der Wirklichkeit.', 'The group protects itself from reality.') },
        { term: l('Gemenskap', 'Gemeinschaft', 'Community'), text: l('Ett resultat av gemensamt utförande – inte en utgångspunkt.', 'Ein Ergebnis gemeinsamen Tuns – kein Ausgangspunkt.', 'A result of shared execution – not a starting point.') },
        { term: l('Ansvarsglapp', 'Verantwortungslücke', 'Responsibility gap'), text: l('Alla deltar – ingen avgör.', 'Alle machen mit – niemand entscheidet.', 'Everyone takes part – nobody decides.') },
        { term: l('Brott i kedjan', 'Bruch in der Kette', 'Break in the chain'), text: l('Definition, mandat, uppföljning eller konsekvens.', 'Definition, Mandat, Nachverfolgung oder Konsequenz.', 'Definition, mandate, follow-up or consequence.') },
        { term: l('Struktur före skuld', 'Struktur vor Schuld', 'Structure before blame'), text: l('Mogna organisationer söker systemfel. Omogna söker syndabockar.', 'Reife Organisationen suchen Systemfehler. Unreife suchen Sündenböcke.', 'Mature organisations look for system faults. Immature ones look for scapegoats.') },
      ],
    },
    {
      slug: 'skiftlaget',
      type: 'scenario',
      min: 8,
      title: l('Skiftlaget som täcker', 'Die Schicht, die deckt', 'The shift that covers'),
      source: { book: 'steg4', ch: 'Kap. 3 Lojalitet före ansvar' },
      invented: true,
      intro: l(
        'Ett skiftlag på en terminal. En kollega – omtyckt och erfaren – har flera gånger hoppat över låskontrollen på containrarna när det är bråttom. Alla i laget vet. Ingen säger det tydligt. Fallet är konstruerat utifrån mönstret i Steg 4, kapitel 3.',
        'Eine Schicht an einem Terminal. Ein Kollege – beliebt und erfahren – hat die Verriegelungskontrolle an den Containern mehrmals ausgelassen, wenn es eilig war. Alle in der Schicht wissen es. Niemand sagt es deutlich. Der Fall ist nach dem Muster aus Stufe 4, Kapitel 3 konstruiert.',
        'A shift at a terminal. A colleague – well liked and experienced – has skipped the twist-lock check on the containers several times when things were rushed. Everyone on the shift knows. Nobody says it clearly. The case is constructed from the pattern in Step 4, chapter 3.',
      ),
      nodes: [
        {
          situation: l('På morgonmötet frågar skiftledaren om något har hänt med låsningen.', 'In der Frühbesprechung fragt der Schichtleiter, ob mit der Verriegelung etwas war.', 'At the morning meeting the shift supervisor asks whether anything has happened with the locking.'),
          options: [
            {
              label: l('Säger inget – det skulle uppfattas som illojalt.', 'Nichts sagen – das würde als illoyal gelten.', 'Say nothing – it would be seen as disloyal.'),
              c: {
                orsak: l('Att påpeka ett problem uppfattas som kritik.', 'Ein Problem anzusprechen gilt als Kritik.', 'Pointing out a problem is seen as criticism.'),
                verkan: l('Gruppen skyddar sig själv – utan att ljuga.', 'Die Gruppe schützt sich selbst – ohne zu lügen.', 'The group protects itself – without lying.'),
                konsekvens: l('Verkligheten försvagas.', 'Die Wirklichkeit wird geschwächt.', 'Reality is weakened.'),
                bearer: l('Nästa person under en container som inte är låst.', 'Die nächste Person unter einem nicht verriegelten Container.', 'The next person under a container that is not locked.'),
              },
            },
            {
              label: l('Säger att du har sett avvikelser som måste tas upp – utan att peka ut någon inför alla.', 'Sagen, dass du Abweichungen gesehen hast, die angesprochen werden müssen – ohne jemanden vor allen bloßzustellen.', 'Say you have seen deviations that must be dealt with – without singling anyone out in front of everyone.'),
              book: true,
              c: {
                orsak: l('Lojaliteten riktas mot uppgiften.', 'Die Loyalität richtet sich auf die Aufgabe.', 'Loyalty is directed at the task.'),
                verkan: l('Problemet blir synligt och kan hanteras.', 'Das Problem wird sichtbar und lässt sich angehen.', 'The problem becomes visible and can be dealt with.'),
                konsekvens: l('Obekvämt i stunden – funktionellt över tid.', 'Unbequem im Moment – funktional über die Zeit.', 'Uncomfortable in the moment – functional over time.'),
                bearer: l('Du – och den som har mandat att agera.', 'Du – und wer das Mandat zum Handeln hat.', 'You – and whoever has the mandate to act.'),
              },
            },
            {
              label: l('Antyder att ”vissa” kanske slarvar ibland.', 'Andeuten, dass „manche“ vielleicht manchmal schlampen.', 'Hint that “some people” may be a bit careless at times.'),
              c: {
                orsak: l('Formuleringen lämnar utrymme.', 'Die Formulierung lässt Spielraum.', 'The wording leaves room.'),
                verkan: l('Informationen cirkulerar i antydningar.', 'Die Information zirkuliert in Andeutungen.', 'The information circulates in hints.'),
                konsekvens: l('En känsla av att något är fel – utan att det blir möjligt att agera.', 'Ein Gefühl, dass etwas nicht stimmt – ohne dass sich handeln lässt.', 'A feeling that something is wrong – without it becoming possible to act.'),
                bearer: l('Ingen – och därmed alla.', 'Niemand – und damit alle.', 'Nobody – and therefore everyone.'),
              },
            },
          ],
        },
        {
          situation: l('Efter mötet säger en kollega: ”Han har haft det tufft. Vi täcker för honom.”', 'Nach der Besprechung sagt ein Kollege: „Er hat es gerade schwer. Wir decken ihn.“', 'After the meeting a colleague says: “He’s been having a hard time. We cover for him.”'),
          options: [
            {
              label: l('Går med på det – lojalitet är viktigt.', 'Zustimmen – Loyalität ist wichtig.', 'Agree – loyalty matters.'),
              c: {
                orsak: l('Lojalitet utan riktning.', 'Loyalität ohne Richtung.', 'Loyalty without direction.'),
                verkan: l('Gruppen blir viktigare än uppgiften.', 'Die Gruppe wird wichtiger als die Aufgabe.', 'The group becomes more important than the task.'),
                konsekvens: l('Problemet tonas ner tills det inträffar.', 'Das Problem wird heruntergespielt, bis es eintritt.', 'The problem is played down until it happens.'),
                bearer: l('Den som skadas – och kollegan själv.', 'Wer zu Schaden kommt – und der Kollege selbst.', 'Whoever gets hurt – and the colleague himself.'),
              },
            },
            {
              label: l('Svarar: ”Lojalitet betyder att bidra till att uppgiften löses – inte att skydda varandra från verkligheten.”', 'Antworten: „Loyalität heißt, zur Lösung der Aufgabe beizutragen – nicht, einander vor der Wirklichkeit zu schützen.“', 'Answer: “Loyalty means helping to get the task done – not protecting each other from reality.”'),
              book: true,
              c: {
                orsak: l('Du ger lojaliteten en riktning.', 'Du gibst der Loyalität eine Richtung.', 'You give loyalty a direction.'),
                verkan: l('Konflikten blir direkt i stället för indirekt.', 'Der Konflikt wird direkt statt indirekt.', 'The conflict becomes direct instead of indirect.'),
                konsekvens: l('Gruppen hålls funktionell – inte bara samman.', 'Die Gruppe bleibt funktionsfähig – nicht nur zusammen.', 'The group stays functional – not just together.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Går direkt till chefen utan att säga något till laget.', 'Direkt zum Chef gehen, ohne der Schicht etwas zu sagen.', 'Go straight to the manager without saying anything to the shift.'),
              c: {
                orsak: l('Du kringgår gruppen.', 'Du umgehst die Gruppe.', 'You bypass the group.'),
                verkan: l('Frågan når ansvarspunkten.', 'Die Frage erreicht den Verantwortungspunkt.', 'The question reaches the responsibility point.'),
                konsekvens: l('Men tilliten i laget skadas när det kommer fram.', 'Aber das Vertrauen in der Schicht leidet, wenn es herauskommt.', 'But trust within the shift suffers when it comes out.'),
                bearer: l('Relationerna i laget.', 'Die Beziehungen in der Schicht.', 'The relationships on the shift.'),
              },
            },
          ],
        },
        {
          situation: l('Saken kommer upp. Chefen frågar: ”Vem gjorde fel?”', 'Die Sache kommt hoch. Der Chef fragt: „Wer hat den Fehler gemacht?“', 'The matter comes up. The manager asks: “Who made the mistake?”'),
          options: [
            {
              label: l('Pekar ut kollegan.', 'Den Kollegen benennen.', 'Name the colleague.'),
              c: {
                orsak: l('Skuldlogik.', 'Schuldlogik.', 'Blame logic.'),
                verkan: l('En syndabock hittas.', 'Ein Sündenbock wird gefunden.', 'A scapegoat is found.'),
                konsekvens: l('Systemet som tillät det förblir detsamma.', 'Das System, das es zuließ, bleibt dasselbe.', 'The system that allowed it stays the same.'),
                bearer: l('Kollegan – och nästa person i samma system.', 'Der Kollege – und die nächste Person im selben System.', 'The colleague – and the next person in the same system.'),
              },
            },
            {
              label: l('Frågar var ansvarskedjan brast: definition, mandat, uppföljning eller konsekvens?', 'Fragen, wo die Verantwortungskette gerissen ist: Definition, Mandat, Nachverfolgung oder Konsequenz?', 'Ask where the chain of responsibility broke: definition, mandate, follow-up or consequence?'),
              book: true,
              c: {
                orsak: l('Struktur före skuld.', 'Struktur vor Schuld.', 'Structure before blame.'),
                verkan: l('Bristen i uppföljningen blir synlig.', 'Die Lücke in der Nachverfolgung wird sichtbar.', 'The gap in follow-up becomes visible.'),
                konsekvens: l('Kedjan kan lagas – inte bara en person bytas ut.', 'Die Kette lässt sich reparieren – statt nur eine Person auszutauschen.', 'The chain can be repaired – not just one person replaced.'),
                bearer: l('Den som har mandat att ändra strukturen.', 'Wer das Mandat hat, die Struktur zu ändern.', 'Whoever has the mandate to change the structure.'),
              },
            },
            {
              label: l('Tar på dig skulden för att skydda laget.', 'Die Schuld auf dich nehmen, um die Schicht zu schützen.', 'Take the blame yourself to protect the shift.'),
              c: {
                orsak: l('Lojalitet mot gruppen före verkligheten.', 'Loyalität zur Gruppe vor der Wirklichkeit.', 'Loyalty to the group before reality.'),
                verkan: l('Felet får fel bärare.', 'Der Fehler bekommt den falschen Träger.', 'The fault gets the wrong bearer.'),
                konsekvens: l('Ingen lär sig något.', 'Niemand lernt etwas.', 'Nobody learns anything.'),
                bearer: l('Du – i onödan.', 'Du – unnötig.', 'You – needlessly.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        'Boken: i organisationer där ansvarspunkten är otydlig sägs inte det som borde sägas – inte för att människor inte ser, utan för att det får konsekvenser i gruppen. Gruppen skyddar sig själv: problem tonas ner, risker formuleras försiktigt, avvikelser beskrivs som undantag. När något fallerar ska frågan vara: var brast ansvarskedjan? Inte: vem kan vi offra?',
        'Das Buch: In Organisationen mit unklarem Verantwortungspunkt wird nicht ausgesprochen, was gesagt werden müsste – nicht, weil die Menschen es nicht sehen, sondern weil es Folgen in der Gruppe hat. Die Gruppe schützt sich: Probleme werden heruntergespielt, Risiken vorsichtig formuliert, Abweichungen als Ausnahmen beschrieben. Wenn etwas versagt, muss die Frage lauten: Wo ist die Verantwortungskette gerissen? Nicht: Wen können wir opfern?',
        'The book: in organisations where the responsibility point is unclear, what should be said is not said – not because people do not see, but because it has consequences within the group. The group protects itself: problems are played down, risks phrased cautiously, deviations described as exceptions. When something fails, the question should be: where did the chain of responsibility break? Not: whom can we sacrifice?',
      ),
      quote: {
        sv: 'Mogna organisationer söker systemfel. Omogna söker syndabockar.',
        de: 'Reife Organisationen suchen Systemfehler. Unreife suchen Sündenböcke.',
        en: 'Mature organisations look for system faults. Immature ones look for scapegoats.',
        src: { book: 'steg2', ch: 'Kap. 9, 9.3 Institutionell mognad' },
      },
    },
    {
      slug: 'tillit',
      type: 'classify',
      min: 6,
      title: l('Tillit som känsla – eller som erfarenhet?', 'Vertrauen als Gefühl – oder als Erfahrung?', 'Trust as feeling – or as experience?'),
      intro: l(
        'Tillit föds inte ur välvilja. Den föds ur förutsägbarhet. Sortera påståendena.',
        'Vertrauen entsteht nicht aus Wohlwollen. Es entsteht aus Berechenbarkeit. Ordne die Aussagen zu.',
        'Trust is not born of goodwill. It is born of predictability. Sort the statements.',
      ),
      categories: [
        { id: 'kansla', label: l('Bygger på känsla', 'Beruht auf Gefühl', 'Built on feeling'), hint: l('tillhörighet, stämning', 'Zugehörigkeit, Stimmung', 'belonging, mood') },
        { id: 'erfarenhet', label: l('Bygger på erfarenhet', 'Beruht auf Erfahrung', 'Built on experience'), hint: l('ord och handling över tid', 'Wort und Tat über die Zeit', 'words and actions over time') },
      ],
      items: [
        {
          text: l('”Jag litar på honom – han är en av oss.”', '„Ich vertraue ihm – er ist einer von uns.“', '“I trust him – he’s one of us.”'),
          cat: 'kansla',
          why: l('Identitet, inte erfarenhet. Gemenskap utan prövning.', 'Identität, nicht Erfahrung. Gemeinschaft ohne Bewährung.', 'Identity, not experience. Community without testing.'),
        },
        {
          text: l('”Jag litar på henne – hon har gjort det hon sagt varje gång i tre år.”', '„Ich vertraue ihr – sie hat drei Jahre lang jedes Mal getan, was sie gesagt hat.“', '“I trust her – she has done what she said every time for three years.”'),
          cat: 'erfarenhet',
          why: l('Förtroende uppstår när ord och handling över tid hänger ihop.', 'Vertrauen entsteht, wenn Wort und Tat über die Zeit zusammenpassen.', 'Trust arises when words and actions hang together over time.'),
        },
        {
          text: l('”Vi är som en familj här.”', '„Wir sind hier wie eine Familie.“', '“We’re like a family here.”'),
          cat: 'kansla',
          why: l('Den deklarerade gemenskapen – utan bärighet när verkligheten förändras.', 'Die erklärte Gemeinschaft – ohne Tragfähigkeit, wenn sich die Wirklichkeit ändert.', 'Declared community – without load-bearing capacity when reality changes.'),
        },
        {
          text: l('”Jag vet hur han kommer att agera när verkligheten förändras.”', '„Ich weiß, wie er handeln wird, wenn sich die Wirklichkeit ändert.“', '“I know how he will act when reality changes.”'),
          cat: 'erfarenhet',
          why: l('”Jag litar på dig inte för att du tycker som jag, utan för att jag vet hur du kommer att agera.”', '„Ich vertraue dir nicht, weil du denkst wie ich, sondern weil ich weiß, wie du handeln wirst.“', '“I trust you not because you think like me, but because I know how you will act.”'),
        },
        {
          text: l('”Vi behöver inte följa upp – vi har ett så bra klimat.”', '„Wir müssen nicht nachverfolgen – wir haben so ein gutes Klima.“', '“We don’t need to follow up – we have such a good atmosphere.”'),
          cat: 'kansla',
          why: l('Utan kontroll blir tillit naiv.', 'Ohne Kontrolle wird Vertrauen naiv.', 'Without verification, trust becomes naive.'),
        },
        {
          text: l('”Hos oss tar den som delegerar den första smällen om något går fel – det har vi sett.”', '„Bei uns steckt der, der delegiert, den ersten Schlag ein, wenn etwas schiefgeht – das haben wir erlebt.“', '“Here, whoever delegates takes the first hit if something goes wrong – we have seen it.”'),
          cat: 'erfarenhet',
          why: l('Förtroende i båda riktningar, prövat i verkligheten.', 'Vertrauen in beide Richtungen, in der Wirklichkeit erprobt.', 'Trust in both directions, tested in reality.'),
        },
      ],
      src: { book: 'steg1', ch: 'Kap. 1 Kunskap och förståelse; Steg 2 Kap. 3, 3.3' },
    },
    {
      slug: 'ansvarsglapp',
      type: 'finder',
      min: 7,
      title: l('Hitta ansvarsglappet', 'Finde die Verantwortungslücke', 'Find the responsibility gap'),
      intro: l(
        'Alla deltar – ingen avgör. Fråga i varje fall: vem bar beslutet?',
        'Alle machen mit – niemand entscheidet. Frag in jedem Fall: Wer hat die Entscheidung getragen?',
        'Everyone takes part – nobody decides. Ask in each case: who carried the decision?',
      ),
      cases: [
        {
          text: l('Ett fartyg ligger för ankar och ska göras sjöklart. När lotsen kommer är det inte gjort.', 'Ein Schiff liegt vor Anker und soll seeklar gemacht werden. Als der Lotse kommt, ist es nicht erledigt.', 'A ship lies at anchor and is to be made ready for sea. When the pilot arrives, it has not been done.'),
          answer: l('Maskin trodde att däck hade det. Däck trodde att maskin hade det.', 'Die Maschine dachte, das Deck hätte es. Das Deck dachte, die Maschine hätte es.', 'The engine room thought deck had it. Deck thought the engine room had it.'),
          kind: 'process',
          why: l('”Det var inte att någon vägrade. Det var att ingen var utsedd.”', '„Es war nicht so, dass jemand sich weigerte. Es war so, dass niemand benannt war.“', '“It was not that anyone refused. It was that nobody had been appointed.”'),
        },
        {
          text: l('Ett dyrt leverantörsbyte visar sig vara ett misstag.', 'Ein teurer Lieferantenwechsel erweist sich als Fehler.', 'An expensive change of supplier turns out to be a mistake.'),
          answer: l('Alla var delaktiga i beslutet.', 'Alle waren an der Entscheidung beteiligt.', 'Everyone was involved in the decision.'),
          kind: 'process',
          why: l('Alla har varit delaktiga i beslutet – men ingen tycks bära ansvaret för resultatet.', 'Alle waren an der Entscheidung beteiligt – aber niemand scheint die Verantwortung für das Ergebnis zu tragen.', 'Everyone took part in the decision – but nobody seems to carry the responsibility for the result.'),
        },
        {
          text: l('Ett hål i staketet runt en byggarbetsplats har funnits i tre veckor.', 'Ein Loch im Zaun um eine Baustelle besteht seit drei Wochen.', 'A hole in the fence around a building site has been there for three weeks.'),
          answer: l('Det är fastighetsavdelningens område.', 'Das ist Sache der Liegenschaftsabteilung.', 'That’s the property department’s area.'),
          kind: 'function',
          why: l('En funktion – men vem i den? Fråga en gång till.', 'Eine Funktion – aber wer darin? Frag noch einmal.', 'A function – but who in it? Ask once more.'),
        },
        {
          text: l('En trasig spis i ett skolkök åtgärdades samma dag.', 'Ein defekter Herd in einer Schulküche wurde noch am selben Tag in Ordnung gebracht.', 'A broken stove in a school kitchen was dealt with the same day.'),
          answer: l('Kökschefen Maria Berg stängde av den och ringde elektrikern.', 'Küchenleiterin Maria Berg schaltete ihn ab und rief den Elektriker.', 'Kitchen manager Maria Berg switched it off and called the electrician.'),
          kind: 'name',
          why: l('Ett namn, en handling, samma dag. Så ser en ansvarspunkt ut.', 'Ein Name, eine Handlung, am selben Tag. So sieht ein Verantwortungspunkt aus.', 'A name, an action, the same day. That is what a responsibility point looks like.'),
        },
      ],
    },
    {
      slug: 'befalssvar',
      type: 'objection',
      min: 5,
      title: l('När gruppen protesterar', 'Wenn die Gruppe protestiert', 'When the group protests'),
      intro: l(
        'Två invändningar som ofta kommer när någon ger lojaliteten en riktning.',
        'Zwei Einwände, die oft kommen, wenn jemand der Loyalität eine Richtung gibt.',
        'Two objections that often come when someone gives loyalty a direction.',
      ),
      items: [
        {
          objection: l('Det här riskerar att exkludera människor.', 'Das riskiert, Menschen auszuschließen.', 'This risks excluding people.'),
          answer: l('Allt som fungerar exkluderar något. Det är så riktning uppstår.', 'Alles, was funktioniert, schließt etwas aus. So entsteht Richtung.', 'Everything that works excludes something. That is how direction arises.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 10' },
        },
        {
          objection: l('Men systemet är ju fel.', 'Aber das System ist doch falsch.', 'But the system is wrong.'),
          answer: l('System uppstår alltid runt ansvar – eller runt frånvaron av det.', 'Systeme entstehen immer um Verantwortung herum – oder um ihre Abwesenheit.', 'Systems always form around responsibility – or around its absence.'),
          src: { book: 'steg1', ch: 'Vanliga invändningar – befälssvar, nr 5' },
        },
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Vem skyddar jag?', 'Wen schütze ich?', 'Whom do I protect?'),
      prompts: [
        l('Vem skyddar jag – och vad kostar det?', 'Wen schütze ich – und was kostet das?', 'Whom do I protect – and what does it cost?'),
        l('Vad vet alla i min grupp – men ingen säger tydligt?', 'Was wissen alle in meiner Gruppe – aber niemand sagt es deutlich?', 'What does everyone in my group know – but nobody says clearly?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 3,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”Lojalitet är problemet.” Stämmer det?', '„Loyalität ist das Problem.“ Stimmt das?', '“Loyalty is the problem.” Is that true?'),
          options: [
            { text: l('Ja – lojalitet gör att människor tiger.', 'Ja – Loyalität bringt Menschen zum Schweigen.', 'Yes – loyalty makes people keep quiet.'), ok: false, fb: l('Boken: lojalitet är en styrka. Problemet uppstår när den saknar riktning.', 'Das Buch: Loyalität ist eine Stärke. Das Problem entsteht, wenn sie keine Richtung hat.', 'The book: loyalty is a strength. The problem arises when it has no direction.') },
            { text: l('Nej – problemet är vad lojaliteten riktas mot: gruppen i stället för uppgiften.', 'Nein – das Problem ist, worauf die Loyalität gerichtet ist: die Gruppe statt der Aufgabe.', 'No – the problem is what loyalty is directed at: the group instead of the task.'), ok: true, fb: l('Ja. Skillnaden ligger inte i graden av lojalitet.', 'Ja. Der Unterschied liegt nicht im Grad der Loyalität.', 'Yes. The difference is not in the degree of loyalty.') },
          ],
          misconception: l('Att lösningen är mindre lojalitet.', 'Dass die Lösung weniger Loyalität ist.', 'That the solution is less loyalty.'),
        },
        {
          q: l('Vad gör en mogen organisation när något går fel?', 'Was tut eine reife Organisation, wenn etwas schiefgeht?', 'What does a mature organisation do when something goes wrong?'),
          options: [
            { text: l('Hittar den som gjorde fel.', 'Findet den, der den Fehler gemacht hat.', 'Finds whoever made the mistake.'), ok: false, fb: l('Skuld kan vara berättigad. Men skuld reparerar inget system.', 'Schuld kann berechtigt sein. Aber Schuld repariert kein System.', 'Blame may be justified. But blame repairs no system.') },
            { text: l('Söker var ansvarskedjan brast.', 'Sucht, wo die Verantwortungskette gerissen ist.', 'Looks for where the chain of responsibility broke.'), ok: true, fb: l('Ja. Definition, mandat, uppföljning eller konsekvens.', 'Ja. Definition, Mandat, Nachverfolgung oder Konsequenz.', 'Yes. Definition, mandate, follow-up or consequence.') },
            { text: l('Inför en ny värdegrund.', 'Führt ein neues Leitbild ein.', 'Introduces a new set of values.'), ok: false, fb: l('Värdeord ändrar inte kedjan.', 'Wertworte ändern die Kette nicht.', 'Value words do not change the chain.') },
          ],
          misconception: l('Att ansvar betyder att hitta en skyldig.', 'Dass Verantwortung heißt, einen Schuldigen zu finden.', 'That responsibility means finding someone guilty.'),
        },
        {
          q: l('Gemenskap är …', 'Gemeinschaft ist …', 'Community is …'),
          options: [
            { text: l('en utgångspunkt som ledningen ska skapa.', 'ein Ausgangspunkt, den die Leitung schaffen soll.', 'a starting point that management should create.'), ok: false, fb: l('Den kan inte beslutas eller kommuniceras fram.', 'Sie lässt sich nicht beschließen oder herbeikommunizieren.', 'It cannot be decided or communicated into being.') },
            { text: l('ett resultat av gemensamt utförande mot ett gemensamt mål.', 'ein Ergebnis gemeinsamen Tuns auf ein gemeinsames Ziel hin.', 'a result of shared execution towards a shared goal.'), ok: true, fb: l('Ja. Därför är verklig gemenskap ofta tyst.', 'Ja. Darum ist echte Gemeinschaft oft still.', 'Yes. That is why real community is often quiet.') },
          ],
          misconception: l('Att gemenskap är ett tillstånd man kan deklarera.', 'Dass Gemeinschaft ein Zustand ist, den man erklären kann.', 'That community is a state you can declare.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Ta ett gemensamt ansvar i ditt team och ge det ett namn – en funktion och en människa.',
        'Nimm eine gemeinsame Verantwortung in deinem Team und gib ihr einen Namen – eine Funktion und einen Menschen.',
        'Take one shared responsibility in your team and give it a name – a function and a person.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 8 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 8 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 8, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Säg: ”Alla vet. Men ingen säger det tydligt.” Paus. Fråga: ”Vad är det hos er?”',
      'Sag: „Alle wissen es. Aber niemand sagt es deutlich.“ Pause. Frage: „Was ist das bei euch?“',
      'Say: “Everyone knows. But nobody says it clearly.” Pause. Ask: “What is it in your organisation?”',
    ),
    questions: [
      l('Vad är er lojalitet riktad mot – gruppen eller uppgiften?', 'Worauf ist eure Loyalität gerichtet – auf die Gruppe oder die Aufgabe?', 'What is your loyalty directed at – the group or the task?'),
      l('Var finns ansvarsglapp hos er: alla deltar, ingen avgör?', 'Wo gibt es bei euch Verantwortungslücken: Alle machen mit, niemand entscheidet?', 'Where are your responsibility gaps: everyone takes part, nobody decides?'),
      l('När något gick fel senast – frågade ni vem, eller var kedjan brast?', 'Als zuletzt etwas schiefging – habt ihr nach dem Wer gefragt oder danach, wo die Kette riss?', 'The last time something went wrong – did you ask who, or where the chain broke?'),
    ],
    note: l(
      'Bryt diskussioner om enskilda kollegor. Här pratar vi struktur, inte personer.',
      'Brich Diskussionen über einzelne Kollegen ab. Hier geht es um Struktur, nicht um Personen.',
      'Cut off discussions about individual colleagues. Here we talk structure, not people.',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
