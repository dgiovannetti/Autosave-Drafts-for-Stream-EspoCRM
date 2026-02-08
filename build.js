const fs = require('fs-extra');
const archiver = require('archiver');
const path = require('path');

const version = '1.0.0';
const packageName = 'autosave-draft-espocrm';
const outputZip = `${packageName}-${version}.zip`;

if (fs.existsSync(outputZip)) fs.unlinkSync(outputZip);

const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => console.log(`Build: ${outputZip} (${archive.pointer()} bytes)`));
archive.on('error', err => { throw err; });
archive.pipe(output);

archive.file('manifest.json', { name: 'manifest.json' });
archive.directory('src/files/', 'files');
if (fs.existsSync('scripts')) archive.directory('scripts/', 'scripts');

archive.finalize();
