import type { IFacebookLoginButton } from './FacebookLoginButton.types'
import { FaFacebook } from 'react-icons/fa'
const FacebookLoginButton = (props: IFacebookLoginButton) => {
    return (
        <button
            onClick={props.signIn}
            className="relative flex items-center justify-center w-full px-8 py-3 border rounded-md shadow-md border-slate-400/40 shadow-slate-400/10 text-slate-600 transition-smooth lg:hover:shadow-slate-300/10 lg:hover:border-blue-500 lg:hover:text-blue-500"
        >
            <FaFacebook className="absolute text-lg text-blue-500 -translate-y-1/2 left-4 top-1/2 trasnform" />
            <span className="font-medium">Facebook Login</span>
        </button>
    )
}

export default FacebookLoginButton
