import { useContext } from 'react'
import { AuthContext } from '@view/contexts'

const useUser = () => useContext(AuthContext)

export default useUser
