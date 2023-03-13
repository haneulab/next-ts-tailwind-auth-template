import { auth } from 'backend/config'
import { SignInResult } from 'typing'
import { In } from './signin'
import { Out } from './signout'

class SignMethod {
    private in = In
    private out = Out

    constructor() {}

    async In(
        success: (_result: SignInResult | undefined) => void,
        fail: (_error: string) => void
    ) {
        await this.in
            .Go(auth)
            .then((result) => {
                if (result) {
                    success(result as unknown as SignInResult)
                } else {
                    throw new Error(
                        '[SignInError] Missing usser crediential, token, and user object.'
                    )
                }
            })
            .catch(fail)
    }
    async Out(success: () => void, fail: (_error: string) => void) {
        await this.out.Go(auth).then(success).catch(fail)
    }
}

const Sign = new SignMethod()

export { Sign }

export * from './observer'
export * from './signin'
export * from './signout'
