---
title: Implementierung Prototyp
number: 4
layout: milestones
sectionid: milestones
enddate: 01.09.2021
---

Die Implementierung des Prototypen findet parallel zur Konzeptionierung in Arbeitspaket 3 statt, um agil
auf sich ändernde Anforderungen reagieren zu können. Ziel ist die prototypische Umsetzung einer Software,
welche die Interoperabilität von Blockchains auf unterschiedlichen Ebenen unterstützt. Hierbei sollen alle
Phasen des Lebenszyklus eines Smart Contracts berücksichtigt werden.

<!--more-->

Beginnend mit der Entwicklung von Smart Contracts für verschiedene Plattformen wird ein Cross-Plattform-Entwicklungs-Tool entwickelt,
welches Quellcode für unterschiedliche virtuelle Maschinen generiert. Darauf aufbauend sollen Smart
Contracts, welche auf einer Blockchain-Instanz ausgerollt wurden, zu anderen Instanzen migriert werden
können, ohne ökonomische Annahmen treffen zu müssen oder vertrauenswürdige Intermediäre einzuführen.
Hierfür soll, basierend auf den Rechercheergebnissen aus Arbeitspaket 2, eine Komponente entstehen,
welche beispielsweise mittels Zero-Knowledge Proofs Informationen über Instanzen hinweg zugänglich
macht. Durch diese vertrauenswürdigen Informationen können sowohl Transaktionen anderer Blockchains,
als auch der Zustand von Smart Contracts nachgewiesen werden.

Für die an das Arbeitspaket anschließende Evaluierung werden die vom Industriepartner bereitgestellten
Anwendungsszenarien herangezogen und Lösungen mithilfe des Prototyps entwickelt.

### Aktivität 4.1: Blockchain Header Validation

_Dauer: 8 Monate_

In Blockchains gespeicherte Informationen lassen sich durch sogenannte Merkle-Beweise ableiten, welche
die Aufnahme einer Information innerhalb eines Merkle-Baums beweisen. Grundvoraussetzung hierfür ist
eine vertrauenswürdige Merkle-Root, also die Wurzel des Baumes, welche im Block-Header gespeichert ist.
Um eine Merkle-Root vertrauenswürdig abzurufen, muss der entsprechende Header validiert werden. Ziel
der Aktivität ist die Implementierung der Validierung von Headern einer fremden Blockchain mithilfe von
Zero-Knowledge-Verfahren. Ferner sollen aus validierten Headern Beweise über Zustände der fremden
Blockchain ermöglicht werden.

### Aktivität 4.2: Cross-Platform Smart Contract Development

_Dauer: 8 Monate_

Basierend auf den Ergebnissen aus Aktivität 2.3 wird eine (domänen-spezifische) Programmiersprache
entwickelt, welche die Generierung von Smart Contracts erlaubt. Hierbei werden zwei Ziele verfolgt, zum
einen soll die Entwicklung von Smart Contracts Domänenexerten zugänglich gemacht werden, sodass
ihr Domänenwissen direkt in die Entwicklung der Logik des Smart Contracts einfließen kann. Diese
Abstraktion ermöglicht zudem die Generierung von sicherem Quellcode, welcher auf getesteten Templates
basiert und somit fehlerresistent ist. Hierzu werden im Rahmen der Aktivität die Voraussetzungen der
Zieldomäne analysiert, um so ein Metamodell zu erstellen, welches die Erstellung von domänenspezifischen
Modellen ermöglicht. Um die Nutzbarkeit für Domänenexperten zu erhöhen, sollten bekannte Strukturen und Schlagwörter genutzt werden, welche die Logik des Programms abstrakt beschreiben. Die
Modellierung des Smart Contracts kann dabei entweder textuell oder visuell erfolgen. Zum anderen
können unterschiedliche Generatoren für abstrakte Modelle entwickelt werden, welche die Generierung von
Quellcode für verschiedene Plattformen ermöglichen. Hierdurch wird die Abhängigkeit von einer einzelnen
Blockchain-Technologie verringert. Im Rahmen der Aktivität werden mindestens zwei Generatoren für
unterschiedliche virtuelle Maschinen implementiert.

Abhängig von den Ergebnissen der vorhergehenden Recherche wird alternativ ein Transcompiler
entwickelt, welcher die Kompilierung von Bytecode für eine fremde Blockchain ermöglicht. Wird für
die Entwicklung von Smart Contracts Turing-Vollständigkeit vorausgesetzt, so könnte eine DSL zu
viele Einschränkungen beinhalten. In diesem Fall soll im Rahmen der Aktivität ein Metamodell für
mindestens zwei Programmiersprachen entwickelt werden, welche die Transkompilierung von Quellcode
einer Programmiersprache zu einer anderen ermöglicht.

### Aktivität 4.3: Implementierung von Anwendungsszenarien

_Dauer: 4 Monate_

Nach Abschluss der Aktivitäten 4.1 und 4.2 wird der entwickelte Prototyp genutzt, um die durch
den Industriepartner definierten Use-Cases umzusetzen. Hierbei liegt der Fokus insbesondere auf der
Protokollierung von Zugriffen auf gemeinsam genutzte Cloud-Dienste und Smart-Home-Lösungen zu
Haftungszwecken. Das Ergebnis der Aktivität dient der folgenden Evaluierung.