import CompanyModel from './CompanyModel';

export default class VacancyModel {
    public id = 0;
    public name = '';
    public about = ''
    public salaryStart = 0;
    public salaryEnd = 0;
    public currencyId = 0;
    public interviewSalary =false;
    public typesOfEmploymentId = 0;
    public skills = [];
    public companyId = 0;
    public isModerationPassed: boolean | null = null;
    public company = new CompanyModel();
}