import { type RFC } from 'typing'

const FooterLayout: RFC = () => {
    return (
        <footer>
            <div className="p-8 mx-auto max-w-cutoff">
                <p className="text-sm font-light text-center">
                    Made With Love By{' '}
                    <code className="cursor-pointer transition-smooth hover:opacity-60">
                        @HaneuLab
                    </code>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout
