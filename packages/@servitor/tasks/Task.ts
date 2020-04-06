import Question from "./../questions/Question";

abstract class Task{
    
    protected answers;
    public readonly description: String;
    public questions: Question[];
    
}

export default Task;