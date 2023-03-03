export const URL_LINK = 'https://cashdost-4lj1r4t0i-jitenderdeveloper.vercel.app/api';
export const FILE_UPLOADS = 'https://cashdost-4lj1r4t0i-jitenderdeveloper.vercel.app/public/image/';

const user = JSON.parse(localStorage.getItem('user_data')) ? JSON.parse(localStorage.getItem('user_data')) : undefined;
// console.log(user)
function checkUser(data) {
    if (data !== undefined) {
        return data.token
    }
    return "fghjkjhghjkjhgjk"
}

export const TOKEN_LINK = checkUser(user)