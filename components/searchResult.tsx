import clsx from 'clsx'
import { KaomojiBox } from './kaomojiBox'
import { APIResponse } from '../pages/[pron]'

export const SearchResult = ({ data }: { data: APIResponse }) => {
  const resultsWrapperStyle = ['my-12', 'max-w-4xl', 'mx-auto']
  const listWrapperStyle = ['w-full', 'flex', 'flex-wrap', 'gap-4']
  const infoStyle = [
    'py-4',
    'text-center',
    'text-stone-500',
    'dark:text-stone-400',
    'w-full',
  ]

  if ('message' in data) {
    if (data.message === 'kaomoji not found') {
      return (
        <div className={clsx(resultsWrapperStyle)}>
          <p className={clsx(infoStyle)}>見つかりません …ﾄﾎﾎ( ×ω× ;)</p>
        </div>
      )
    } else if (data.message === 'bad input') {
      return (
        <div className={clsx(resultsWrapperStyle)}>
          <p className={clsx(infoStyle)}>
            ひらがな2文字以上で入力して乁(˙꒳˙乁)ｸﾚﾖ...
          </p>
        </div>
      )
    } else {
      return (
        <div className={clsx(resultsWrapperStyle)}>
          <p className={clsx(infoStyle)}>Error: {data.message}</p>
        </div>
      )
    }
  }

  return (
    <div className={clsx(resultsWrapperStyle)}>
      <div className={clsx(listWrapperStyle)}>
        {data.kaomojis.map((kaomoji) => {
          return <KaomojiBox kaomoji={kaomoji} key={kaomoji} />
        })}
      </div>
    </div>
  )
}
