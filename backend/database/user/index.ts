import { set, ref, get, child, update, remove } from 'firebase/database'
import { type UserSchema } from 'typing'
import { database } from 'backend/config'

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
    constructor() {}

    /** @param arg: user's uniqee id */
    async Get(
        arg: UserSchema['id'],
        success: (_arg: UserSchema) => void,
        fail: (_error: any) => void
    ) {
        await getUser(arg).then(success).catch(fail)
    }
    /** @param arg: user's object as {typeof UserSchema} */
    async Set(arg: UserSchema, success: () => void, fail: (_error) => void) {
        await setUser(arg).then(success).catch(fail)
    }
    /** @param arg: updated user's object as {typeof UserSchema} */
    async Update(arg: UserSchema, success: () => void, fail: (_error) => void) {
        await updateUser(arg).then(success).catch(fail)
    }
    /** @param arg: user's uniqee id */
    async Remove(
        arg: UserSchema['id'],
        success: () => void,
        fail: (_error) => void
    ) {
        await removeUser(arg).then(success).catch(fail)
    }
}

export { getUser, setUser, updateUser, removeUser }
export const User = new UserMethods()
