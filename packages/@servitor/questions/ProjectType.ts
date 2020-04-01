import Choice from "./choices/Choice";
import Question from "./Question";
import QuestionInterface from "./QuestionInterface";

class ProjectType extends Question implements QuestionInterface {
  
    constructor() {
        super();
        this.name = "type";
        this.type = "select";
        this.message = "What type of project do you want to create?";
        this.choices = [
            new Choice("WordPress","wordpress"),
            new Choice("Laravel","laravel"),
            new Choice("HTMLBoilerplate","boilerplate"),
        ];
    }

}