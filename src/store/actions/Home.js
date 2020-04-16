import * as types from '../types/Home';

export const homeVacanciesRequest = payload => ({
    type: types.ALL_VACANCIES_REQUEST,
    payload
})
export const homeVacanciesReceive = payload => ({
    type: types.ALL_VACANCIES_RECIEVE,
    payload
})