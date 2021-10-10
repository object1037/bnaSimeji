import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import SearchResult from '../components/searchResult'
import { FiSearch } from 'react-icons/fi'
import clsx from 'clsx'

const Home: NextPage = () => {
  const [pron, setPron] = useState('')
  const [inputValue, setInputValue] = useState('')

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPron(inputValue)
  }

  const formStyle = [
    'mt-16',
    'flex',
    'justify-center',
    'space-x-3',
    'max-w-md',
    'mx-auto'
  ]
  const buttonStyle = [
    'bg-gray-900',
    'text-gray-100',
    'rounded-md',
    'border',
    'border-gray-900',
    'p-3',
    'text-xl',
    'hover:bg-transparent',
    'hover:text-gray-900',
    'transition'
  ]

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
      <main className="px-6">
        <form onSubmit={submitHandler} className={clsx(formStyle)}>
          <input
            aria-label="search kaomoji"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-md flex-grow"
          />
          <button type="submit" className={clsx(buttonStyle)}>
            <FiSearch />
          </button>
        </form>
        {pron && <SearchResult pron={pron}/>}
      </main>
    </>
  )
}

export default Home
