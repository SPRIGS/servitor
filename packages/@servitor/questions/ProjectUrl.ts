import Question from "./Question";
import QuestionInterface from "./QuestionInterface";

class ProjectUrl extends Question implements QuestionInterface {

  constructor() {
    super();
    this.name = "url";
    this.type = "input";
    this.message = "What should be the url?";
  }

}

export default ProjectUrl;