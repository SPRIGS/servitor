import Question from "../questions/Question";

interface TaskInterface{

    setup(): void;
    execute(): Promise<Function>;

}

export default TaskInterface;