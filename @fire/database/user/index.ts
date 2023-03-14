import { set, ref, get, child, update, remove } from 'firebase/database'
import { database } from '@fire/config'
import { type UserSchema } from '@typing'

/** UTILITY FUNCTIONS */

async function setUser(User: UserSchema) {
    await set(ref(database, 'users/' + User.id), { ...User })
}

async function getUser(UserId: UserSchema['id']) {
    const Ref = ref(database)
    const result = await get(child(Ref, 'users/' + UserId))
    if (!result.exists()) return null
    return result.val() as UserSchema
}

async function updateUser(User: UserSchema) {
    // const key = push(child(ref(database), 'users')).key
    let updates = {}

    updates['/users/' + User.id] = structuredClone(User)

    await update(ref(database), updates)
}

async function removeUser(UserId: UserSchema['id']) {
    await remove(ref(database, 'users/' + UserId))
}

class UserMethods {
    constructor(public name: 'users' = 'users') {
        this.name = name
    }

    /** @param arg: user's uniqee id */
    public async Get(arg: UserSchema['id']) {
        console.log(`[App] DatabaseGet['${this.name}'] Started.`)
        const user = await getUser(arg)
        console.log(`[App] DatabaseGet['${this.name}'] Completed.`)
        return user
    }
    /** @param arg: user's object as {typeof UserSchema} */
    public async Set(arg: UserSchema) {
        console.log(`[App] DatabaseSet['${this.name}'] Started.`)
        await setUser(arg)
        console.log(`[App] DatabaseSet['${this.name}'] Completed.`)
    }
    /** @param arg: updated user's object as {typeof UserSchema} */
    public async Update(arg: UserSchema) {
        console.log(`[App] DatabaseUpdated['${this.name}'] Started.`)
        await updateUser(arg)
        console.log(`[App] DatabaseUpdated['${this.name}'] Completed..`)
    }
    /** @param arg: user's uniqee id */
    public async Remove(arg: UserSchema['id']) {
        console.log(`[App] DatabaseRemove['${this.name}'] Started.`)
        await removeUser(arg)
        console.log(`[App] DatabaseRemove['${this.name}'] Completed.`)
    }
    /** @param result: boolean @param type: Get, Set, Update, Remove. @parem message: string */
    public Log(
        result: boolean,
        type: 'Get' | 'Set' | 'Update' | 'Remove',
        message: string
    ): void {
        if (result) {
            console.log(`[Database${type}Success]['${this.name}'] ${message}`)
        } else {
            console.log(`[Database${type}Fail]['${this.name}'] ${message}`)
        }
    }
}

export { getUser, setUser, updateUser, removeUser }
export const User = new UserMethods()
