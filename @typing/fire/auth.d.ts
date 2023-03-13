import { OAuthCredential, User } from 'firebase/auth'

export type SignInResult = {
    crediential: OAuthCredential
    token: string
    user: User
}
