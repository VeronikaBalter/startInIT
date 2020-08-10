import AnswerModel from './AnswerModel'
export default class QuestionModel {
    public id = 0;
    public name = '';
    public photo = '';
    public answers: AnswerModel[] = [new AnswerModel(),new AnswerModel()];
}