---
title: "Implementierung Prototyp"
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