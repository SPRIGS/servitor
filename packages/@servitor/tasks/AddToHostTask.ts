/// <reference path="../node_modules/@types/fs-extra/index.d.ts" />

import fs from "fs-extra";

import Logger from "../logger";

import TaskInterface from "./TaskInterface";
import Task from "./Task";

import ProjectUrlQuestion from "./../questions/ProjectUrl";
import HostFile from "../questions/HostFile";

class AddToHostTask extends Task implements TaskInterface {
    
    constructor(){
        super();
        this.description = "Add url to your host file";
    }
    
    setup(): void {
        this.questions = [
            new HostFile,
            new ProjectUrlQuestion,
        ];
    }

    execute(): Promise<Function> {
        return new Promise((resolve, reject) => {
            try {
                fs.accessSync(this.answers.file.hostFile, fs.constants.R_OK | fs.constants.W_OK);
                fs.appendFile(
                    this.answers.file.hostFile,
                    `127.0.0.1    ${this.answers.url}\n`,
                  error => {
                    if (error) return reject(error);
                    Logger.success(`The URL was successfully added to the host file`);
                    resolve();
                  }
                );
            } catch (err) {
                return reject(err);
            }
        });
    }

}

export default AddToHostTask;