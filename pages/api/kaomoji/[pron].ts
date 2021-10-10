import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pron } = req.query
  const encoded = encodeURI(`https://cloud.simeji.me/py?ol=1&switch=2&section=1&ver=10.6&api_version=2&web=1&py=${pron}`)
  try {
    const results = await axios.get(encoded).then(res => res.data)
    return res.json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}

export default handler