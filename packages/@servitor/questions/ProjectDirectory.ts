import Question from "./Question";

class ProjectDirectory extends Question {

    constructor() {
        super();
        this.name = "directory.project";
        this.type = "input";
        this.message = "What is the project directory?";
    }

}

export default ProjectDirectory;