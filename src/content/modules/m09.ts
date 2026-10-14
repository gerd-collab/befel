// M09 · Wasta – beroendets mekanism
// The books contain no text of their own on WASTA yet (LERNKONZEPT, open point 1). Until the author
// delivers it, the module draws on related chapters: Steg 3 Del II Kap. 10 (Styrmannen som stängde av),
// Kap. 11 Arbete och sysselsättning; Steg 4 Kap. 14 Kontroll utan konsekvens; folder definition.

import { l, type Module } from '../types';

export const m09: Module = {
  id: 'm09',
  num: 9,
  part: 3,
  title: l('Wasta – beroendets mekanism', 'Wasta – der Mechanismus der Abhängigkeit', 'Wasta – the mechanism of dependence'),
  teaser: l(
    'Så känner du igen mönstren av ansvarsflykt.',
    'So erkennst du die Muster der Verantwortungsflucht.',
    'How to recognise the patterns of escaping responsibility.',
  ),
  goal: l(
    'Du känner igen mönster av ansvarsflykt – beroende, bekvämlighet och feghet – i det lilla och i organisationer.',
    'Du erkennst Muster der Verantwortungsflucht – Abhängigkeit, Bequemlichkeit und Feigheit – im Kleinen und in Organisationen.',
    'You recognise patterns of escaping responsibility – dependence, convenience and cowardice – in small things and in organisations.',
  ),
  keyTerms: [
    l('WASTA', 'WASTA', 'WASTA'),
    l('Beroende', 'Abhängigkeit', 'Dependence'),
    l('Ansvarsflykt', 'Verantwortungsflucht', 'Escaping responsibility'),
    l('Kontroll utan konsekvens', 'Kontrolle ohne Konsequenz', 'Control without consequence'),
    l('Sysselsättning', 'Beschäftigung', 'Busywork'),
  ],
  sources: [
    { book: 'folder', ch: 'Webbkursens beskrivning (WASTA)' },
    { book: 'steg3-2', ch: 'Kap. 10 Delegation – Styrmannen som stängde av' },
    { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning' },
    { book: 'steg4', ch: 'Kap. 14 Kontroll utan konsekvens' },
  ],
  image: 'bollards',
  needsAuthor: l(
    'Böckerna innehåller ännu ingen egen text om WASTA. Modulen bygger tills vidare på närliggande kapitel. Torbjörn kompletterar med begreppets bakgrund, egna erfarenheter och exempel. WASTA beskrivs här som ett beteendemönster – aldrig som en egenskap hos en kultur eller ett ursprung.',
    'Die Bücher enthalten noch keinen eigenen Text zu WASTA. Das Modul stützt sich vorerst auf verwandte Kapitel. Torbjörn ergänzt Herkunft des Begriffs, eigene Erfahrungen und Beispiele. WASTA wird hier als Verhaltensmuster beschrieben – nie als Merkmal einer Kultur oder Herkunft.',
    'The books do not yet contain their own text on WASTA. For now the module draws on related chapters. Torbjörn will add the background of the term, his own experiences and examples. WASTA is described here as a pattern of behaviour – never as a trait of a culture or an origin.',
  ),
  blocks: [
    {
      slug: 'lektion',
      type: 'lesson',
      min: 8,
      title: l('När beroende ersätter ansvar', 'Wenn Abhängigkeit Verantwortung ersetzt', 'When dependence replaces responsibility'),
      slides: [
        {
          heading: l('WASTA – motsatsen till OVÄLD', 'WASTA – das Gegenteil von OVÄLD', 'WASTA – the opposite of OVÄLD'),
          body: [
            l(
              'Kursens beskrivning ställer två begrepp mot varandra: OVÄLD – att stå fri från otillbörlig påverkan – och WASTA: beroende, bekvämlighet och feghet. Kursen ska hjälpa dig att känna igen båda.',
              'Die Kursbeschreibung stellt zwei Begriffe gegenüber: OVÄLD – frei von unzulässigem Einfluss zu stehen – und WASTA: Abhängigkeit, Bequemlichkeit und Feigheit. Der Kurs soll dir helfen, beides zu erkennen.',
              'The course description sets two concepts against each other: OVÄLD – standing free of undue influence – and WASTA: dependence, convenience and cowardice. The course is meant to help you recognise both.',
            ),
            l(
              'I den här modulen är WASTA namnet på ett mönster: när beslut och lojalitet styrs av vem man är beroende av, i stället för av ansvar. Mönstret finns överallt där ansvar flyr.',
              'In diesem Modul ist WASTA der Name eines Musters: wenn Entscheidungen und Loyalität davon gesteuert werden, von wem man abhängig ist, statt von Verantwortung. Das Muster gibt es überall, wo Verantwortung flieht.',
              'In this module WASTA is the name of a pattern: when decisions and loyalty are steered by whom one depends on, instead of by responsibility. The pattern exists wherever responsibility escapes.',
            ),
          ],
          list: [
            l('Beroende – vem kan jag inte säga emot?', 'Abhängigkeit – wem kann ich nicht widersprechen?', 'Dependence – whom can I not contradict?'),
            l('Bekvämlighet – vad är skönast att låta bli?', 'Bequemlichkeit – was ist am angenehmsten zu unterlassen?', 'Convenience – what is most comfortable to leave undone?'),
            l('Feghet – vad vågar jag inte säga?', 'Feigheit – was wage ich nicht zu sagen?', 'Cowardice – what do I not dare to say?'),
          ],
        },
        {
          heading: l('Människor formas av systemet', 'Menschen werden vom System geformt', 'People are shaped by the system'),
          body: [
            l(
              'När människor aldrig får ansvar slutar de till slut att ta ansvar. De gör exakt det de blivit tillsagda. Inte mer. Och ibland inte ens det som egentligen behövs. Organisationen fungerar fortfarande – men bara så länge någon högst upp gör allt själv.',
              'Wenn Menschen nie Verantwortung bekommen, hören sie irgendwann auf, Verantwortung zu übernehmen. Sie tun genau das, was ihnen gesagt wurde. Nicht mehr. Und manchmal nicht einmal das, was eigentlich nötig ist. Die Organisation funktioniert weiter – aber nur, solange einer ganz oben alles selbst macht.',
              'When people never get responsibility, they eventually stop taking it. They do exactly what they have been told. Nothing more. And sometimes not even what is actually needed. The organisation still works – but only as long as someone at the top does everything himself.',
            ),
          ],
          quote: {
            sv: 'Människor blir inte ansvarslösa. De formas av systemet de arbetar i.',
            de: 'Menschen werden nicht verantwortungslos. Sie werden von dem System geformt, in dem sie arbeiten.',
            en: 'People do not become irresponsible. They are shaped by the system they work in.',
            src: { book: 'steg3-2', ch: 'Kap. 10 Delegation – Styrmannen som stängde av' },
          },
        },
        {
          heading: l('Kontroll utan konsekvens', 'Kontrolle ohne Konsequenz', 'Control without consequence'),
          body: [
            l(
              'Revisioner genomförs. Avvikelser registreras. Rapporter sammanställs. Allt tyder på kontroll. Men frågan är inte vad som mäts – utan vad som händer efteråt. Om avvikelser inte leder till konsekvens lär sig organisationen något avgörande: att avvikelser är acceptabla.',
              'Revisionen werden durchgeführt. Abweichungen werden erfasst. Berichte werden zusammengestellt. Alles deutet auf Kontrolle hin. Aber die Frage ist nicht, was gemessen wird – sondern was danach passiert. Wenn Abweichungen keine Konsequenz haben, lernt die Organisation etwas Entscheidendes: dass Abweichungen akzeptabel sind.',
              'Audits are carried out. Deviations are recorded. Reports are compiled. Everything suggests control. But the question is not what is measured – but what happens afterwards. If deviations lead to no consequence, the organisation learns something decisive: that deviations are acceptable.',
            ),
          ],
          quote: {
            sv: 'Kontroll utan konsekvens är inte kontroll. Det är observation.',
            de: 'Kontrolle ohne Konsequenz ist keine Kontrolle. Sie ist Beobachtung.',
            en: 'Control without consequence is not control. It is observation.',
            src: { book: 'steg4', ch: 'Kap. 14 Kontroll utan konsekvens' },
          },
        },
        {
          heading: l('Arbete, hobby och sysselsättning', 'Arbeit, Hobby und Beschäftigung', 'Work, hobby and busywork'),
          body: [
            l(
              'Arbete är något som måste göras; någon bär ansvar och resultatet har konsekvenser. Hobby gör man för sin egen skull och kan sluta när man vill. Sysselsättning ligger mellan dem – utan verkligt ansvar och utan verklig frihet. Man måste vara där, men resultatet spelar ingen avgörande roll.',
              'Arbeit ist etwas, das getan werden muss; jemand trägt Verantwortung, und das Ergebnis hat Folgen. Ein Hobby betreibt man für sich selbst und kann jederzeit aufhören. Beschäftigung liegt dazwischen – ohne echte Verantwortung und ohne echte Freiheit. Man muss da sein, aber das Ergebnis spielt keine entscheidende Rolle.',
              'Work is something that has to be done; someone carries responsibility and the result has consequences. A hobby is done for its own sake and you can stop whenever you like. Busywork lies in between – without real responsibility and without real freedom. You have to be there, but the result does not really matter.',
            ),
          ],
          quote: {
            sv: 'Arbete kräver ansvar. Hobby kräver frihet.',
            de: 'Arbeit verlangt Verantwortung. Ein Hobby verlangt Freiheit.',
            en: 'Work requires responsibility. A hobby requires freedom.',
            src: { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning' },
          },
        },
      ],
      cards: [
        { term: l('WASTA', 'WASTA', 'WASTA'), text: l('Beroende, bekvämlighet och feghet – ett beteendemönster.', 'Abhängigkeit, Bequemlichkeit und Feigheit – ein Verhaltensmuster.', 'Dependence, convenience and cowardice – a pattern of behaviour.') },
        { term: l('Beroende', 'Abhängigkeit', 'Dependence'), text: l('När någon annan bestämmer vad jag vågar säga.', 'Wenn jemand anderes bestimmt, was ich zu sagen wage.', 'When someone else decides what I dare to say.') },
        { term: l('Ansvarsflykt', 'Verantwortungsflucht', 'Escaping responsibility'), text: l('Att göra exakt det man blivit tillsagd – inte mer.', 'Genau das tun, was einem gesagt wurde – nicht mehr.', 'Doing exactly what you were told – nothing more.') },
        { term: l('Kontroll utan konsekvens', 'Kontrolle ohne Konsequenz', 'Control without consequence'), text: l('Observation som ser ut som kontroll.', 'Beobachtung, die wie Kontrolle aussieht.', 'Observation that looks like control.') },
        { term: l('Sysselsättning', 'Beschäftigung', 'Busywork'), text: l('Varken ansvar eller frihet – bara tidsförbrukning.', 'Weder Verantwortung noch Freiheit – nur Zeitverbrauch.', 'Neither responsibility nor freedom – just using up time.') },
      ],
    },
    {
      slug: 'styrmannen',
      type: 'scenario',
      min: 10,
      title: l('Styrmannen som stängde av', 'Der Steuermann, der abschaltete', 'The mate who switched off'),
      source: { book: 'steg3-2', ch: 'Kap. 10 Delegation – Styrmannen som stängde av' },
      image: 'bollards',
      intro: l(
        'Du seglar med skepparen Bond-Johan, ökänd längs kusten – inte för att han är en dålig sjöman, tvärtom. Men han avskyr alla med högre behörighet än han själv, och han gör allt själv. Han släpper ingenting. Andre styrman har seglat med Johan i många år. När han kommer ombord tar han av sig klockan – och stänger av huvudet. Sedan åker han bara med.',
        'Du fährst mit dem Schiffer Bond-Johan, berüchtigt an der ganzen Küste – nicht, weil er ein schlechter Seemann wäre, im Gegenteil. Aber er verabscheut jeden mit höherer Befähigung als er selbst, und er macht alles selbst. Er gibt nichts ab. Der Zweite Steuermann fährt seit vielen Jahren mit Johan. Wenn er an Bord kommt, nimmt er die Uhr ab – und schaltet den Kopf ab. Dann fährt er einfach mit.',
        'You are sailing with the skipper Bond-Johan, notorious along the coast – not because he is a bad seaman, quite the opposite. But he loathes anyone with higher qualifications than himself, and he does everything himself. He lets go of nothing. The second mate has sailed with Johan for many years. When he comes aboard he takes off his watch – and switches off his head. Then he just goes along.',
      ),
      nodes: [
        {
          situation: l(
            'Ni har lossat en bensinlast och ska göra tankrent. Styrmannen och du går ner under backen för att hämta de tunga slangarna. Han går först i lejdaren, du några steg efter.',
            'Ihr habt eine Benzinladung gelöscht und sollt die Tanks reinigen. Der Steuermann und du holt unter der Back die schweren Schläuche. Er geht als Erster die Leiter hoch, du ein paar Stufen hinter ihm.',
            'You have discharged a cargo of petrol and are to clean the tanks. The mate and you go down under the forecastle to fetch the heavy hoses. He goes first up the ladder, you a few steps behind.',
          ),
          options: [
            {
              label: l('Följer efter med slangarna – så som ni alltid gör.', 'Mit den Schläuchen hinterhergehen – wie immer.', 'Follow with the hoses – the way you always do.'),
              book: true,
              c: {
                orsak: l('Ingen har bestämt hur slangarna ska tas upp.', 'Niemand hat festgelegt, wie die Schläuche hochgebracht werden.', 'Nobody has decided how the hoses are to be brought up.'),
                verkan: l('Ordern ”slangarna upp på däck” är det enda som styr.', 'Die Order „Schläuche an Deck“ ist das Einzige, was steuert.', 'The order “hoses up on deck” is the only thing steering.'),
                konsekvens: l('Ingen tänker längre än ordern.', 'Niemand denkt weiter als die Order.', 'Nobody thinks beyond the order.'),
                bearer: l('Den som står sist i lejdaren.', 'Wer als Letzter auf der Leiter steht.', 'Whoever is last on the ladder.'),
              },
            },
            {
              label: l('Föreslår att ni bestämmer hur slangarna ska tas upp innan ni börjar.', 'Vorschlagen, vorher festzulegen, wie die Schläuche hochgebracht werden.', 'Suggest agreeing how the hoses will be brought up before you start.'),
              c: {
                orsak: l('Du tar initiativ.', 'Du ergreifst die Initiative.', 'You take the initiative.'),
                verkan: l('I det här systemet ger initiativ skäll.', 'In diesem System bringt Initiative Ärger.', 'In this system, initiative earns a telling-off.'),
                konsekvens: l('Arbetet blir säkrare – och du blir impopulär.', 'Die Arbeit wird sicherer – und du wirst unbeliebt.', 'The work becomes safer – and you become unpopular.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
            {
              label: l('Ber honom vänta tills ni båda är uppe på däck.', 'Ihn bitten zu warten, bis ihr beide oben an Deck seid.', 'Ask him to wait until you are both up on deck.'),
              c: {
                orsak: l('Du ger en egen instruktion.', 'Du gibst eine eigene Anweisung.', 'You give an instruction of your own.'),
                verkan: l('Han följer den – om den är exakt nog.', 'Er befolgt sie – wenn sie genau genug ist.', 'He follows it – if it is exact enough.'),
                konsekvens: l('Säkerheten hänger på hur väl du formulerar dig.', 'Die Sicherheit hängt davon ab, wie genau du dich ausdrückst.', 'Safety depends on how precisely you phrase things.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
          ],
        },
        {
          situation: l(
            'Han kommer upp på däck, tar ett steg fram – och släpper slangarna. De faller rakt ner mot dig i lejdaren. Du står fast. ”Vad håller du på med?” Han tittar lugnt på dig: ”Johan sa att slangarna skulle upp på däck. Nu är de där.” Sedan går han.',
            'Er kommt an Deck, macht einen Schritt nach vorn – und lässt die Schläuche los. Sie fallen direkt auf dich herunter in die Leiter. Du kannst dich nicht bewegen. „Was machst du da?“ Er sieht dich ruhig an: „Johan hat gesagt, die Schläuche sollen an Deck. Jetzt sind sie da.“ Dann geht er.',
            'He comes up on deck, takes a step forward – and lets go of the hoses. They fall straight down at you on the ladder. You are stuck. “What are you doing?” He looks at you calmly: “Johan said the hoses were to go up on deck. Now they’re there.” Then he walks off.',
          ),
          options: [
            {
              label: l('Skäller på styrmannen.', 'Den Steuermann anschreien.', 'Shout at the mate.'),
              c: {
                orsak: l('Du riktar dig mot personen.', 'Du richtest dich gegen die Person.', 'You go after the person.'),
                verkan: l('Han får bekräftat det han redan vet: att man får skäll när något händer.', 'Er bekommt bestätigt, was er schon weiß: dass man Ärger bekommt, wenn etwas passiert.', 'He has confirmed what he already knows: that you get told off when something happens.'),
                konsekvens: l('Systemet som formade honom är detsamma.', 'Das System, das ihn geformt hat, bleibt dasselbe.', 'The system that shaped him stays the same.'),
                bearer: l('Nästa person i lejdaren.', 'Die nächste Person auf der Leiter.', 'The next person on the ladder.'),
              },
            },
            {
              label: l('Förstår vad du ser: han har lärt sig systemet – initiativ ger skäll, exakt lydnad ger ro.', 'Verstehen, was du siehst: Er hat das System gelernt – Initiative bringt Ärger, genauer Gehorsam bringt Ruhe.', 'Understand what you are seeing: he has learned the system – initiative earns a telling-off, exact obedience earns peace.'),
              book: true,
              c: {
                orsak: l('Ett ledarskap utan delegation.', 'Eine Führung ohne Delegation.', 'Leadership without delegation.'),
                verkan: l('Han gör aldrig något han inte fått en direkt order om. Inte mer. Inte mindre.', 'Er tut nie etwas, wozu er keinen direkten Befehl hat. Nicht mehr. Nicht weniger.', 'He never does anything he has not been directly ordered to do. No more. No less.'),
                konsekvens: l('Han har slutat tänka.', 'Er hat aufgehört zu denken.', 'He has stopped thinking.'),
                bearer: l('Alla ombord – och han själv.', 'Alle an Bord – und er selbst.', 'Everyone on board – and he himself.'),
              },
            },
            {
              label: l('Rapporterar händelsen till Johan.', 'Den Vorfall Johan melden.', 'Report the incident to Johan.'),
              c: {
                orsak: l('Frågan går till den som gör allt själv.', 'Die Frage geht an den, der alles selbst macht.', 'The question goes to the man who does everything himself.'),
                verkan: l('Johan tar ännu mer kontroll.', 'Johan übernimmt noch mehr Kontrolle.', 'Johan takes even more control.'),
                konsekvens: l('Beroendet av en person ökar.', 'Die Abhängigkeit von einer Person wächst.', 'Dependence on one person grows.'),
                bearer: l('Besättningen.', 'Die Besatzung.', 'The crew.'),
              },
            },
          ],
        },
        {
          situation: l('Vad gör du med det du nu har sett?', 'Was machst du mit dem, was du jetzt gesehen hast?', 'What do you do with what you have now seen?'),
          options: [
            {
              label: l('Stannar och anpassar dig – det är ju så det fungerar här.', 'Bleiben und dich anpassen – so läuft es hier eben.', 'Stay and adapt – that’s just how it works here.'),
              c: {
                orsak: l('Bekvämlighet och beroende.', 'Bequemlichkeit und Abhängigkeit.', 'Convenience and dependence.'),
                verkan: l('Du lär dig samma sak som styrmannen.', 'Du lernst dasselbe wie der Steuermann.', 'You learn the same thing as the mate.'),
                konsekvens: l('Systemet formar dig också.', 'Das System formt auch dich.', 'The system shapes you too.'),
                bearer: l('Du – över tid.', 'Du – über die Zeit.', 'You – over time.'),
              },
            },
            {
              label: l('Säger upp dig efter tre veckor.', 'Nach drei Wochen kündigen.', 'Resign after three weeks.'),
              book: true,
              c: {
                orsak: l('Du vägrar formas av ett system utan ansvar.', 'Du weigerst dich, von einem System ohne Verantwortung geformt zu werden.', 'You refuse to be shaped by a system without responsibility.'),
                verkan: l('Du lämnar – han stannar.', 'Du gehst – er bleibt.', 'You leave – he stays.'),
                konsekvens: l('”Det säger egentligen allt.”', '„Das sagt eigentlich alles.“', '“That really says it all.”'),
                bearer: l('Du – och de som stannar.', 'Du – und die, die bleiben.', 'You – and those who stay.'),
              },
            },
            {
              label: l('Försöker ändra på Johan.', 'Versuchen, Johan zu ändern.', 'Try to change Johan.'),
              c: {
                orsak: l('Du vill rätta systemet uppifrån – utan mandat.', 'Du willst das System von oben korrigieren – ohne Mandat.', 'You want to fix the system from above – without a mandate.'),
                verkan: l('Johan avskyr dem med högre behörighet.', 'Johan verabscheut die mit höherer Befähigung.', 'Johan loathes those with higher qualifications.'),
                konsekvens: l('Ansvar utan mandat är maktlöshet.', 'Verantwortung ohne Mandat ist Ohnmacht.', 'Responsibility without mandate is powerlessness.'),
                bearer: l('Du.', 'Du.', 'You.'),
              },
            },
          ],
        },
      ],
      outcome: l(
        '”Jag sade upp mig efter tre veckor. Han stannade kvar i flera år. Det säger egentligen allt.” Det tog några sekunder att förstå vad han hade sett: mannen gjorde aldrig något han inte hade fått en direkt order om. Om man tog initiativ fick man skäll. Om man bara gjorde exakt det man blivit tillsagd fick man vara ifred. Så han slutade tänka.',
        '„Ich kündigte nach drei Wochen. Er blieb noch Jahre. Das sagt eigentlich alles.“ Es dauerte ein paar Sekunden, bis er verstand, was er gesehen hatte: Der Mann tat nie etwas, wozu er keinen direkten Befehl hatte. Wer Initiative zeigte, bekam Ärger. Wer genau das tat, was ihm gesagt wurde, hatte seine Ruhe. Also hörte er auf zu denken.',
        '“I resigned after three weeks. He stayed on for years. That really says it all.” It took a few seconds to understand what he had seen: the man never did anything he had not been directly ordered to do. Taking initiative earned a telling-off. Doing exactly what you were told earned you peace. So he stopped thinking.',
      ),
      quote: {
        sv: 'När människor aldrig får ansvar slutar de till slut att ta ansvar.',
        de: 'Wenn Menschen nie Verantwortung bekommen, hören sie irgendwann auf, Verantwortung zu übernehmen.',
        en: 'When people never get responsibility, they eventually stop taking it.',
        src: { book: 'steg3-2', ch: 'Kap. 10 Delegation – Vad historien visar' },
      },
    },
    {
      slug: 'arbete',
      type: 'classify',
      min: 7,
      title: l('Arbete, hobby eller sysselsättning?', 'Arbeit, Hobby oder Beschäftigung?', 'Work, hobby or busywork?'),
      intro: l(
        'Tre former av aktivitet. Var finns ansvaret – och var finns friheten?',
        'Drei Formen von Tätigkeit. Wo liegt die Verantwortung – und wo die Freiheit?',
        'Three forms of activity. Where is the responsibility – and where is the freedom?',
      ),
      categories: [
        { id: 'arbete', label: l('Arbete', 'Arbeit', 'Work'), hint: l('måste göras, någon bär ansvar', 'muss getan werden, jemand trägt Verantwortung', 'must be done, someone carries responsibility') },
        { id: 'hobby', label: l('Hobby', 'Hobby', 'Hobby'), hint: l('för egen skull, frihet', 'für sich selbst, Freiheit', 'for its own sake, freedom') },
        { id: 'syssel', label: l('Sysselsättning', 'Beschäftigung', 'Busywork'), hint: l('varken ansvar eller frihet', 'weder Verantwortung noch Freiheit', 'neither responsibility nor freedom') },
      ],
      items: [
        {
          text: l('Göte går sist en runda genom huset, låser dörrarna och kontrollerar att allt är säkrat inför natten.', 'Göte geht als Letzter eine Runde durchs Haus, schließt die Türen ab und prüft, dass alles für die Nacht gesichert ist.', 'Göte is the last to do a round of the house, locking the doors and checking that everything is secured for the night.'),
          cat: 'arbete',
          why: l('Ingen hade bett honom. Han gjorde det bara. Det var hans ansvar.', 'Niemand hatte ihn gebeten. Er tat es einfach. Es war seine Verantwortung.', 'Nobody had asked him. He just did it. It was his responsibility.'),
        },
        {
          text: l('Fylla i ett formulär som ingen läser, för att det står på listan.', 'Ein Formular ausfüllen, das niemand liest, weil es auf der Liste steht.', 'Filling in a form nobody reads, because it is on the list.'),
          cat: 'syssel',
          why: l('Man måste vara där, men resultatet spelar ingen roll.', 'Man muss da sein, aber das Ergebnis spielt keine Rolle.', 'You have to be there, but the result does not matter.'),
        },
        {
          text: l('Bygga en modellbåt på lördagen.', 'Am Samstag ein Modellschiff bauen.', 'Building a model boat on Saturday.'),
          cat: 'hobby',
          why: l('För egen skull, utan ansvar inför andra – frihetens glädje.', 'Für sich selbst, ohne Verantwortung gegenüber anderen – die Freude der Freiheit.', 'For its own sake, without responsibility to others – the joy of freedom.'),
        },
        {
          text: l('Sitta med på ett möte där inget beslut ska fattas.', 'In einer Besprechung sitzen, in der nichts entschieden werden soll.', 'Sitting in a meeting where no decision is to be made.'),
          cat: 'syssel',
          why: l('Tidsförbrukning – varken arbetsglädje eller hobbyglädje.', 'Zeitverbrauch – weder Arbeitsfreude noch Hobbyfreude.', 'Using up time – neither joy in work nor joy in a hobby.'),
        },
        {
          text: l('Laga maskinen så att produktionen kan starta igen.', 'Die Maschine reparieren, damit die Produktion wieder anlaufen kann.', 'Repairing the machine so production can start again.'),
          cat: 'arbete',
          why: l('Det behövs, resultatet syns, och någon kan säga: det blev gjort.', 'Es ist nötig, das Ergebnis ist sichtbar, und jemand kann sagen: Es ist erledigt.', 'It is needed, the result is visible, and someone can say: it got done.'),
        },
        {
          text: l('Pingisbord och fruktfat för att öka arbetsglädjen.', 'Tischtennisplatte und Obstkorb, um die Arbeitsfreude zu steigern.', 'A table-tennis table and a fruit bowl to boost joy in work.'),
          cat: 'hobby',
          why: l('Boken: att göra arbetet mer likt en hobby är ett missförstånd. Arbete blir roligare när människor får ansvar och förtroende.', 'Das Buch: Arbeit einem Hobby ähnlicher zu machen, ist ein Missverständnis. Arbeit wird erfreulicher, wenn Menschen Verantwortung und Vertrauen bekommen.', 'The book: making work more like a hobby is a misunderstanding. Work becomes more enjoyable when people get responsibility and trust.'),
        },
      ],
      src: { book: 'steg3-2', ch: 'Kap. 11 Arbete och sysselsättning – Tre olika former av aktivitet' },
    },
    {
      slug: 'kontroll',
      type: 'finder',
      min: 6,
      title: l('Kontroll – eller bara observation?', 'Kontrolle – oder nur Beobachtung?', 'Control – or just observation?'),
      intro: l(
        'I varje fall finns en kontroll. Frågan är om den leder till ett beslut med en bärare.',
        'In jedem Fall gibt es eine Kontrolle. Die Frage ist, ob sie zu einer Entscheidung mit einem Träger führt.',
        'In each case there is a control. The question is whether it leads to a decision with a bearer.',
      ),
      cases: [
        {
          text: l('En revision visar samma avvikelse för tredje året i rad.', 'Eine Revision zeigt im dritten Jahr in Folge dieselbe Abweichung.', 'An audit shows the same deviation for the third year in a row.'),
          answer: l('Den är noterad i revisionsrapporten.', 'Sie ist im Revisionsbericht vermerkt.', 'It is noted in the audit report.'),
          kind: 'process',
          why: l('När revision blir ritual granskar man, noterar och rapporterar – och sedan fortsätter verksamheten som tidigare.', 'Wenn Revision zum Ritual wird, prüft man, notiert, berichtet – und dann läuft der Betrieb weiter wie bisher.', 'When auditing becomes ritual, you examine, note and report – and then operations continue as before.'),
        },
        {
          text: l('En skyddsrond hittar en blockerad nödutgång.', 'Ein Sicherheitsrundgang findet einen blockierten Notausgang.', 'A safety round finds a blocked emergency exit.'),
          answer: l('Den är registrerad i avvikelsesystemet.', 'Er ist im Abweichungssystem erfasst.', 'It is registered in the deviation system.'),
          kind: 'process',
          why: l('Avvikelsen registreras, en rapport skrivs – inget händer.', 'Die Abweichung wird erfasst, ein Bericht geschrieben – nichts passiert.', 'The deviation is registered, a report is written – nothing happens.'),
        },
        {
          text: l('En leverans med felaktig märkning upptäcks vid kontroll.', 'Bei einer Kontrolle wird eine Lieferung mit falscher Kennzeichnung entdeckt.', 'A delivery with incorrect labelling is found during a check.'),
          answer: l('Kvalitetsansvarig Sara Holm stoppade leveransen och beslutade att etiketterna byts före fredag.', 'Qualitätsverantwortliche Sara Holm stoppte die Lieferung und entschied, dass die Etiketten bis Freitag getauscht werden.', 'Quality manager Sara Holm stopped the delivery and decided the labels would be replaced by Friday.'),
          kind: 'name',
          why: l('Kontroll → konsekvens → ansvar. Avvikelsen fick en bärare.', 'Kontrolle → Konsequenz → Verantwortung. Die Abweichung bekam einen Träger.', 'Control → consequence → responsibility. The deviation got a bearer.'),
        },
        {
          text: l('Ett återkommande leverantörsfel accepteras.', 'Ein wiederkehrender Lieferantenfehler wird akzeptiert.', 'A recurring supplier fault is accepted.'),
          answer: l('Inköp har godkänt det.', 'Der Einkauf hat es genehmigt.', 'Purchasing has approved it.'),
          kind: 'function',
          why: l('En funktion – men vem i den bär beslutet att acceptera felet?', 'Eine Funktion – aber wer darin trägt die Entscheidung, den Fehler hinzunehmen?', 'A function – but who in it carries the decision to accept the fault?'),
        },
      ],
    },
    {
      slug: 'reflektion',
      type: 'reflection',
      min: 5,
      title: l('Var är jag beroende?', 'Wo bin ich abhängig?', 'Where am I dependent?'),
      prompts: [
        l('Var är jag beroende – och vad hindrar det mig från att säga?', 'Wo bin ich abhängig – und was hindert mich das zu sagen?', 'Where am I dependent – and what does that stop me from saying?'),
        l('Vad gör jag bara för att det står på listan?', 'Was tue ich nur, weil es auf der Liste steht?', 'What do I do only because it is on the list?'),
      ],
    },
    {
      slug: 'kunskapskoll',
      type: 'quiz',
      min: 4,
      title: l('Kunskapskoll', 'Wissenscheck', 'Knowledge check'),
      questions: [
        {
          q: l('”WASTA beskriver en viss kultur.” Stämmer det?', '„WASTA beschreibt eine bestimmte Kultur.“ Stimmt das?', '“WASTA describes a particular culture.” Is that true?'),
          options: [
            { text: l('Ja – begreppet kommer från en viss del av världen.', 'Ja – der Begriff stammt aus einem bestimmten Teil der Welt.', 'Yes – the term comes from a certain part of the world.'), ok: false, fb: l('Kursen använder WASTA som namn på ett beteendemönster – inte som en egenskap hos en kultur eller ett ursprung.', 'Der Kurs verwendet WASTA als Namen für ein Verhaltensmuster – nicht als Merkmal einer Kultur oder Herkunft.', 'The course uses WASTA as the name of a pattern of behaviour – not as a trait of a culture or origin.') },
            { text: l('Nej – det är ett mönster: beroende, bekvämlighet och feghet, som finns överallt där ansvar flyr.', 'Nein – es ist ein Muster: Abhängigkeit, Bequemlichkeit und Feigheit, das es überall gibt, wo Verantwortung flieht.', 'No – it is a pattern: dependence, convenience and cowardice, found wherever responsibility escapes.'), ok: true, fb: l('Ja. Mönstret kan finnas i varje organisation – och i varje människa.', 'Ja. Das Muster kann es in jeder Organisation geben – und in jedem Menschen.', 'Yes. The pattern can exist in any organisation – and in any person.') },
          ],
          misconception: l('Att ansvarsflykt hör till andra.', 'Dass Verantwortungsflucht etwas von anderen ist.', 'That escaping responsibility belongs to others.'),
        },
        {
          q: l('Varför släppte styrmannen slangarna?', 'Warum ließ der Steuermann die Schläuche los?', 'Why did the mate drop the hoses?'),
          options: [
            { text: l('Han var slarvig och dålig på sitt jobb.', 'Er war nachlässig und schlecht in seinem Job.', 'He was careless and bad at his job.'), ok: false, fb: l('Boken: människor blir inte ansvarslösa. De formas av systemet de arbetar i.', 'Das Buch: Menschen werden nicht verantwortungslos. Sie werden vom System geformt, in dem sie arbeiten.', 'The book: people do not become irresponsible. They are shaped by the system they work in.') },
            { text: l('Han hade lärt sig att initiativ gav skäll och att exakt lydnad gav ro.', 'Er hatte gelernt, dass Initiative Ärger brachte und genauer Gehorsam Ruhe.', 'He had learned that initiative earned a telling-off and exact obedience earned peace.'), ok: true, fb: l('Ja. Den yttersta konsekvensen av ett ledarskap där delegation inte finns.', 'Ja. Die äußerste Folge einer Führung ohne Delegation.', 'Yes. The ultimate consequence of leadership without delegation.') },
          ],
          misconception: l('Att ansvarslöshet är en personlig egenskap.', 'Dass Verantwortungslosigkeit eine persönliche Eigenschaft ist.', 'That irresponsibility is a personal trait.'),
        },
        {
          q: l('Vad skiljer kontroll från observation?', 'Was unterscheidet Kontrolle von Beobachtung?', 'What separates control from observation?'),
          options: [
            { text: l('Hur ofta man mäter.', 'Wie oft man misst.', 'How often you measure.'), ok: false, fb: l('Frågan är inte vad som mäts, utan vad som händer efteråt.', 'Die Frage ist nicht, was gemessen wird, sondern was danach passiert.', 'The question is not what is measured, but what happens afterwards.') },
            { text: l('Att en avvikelse får en bärare, ett beslut och en konsekvens.', 'Dass eine Abweichung einen Träger, eine Entscheidung und eine Konsequenz bekommt.', 'That a deviation gets a bearer, a decision and a consequence.'), ok: true, fb: l('Ja. Kontroll → konsekvens → ansvar.', 'Ja. Kontrolle → Konsequenz → Verantwortung.', 'Yes. Control → consequence → responsibility.') },
          ],
          misconception: l('Att dokumentation är kontroll.', 'Dass Dokumentation Kontrolle ist.', 'That documentation is control.'),
        },
      ],
    },
    {
      slug: 'befalsuppdrag',
      type: 'assignment',
      min: 5,
      title: l('Ditt befälsuppdrag', 'Dein Befehlsauftrag', 'Your command assignment'),
      text: l(
        'Bryt ett beroende som hindrar dig från att fatta ett beslut.',
        'Brich eine Abhängigkeit, die dich daran hindert, eine Entscheidung zu treffen.',
        'Break one dependence that stops you from making a decision.',
      ),
      hint: l(
        'Ingen påminnelse. När du öppnar modul 10 frågar kursen bara: gjort eller inte gjort?',
        'Keine Erinnerung. Wenn du Modul 10 öffnest, fragt der Kurs nur: erledigt oder nicht?',
        'No reminder. When you open module 10, the course only asks: done or not done?',
      ),
    },
  ],
  facilitator: {
    open: l(
      'Berätta om styrmannen som stängde av. Paus. Fråga: ”Vad har ert system lärt era medarbetare – att ta initiativ eller att låta bli?”',
      'Erzähle vom Steuermann, der abschaltete. Pause. Frage: „Was hat euer System euren Mitarbeitenden beigebracht – Initiative zu ergreifen oder es zu lassen?“',
      'Tell the story of the mate who switched off. Pause. Ask: “What has your system taught your people – to take initiative or to hold back?”',
    ),
    questions: [
      l('Var hos er styrs beslut av beroenden snarare än av ansvar?', 'Wo werden bei euch Entscheidungen eher von Abhängigkeiten als von Verantwortung gesteuert?', 'Where in your organisation are decisions steered by dependences rather than responsibility?'),
      l('Vilka kontroller hos er är egentligen observation?', 'Welche Kontrollen bei euch sind eigentlich Beobachtung?', 'Which of your controls are really observation?'),
      l('Vad är sysselsättning hos er – och vem har bestämt att den ska finnas?', 'Was ist bei euch Beschäftigung – und wer hat entschieden, dass es sie geben soll?', 'What is busywork in your organisation – and who decided it should exist?'),
    ],
    note: l(
      'WASTA beskriver beteenden, aldrig kulturer eller ursprung. Bryt varje diskussion som glider dit. Modulen väntar på Torbjörns eget innehåll.',
      'WASTA beschreibt Verhalten, nie Kulturen oder Herkunft. Brich jede Diskussion ab, die dorthin abgleitet. Das Modul wartet auf Torbjörns eigene Inhalte.',
      'WASTA describes behaviour, never cultures or origins. Cut off any discussion that drifts there. The module is awaiting Torbjörn’s own content.',
    ),
    close: l('”Vad tar DU befäl över till nästa gång?” Paus. Tack. Punkt.', '„Worüber übernimmst DU bis zum nächsten Mal Befehl?“ Pause. Danke. Punkt.', '“What will YOU take command of until next time?” Pause. Thank you. Full stop.'),
  },
};
