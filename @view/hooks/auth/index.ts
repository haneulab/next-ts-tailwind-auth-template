import { AuthContext } from '@view/contexts'
import { useContext } from 'react'

const useUser = () => useContext(AuthContext)

export default useUser
