import type { ITwitterLoginButton } from './TwitterLoginButton.types'
import { FaTwitter } from 'react-icons/fa'
const TwitterLoginButton = (props: ITwitterLoginButton) => {
    return (
        <button
            onClick={props.signIn}
            className="relative flex items-center justify-center w-full px-8 py-3 border rounded-md shadow-md border-slate-400/40 shadow-slate-400/10 text-slate-600 transition-smooth lg:hover:shadow-slate-300/10 lg:hover:border-blue-500 lg:hover:text-blue-500"
        >
            <FaTwitter className="absolute text-lg -translate-y-1/2 left-4 top-1/2 trasnform text-sky-500" />
            <span className="font-medium">Twitter Login</span>
        </button>
    )
}

export default TwitterLoginButton
