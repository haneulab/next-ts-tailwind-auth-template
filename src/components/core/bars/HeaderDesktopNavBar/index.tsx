import { STATIC_ROUTES } from '@constants'
import classnames from '@functions/classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderDesktopNavBar: React.FC = () => {
    const router = useRouter()

    return (
        <nav className="hidden lg:flex items-center space-x-4">
            {STATIC_ROUTES.map((staticRoute, routeIndex) => (
                <Link key={routeIndex} href={staticRoute.href}>
                    <a
                        className={classnames(
                            'transition-all duration-[0.25s] inline-block',
                            staticRoute.isCurrentRoute(router)
                                ? 'opacity-90 font-medium'
                                : 'opacity-60 font-normal'
                        )}
                    >
                        {staticRoute.text}
                    </a>
                </Link>
            ))}
        </nav>
    )
}

export default HeaderDesktopNavBar
