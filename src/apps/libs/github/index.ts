const loadGithub = async (_onResponseFail: () => void) => {
    const res = await fetch('https://api.github.com/users/haneulab')

    if (!res.ok) {
        _onResponseFail()
        return false
    }

    const data = await res.json()

    return data
}

export { loadGithub }
