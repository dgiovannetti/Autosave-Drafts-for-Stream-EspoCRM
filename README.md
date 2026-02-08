# Autosave Drafts for Stream

EspoCRM extension that automatically saves Activity Stream posts to drafts while typing. Never lose your work again when writing comments or updates on records.

## Features

- **Autosave while typing**: Drafts are saved to session storage every 1.5 seconds after you stop typing
- **Works on all entities**: Compatible with any entity type that has the Stream panel enabled (Accounts, Contacts, Leads, Opportunities, Cases, Meetings, Tasks, etc.)
- **Non-invasive**: Uses monkey-patching to extend EspoCRM's built-in behavior without modifying core files
- **Attachments included**: When you type after uploading files, both text and attachments are saved together

## Requirements

- EspoCRM 9.3.x or higher
- PHP 8.0 or higher

## Installation

1. Download the latest release (`autosave-draft-espocrm-1.0.0.zip`)
2. Go to **Administration** → **Extensions** → **Upload**
3. Select the ZIP file and install
4. Clear your browser cache or perform a hard refresh (Ctrl+F5 / Cmd+Shift+R)

## How it works

When you type in the Stream post field on any record detail view, the extension automatically saves your draft to the browser's session storage. If you navigate away or reload the page before posting, your text (and attachments) will be restored automatically—just as EspoCRM does on page unload, but now continuously while you type.

## Usage

1. Open any record with the Stream panel (e.g. an Account, Contact, or Lead)
2. Start typing in the "Write your comment here" field
3. After 1.5 seconds of inactivity, your draft is saved automatically
4. If you leave the page and come back, your draft will still be there

## License

Apache License 2.0

---

**Created by [CiaoIM (TM)](https://ciaoim.tech) by Daniel Giovannetti**
