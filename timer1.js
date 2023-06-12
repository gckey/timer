// Added Windows PowerShell solution to test single beeb on VSCode on windows 10
const { exec } = require('child_process');

const args = process.argv.slice(2);

for (const arg of args) {
  const time = Number(arg);
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      // process.stdout.write("\x07");
      // process.stdout.write(".");
      // process.stdout.write('\u0007');
      exec("[console]::beep(1000, 500)", {'shell':'powershell.exe'});//Single beep
    }, time * 1000);
  }
}