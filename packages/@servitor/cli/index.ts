/// <reference path="../../../node_modules/enquirer/index.d.ts" />

import {prompt, MultiSelect} from "enquirer";
import ConfigManager from "../config-manager";

import AddApacheVHostTask from "../tasks/AddApacheVHostTask"
import AddToHostTask from "../tasks/AddToHostTask"
import DownloadRepositoryTask from "../tasks/DownloadRepositoryTask"

import Logger from "../logger";

import Task from "../tasks/Task";

class CLI {

    protected _tasks: Task[];

    constructor(){
        this.init();
    }

    init(){
        this._tasks = [];
        const prompt = new MultiSelect({
            name: 'task',
            message: 'What tasks do you want to execute?',
            choices: [
                { name: 'Create apache vhost file', value: new AddApacheVHostTask },
                { name: 'Add url to host file', value: new AddToHostTask },
                { name: 'Download boilerplate repository', value: new DownloadRepositoryTask },
            ],
            result(names) {
                let _options = this.map(names);
                return Object.keys(_options).map((option) =>  {
                    return _options[option];
                });
            }
        });
        prompt.run().then(answer => {
            this._tasks = answer;
            this.setup();
        }).catch(console.error);
    }

    setup(){
        this.prompt().then(() => this.execute()).catch((reject) => console.log(reject));
    }

    async prompt(){
        for(const task of this._tasks) {
            task.setup();
            Logger.log(
               `Task ${task.description}`
            );
            await prompt(task.questions).then((answers) => {
                task.answers = answers;
            });
        }
    }
    
    async execute(){
        this._tasks.forEach(task => {
            task.execute()
        });
    }

}

module.exports = new CLI();