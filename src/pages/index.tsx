import SomeS from '@components/SomeC'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <SomeS text="Hello World!" />
        </div>
    )
}

export default Home
