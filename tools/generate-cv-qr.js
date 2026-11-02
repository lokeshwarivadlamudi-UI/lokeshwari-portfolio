const fs = require('node:fs');
const path = require('node:path');
const QRCode = require('qrcode');

const cvUrl = 'https://lokeshwarivadlamudi-ui.github.io/lokeshwari-portfolio/Lokeshwari-Vadlamudi-CV.pdf';
const outputPath = path.join(__dirname, '..', 'public', 'cv-qr.svg');

QRCode.toString(cvUrl, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 3,
  width: 320,
  color: { dark: '#123d38', light: '#ffffff' },
}).then((svg) => {
  fs.writeFileSync(outputPath, svg, 'utf8');
  process.stdout.write(`Generated ${outputPath} for ${cvUrl}\n`);
}).catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
