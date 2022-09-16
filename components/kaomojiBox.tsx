import clsx from 'clsx'
import { useState } from 'react'

export const KaomojiBox = ({ kaomoji }: { kaomoji: string }) => {
  const [copied, setCopied] = useState(false)

  const listStyle = [
    'truncate',
    'max-w-full',
    'py-2',
    'px-4',
    'rounded-full',
    'border',
    copied ? 'border-emerald-400' : 'border-stone-200',
    'hover:bg-stone-100',
    copied ? 'border-emerald-500' : 'dark:border-stone-700',
    'dark:hover:bg-stone-700',
    'transition',
  ]

  const clickHandler = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2500)
    })
  }

  return (
    <button className={clsx(listStyle)} onClick={() => clickHandler(kaomoji)}>
      {kaomoji}
    </button>
  )
}
