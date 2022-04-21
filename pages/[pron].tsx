import { useRouter } from 'next/router'
import { SearchForm } from '../components/searchForm'
import SearchResult from '../components/searchResult'
import { GetStaticProps } from 'next'
import axios from 'axios'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await axios.get<kaomoji[]>(encodeURI(`https://bnasimeji.vercel.app/api/kaomoji/${params!.pron as string}`))
    .then((res) => res)

  const kaomojis = result.data

  return {
    props: {
      kaomojis
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

const PronPage = ({
  kaomojis
}: {
  kaomojis: kaomoji[]
}) => {
  const router = useRouter()
  const { pron } = router.query

  return (
    <>
    <SearchForm pron={pron as string} />
    {pron && <SearchResult kaomojis={kaomojis}/>}
    </>
  )
}

export default PronPage