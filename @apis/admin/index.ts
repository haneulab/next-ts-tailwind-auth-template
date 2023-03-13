function verify(adminOption: { uid: string; email: string }) {
    const ADMIN_UID = process.env.ADMIN_UID
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL

    const { uid, email } = adminOption

    return uid === ADMIN_UID && email === ADMIN_EMAIL
}

export { verify }
