import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SearchForm } from '../components/searchForm'
import SearchResult from '../components/searchResult'

const PronPage: NextPage = () => {
  const router = useRouter()
  const { pron } = router.query

  return (
    <>
    <SearchForm pron={pron as string} />
    {pron && <SearchResult pron={pron as string}/>}
    </>
  )
}

export default PronPage