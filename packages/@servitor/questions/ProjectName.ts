import Question from "./Question";
import QuestionInterface from "./QuestionInterface";

class ProjectName extends Question implements QuestionInterface{
    
    constructor(){
        super();
        this.name = "name";
        this.type = "input";
        this.message = "What is the project name?";
    }

}

export default ProjectName;