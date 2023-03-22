import dynamic from 'next/dynamic'
import type { ILoginForm } from './LoginForm.types'

const GoogleLoginButton = dynamic(() => import('@nextapp/GoogleLoginButton'))
const FacebookLoginButton = dynamic(
    () => import('@nextapp/FacebookLoginButton')
)
const TwitterLoginButton = dynamic(() => import('@nextapp/TwitterLoginButton'))

const LoginForm = (props: ILoginForm) => {
    return (
        <div className="flex flex-col items-center w-full max-w-md p-6 mx-auto border-2 rounded-md lg:p-8">
            {props.message && (
                <p className="mb-6 text-red-500 lg:mb-8">{props.message}</p>
            )}
            <ul className="flex flex-col items-center w-full gap-y-4 lg:gap-y-6">
                <GoogleLoginButton signIn={props.googleSignIn} />
                <FacebookLoginButton signIn={props.facebookSignIn} />
                <TwitterLoginButton signIn={props.twitterSignIn} />
            </ul>
        </div>
    )
}

export default LoginForm
