export function isAuth(cookies){
    if(cookies.has('token')){
        return true;
    }else {
        return false;
    }
}