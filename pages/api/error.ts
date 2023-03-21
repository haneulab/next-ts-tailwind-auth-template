import type { NextApiRequest, NextApiResponse } from 'next'

const ErrorAPIHandler = (req: NextApiRequest, res: NextApiResponse) => {
    throw new Error('API throw error test')
    res.status(200).json({ name: 'John Doe' })
}

export default ErrorAPIHandler
