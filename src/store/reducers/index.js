import { combineReducers } from 'redux'
import locale from './Lang';
import auth from './Auth';
import loader from './Loader';
import snackbar from './Snackbar';
import vacancies from './Vacancies';
import lookups from './Lookups';
import profile from './Profile';
import Home from './Home';
import screeningQuestions from './ScreeningQuestions';
import myApplications from './MyApplications';

export default combineReducers({
    locale,
    auth,
    loader,
    snackbar,
    vacancies,
    lookups,
    profile,
    Home,
    screeningQuestions,
    myApplications
})