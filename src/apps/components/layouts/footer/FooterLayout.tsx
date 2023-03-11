import { type RFC } from '@app-types'

const FooterLayout: RFC = () => {
    return (
        <footer>
            <div className="p-8 max-w-cutoff mx-auto">
                <p className="text-center font-light text-sm">
                    Made With Love By{' '}
                    <code className="transition-smooth hover:opacity-60 cursor-pointer">
                        @HaneuLab
                    </code>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout
