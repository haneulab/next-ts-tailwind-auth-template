import { auth } from '@fire/config'
import { In } from './signin'
import { Out } from './signout'

class SignMethod {
    private in = In
    private out = Out

    constructor() {}

    async In() {
        console.log('[App] SignIn Started.')
        await this.in.Go(auth)
        console.log('[App] SignIn Completed.')
    }
    async Out() {
        console.log('[App] SignOut Started.')
        await this.out.Go(auth)
        console.log('[App] SignOut Completed.')
    }

    private _LogFail(type: 'SignIn' | 'SignOut', message: string): void {
        console.log(`[${type}Fail] ${message}`)
    }
    private _LogSuccess(type: 'SignIn' | 'SignOut', message: string): void {
        console.log(`[${type}Success] ${message}`)
    }

    public Log(
        result: boolean,
        type: 'SignIn' | 'SignOut',
        message: string
    ): void {
        if (result) {
            this._LogSuccess(type, message)
        } else {
            this._LogFail(type, message)
        }
    }
}

const Sign = new SignMethod()

export { Sign }

export * from './observer'
export * from './signin'
export * from './signout'
