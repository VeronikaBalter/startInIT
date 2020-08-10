import axios from 'axios';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { Vue} from 'vue-property-decorator';
import { IAuthorizationState, IUserState,} from '@/store/interfaces/interfaces';
import UserLoginModel from '@/models/user/UserLoginModel';
import UserRegisterModel from '@/models/user/UserRegisterModel';

export interface IRootState {
    auth: IAuthorizationState;
    user: IUserState;
}
const state: IAuthorizationState = {
    token: null
};
const actions: ActionTree<IAuthorizationState, IRootState> = {
  async login({ commit }: any, user: UserLoginModel): Promise<any> {
    await axios.post('api/signIn', {user})
      .then((response: any) => {
        if (response.data)
          commit('auth', response.data);

        return Promise.resolve(user);
    })
      .catch((error: any) =>{ 
        commit('authFailed');
        return Promise.reject(error);
    });
  },

  async register({ commit }: any, user: UserRegisterModel): Promise<any> {
    await axios.post('api/signUp', {user})
      .then((response: any) => {
        commit('auth', response.data);
        return Promise.resolve(response.data);
    })
      .catch((error: any) =>{ 
        commit('authFailed');
        return Promise.reject(error);
    });
  },

    async logout({ commit }: any): Promise<any> {
      //to do
      //debugger
      //commit('user/clearUser', {root: true});
      commit('logout');
    },


};
const mutations: MutationTree<IAuthorizationState> = {
  auth(state: IAuthorizationState, token: string): void {
    localStorage.setItem('token', token);
    state.token = token;
  },
  authFailed(state: IAuthorizationState): void {
    localStorage.removeItem('token');
  },
  logout(state: IAuthorizationState): void {
    localStorage.removeItem('token');
    state.token = null;
  },
};

const getters: GetterTree<IAuthorizationState, IRootState> = {
  isAuth(state: IAuthorizationState): boolean {
    return state.token!=null;
  },
  token(state: IAuthorizationState): string {
    return state.token !=null ? state.token : '';
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
