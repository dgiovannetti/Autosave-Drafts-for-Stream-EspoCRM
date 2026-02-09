# Autosave Drafts for Stream

---

## English

EspoCRM extension that automatically saves Activity Stream posts to drafts while typing. Never lose your work again when writing comments or updates on records.

### Features

- **Autosave while typing**: Drafts are saved to session storage every 1.5 seconds after you stop typing
- **Works on all entities**: Compatible with any entity type that has the Stream panel enabled (Accounts, Contacts, Leads, Opportunities, Cases, Meetings, Tasks, etc.)
- **Non-invasive**: Uses monkey-patching to extend EspoCRM's built-in behavior without modifying core files
- **Attachments included**: When you type after uploading files, both text and attachments are saved together

### Requirements

- EspoCRM 9.3.x or higher
- PHP 8.0 or higher

### Installation

1. Download the latest release (`autosave-draft-espocrm-1.0.0.zip`)
2. Go to **Administration** → **Extensions** → **Upload**
3. Select the ZIP file and install
4. Clear your browser cache or perform a hard refresh (Ctrl+F5 / Cmd+Shift+R)

### How it works

When you type in the Stream post field on any record detail view, the extension automatically saves your draft to the browser's session storage. If you navigate away or reload the page before posting, your text (and attachments) will be restored automatically—just as EspoCRM does on page unload, but now continuously while you type.

### Usage

1. Open any record with the Stream panel (e.g. an Account, Contact, or Lead)
2. Start typing in the "Write your comment here" field
3. After 1.5 seconds of inactivity, your draft is saved automatically
4. If you leave the page and come back, your draft will still be there

---

## Italiano

Estensione EspoCRM che salva automaticamente i post dell'Activity Stream come bozze mentre digiti. Non perdere più il lavoro quando scrivi commenti o aggiornamenti sulle entità.

### Caratteristiche

- **Autosave durante la digitazione**: Le bozze vengono salvate in session storage ogni 1,5 secondi dopo aver smesso di digitare
- **Funziona su tutte le entità**: Compatibile con qualsiasi tipo di entità che abbia il pannello Stream attivo (Account, Contatti, Lead, Opportunità, Case, Riunioni, Attività, ecc.)
- **Non invasivo**: Usa monkey-patching per estendere il comportamento nativo di EspoCRM senza modificare i file core
- **Allegati inclusi**: Quando digiti dopo aver caricato file, testo e allegati vengono salvati insieme

### Requisiti

- EspoCRM 9.3.x o superiore
- PHP 8.0 o superiore

### Installazione

1. Scarica l'ultima release (`autosave-draft-espocrm-1.0.0.zip`)
2. Vai in **Amministrazione** → **Estensioni** → **Carica**
3. Seleziona il file ZIP e installa
4. Svuota la cache del browser o esegui un refresh forzato (Ctrl+F5 / Cmd+Shift+R)

### Come funziona

Quando digiti nel campo di post dello Stream nella vista dettaglio di un record, l'estensione salva automaticamente la bozza nel session storage del browser. Se navighi via o ricarichi la pagina prima di inviare, il testo (e gli allegati) verranno ripristinati automaticamente—come già fa EspoCRM alla chiusura, ma ora in modo continuo mentre scrivi.

### Utilizzo

1. Apri un record con il pannello Stream (es. un Account, Contatto o Lead)
2. Inizia a digitare nel campo "Scrivi il tuo commento qui"
3. Dopo 1,5 secondi di inattività, la bozza viene salvata automaticamente
4. Se lasci la pagina e torni, la bozza sarà ancora lì

---

## License | Licenza

Apache License 2.0

---

**Created by / Creato da [CiaoIM™](https://ciaoim.tech) by Daniel Giovannetti**
