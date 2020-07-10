import UserInfo from './UserInfoModel'
export default class UserModel {
    public id = 0;
    public firstName = '';
    public lastName = '';
    public email = '';
    public userInfo = new UserInfo();
}