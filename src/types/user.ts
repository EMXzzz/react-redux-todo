export interface UserState {
    users : any[];
    loading : boolean;
    error : null | string;
}

export enum UserActionType {
    FETCH_USERS = "FETCH-USERS",
    FETCH_USERS_SUCCESS = "FETCH-USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH-USERS_ERROR",
}

interface FetchUsersAction {
    type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction