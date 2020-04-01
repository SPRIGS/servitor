import Question from "./Question";

class VirtualHostDirectory extends Question {

    constructor() {
        super();
        this.name = "directory.vhost";
        this.type = "input";
        this.message = "Write down the virtual host directory";
    }

}

export default VirtualHostDirectory;