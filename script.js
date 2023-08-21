// Your JavaScript code here
function generateScrambles() {
  const types = ["↰", "↱", "↲", "↳"];
  const type = 1; // Always WCA fixed U*
  const count = 100; // Always generate 100 scrambles

  let output = '';
  for (let ii = 0; ii < count; ii++) {
    for (let j = 0; j < 7; j++) {
      let line = '';
      let typ = 0;
      for (let i = 0; i < 5; i++) {
        typ = Math.floor(Math.random() * 4);
        line += types[typ] + '~ ';
      }
      if (type === 1) {
        if (typ % 2 === 0) {
          line += "U'";
        } else {
          line += "U~";
        }
      } else {
        if (Math.random() >= 0.5) {
          line += "U";
        } else {
          line += "U'";
        }
      }
      output += line + "\\n";
    }
    output += "\\n";
  }

  return output;
}

const generatedScrambles = generateScrambles();
console.log(generatedScrambles);

const textarea = document.createElement("textarea");
textarea.value = generatedScrambles;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
document.body.removeChild(textarea);

console.log("Scrambles copied to clipboard!");
