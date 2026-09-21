import ts from 'typescript';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function checkConfig(configName) {
  const configPath = path.resolve(rootDir, configName);
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, rootDir);

  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const diags = ts.getPreEmitDiagnostics(program);

  console.log(`${configName}: ${diags.length} diagnostic(s)`);
  if (diags.length > 0) {
    for (const d of diags) {
      const msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
      const pos = d.file ? ts.getLineAndCharacterOfPosition(d.file, d.start) : null;
      const loc = pos ? `(${pos.line + 1},${pos.character + 1})` : '';
      console.log(`  ERROR: ${d.file?.fileName || 'unknown'} ${loc}: TS${d.code}: ${msg}`);
    }
  }
}

console.log('--- RUNNING TYPESCRIPT VALIDATION ---');
checkConfig('tsconfig.app.json');
checkConfig('tsconfig.server.json');
checkConfig('tsconfig.node.json');
console.log('--- VALIDATION COMPLETE ---');
