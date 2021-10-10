import { useKaomojis } from "../lib/swr-hooks"
import { memo } from "react"
import clsx from "clsx"

const SearchResult = memo(function SearchResult({
  pron
 }: {
  pron: string
 }) {
  const { kaomojis, isLoading, isError } = useKaomojis(pron)

  const clickHandler = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const resultsWrapperStyle = [
    'border-t',
    'border-gray-300',
    'my-12',
    'flex',
    'max-w-3xl',
    'mx-auto',
  ]
  const listWrapperStyle = [
    'w-full',
    'flex',
    'flex-wrap'
  ]
  const listStyle = [
    'truncate',
    'px-3',
    'py-4',
    'w-full',
    'md:w-1/2',
    'border-b',
    'border-gray-300',
    'cursor-pointer',
    'hover:bg-gray-100',
    'transition'
  ]
  const infoStyle = [
    'py-4',
    'text-center',
    'border-b',
    'text-gray-500',
    'w-full'
  ]

  if (isLoading) {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>Loading...</p>
      </div>
    )
  }
  if (isError) {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>ひらがな2文字以上で入力して乁(˙꒳˙乁)ｸﾚﾖ...</p>
      </div>
    )
  }

  const noResult = <p className={clsx(infoStyle)}>見つかりません …ﾄﾎﾎ( ×ω× ;)</p>

  return (
    <div className={clsx(resultsWrapperStyle)}>
      <div className={clsx(listWrapperStyle)}>
        {kaomojis!.length === 0 ? noResult : 
        kaomojis!.map((kaomoji) => {
          return (
            <div key={kaomoji.word} className={clsx(listStyle)} onClick={() => clickHandler(kaomoji.word)}>
              {kaomoji.word}
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default SearchResult