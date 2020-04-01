/// <reference path="../node_modules/@types/fs-extra/index.d.ts" />

import fs from "fs-extra";
import TaskInterface from "./TaskInterface";
import Task from "./Task";
// import hostStub from "../stubs/server/apache/host";

import ProjectDirectory from "./../questions/ProjectDirectory";
import ProjectUrlQuestion from "./../questions/ProjectUrl";
import VirtualHostDirectory from "./../questions/VirtualHostDirectory";

class AddApacheVHostTask extends Task implements TaskInterface {
    
    private readonly fileName = '';
    private readonly stub;
    private readonly virtualHostDirectory = '/etc/apache2/vhosts';

    constructor(){
        super();
        this.description = "Create apache vhost file";
    }
    
    setup(): void {
        this.questions = [
            new ProjectUrlQuestion,
            new ProjectDirectory,
            new VirtualHostDirectory,
        ];
    }

    execute(): Promise<Function> {
        this.fileName = `${this.answers.url}.conf`;
        return new Promise((resolve, reject) => {
            try {
                fs.accessSync(this.virtualHostDirectory, fs.constants.R_OK | fs.constants.W_OK);
                fs.appendFile(
                    this.fileName,
                    this.stub.compiled,
                  error => {
                    if (error) return reject(error);
                    resolve();
                  }
                );
            } catch (err) {
                return reject(err);
            }
        });
    }

}

export default AddApacheVHostTask;