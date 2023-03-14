import { type UserSchema } from '@typing'

const pageMeta = (page: string, user: UserSchema = null) => {
    const meta = {
        /** PAGE META */
        index: {
            title: user ? `Hi, ${user.name} | My App` : 'Welcome User!',
            description: '',
            keywords: [''],
        },
        private: {
            title: user
                ? `Private Channel | My App`
                : `You will be redirected.`,
            description: '',
            keywords: [''],
        },
        public: {
            title: user
                ? `Hi, ${user.name}! Public Channel | My App`
                : `Public Channel | My App`,
            description: '',
            keywords: [''],
        },
        admin: {
            title: user
                ? user.isAdmin
                    ? `Manage | My App`
                    : `Admin Access Denied`
                : 'Admin Access Denied',
            description: '',
            keywords: [''],
        },
        signin: {
            title: user ? `You will be redirected.` : 'Please Sign In | My App',
            description: '',
            keywords: [''],
        },
        /** ERROR PAGES META */
        '404': {
            title: 'Page Not Found | My App',
            description: '',
            keywords: [''],
        },
        '500': {
            title: 'Internal Server Error | My App',
            description: '',
            keywords: [''],
        },
    }

    return meta[page]
}

export { pageMeta }
