import { Auth, signOut } from 'firebase/auth'
import { exsitCurrentUser } from '../observer'

class OutMethod {
    constructor() {}

    async Go(auth: Auth) {
        if (!exsitCurrentUser(auth)) {
            throw Error('You are already signed out.')
        }
        await signOut(auth)
    }
}

const Out = new OutMethod()

export { Out }
