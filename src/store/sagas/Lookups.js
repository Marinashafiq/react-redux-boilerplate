import { call, put } from "redux-saga/effects";
import API_LOOKUP from "../../network/apis/Lookups";
import * as ACTIONS_LOOKUP from "../actions/Lookups";

export function* collegeLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.collegeLookupRequest);
    yield put(ACTIONS_LOOKUP.collegeLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}
export function* degreeLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.degreeLookupRequest);
    yield put(ACTIONS_LOOKUP.degreeLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}
export function* jobTitleLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.jobTitleLookupRequest);
    yield put(ACTIONS_LOOKUP.jobTitleLookupReceive(response.data.data));
  } catch (err) {
    console.log(err)
  }
}
export function* jobTitleFilterCategoryLookupRequest({payload}) {
  try {
    const response = yield call(API_LOOKUP.jobTitleFilterCategoryLookupRequest, payload);
    yield put(ACTIONS_LOOKUP.jobTitleFilterCategoryLookupReceive(response.data.data));
  } catch (err) {
    console.log(err)
  }
}
export function* jobTitleCategoryLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.jobTitleCategoryLookupRequest);
    yield put(ACTIONS_LOOKUP.jobTitleCategoryLookupReceive(response.data.data));
  } catch (err) {
    console.log(err)
  }
}

export function* residenciesLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.residenciesLookupRequest);
    yield put(ACTIONS_LOOKUP.residenciesLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}

export function* languagesWithOutEnglishLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.languagesWithOutEnglish);
    yield put(ACTIONS_LOOKUP.languagesWithOutEnglishLookupReceive(response.data));
  }catch (err) {
    console.log(err)
  }
}

export function* jobCategoriesLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.jobCategoryLookupRequest);
    yield put(ACTIONS_LOOKUP.jobCategoryLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}


export function* jobContractTypeLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.jobContractTypeLookupRequest);
    yield put(ACTIONS_LOOKUP.jobContractTypeLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}

export function* countriesLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.countriesLookupsRequest);
    yield put(ACTIONS_LOOKUP.countriesLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}

export function* citiesLookupRequest({payload}) {
  try {
    const response = yield call(API_LOOKUP.citiesLookupsRequest , payload);
    yield put(ACTIONS_LOOKUP.citiesLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}

export function* skillsLookupRequest() {
  try {
    const response = yield call(API_LOOKUP.skillsLookupsRequest);
    yield put(ACTIONS_LOOKUP.skillsLookupReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}