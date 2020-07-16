import WorkExperienceModel from '../model/WorkExperienceModel'
import LanguageModel from '../model/LanguageModel'
import EducationModel from '../model/EducationModel'

export default class ResumeModel {
    public id = 0;
    public name = '';
    public about = ''
    public salary = 0;
    public currencyId = 0;
    public typeOfEmploymentId = 0;
    public levelId = 0;
    public skills = [];
    public userId = [];
    public works: WorkExperienceModel[]=[new WorkExperienceModel()];
    public languages: LanguageModel[]= [new LanguageModel()];
    public education: EducationModel[] = [new EducationModel()];
}