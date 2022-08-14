import clsx from "clsx"
import { useState } from "react"

export const KaomojiBox = ({
  kaomoji
}: {
  kaomoji: kaomoji
}) => {
  const [copied, setCopied] = useState(false)

  const listStyle = [
    'truncate',
    'px-3',
    'py-4',
    'w-full',
    'md:w-1/2',
    'lg:w-1/3',
    'border-b',
    'border-gray-300',
    'dark:border-gray-600',
    'cursor-pointer',
    'transition'
  ]

  const clickHandler = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2500)
      })
  }

  return (
    <div className={clsx(listStyle, copied ? 'bg-emerald-100 dark:bg-emerald-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800')} onClick={() => clickHandler(kaomoji.word)}>
      {copied ? <span className='text-emerald-700 dark:text-emerald-300'>コピー完了！( *¯ ꒳¯*)ﾌﾌﾝ</span> : kaomoji.word}
    </div>
  )
}