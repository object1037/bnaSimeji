import { useRouter } from 'next/router'
import { SearchForm } from '../components/searchForm'
import { SearchResult } from '../components/searchResult'
import { GetStaticProps } from 'next'
import axios, { AxiosError } from 'axios'

export type APIResponse = { kaomojis: string[] } | { message: string }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await handler(params && params.pron)

  return {
    props: {
      data: res,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

const PronPage = ({ data }: { data: APIResponse }) => {
  const router = useRouter()
  const { pron } = router.query

  if (router.isFallback) {
    return <SearchForm pron="Loading..." />
  } else if (!pron || Array.isArray(pron)) {
    return <SearchForm pron="Bad URL" />
  }

  return (
    <>
      <SearchForm pron={pron} />
      <SearchResult data={data} />
    </>
  )
}

const handler = async (pron: string | string[] | undefined) => {
  if (!pron || Array.isArray(pron) || !pron.match(/^[ぁ-んー]{2,}$/)) {
    return {
      message: 'bad input',
    }
  }

  const endPoint = encodeURI(
    `https://cloud.simeji.me/py?ol=1&switch=2&section=0&ver=10.7&api_version=2&web=1&py=${pron}`
  )
  const simejiRes: Promise<APIResponse> = axios
    .get<simejiResponse>(endPoint)
    .then((res) => {
      if (!res.data.data) {
        return {
          message: 'kaomoji not found',
        }
      }
      const filtered = res.data.data[0].candidates
        .filter((kaomoji: kaomoji) => kaomoji.type === 9 || kaomoji.type === 10)
        .map((kaomoji) => kaomoji.word)

      const kaomojis = [...Array.from(new Set(filtered))]

      return kaomojis.length === 0
        ? {
            message: 'kaomoji not found',
          }
        : {
            kaomojis: kaomojis,
          }
    })
    .catch((e: Error | AxiosError) => {
      return { message: e.message }
    })

  const results = await simejiRes
  return results
}

export default PronPage
