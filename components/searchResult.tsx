import clsx from "clsx"
import { KaomojiBox } from "./kaomojiBox"
import { useRouter } from "next/router"

export const SearchResult = ({
  kaomojis,
  message
 }: {
  kaomojis: kaomoji[] | null
  message: string | null
 }) => {
  const { isFallback } = useRouter()
  const resultsWrapperStyle = ['my-12', 'max-w-4xl', 'mx-auto']
  const listWrapperStyle = ['w-full', 'flex', 'flex-wrap', 'gap-4']
  const infoStyle = [
    'py-4',
    'text-center',
    'text-stone-500',
    'dark:text-stone-400',
    'w-full',
  ]

  if (isFallback) {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>Loading...</p>
      </div>
    )
  }
  if (message === "kaomoji not found") {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>見つかりません …ﾄﾎﾎ( ×ω× ;)</p>
      </div>
    )
  } else if (message === "bad input") {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>ひらがな2文字以上で入力して乁(˙꒳˙乁)ｸﾚﾖ...</p>
      </div>
    )
  } else if (message) {
    return (
      <div className={clsx(resultsWrapperStyle)}>
        <p className={clsx(infoStyle)}>Error: {message}</p>
      </div>
    )
  }

  return (
    <div className={clsx(resultsWrapperStyle)}>
      <div className={clsx(listWrapperStyle)}>
        {kaomojis!.map((kaomoji) => {
          return (
            <KaomojiBox kaomoji={kaomoji} key={kaomoji.word} />
          )
        })}
      </div>
    </div>
  )
}