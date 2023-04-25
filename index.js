// Imported nmp
import chalk from 'chalk';
import randomColor from 'randomcolor';

// var thats generates random colors
const generatedColor = randomColor();

// var that lets user put the luminosity in
const inputHue = process.argv[2];

// var that lets user put the color in
const inputColorLuminosity = process.argv[3];

if (!inputColorLuminosity && !inputHue) {
  // outputs random color in a #pattern if you input node index.js
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
  // outputs the color and luminosity in #pattern
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
