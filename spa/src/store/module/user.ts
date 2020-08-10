import axios from 'axios';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IUserState, IRootState } from '@/store/interfaces/interfaces';
import UserModel  from '@/models/user/UserModel';

const state: IUserState = {
    currentUser: null,
};

const getters: GetterTree<IUserState, IRootState> = {
    getCurrentUser(state: IUserState): UserModel | null {
        return state.currentUser;
    },
    getCurrentUserId(state: IUserState): number {
        return state.currentUser!.id;
    },
};

const mutations: MutationTree<IUserState> = {
    setCurrentUser(state: IUserState, user: UserModel | null): void {
        localStorage.setItem('user', JSON.stringify(user))
        state.currentUser = user;
    },
    clearUser(state: IUserState): void {
        debugger
        state.currentUser = null;
    },
};

const actions: ActionTree<IUserState, IRootState> = {
    async getCurrentUser({ commit, state }: any): Promise<void> {
        await axios
            .get<UserModel>('api/user/currentUser')
            .then(response => {
                commit('setCurrentUser', response.data);
            })
            .catch(error => {
                commit('clearUser');
                commit('authorization/setIsAuth', false, { root: true });
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
