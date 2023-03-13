import { getUser, setUser } from '@fire/database'
import {
    type Auth,
    GoogleAuthProvider,
    signInWithPopup,
    User,
} from 'firebase/auth'
import { UserSchema } from '@typing'
import { exsitCurrentUser } from '../observer'

const provider = {
    google: new GoogleAuthProvider(),
}

class InMethod {
    constructor() {}

    async Go(auth: Auth, providerOption = provider) {
        if (exsitCurrentUser(auth)) {
            throw Error('[SignInError] You are already signed in.')
        }
        return await signInWithPopup(auth, providerOption.google).then(
            async (result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
                console.log('[SignInSuccess] Successfully signed in.')
                await this.Retrieve(user)
                return {
                    credential,
                    token,
                    user,
                }
            }
        )
    }
    async Retrieve(user: User) {
        return await getUser(user.uid).then(async (arg) => {
            if (arg) {
                console.log(
                    '[RetriveSuccess] Successfully retrieved user data.'
                )
                return arg
            }
            let newUser: UserSchema = {
                id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                isAdmin: false,
                description:
                    'Hello, my name is ' +
                    user.displayName +
                    '. Nice to meet you!',
            }
            await setUser(newUser)
            return await this.Retrieve(user)
        })
    }
}

const In = new InMethod()

export { In }
