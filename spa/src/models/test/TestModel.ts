import QuestionModel from './QuestionModel'
import User from '@/models/user/UserModel'
export default class TestModel {
    public id = 0;
    public userId = 0;
    public user = new User();
    public name = '';
    public photo = '';
    public description = '';
    public testSkills = [];
    public hour = 0;
    public minutes = 0;
    public languageId =0;
    public levelId =0;
    public createdAt = '';
    public questions: QuestionModel[] = [new QuestionModel()];
}