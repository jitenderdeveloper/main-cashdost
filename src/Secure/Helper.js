export const URL_LINK = 'http://localhost:8000/api'

const user = JSON.parse(localStorage.getItem('user_data')) ? JSON.parse(localStorage.getItem('user_data')) : undefined;
// console.log(user)
function checkUser(data) {
    if (data !== undefined) {
        return data.token
    }
    return "fghjkjhghjkjhgjk"
}

export const TOKEN_LINK = checkUser(user)