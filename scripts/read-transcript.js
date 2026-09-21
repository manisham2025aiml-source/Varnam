import fs from 'fs';
import readline from 'readline';

const transcriptPath = 'C:\\Users\\manis\\.gemini\\antigravity-ide\\brain\\13378d52-3a89-49d1-a3c7-c1b58770caed\\.system_generated\\logs\\transcript.jsonl';

if (!fs.existsSync(transcriptPath)) {
  console.log('Transcript file does not exist.');
  process.exit(0);
}

const fileStream = fs.createReadStream(transcriptPath);
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

const userMessages = [];

for await (const line of rl) {
  try {
    const data = JSON.parse(line);
    if (data.type === 'USER_INPUT') {
      userMessages.push({
        step: data.step_index,
        content: data.content
      });
    }
  } catch (e) {
    // ignore parse error
  }
}

console.log(`Found ${userMessages.length} user inputs. Showing last 5:`);
userMessages.slice(-5).forEach(m => {
  console.log(`--- STEP ${m.step} ---`);
  console.log(typeof m.content === 'string' ? m.content.slice(0, 500) : JSON.stringify(m.content).slice(0, 500));
});
