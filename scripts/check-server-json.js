import ts from 'typescript';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const serverFilePath = path.resolve(rootDir, 'server/server.ts');

const configFile = ts.readConfigFile(path.resolve(rootDir, 'tsconfig.server.json'), ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, rootDir);

const program = ts.createProgram([serverFilePath], parsed.options);
const diags = ts.getPreEmitDiagnostics(program);

console.log('Total diagnostics:', diags.length);
for (const d of diags) {
  const msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
  const pos = d.file ? ts.getLineAndCharacterOfPosition(d.file, d.start) : null;
  const loc = pos ? `(${pos.line + 1},${pos.character + 1})` : '';
  console.log(`${d.file?.fileName || 'unknown'} ${loc}: TS${d.code}: ${msg}`);
}
