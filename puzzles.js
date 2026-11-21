"use strict";

// Zahlenwerte werden in der jeweils angegebenen Einheit eingegeben.
const puzzles = [
  {
    title: "Die verschlüsselte Übergabe", time: 9,
    story: "Im Leitstand findet ihr eine unvollständige Übergabenotiz. Erst wenn die Größen richtig übersetzt sind, öffnet sich die Tür zum Verteilerraum.",
    hint: "Milli bedeutet ein Tausendstel, Kilo das Tausendfache. Eine elektrische Größe wird durch Formelzeichen, Zahlenwert und Einheit beschrieben.",
    questions: [
      { text: "Der Sensorstrom beträgt 250 mA. Wie groß ist er in A?", answer: 0.25 },
      { text: "Der Schutzwiderstand beträgt 4,7 kΩ. Wie groß ist er in Ω?", answer: 4700 },
      { text: "Welches Formelzeichen und welche Einheit gehören zur elektrischen Spannung?", options: ["I und A", "U und V", "R und Ω"], answer: 1 }
    ]
  },
  {
    title: "Der dunkle Verteiler", time: 9,
    story: "Zwei Lampen sollen wieder leuchten. Auf dem Plan erkennt ihr eine Reihenschaltung und eine Parallelschaltung mit jeweils zwei Lampen.",
    hint: "In Reihe gibt es nur einen Stromweg. Parallel gibt es mehrere Zweige mit denselben Anschlussknoten.",
    questions: [
      { text: "Eine Lampe in der Reihenschaltung ist unterbrochen. Was geschieht mit der anderen Lampe?", options: ["Sie erlischt ebenfalls.", "Sie leuchtet unverändert weiter.", "Sie wird durch den offenen Stromkreis kurzgeschlossen."], answer: 0 },
      { text: "Eine Lampe in der Parallelschaltung ist unterbrochen. Quelle und andere Lampe sind intakt. Was geschieht?", options: ["Auch die andere Lampe erlischt.", "Es fließt zwingend ein Kurzschlussstrom.", "Die andere Lampe leuchtet weiter."], answer: 2 },
      { text: "Was kennzeichnet einen Kurzschluss zwischen den Polen einer Quelle?", options: ["Ein vollständig unterbrochener Stromweg.", "Eine sehr niederohmige Verbindung zwischen den Polen.", "Zwei Verbraucher mit je eigenem Stromzweig."], answer: 1 }
    ]
  },
  {
    title: "Potenzialarchiv", time: 10,
    story: "Das Türschloss prüft die Spannungen eines Gleichstromkreises. Der Minuspol ist der Bezugspunkt mit 0 V. Punkt A liegt bei +24 V, Punkt B bei +9 V.",
    hint: "Spannung ist eine Potenzialdifferenz: U_AB = φ_A − φ_B. Im idealen einfachen Stromkreis liegt bei geschlossenem Schalter die Quellenspannung am Verbraucher.",
    questions: [
      { text: "Wie groß ist U_AB = φ_A − φ_B in V?", answer: 15 },
      { text: "Wie groß ist U_BA = φ_B − φ_A in V? Das Vorzeichen gehört zur Antwort.", answer: -15 },
      { text: "Eine ideale 12-V-Quelle versorgt über ideale Leitungen und einen geschlossenen Schalter einen einzigen Verbraucher. Wie groß ist die Spannung am Verbraucher in V?", answer: 12 },
      { text: "Wie entsteht die Spannung einer Batterie hauptsächlich?", options: ["Durch die Erwärmung eines Drahtes.", "Durch mechanische Reibung an einem Verbraucher.", "Durch chemische Vorgänge."], answer: 2 }
    ]
  },
  {
    title: "Das Messpult", time: 8,
    story: "Ein Messprotokoll ist beschädigt. Ergänzt die Messmethode, bevor die Überwachung wieder aktiviert werden kann. Alle Messungen sind nur gedanklich.",
    hint: "Spannung wird zwischen zwei Punkten gemessen. Beginnt bei unbekanntem Wert mit einem geeigneten hohen Messbereich und beachtet die Polarität.",
    questions: [
      { text: "Wie wird ein Voltmeter zur Messung der Spannung an einem Verbraucher angeschlossen?", options: ["Parallel zum Verbraucher.", "In Reihe zum Verbraucher.", "Als niederohmige Brücke zwischen den Quellenpolen."], answer: 0 },
      { text: "Ein Digitalvoltmeter zeigt bei vertauschter Polarität −12 V. Was bedeutet das?", options: ["Es liegt keine Spannung an.", "Die Spannung ist eine Stromstärke.", "Die rote Messleitung liegt auf niedrigerem Potenzial als die schwarze."], answer: 2 },
      { text: "Der erwartete Messwert ist unbekannt. Wie wählt ihr zunächst den manuellen Messbereich?", options: ["Immer den kleinsten Bereich.", "Einen ausreichend hohen geeigneten Bereich und danach bei Bedarf kleiner.", "Einen Strommessbereich anstelle eines Spannungsmessbereichs."], answer: 1 }
    ]
  },
  {
    title: "Der Ladungsspeicher", time: 10,
    story: "Eine Steuerung meldet einen Fehler im Stromkreis des Speichers. Zur Freigabe müssen Ladungsmenge, Stromstärke und Stromdichte stimmen.",
    hint: "Bei konstantem Strom gilt Q = I · t und J = I / A. In Metallen bewegen sich Elektronen; die technische Stromrichtung ist entgegengesetzt.",
    questions: [
      { text: "Ein konstanter Strom von 2 A fließt 30 s. Wie groß ist die transportierte Ladung Q in C?", answer: 60 },
      { text: "Durch einen Leiterquerschnitt von 1,5 mm² fließen gleichmäßig 3 A. Wie groß ist die Stromdichte J in A/mm²?", answer: 2 },
      { text: "Welche beweglichen Ladungsträger verursachen den elektrischen Strom in einem Metallleiter?", options: ["Positive Metallionen wandern durch den Draht.", "Elektronen; sie bewegen sich entgegen der technischen Stromrichtung.", "Elektronen bewegen sich immer in technischer Stromrichtung."], answer: 1 },
      { text: "Wie wird ein Amperemeter zur Strommessung in einem einfachen Stromkreis angeschlossen?", options: ["In Reihe, sodass der zu messende Strom durch das Messgerät fließt.", "Parallel direkt an die Spannungsquelle.", "Parallel zum Verbraucher wie ein Voltmeter."], answer: 0 }
    ]
  },
  {
    title: "Signale im Maschinenraum", time: 8,
    story: "Ein Diagnosegerät zeigt Stromarten und Wirkungen verschiedener Verbraucher. Ordnet die Hinweise zu, um die Maschine zu entriegeln.",
    hint: "Gleichstrom behält seine Richtung bei; Wechselstrom ändert sie periodisch. Strom kann unter anderem Wärme und Magnetfelder erzeugen.",
    questions: [
      { text: "Welche Aussage beschreibt Wechselstrom?", options: ["Er fließt immer nur in einer Richtung.", "Er kann keine Wärme erzeugen.", "Seine Richtung ändert sich periodisch."], answer: 2 },
      { text: "Welche Stromwirkung nutzt eine elektrische Heizwendel hauptsächlich?", options: ["Wärmewirkung.", "Chemische Wirkung.", "Lichtwirkung ohne Wärmeentwicklung."], answer: 0 },
      { text: "Welche Wirkung nutzt ein Elektromagnet hauptsächlich?", options: ["Ausschließlich chemische Wirkung.", "Magnetische Wirkung.", "Ausschließlich Wärmewirkung."], answer: 1 }
    ]
  },
  {
    title: "Das Ohm-Modul", time: 10,
    story: "Auf einer Platine ist das Typenschild unlesbar. Mit den Messdaten lässt sich der Widerstand ermitteln und das Modul neu konfigurieren.",
    hint: "Für einen ohmschen Widerstand gilt U = R · I. Der Leitwert ist der Kehrwert des Widerstands: G = 1 / R.",
    questions: [
      { text: "An einem ohmschen Widerstand liegen 12 V; es fließen 0,5 A. Wie groß ist R in Ω?", answer: 24 },
      { text: "Wie groß ist der Leitwert eines Widerstands von 100 Ω in mS?", answer: 10 },
      { text: "An einem ohmschen Widerstand von 60 Ω liegen 12 V. Wie groß ist I in A?", answer: 0.2 }
    ]
  },
  {
    title: "Die heiße Leitung", time: 10,
    story: "Eine Leitung und zwei temperaturabhängige Bauteile müssen beurteilt werden. Das Energieteam liefert die Materialdaten.",
    hint: "R = ρ · l / A. Bei Kupfer steigt der Widerstand mit der Temperatur. NTC und PTC ändern ihren Widerstand in entgegengesetzte Richtungen.",
    questions: [
      { text: "Ein Kupferleiter ist 20 m lang und hat 1,0 mm² Querschnitt. Mit ρ = 0,018 Ω·mm²/m: Wie groß ist sein Widerstand in Ω? Nur diesen einen Leiter betrachten.", answer: 0.36 },
      { text: "Was passiert mit dem Widerstand eines Kupferleiters bei steigender Temperatur?", options: ["Er sinkt immer.", "Er bleibt unabhängig von der Temperatur gleich.", "Er steigt."], answer: 2 },
      { text: "Welches Bauteil hat einen mit steigender Temperatur sinkenden Widerstand?", options: ["PTC (Kaltleiter).", "NTC (Heißleiter).", "Ein idealer temperaturunabhängiger Festwiderstand."], answer: 1 },
      { text: "Welches Bauteil lässt sich als einstellbarer Spannungsteiler verwenden?", options: ["Potentiometer.", "Festwiderstand mit zwei festen Anschlüssen.", "Sicherung."], answer: 0 }
    ]
  },
  {
    title: "Die Energiezentrale", time: 8,
    story: "Der Notbetrieb braucht eine Energiebilanz. Die Leitstelle fragt nach Energieumwandlung und der bisher verbrauchten elektrischen Arbeit.",
    hint: "Ein Generator wandelt mechanische in elektrische Energie um. Bei konstanter Leistung gilt W = P · t; 1 kWh = 3,6 MJ.",
    questions: [
      { text: "Welche Energieumwandlung findet in einem Generator statt?", options: ["Elektrische Energie wird ausschließlich in chemische Energie umgewandelt.", "Energie wird aus dem Nichts erzeugt.", "Mechanische Energie wird in elektrische Energie umgewandelt."], answer: 2 },
      { text: "Ein Gerät mit konstant 2 kW läuft 3 h. Wie groß ist die elektrische Arbeit in kWh?", answer: 6 },
      { text: "Wie viel MJ entsprechen 1 kWh?", answer: 3.6 },
      { text: "Welche Quelle wandelt Licht unmittelbar in elektrische Energie um?", options: ["Ein Heizwiderstand.", "Eine Solarzelle.", "Ein Elektromagnet."], answer: 1 }
    ]
  },
  {
    title: "Der letzte Neustart", time: 8,
    story: "Die Notversorgung ist bereit. Für den Neustart muss die Leitstelle Leistung und Wirkungsgrad des Antriebs bestätigen.",
    hint: "Bei Gleichstrom gilt P = U · I. Der Wirkungsgrad ist η = P_nutz / P_zu; für Prozent mit 100 multiplizieren.",
    questions: [
      { text: "Ein Gleichstromverbraucher wird mit 24 V und 2 A betrieben. Wie groß ist seine elektrische Leistung in W?", answer: 48 },
      { text: "Ein Antrieb nimmt 200 W auf und gibt 150 W mechanische Nutzleistung ab. Wie groß ist sein Wirkungsgrad in %?", answer: 75 },
      { text: "Wie groß ist bei diesem Antrieb die Differenz zwischen aufgenommener und abgegebener Leistung in W?", answer: 50 }
    ]
  }
];
