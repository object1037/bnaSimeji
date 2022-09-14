import Head from 'next/head'
import { ReactNode } from 'react'
import { FiGithub } from 'react-icons/fi'

export const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <>
      <Head>
        <title>ぶなしめじ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="WebでSimejiの顔文字変換" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object1037" />
        <meta property="og:url" content="https://bnasimeji.vercel.app" />
        <meta property="og:title" content="ぶなしめじ" />
        <meta property="og:description" content="WebでSimejiの顔文字変換" />
      </Head>
      <main className="px-6">
        <h1 className="text-center text-3xl font-bold my-10">ぶなしめじ</h1>
        {children}
      </main>
      <footer className="mt-auto bg-stone-100 dark:bg-stone-800 flex justify-center">
        <a
          href="https://github.com/object1037/bnaSimeji"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-2xl hover:text-stone-400 dark:hover:text-stone-500 transition"
          aria-label="GitHubのリポジトリ"
        >
          <FiGithub />
        </a>
      </footer>
    </>
  )
}