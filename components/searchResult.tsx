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