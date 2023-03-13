import { type UserSchema } from '@typing'

const pageMeta = (page: string, user: UserSchema = null) => {
    const meta = {
        index: {
            title: user ? `Hi, ${user.name}` : 'Home | My App',
            description: '',
            keywords: [''],
        },
        about: {
            title: 'About My App',
            description: 'My app is awesome.',
            keywords: [''],
        },
        menu: {
            title: 'Menu | My App',
            description: 'Explore our menu items.',
            keywords: [''],
        },
        order: {
            title: user ? `Order | ${user.name}` : 'Order | My App',
            description: '',
            keywords: [''],
        },
        admin: {
            title: user
                ? user.isAdmin
                    ? `Manage My App`
                    : `Admin Access Denied`
                : 'Admin Access Denied',
            description: '',
            keywords: [''],
        },
        signin: {
            title: 'Sign In | My App',
            description: '',
            keywords: [''],
        },
    }

    return meta[page]
}

export { pageMeta }
