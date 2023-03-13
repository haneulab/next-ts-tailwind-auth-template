import { useUser } from 'hooks/auth.hook'
import Image from 'next/image'
import { type RFC } from 'typing'

const HeaderLayout: RFC = () => {
    const { sign, user } = useUser()

    return (
        <header className="fixed top-0 z-40 w-full p-4 bg-white">
            <section className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <button onClick={sign.in}>Sign In</button>
                    <button onClick={sign.out}>Sign Out</button>
                </div>

                {user ? (
                    <div className="flex items-center gap-x-2">
                        <picture>
                            <Image
                                src={user.image}
                                alt={user.name}
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </picture>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ) : (
                    <p>Please Sign In</p>
                )}
            </section>
        </header>
    )
}

export default HeaderLayout
