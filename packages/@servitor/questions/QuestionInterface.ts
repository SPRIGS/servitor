import Choice from "./choices/Choice";
interface QuestionInterface{
    name: string;
    type: string;
    message: string;
    choices?: Choice[];
}

export default QuestionInterface;