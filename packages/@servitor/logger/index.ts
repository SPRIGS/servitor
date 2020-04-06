import chalk from "chalk";
class Logger {

    log(message){
        console.log(
            chalk.white(message),
        );
    }

    success(message){
        console.log(
            chalk.green(message),
        );
    }
    warning(message){
        console.log(
            chalk.orange(message),
        );
    }

    fail(message){
        console.log(
            chalk.red(message),
        );
    }

}


export default new Logger;