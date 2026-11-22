"use strict";

const puzzles = [
  {
    title: "Die verschlüsselte Übergabe", time: 8,
    story: "Im Leitstand blinkt das Handy der Schichtleitung. Die letzte Nachricht ist bruchstückhaft; die Zahlen auf dem Schlüsselkasten gehören offenbar zu drei Einträgen im Übergabebuch.",
    clues: [
      "Nachricht: „Erst die Ladeleitung, dann der Schutzwiderstand, zuletzt die Dauer unseres Treffens. Die Ziffern stehen auf den passenden Buchseiten.“",
      "Übergabebuch: Ladeleitung 250 mA · Schutzwiderstand 4,7 kΩ · Treffen von 14:15 bis 15:45 Uhr.",
      "Buchseiten: 4 → 0,25 A · 2 → 4700 Ω · 7 → 1,5 h · 1 → 2,5 A · 6 → 470 Ω · 9 → 1,25 h."
    ],
    goal: "Findet zu jedem Eintrag die passende Buchseite und gebt deren drei Ziffern in der Reihenfolge der Nachricht ein.",
    hints: ["Achtet auf Einheiten und darauf, wie lange das Treffen tatsächlich dauert.", "Milli bedeutet 1/1000, Kilo bedeutet 1000. Von 14:15 bis 15:45 sind es 90 Minuten."],
    code: "427"
  },
  {
    title: "Der dunkle Verteiler", time: 9,
    story: "Im Flur sind die Lampen ausgefallen. Drei Fehlermeldungen wurden mit Karteikarten vertauscht. Nur in der Reihenfolge des Rundgangs öffnet sich die nächste Tür.",
    clues: [
      "Rundgang: zuerst die Lichterkette im Pausenraum, dann die zwei unabhängig parallel angeschlossenen Flurlampen, zuletzt die Fehlerstelle an der Quelle.",
      "Beobachtungen: Bei der Lichterkette mit zwei in Reihe geschalteten Lampen sind nach Unterbrechung einer Lampe beide dunkel. Im Flur ist eine Lampe unterbrochen, die andere leuchtet. An der Quelle verbindet ein Draht die Pole nahezu widerstandslos.",
      "Karteikarten: 3 = paralleler Zweig unterbrochen · 8 = Kurzschluss · 6 = Reihenkreis unterbrochen · 2 = geschlossener Stromkreis."
    ],
    goal: "Ordnet die drei Beobachtungen den Karten zu. Die Kartenziffern in Rundgang-Reihenfolge sind der Code.",
    hints: ["Eine Reihenschaltung besitzt nur einen Stromweg; bei der Parallelschaltung gibt es mehrere Zweige.", "Ein fast widerstandsloser Weg zwischen Quellenpolen ist keine Unterbrechung."],
    code: "638"
  },
  {
    title: "Potenzialarchiv", time: 10,
    story: "Eine Batteriestation speist den Archivzugang. Ihr findet einen Spannungsplan und drei Zahlenschilder. Die Richtung der Messung entscheidet, welches Schild passt.",
    clues: [
      "Plan: Minuspol als Bezugspunkt 0 V; Punkt A: +24 V, Punkt B: +9 V. Es gilt U_AB = φ_A − φ_B.",
      "Notiz zur Reservelampe: ideale Batterie 12 V, ideale Leitungen, geschlossener Schalter, ein einziger Verbraucher.",
      "Schilder: +15 V → 4 · −15 V → 7 · +12 V → 2 · −12 V → 9. Die Archivregel lautet: erst U_AB, dann U_BA, dann die Spannung an der Reservelampe.",
      "Randnotiz: Die Batterie stellt ihre Spannung durch chemische Vorgänge bereit."
    ],
    goal: "Ermittelt die drei Spannungen und übertragt die zugehörigen Schildziffern in der Archiv-Reihenfolge.",
    hints: ["Spannung ist die Differenz zweier Potenziale; die Reihenfolge der Indizes ist wichtig.", "U_BA hat das entgegengesetzte Vorzeichen von U_AB. An der ideal angeschlossenen Reservelampe liegt die Quellenspannung."],
    code: "472"
  },
  {
    title: "Das Messpult", time: 9,
    story: "Die Prüfprotokolle der virtuellen Anlage sind durcheinandergeraten. Drei Registerkarten tragen Ziffern. Für den Zugang müsst ihr die zum Auftrag passenden Karten finden.",
    clues: [
      "Auftrag: Die Messanschlüsse für Spannung am Verbraucher und Strom im Stromkreis auswählen; danach die Spannungsanzeige für rot an B und schwarz an A vorhersagen; zuletzt den ersten manuellen Spannungsmessbereich festlegen.",
      "A hat +24 V, B +9 V. Das Voltmeter zeigt das Potenzial der roten gegenüber der schwarzen Messleitung. Die unbekannte Gleichspannung liegt laut Plan betragsmäßig höchstens bei 24 V; das geeignete Gerät bietet Bereiche 2 V, 20 V und 200 V.",
      "Registerkarten: 3 = Voltmeter parallel zum Verbraucher, Amperemeter in Reihe · 1 = Voltmeter in Reihe, Amperemeter parallel zur Quelle · 8 = Anzeige −15 V · 4 = Anzeige +15 V · 6 = zuerst 200 V · 2 = zuerst 20 V."
    ],
    goal: "Nehmt je eine Karte für Anschluss, Anzeige und Messbereich – in genau dieser Reihenfolge. Die Ziffern ergeben den Code.",
    hints: ["Ein Voltmeter vergleicht zwei Punkte; durch ein Amperemeter muss der zu messende Strom fließen. Rot minus Schwarz bestimmt das Vorzeichen.", "Der erste Spannungsmessbereich muss den möglichen Höchstwert sicher abdecken; danach kann man gegebenenfalls herunterschalten."],
    code: "386"
  },
  {
    title: "Der Ladungsspeicher", time: 10,
    story: "Das Diagnoseprotokoll der Notbeleuchtung wurde spiegelverkehrt abgelegt. Eine Notiz zur Stromrichtung verrät, wie die drei berechneten Kartenziffern gelesen werden müssen.",
    clues: [
      "Protokoll: Während 30 s fließt ein konstanter Strom von 2 A durch einen Metallleiter mit 0,5 mm² Querschnitt. Bestimmt Ladung Q, Strom I und Stromdichte J in dieser Reihenfolge.",
      "Karten: 60 C → 6 · 2 A → 2 · 4 A/mm² → 4 · 15 C → 8 · 1 A/mm² → 1.",
      "Zettel: „Die Karten liegen zunächst in technischer Stromrichtung. Lest für den Code in der Bewegungsrichtung der Elektronen.“"
    ],
    goal: "Berechnet die Größen, findet die drei Karten und lest deren Ziffern in der verlangten Richtung.",
    hints: ["Bei konstantem Strom gilt Q = I · t und bei gleichmäßiger Stromverteilung J = I / A.", "In Metallen bewegen sich die Elektronen entgegen der technischen Stromrichtung. Die Kartenreihenfolge muss also umgekehrt werden."],
    code: "426"
  },
  {
    title: "Signale im Maschinenraum", time: 8,
    story: "Ein Serviceroboter findet drei Gegenstände aus dem Alltag. Die Steuerung öffnet sich nur, wenn seine Spur durch das beschriftete Regal korrekt rekonstruiert wird.",
    clues: [
      "Spur: erst die elektrische Heizwendel eines Wasserkochers, dann ein Elektromagnet im Türöffner, zuletzt das Signal einer Quelle, deren Stromrichtung sich periodisch ändert.",
      "Regalfächer: 5 = magnetische Stromwirkung · 1 = chemische Stromwirkung · 2 = Wärmewirkung · 9 = Wechselstrom · 4 = Gleichstrom.",
      "Aufkleber am Regal: „Tausche bei der Eingabe die ersten beiden gefundenen Ziffern. Die letzte bleibt.“"
    ],
    goal: "Ordnet die Spur den Regalfächern zu und beachtet den Aufkleber, bevor ihr den Code eingebt.",
    hints: ["Ein Wasserkocher nutzt vor allem Wärme, ein Elektromagnet ein Magnetfeld.", "Die gefundene Reihenfolge ist noch nicht der Code: Tauscht die ersten beiden Ziffern."],
    code: "529"
  },
  {
    title: "Das Ohm-Modul", time: 10,
    story: "Das Typenschild eines Moduls ist zerrissen. Drei Schnipsel passen zu Messwerten, aber erst ein Hinweis auf dem Gehäuse bestimmt die Reihenfolge.",
    clues: [
      "Messprotokoll: Am ohmschen Modul liegen 12 V bei 0,5 A. Ein zweiter Widerstand beträgt 100 Ω. Ein dritter Widerstand hat 60 Ω bei 12 V.",
      "Schnipsel: 24 Ω / Ziffer 4 · 10 mS / Ziffer 2 · 0,2 A / Ziffer 7 · 6 Ω / Ziffer 8 · 100 mS / Ziffer 1.",
      "Gehäuseprägung: „Erst Widerstand des Moduls, dann Leitwert des zweiten Bauteils, dann Strom im dritten.“"
    ],
    goal: "Sucht die drei passenden Schnipsel. Ihre Ziffern in der Reihenfolge der Gehäuseprägung öffnen das Modul.",
    hints: ["Für ohmsche Widerstände gilt U = R · I. Der Leitwert ist der Kehrwert des Widerstands.", "Bei der Umrechnung gilt 1 S = 1000 mS. Übertragt nicht die berechneten Werte, sondern die Ziffern ihrer Schnipsel."],
    code: "427"
  },
  {
    title: "Die heiße Leitung", time: 9,
    story: "Ein Bauteilkoffer aus der Werkstatt ist verschlossen. Auf dem Deckel steht ein Prüfauftrag, im Kofferfenster sind nummerierte Etiketten zu sehen.",
    clues: [
      "Prüfauftrag: „Erst den Widerstand des einzelnen Kupferleiters bestimmen. Dann den Fühler auswählen, dessen Widerstand beim Erwärmen sinkt. Zum Schluss das Bauteil für einen einstellbaren Spannungsteiler wählen.“",
      "Leiterdaten: Länge 20 m, Querschnitt 1,0 mm², spezifischer Widerstand ρ = 0,018 Ω·mm²/m. Betrachtet nur diesen einen Leiter.",
      "Etiketten: 3 = 0,36 Ω · 4 = 0,72 Ω · 6 = NTC · 2 = PTC · 8 = Potentiometer · 1 = Festwiderstand.",
      "Zusatz am Deckel: Kupfer hat einen positiven Temperaturkoeffizienten: Sein Widerstand steigt bei Erwärmung."
    ],
    goal: "Die Ziffern der drei passenden Etiketten in der Reihenfolge des Prüfauftrags ergeben den Code.",
    hints: ["Für den Leiter gilt R = ρ · l / A. Nicht die Länge von Hin- und Rückleiter verwenden.", "Ein NTC ist ein Heißleiter; ein Potentiometer besitzt einen verstellbaren Abgriff."],
    code: "368"
  },
  {
    title: "Die Energiezentrale", time: 9,
    story: "Das Energieprotokoll ist mit Symbolen aus dem Alltag beschriftet. Sonnenlicht und ein handbetriebener Generator liefern Hinweise auf die Reihenfolge der Schubladen.",
    clues: [
      "Protokoll: Die Notversorgung liefert konstant 2 kW für 3 h. Auf zwei Schubladen steht dieselbe elektrische Arbeit, einmal in kWh und einmal in MJ.",
      "Schubladen: 6 = 6 kWh · 2 = 21,6 MJ · 7 = 3,6 MJ · 4 = Solarzelle: Licht wird direkt zu elektrischer Energie · 8 = Generator: mechanische wird zu elektrischer Energie.",
      "Zettel: „Zuerst die Arbeit in kWh, dann dieselbe Arbeit in MJ. Als Drittes die Schublade für die direkte Umwandlung von Sonnenlicht.“",
      "Die Handkurbel treibt den Generator mechanisch an; sie ist nicht die direkte Lichtumwandlung."
    ],
    goal: "Wählt die drei passenden Schubladen und gebt ihre Ziffern in der Reihenfolge des Zettels ein.",
    hints: ["Bei konstanter Leistung gilt W = P · t.", "1 kWh entspricht 3,6 MJ. Ein Generator und eine Solarzelle wandeln unterschiedliche Energieformen um."],
    code: "624"
  },
  {
    title: "Der letzte Neustart", time: 8,
    story: "Die Notversorgung ist bereit, aber das Neustartpult verlangt den dreistelligen Freigabecode. Drei beschriftete Sicherungskarten und eine Anweisung stehen zur Wahl.",
    clues: [
      "Antrieb: Er wird mit 24 V Gleichspannung und 2 A betrieben. Von der aufgenommenen elektrischen Leistung werden 36 W als mechanische Nutzleistung abgegeben.",
      "Karten: 4 = 48 W Aufnahme · 7 = 75 % Wirkungsgrad · 5 = 12 W Verlustleistung · 2 = 50 % Wirkungsgrad · 9 = 24 W Aufnahme.",
      "Anweisung: „Aufnahme, Wirkungsgrad, Verlust – in dieser Reihenfolge.“"
    ],
    goal: "Ermittelt die drei Größen und setzt die Ziffern ihrer Karten zum letzten Code zusammen.",
    hints: ["Bei Gleichstrom gilt P = U · I. Die Verlustleistung ist die Differenz aus Aufnahme und Nutzleistung.", "Der Wirkungsgrad ist η = P_nutz / P_zu; für Prozent mit 100 multiplizieren."],
    code: "475"
  }
];
