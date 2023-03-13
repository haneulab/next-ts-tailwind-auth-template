import { type FirebaseApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { app } from 'backend/config'

export const database = initDatabase(app)

function initDatabase(app: FirebaseApp) {
    return getDatabase(app)
}
