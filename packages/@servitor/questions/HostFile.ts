import Question from "./Question";

class HostFile extends Question {

    constructor() {
        super();
        this.name = "file.hostFile";
        this.type = "input";
        this.message = "Where is your host file found?";
    }

}

export default HostFile;