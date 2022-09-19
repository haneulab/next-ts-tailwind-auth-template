import Link from 'next/link'

const HeaderLink: React.FC = () => {
    return (
        <h1>
            <Link href={'/'}>
                <a className="font-bold text-xl">Template</a>
            </Link>
        </h1>
    )
}

export default HeaderLink
