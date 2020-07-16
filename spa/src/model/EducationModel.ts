import moment from 'moment'
export default class EducationModel {
    public id = 0;
    public name = '';
    public country = '';
    public city = '';
    public facultySpecialty = '';
    public description = '';
    public dateStart = new Date();
    public dateEnd = new Date();
    public levelOfEducationId = 0;
}