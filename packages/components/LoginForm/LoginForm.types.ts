export interface ILoginForm {
    message?: string
    googleSignIn: () => void
    facebookSignIn: () => void
    twitterSignIn: () => void
}
