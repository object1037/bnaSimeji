import { useKaomojis } from "../lib/swr-hooks"
import { memo } from "react"
import clsx from "clsx"

const SearchResult = memo(function SearchResult({
  pron
 }: {
  pron: string
 }) {
  const { kaomojis, isLoading, isError } = useKaomojis(pron)

  if (isLoading) {
    return null
  }
  if (isError) {
    return <p>エラー</p>
  }

  const resultsWrapperStyle = [
    'border-t',
    'border-gray-300',
    'my-12',
    'flex',
    'max-w-md',
    'mx-auto',
  ]
  const listStyle = [
    'px-3',
    'py-4',
    'w-full',
    'border-b',
    'border-gray-300'
  ]

  const noResult = <p className="py-4 text-center border-b text-gray-500">見つかりません</p>

  return (
    <div className={clsx(resultsWrapperStyle)}>
      <ul className="w-full">
        {kaomojis!.length === 0 ? noResult : 
        kaomojis!.map((kaomoji) => {
          return (
            <li key={kaomoji.word} className={clsx(listStyle)}>
              {kaomoji.word}
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default SearchResult