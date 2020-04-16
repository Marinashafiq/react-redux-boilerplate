const Auth = {
    signOut () {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        localStorage.removeItem('registerationUserId');
        localStorage.removeItem('showApply');
        localStorage.removeItem('currentTab');
    },
    getAuth () {
        return  localStorage.getItem('userData') && localStorage.getItem('token')
    }
}
export default Auth;