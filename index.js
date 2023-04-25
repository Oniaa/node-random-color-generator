import chalk from 'chalk';
import randomColor from 'randomcolor';

const generatedColor = randomColor();

console.log(chalk.hex(generatedColor)(`${generatedColor}`));
