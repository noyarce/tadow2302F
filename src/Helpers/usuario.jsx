const TOKEN_KEY = 'token';

const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

const deleteToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export {setToken,getToken,deleteToken}