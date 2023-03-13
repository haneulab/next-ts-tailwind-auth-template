import { AuthContext } from 'frontend/contexts'
import { useContext } from 'react'

const useUser = () => useContext(AuthContext)

export { useUser }
