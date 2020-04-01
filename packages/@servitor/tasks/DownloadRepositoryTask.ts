/// <reference path="../node_modules/@types/fs-extra/index.d.ts" />

import fs from "fs-extra";
import TaskInterface from "./TaskInterface";
import Task from "./Task";

class DownloadRepositoryTask extends Task implements TaskInterface {
    
    private repository;
    
    constructor(){
        super();
        this.description = "Download boilerplate repository";
        this.repository = "http://...";
    }
    
    setup(): void {
        this.questions = [

        ];
    }

    execute(): Promise<Function> {
        return new Promise((resolve, reject) => {
            try {
                // Download repository (zip)
                // Extract zip
                // Run other tasks
                resolve();

            } catch (err) {
                return reject(err);
            }
        });
    }

}

export default DownloadRepositoryTask;