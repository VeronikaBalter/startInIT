import UserModel from '@/models/user/UserModel'
export interface IRootState {
    auth: IAuthorizationState;
    user: IUserState;
}

export interface IAuthorizationState {
    token: string | null;
}

export interface IUserState {
    currentUser: UserModel | null;
}