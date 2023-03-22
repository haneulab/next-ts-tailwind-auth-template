import type { IGoogleLoginButton } from './GoogleLoginButton.types'
import { SiGoogle } from 'react-icons/si'

const GoogleLoginButton = (props: IGoogleLoginButton) => {
    return (
        <button className="flex items-center px-4 py-3 text-sm text-white bg-blue-500 rounded-md transition-smooth lg:hover:bg-blue-400 drop-shadow-sm gap-x-2">
            <SiGoogle />
            <span>Login With Google</span>
        </button>
    )
}

export default GoogleLoginButton
