import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import SearchResult from '../components/searchResult'

const Home: NextPage = () => {
  const [pron, setPron] = useState('')

  async function submitHandler() {

  }

  return (
    <>
      <Head>
        <title>ぶなしめじ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Webで顔文字変換" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object1037" />
        <meta property="og:url" content="https://bnasimeji.vercel.app" />
        <meta property="og:title" content="ぶなしめじ" />
        <meta property="og:description" content="Webで顔文字変換" />
        <meta property="og:image" content="https://object1037.dev/_next/image?url=%2Fimages%2Fprofile.jpg&w=640&q=75" />
      </Head>
      <main>
        <form onSubmit={submitHandler}>
          <input
            aria-label="search kaomoji"
            type="text"
            value={pron}
            onChange={(e) => setPron(e.target.value)}
          />
          <button type="submit">検索</button>
        </form>
        <SearchResult />
      </main>
    </>
  )
}

export default Home
