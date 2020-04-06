/// <reference path="../node_modules/@types/fs-extra/index.d.ts" />

import fs from "fs-extra";

import TaskInterface from "./TaskInterface";
import Task from "./Task";

// import hostStub from "../stubs/server/apache/host";

import ProjectDirectory from "./../questions/ProjectDirectory";
import ProjectUrlQuestion from "./../questions/ProjectUrl";
import VirtualHostDirectory from "./../questions/VirtualHostDirectory";

class AddApacheVHostTask extends Task implements TaskInterface {
    
    constructor(){
        super();
        this.description = "Create an apache vhost file";
    }
    
    setup(): void {
        this.questions = [
            new ProjectDirectory,
            new ProjectUrlQuestion,
            new VirtualHostDirectory,
        ];
    }

    execute(): Promise<Function> {
        const fileName = `${this.answers.url}.conf`;
        return new Promise((resolve, reject) => {
            try {
                fs.accessSync(this.answers.directory.vhost, fs.constants.R_OK | fs.constants.W_OK);
                fs.appendFile(
                    this.answers.directory.vhost + '/' + fileName,
                    `
                    <VirtualHost *:80>
                            ServerAdmin webmaster@localhost
                            ServerAlias ${this.answers.url}
                    
                            DocumentRoot ${this.answers.directory.project}
                    
                            <Directory "${this.answers.directory.project}">
                                    Options Indexes FollowSymLinks MultiViews
                                    AllowOverride All
                            </Directory>
                    </VirtualHost>                    
                    `,
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