import Question from "./Question";

class ProjectDirectory extends Question {

    constructor() {
        super();
        this.name = "directory.project";
        this.type = "input";
        this.message = "Where should the project be created?";
    }

}

export default ProjectDirectory;