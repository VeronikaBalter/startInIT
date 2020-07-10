// import axios from 'axios';
// import { ActionTree, GetterTree, MutationTree } from 'vuex';
// import { IAuthorizationState, IRootState} from '@/store/interfaces/interfaces';

// export interface IRootState {
//     auth: IAuthorizationState;
//     user: {};
// }
// const state: IAuthorizationState = {
//     isAuth: true,
//     user:  {},
// };
// const actions: ActionTree<IAuthorizationState, IRootState> = {
//     async login({ commit }: any, user: UserLoginModel): Promise<any> {
//         await axios.post('/api/auth/signin', {user})
//           .then((response: any) => {
//             if (response.data.accessToken) {
//               localStorage.setItem('user', JSON.stringify(response.data));
//               commit('loginSuccess', user);
//             }
//             return Promise.resolve(user);
//           })
//           .catch((error: any) =>{ 
//             commit('loginFailure');
//             return Promise.reject(error);
//           });
//     },

//     async register({ commit }: any, user: UserRegisterModel): Promise<any> {
//         await axios.post('/api/auth/signup', {user})
//           .then((response: any) => {
//             commit('registerSuccess');
//             return Promise.resolve(response.data);
//           })
//           .catch((error: any) =>{ 
//             commit('registerFailure');
//             return Promise.reject(error);
//           });
//     },

//     async logout({ commit }: any, user: UserRegisterModel): Promise<any> {
//         localStorage.removeItem('user');
//         commit('logout');
//     },


// };
// const mutations: MutationTree<IAuthorizationState> = {
//     loginSuccess(state: IAuthorizationState, user: any): void {
//         state.isAuth = true;
//         state.user = user;
//     },
//     logout(state: IAuthorizationState): void {
//         state.isAuth = false;
//         state.user = null;
//     },
//     registerSuccess(state: IAuthorizationState): void {
//         state.isAuth = false;
//     },
//     registerFailure(state: IAuthorizationState): void {
//         state.isAuth = false;
//     },
// };


// export default {
//     namespaced: true,
//     state,
//     mutations,
//     actions,
// };
