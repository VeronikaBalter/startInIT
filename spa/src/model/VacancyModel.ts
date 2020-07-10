import TypesOfEmployment from './TypesOfEmploymentModel'
export default class VacancyModel {
    public id = 0;
    public name = '';
    public about = ''
    public salaryStart = 0;
    public salaryEnd = 0;
    public typesOfEmployment = new TypesOfEmployment();
}