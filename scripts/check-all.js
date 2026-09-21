import ts from 'typescript';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const results = {};

function checkConfig(configName) {
  const configPath = path.resolve(rootDir, configName);
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, rootDir);

  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const diags = ts.getPreEmitDiagnostics(program);

  results[configName] = {
    errorsCount: diags.length,
    errors: diags.map(d => {
      const msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
      const pos = d.file ? ts.getLineAndCharacterOfPosition(d.file, d.start) : null;
      const loc = pos ? `(${pos.line + 1},${pos.character + 1})` : '';
      return `${d.file?.fileName || 'unknown'} ${loc}: TS${d.code}: ${msg}`;
    })
  };
}

checkConfig('tsconfig.app.json');
checkConfig('tsconfig.node.json');
checkConfig('tsconfig.server.json');

fs.writeFileSync('scripts/check-results.json', JSON.stringify(results, null, 2));
console.log('Finished diagnostics check. Results written to scripts/check-results.json');
