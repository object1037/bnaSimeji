import { useKaomojis } from "../lib/swr-hooks"
import { memo } from "react"
import clsx from "clsx"
import { KaomojiBox } from "./kaomojiBox"

const SearchResult = memo(function SearchResult({
  pron
 }: {
  pron: string
 }) {
  const { kaomojis, isLoading, isError } = useKaomojis(pron)

  const resultsWrapperStyle = [
    'border-t',
    'border-gray-300',
    'dark:border-gray-600',
    'my-12',
    'flex',
    'max-w-xl',
    'md:max-w-3xl',
    'lg:max-w-4xl',
    'mx-auto',
  ]
  const listWrapperStyle = [
    'w-full',
    'flex',
    'flex-wrap'
  ]
  const infoStyle = [
    'py-4',
    'text-center',
    'border-b',
    'border-gray-300',
    'dark:border-gray-600',
    'text-gray-500',
    'dark:text-gray-400',
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
            <KaomojiBox kaomoji={kaomoji} key={kaomoji.word} />
          )
        })}
      </div>
    </div>
  )
})

export default SearchResult