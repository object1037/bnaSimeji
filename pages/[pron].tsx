import { useRouter } from 'next/router'
import { SearchForm } from '../components/searchForm'
import SearchResult from '../components/searchResult'
import { GetStaticProps } from 'next'
import axios from 'axios'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await handler(params!.pron as string)

  return {
    props: {
      kaomojis: res.kaomojis ? res.kaomojis : null,
      message: res.message ? res.message : null
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

const PronPage = ({
  kaomojis,
  message
}: {
  kaomojis: kaomoji[] | null
  message: string | null
}) => {
  const router = useRouter()
  const { pron } = router.query

  return (
    <>
    <SearchForm pron={pron as string} />
    <SearchResult kaomojis={kaomojis} message={message} />
    </>
  )
}

const handler = async (pron: string) => {
  if (Array.isArray(pron) || !pron.match(/^[ぁ-んー　]*$/) || pron.length < 2) {
    return {
      message: "bad input"
    }
  }

  let filtered: kaomoji[] = []

  const fetcher = async (section: number): Promise<{
    kaomojis?: kaomoji[]
    message?: string
  }> => {
    const encoded = encodeURI(`https://cloud.simeji.me/py?ol=1&switch=2&section=${section}&ver=10.7&api_version=2&web=1&py=${pron}`)
    return axios.get<simejiResponse>(encoded)
    .then((res) => {
      if (!res.data.data) {
        return {
          message: "kaomoji not found"
        }
      }

      filtered = filtered.concat(res.data.data[0].candidates.filter((kaomoji: kaomoji) => (kaomoji.type == 9 || kaomoji.type === 10)))

      if (res.data.data[0].continue) {
        return fetcher(section + 1)
      } else {
        return filtered.length === 0 ? {
          message: "kaomoji not found"
        } : {
          kaomojis: filtered
        }
      }
    })
    .catch(() => {
      return filtered.length === 0 ? {
        message: "kaomoji not found"
      } : {
        kaomojis: filtered
      }
    })
  }

  try {
    const results = await fetcher(1)
    return results
  } catch (e: any) {
    return {
      message: e.message as string
    }
  }
}

export default PronPage