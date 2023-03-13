import { Auth } from 'firebase/auth'

function exsitCurrentUser(auth: Auth) {
    return auth.currentUser ? true : false
}

export { exsitCurrentUser }
