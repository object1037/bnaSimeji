import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pron } = req.query

  if (Array.isArray(pron)) {
    return res.status(400).json({ message: "bad query" })
  } else if (!pron.match(/^[ぁ-んー　]*$/)) {
    return res.status(400).json({ message: "ひらがなを入力してください" })
  }

  const encoded = encodeURI(`https://cloud.simeji.me/py?ol=1&switch=2&section=1&ver=10.6&api_version=2&web=1&py=${pron}`)

  try {
    const results = await axios.get<any>(encoded)
    .then(function(res) {
      if (!res.data.data) {
        return null
      } else {
        const filtered = res.data.data[0].candidates.filter((kaomoji: kaomoji) => kaomoji.type == 9)
        return filtered
      }
    })
    if (!results) return res.status(400).json({ message: "顔文字が見つかりません" })
    return res.json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}

export default handler