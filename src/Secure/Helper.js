export const URL_LINK = 'http://localhost:8000/api';
export const FILE_UPLOADS = 'http://localhost:8000/public/image';

const user = JSON.parse(localStorage.getItem('user_data')) ? JSON.parse(localStorage.getItem('user_data')) : undefined;
// console.log("token",user)
function checkUser(data) {
    if (data !== undefined) {
        return data.token
    }
    return "fghjkjhghjkjhgjk"
}

export const TOKEN_LINK = checkUser(user)
// console.log("token", TOKEN_LINK);