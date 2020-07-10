export interface IRootState {
    auth: IAuthorizationState;
    user: any;
}

export interface IAuthorizationState {
    isAuth: boolean;
    user: any;
}