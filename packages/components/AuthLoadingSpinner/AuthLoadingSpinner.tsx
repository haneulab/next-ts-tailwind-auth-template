import type { IAuthLoadingSpinner } from './AuthLoadingSpinner.types'

const AuthLoadingSpinner = (props: IAuthLoadingSpinner) => {
    return (
        <aside className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-white/90 backdrop-blur-md">
            <div className="flex flex-col p-8 text-center gap-y-4">
                <span className="w-[50px] relative h-[50px] mx-auto rounded-full border-4 border-green-400 bg-white p-0.5 flex justify-center items-center animate-spin">
                    <span className="w-[5px] h-[50%] bg-green-400 top-0 absolute left-1/2 trasnform -translate-x-1/2" />
                </span>
                {props.message && (
                    <p className="font-medium text-center text-green-500">
                        {props.message}
                    </p>
                )}
            </div>
        </aside>
    )
}

export default AuthLoadingSpinner
