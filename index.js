// Imported nmp
import chalk from 'chalk';
import randomColor from 'randomcolor';

// var thats generates random colors
const generatedColor = randomColor();
// var
const inputHue = process.argv[2];
const inputColorLuminosity = process.argv[3];

if (!inputColorLuminosity && !inputHue) {
  console.log(
    chalk.hex(generatedColor)(`      ###############################
      ###############################
      ###############################
      ######                   ######
      ######      ${generatedColor}      ######
      ######                   ######
      ###############################
      ###############################
      ###############################`),
  );
} else if (inputHue || inputColorLuminosity) {
  const inputColor = randomColor({
    luminosity: inputColorLuminosity,
    hue: inputHue,
  });
  console.log(
    chalk.hex(inputColor)(`  ###############################
  ###############################
  ###############################
  ######                   ######
  ######      ${inputColor}      ######
  ######                   ######
  ###############################
  ###############################
  ###############################`),
  );
}
