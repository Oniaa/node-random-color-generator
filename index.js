import chalk from 'chalk';
import randomColor from 'randomcolor';

const generatedColor = randomColor();
const inputColorLuminosity = process.argv[2];
const inputColor = process.argv[3];

if (!inputColorLuminosity && !inputColor) {
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
}
