import { Auth, signOut } from 'firebase/auth'
import { exsitCurrentUser } from '../observer'

class OutMethod {
    constructor() {}

    async Go(auth: Auth) {
        if (!exsitCurrentUser(auth)) {
            throw Error('[SignOutError] You are already signed out.')
        }
        await signOut(auth)
        console.log('[SignOutSuccess] Successfully signed out.')
    }
}

const Out = new OutMethod()

export { Out }
