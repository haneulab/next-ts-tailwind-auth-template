import { NextApiRequest, NextApiResponse } from 'next'
import dotenv from 'dotenv'
import { verify } from '@apis/admin'

dotenv.config()

const AdminApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { uid, email } = JSON.parse(req.body)

        const isAdmin = verify({ uid, email })
        if (isAdmin) {
            res.status(200).json({ verified: true })
        } else {
            res.status(404).end()
        }
    } else {
        res.status(500).end()
    }
}

export default AdminApiHandler
