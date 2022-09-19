import HeaderDesktopNavBar from '@core-components/bars/HeaderDesktopNavBar'
import HeaderMenuButton from '@core-components/buttons/HederMenuButton'
import HeaderLink from '@core-components/links/HeaderLink'
import classnames from '@functions/classnames'
import pathnames from '@functions/pathnames'
import { useRouter } from 'next/router'

const HeaderLayout: React.FC = () => {
    const router = useRouter()

    return (
        <header
            className={classnames(
                'w-full bg-blue-100 z-40 top-0',
                pathnames(router, '/about') ? 'fixed' : 'sticky'
            )}
        >
            <section className="w-full max-w-cutoff mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <HeaderLink />
                    <HeaderDesktopNavBar />
                </div>
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <HeaderMenuButton />
                </div>
            </section>
        </header>
    )
}

export default HeaderLayout
