# Autosave Drafts for Stream

Estensione EspoCRM che salva automaticamente i post dell'Activity Stream come bozze mentre digiti. Non perdere più il lavoro quando scrivi commenti o aggiornamenti sulle entità.

## Caratteristiche

- **Autosave durante la digitazione**: Le bozze vengono salvate in session storage ogni 1,5 secondi dopo aver smesso di digitare
- **Funziona su tutte le entità**: Compatibile con qualsiasi tipo di entità che abbia il pannello Stream attivo (Account, Contatti, Lead, Opportunità, Case, Riunioni, Attività, ecc.)
- **Non invasivo**: Usa monkey-patching per estendere il comportamento nativo di EspoCRM senza modificare i file core
- **Allegati inclusi**: Quando digiti dopo aver caricato file, testo e allegati vengono salvati insieme

## Requisiti

- EspoCRM 9.3.x o superiore
- PHP 8.0 o superiore

## Installazione

1. Scarica l'ultima release (`autosave-draft-espocrm-1.0.0.zip`)
2. Vai in **Amministrazione** → **Estensioni** → **Carica**
3. Seleziona il file ZIP e installa
4. Svuota la cache del browser o esegui un refresh forzato (Ctrl+F5 / Cmd+Shift+R)

## Come funziona

Quando digiti nel campo di post dello Stream nella vista dettaglio di un record, l'estensione salva automaticamente la bozza nel session storage del browser. Se navighi via o ricarichi la pagina prima di inviare, il testo (e gli allegati) verranno ripristinati automaticamente—come già fa EspoCRM alla chiusura, ma ora in modo continuo mentre scrivi.

## Utilizzo

1. Apri un record con il pannello Stream (es. un Account, Contatto o Lead)
2. Inizia a digitare nel campo "Scrivi il tuo commento qui"
3. Dopo 1,5 secondi di inattività, la bozza viene salvata automaticamente
4. Se lasci la pagina e torni, la bozza sarà ancora lì

## Licenza

Apache License 2.0

---

**Creato da [CiaoIM (TM)](https://ciaoim.tech) by Daniel Giovannetti**
