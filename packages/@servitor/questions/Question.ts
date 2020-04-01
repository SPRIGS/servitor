import Choice from "./choices/Choice";

abstract class Question {
    public name: string;
    private type: string;
    public message: string;
    private choices?: Choice[];
}

export default Question;