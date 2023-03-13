import { type FirebaseApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { app } from '@fire/config'

export const auth = initAuth(app)

function initAuth(app: FirebaseApp) {
    return getAuth(app)
}
