import chalk from 'chalk';

function log(formattedMessage: string): void {
  process.stdout.write(`${formattedMessage}\n`);
}

function info(message: string): void {
  const formattedLevel = chalk.bold.cyan('info');
  log(`${formattedLevel} ${message}`);
}

function success(message: string): void {
  const formattedLevel = chalk.bold.green('success');
  log(`${formattedLevel} ${message}`);
}

function warning(message: string): void {
  const formattedLevel = chalk.bold.yellow('warning');
  log(`${formattedLevel} ${message}`);
}

function error(message: string): void {
  const formattedLevel = chalk.bold.red('error');
  log(`\n${formattedLevel}\n${message}\n`);
}

export default { info, success, warning, error };
